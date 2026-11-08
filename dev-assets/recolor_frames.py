"""
recolor_frames.py
──────────────────────────────────────────────────────────────────────────
Chroma-key recolor: red (#bb2c28) -> purple (#4B2E83), from the pristine
`dev-assets/original_frames/` source into `public/frames/`.

Why this version replaced the first pass:
The first pass (kept in git history / old comments below) estimated a
per-pixel "how much background is mixed into this pixel" alpha purely from
Euclidean color distance to the background red. That breaks down badly
here because the character's skin, lips and cheek blush are *also* warm/
reddish tones -- colorically close to the red background -- so those fully
opaque foreground pixels got misread as partially-background and pulled
toward purple, producing a visible orange-red halo around the whole
silhouette (and even a small blue-purple smear on the lips in some frames).

This version avoids per-pixel alpha estimation entirely:
1. Find pixels that are a near-exact match for the flat background color.
2. Group them into connected components. A component is treated as *real*
   background if it either touches the image border, or contains at least
   one near-exact match (distance < EXACT_T) -- real background (including
   the bits visible through gaps, e.g. between the glasses frame and the
   face) always contains near-exact matches; a coincidental color overlap
   on a lip highlight never does, since it's a different pigment that only
   loosely resembles the background hue.
3. Grow that mask by a couple of pixels to swallow the thin contaminated
   ring around the silhouette, then feather a narrow band back in against
   the (untouched, original-colored) foreground so the edge stays smooth
   rather than hard-cut.

Foreground pixels (skin, hijab, glasses, sweater, everything else) are
never touched -- only the real background region is ever recolored.
"""
import os
import glob
import numpy as np
from PIL import Image
from scipy.ndimage import binary_dilation, gaussian_filter, label

OLD_RGB = np.array([187.0, 44.0, 40.0])   # #bb2c28
NEW_RGB = np.array([75.0, 46.0, 131.0])   # #4B2E83

FRAMES_DIR = os.path.join('public', 'frames')
PREVIEW_PATH = os.path.join('public', 'preview_up.jpg')

TIGHT_T = 22   # candidate zone: loosely near the background color
EXACT_T = 10   # a component containing a pixel this close to the exact
               # background hex is definitely real background
DILATE_PX = 2  # grow the confirmed-background mask by this many px to eat
               # the thin contaminated ring left by the original render/AA
FEATHER_PX = 2  # additional soft band width for a smooth new edge


def real_background_mask(dist):
    candidate = dist < TIGHT_T
    labeled, n = label(candidate)
    if n == 0:
        return candidate

    border_labels = set(labeled[0, :].tolist()) | set(labeled[-1, :].tolist()) \
        | set(labeled[:, 0].tolist()) | set(labeled[:, -1].tolist())
    border_labels.discard(0)

    keep_labels = set(border_labels)
    for lbl in range(1, n + 1):
        if lbl in keep_labels:
            continue
        if dist[labeled == lbl].min() < EXACT_T:
            keep_labels.add(lbl)  # real background showing through a gap

    return np.isin(labeled, list(keep_labels))


def recolor_image(img_path):
    im = Image.open(img_path).convert('RGB')
    arr = np.array(im, dtype=np.float64)

    dist = np.sqrt(np.sum((arr - OLD_RGB) ** 2, axis=2))
    bg_mask = real_background_mask(dist)
    grown = binary_dilation(bg_mask, iterations=DILATE_PX)

    soft_mask = np.clip(gaussian_filter(grown.astype(np.float64), sigma=1.0), 0, 1)[:, :, np.newaxis]
    ring = binary_dilation(grown, iterations=FEATHER_PX) & (~grown)

    out = arr.copy()
    out[grown] = NEW_RGB
    out[ring] = soft_mask[ring] * NEW_RGB + (1 - soft_mask[ring]) * arr[ring]

    return Image.fromarray(np.clip(out, 0, 255).astype(np.uint8))


def main():
    source_dir = os.path.join('dev-assets', 'original_frames')
    frame_files = sorted(glob.glob(os.path.join(source_dir, '*.webp')))
    print(f"Recoloring {len(frame_files)} frames from {source_dir} -> {FRAMES_DIR} ...")

    for idx, path in enumerate(frame_files):
        out_im = recolor_image(path)
        out_path = os.path.join(FRAMES_DIR, os.path.basename(path))
        out_im.save(out_path, 'WEBP', quality=95)
        if idx % 10 == 0 or idx == len(frame_files) - 1:
            print(f"  [{idx + 1}/{len(frame_files)}] {os.path.basename(path)}")

    # public/preview_up.jpg is a static social-share thumbnail with no separate
    # "original" backup (unlike the numbered frames), so instead of re-running
    # chroma-key on an already-recolored JPEG (which would compound artifacts),
    # regenerate it directly from the freshly recolored center frame.
    center_frame = os.path.join(FRAMES_DIR, 'center.webp')
    if os.path.exists(center_frame):
        Image.open(center_frame).convert('RGB').save(PREVIEW_PATH, 'JPEG', quality=92)
        print(f"Regenerated {PREVIEW_PATH} from the recolored center.webp")

    print("Done.")


if __name__ == '__main__':
    main()
