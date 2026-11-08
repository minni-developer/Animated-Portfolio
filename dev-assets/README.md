# Dev assets (not part of the deployed site)

These files are kept for reference only — they are NOT imported by the app and are NOT
included in the production build, so they don't add to your deploy size.

- `character.mp4` — the original source video the hero animation frames were extracted from.
- `extract_frames.py` — the script used to slice that video into the 64 `.webp` frames
  (plus `center.webp`). Only re-run this if you want a new hero video or a different crop.
- `original_frames/` — a clean backup of the 65 frames in their **original red** state,
  from before any recolor. Kept so the purple recolor in `recolor_frames.py` can always be
  re-run from a pristine source instead of re-processing an already-recolored (and
  potentially degraded) image.
- `recolor_frames.py` — regenerates `public/frames/` (purple) from `original_frames/` (red).
  Run it with:

  ```bash
  cd path/to/project/root
  python3 -m pip install pillow numpy scipy --break-system-packages   # first time only
  python3 dev-assets/recolor_frames.py
  ```

  It also regenerates `public/preview_up.jpg` from the recolored `center.webp`. If you ever
  want a different accent color, change `NEW_RGB` at the top of the script and re-run it —
  don't hand-edit the frames or try to recolor an already-recolored file, always start from
  `original_frames/`.

Safe to delete this whole folder if you're confident you'll never need to re-theme the hero
or swap the video again.
