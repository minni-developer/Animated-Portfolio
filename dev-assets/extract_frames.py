"""
Character Animation Frame Extractor
Extracts 64 directional WebP frames + center.webp from character.mp4
"""
import cv2
import os

VIDEO_PATH = r'c:\Work\mina_portfolio\public\character.mp4'
OUT_DIR = r'c:\Work\mina_portfolio\public\frames'
NUM_FRAMES = 64
WEBP_QUALITY = 90

os.makedirs(OUT_DIR, exist_ok=True)

cap = cv2.VideoCapture(VIDEO_PATH)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
fps = cap.get(cv2.CAP_PROP_FPS)
w = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
h = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
print(f"Video: {total_frames} frames @ {fps}fps, {w}x{h}")

def read_frame(cap, idx):
    cap.set(cv2.CAP_PROP_POS_FRAMES, int(idx))
    ret, frame = cap.read()
    if not ret:
        cap.set(cv2.CAP_PROP_POS_FRAMES, 0)
        ret, frame = cap.read()
    return frame

# Save center.webp from the LAST frame (neutral/looking at camera)
center_frame = read_frame(cap, total_frames - 1)
cv2.imwrite(os.path.join(OUT_DIR, 'center.webp'), center_frame, [cv2.IMWRITE_WEBP_QUALITY, WEBP_QUALITY])
print(f"Saved center.webp from frame {total_frames - 1}")

# 8 compass directions in clockwise video order
# Video: 240 frames, 8 directional poses, each pose peak at segment midpoint
# Segment size = 200 / 8 = 25 frames
seg = 200.0 / 8

# (standard_math_angle_deg, video_peak_frame_idx)
# Standard math: 0=right, 90=up, increasing CCW
compass = [
    ( 90, int(seg * 0 + seg * 0.5)),  # UP
    ( 45, int(seg * 1 + seg * 0.5)),  # UP-RIGHT
    (  0, int(seg * 2 + seg * 0.5)),  # RIGHT
    (-45, int(seg * 3 + seg * 0.5)),  # DOWN-RIGHT
    (-90, int(seg * 4 + seg * 0.5)),  # DOWN
    (-135,int(seg * 5 + seg * 0.5)),  # DOWN-LEFT
    (180, int(seg * 6 + seg * 0.5)),  # LEFT
    (135, int(seg * 7 + seg * 0.5)),  # UP-LEFT
]

print("\nCompass mappings:")
for ang, fr in compass:
    print(f"  {ang:4d}deg -> frame {fr}")

keyframes = sorted(compass, key=lambda x: x[0])

def angle_to_video_frame(target_deg):
    a = target_deg % 360
    if a > 180: a -= 360
    n = len(keyframes)
    for i in range(n):
        a0, f0 = keyframes[i]
        a1, f1 = keyframes[(i+1) % n]
        if a1 < a0:  # wraps around
            if a >= a0 or a < a1:
                if a >= a0:
                    t = (a - a0) / (a1 + 360 - a0)
                else:
                    t = (a + 360 - a0) / (a1 + 360 - a0)
                return int(f0 + max(0,min(1,t)) * (f1 - f0))
        else:
            if a0 <= a < a1:
                t = (a - a0) / (a1 - a0) if a1 != a0 else 0
                return int(f0 + max(0,min(1,t)) * (f1 - f0))
    # fallback: closest
    best = min(keyframes, key=lambda x: min(abs(a - x[0]), 360 - abs(a - x[0])))
    return best[1]

print(f"\nExtracting {NUM_FRAMES} frames...")
for i in range(NUM_FRAMES):
    angle_deg = i * 360.0 / NUM_FRAMES
    if angle_deg > 180: angle_deg -= 360
    vf = angle_to_video_frame(angle_deg)
    vf = max(0, min(total_frames - 1, vf))
    frame = read_frame(cap, vf)
    out_path = os.path.join(OUT_DIR, f'{i:02d}.webp')
    cv2.imwrite(out_path, frame, [cv2.IMWRITE_WEBP_QUALITY, WEBP_QUALITY])
    if i % 8 == 0:
        print(f"  [{i:02d}] {angle_deg:6.1f}deg -> video frame {vf}")

cap.release()
files = os.listdir(OUT_DIR)
print(f"\nDone! {len(files)} files in {OUT_DIR}")
