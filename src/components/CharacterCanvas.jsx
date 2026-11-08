import { useEffect, useRef } from 'react';

const NUM_FRAMES = 64;

// ── Character face center in source video coordinates (1280x720) ──────────
// Detected from video analysis: face at approx (709, 200) in 1280x720 frame
const FACE_SRC_X = 709;
const FACE_SRC_Y = 200;
const SRC_W = 1280;
const SRC_H = 720;

// Background color — must match the video exactly to be seamless
const BG_COLOR = '#4B2E83';

// ── Angular lerp (shortest path) ─────────────────────────────────────────
function lerpAngle(a, b, t) {
  let diff = b - a;
  while (diff > Math.PI) diff -= 2 * Math.PI;
  while (diff < -Math.PI) diff += 2 * Math.PI;
  return a + diff * t;
}

// ── Preload all frames ────────────────────────────────────────────────────
function preloadAllFrames(onProgress) {
  return new Promise((resolve) => {
    const frames = new Array(NUM_FRAMES);
    let centerImg = null;
    let loaded = 0;
    const total = NUM_FRAMES + 1;

    const onLoad = () => {
      loaded++;
      onProgress(Math.min(loaded / total, 1));
      if (loaded >= total) {
        resolve({ frames, centerImg });
      }
    };

    for (let i = 0; i < NUM_FRAMES; i++) {
      const img = new Image();
      img.onload = onLoad;
      img.onerror = onLoad;
      img.src = `${import.meta.env.BASE_URL}frames/${String(i).padStart(2, '0')}.webp`;
      frames[i] = img;
    }

    const center = new Image();
    center.onload = () => { centerImg = center; onLoad(); };
    center.onerror = onLoad;
    center.src = `${import.meta.env.BASE_URL}frames/center.webp`;
  });
}

/**
 * CharacterCanvas
 *
 * Full-screen canvas: preloads 64 WebP frames + center, then renders
 * cursor-tracking animation at 60fps using requestAnimationFrame.
 *
 * Technical guarantees:
 * - ZERO CSS 3D transforms on canvas or container
 * - ZERO video.currentTime seeking or video.play()
 * - ZERO alpha-blending ghosting (single drawImage per frame)
 * - Shortest-path angular lerp with factor 0.26 (~35ms response)
 * - Center deadzone at 12% screen height radius
 */
export default function CharacterCanvas({ onReady }) {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    frames: null,
    centerImg: null,
    mouseX: window.innerWidth / 2,
    mouseY: window.innerHeight / 2,
    currentAngle: 0,
    rafId: null,
    ready: false,
    hasMouseMoved: false,
  });

  // ── Preload ─────────────────────────────────────────────────────────────
  useEffect(() => {
    preloadAllFrames((progress) => {
      onReady?.(progress);
    }).then(({ frames, centerImg }) => {
      stateRef.current.frames = frames;
      stateRef.current.centerImg = centerImg;
      stateRef.current.ready = true;
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Mouse tracking ───────────────────────────────────────────────────────
  useEffect(() => {
    const onMouseMove = (e) => {
      stateRef.current.mouseX = e.clientX;
      stateRef.current.mouseY = e.clientY;
      stateRef.current.hasMouseMoved = true;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  // ── RAF render loop ──────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false }); // opaque = faster compositing

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const LERP_FACTOR = 0.26;
    const DEADZONE_RATIO = 0.12; // fraction of screen height

    function render() {
      const state = stateRef.current;
      const W = canvas.width;
      const H = canvas.height;

      // ── Always fill background first (single solid color = no ghosting) ──
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, W, H);

      if (!state.ready || !state.frames) {
        state.rafId = requestAnimationFrame(render);
        return;
      }

      // ── Compute draw dimensions (cover fit) ────────────────────────────
      const scale = Math.max(W / SRC_W, H / SRC_H);
      const drawW = SRC_W * scale;
      const drawH = SRC_H * scale;
      const drawX = (W - drawW) / 2;
      const drawY = (H - drawH) / 2;

      // ── Face center in screen coords ───────────────────────────────────
      const faceScrX = drawX + FACE_SRC_X * scale;
      const faceScrY = drawY + FACE_SRC_Y * scale;

      // ── Deadzone check ─────────────────────────────────────────────────
      const deadzoneR = H * DEADZONE_RATIO;
      const mx = state.mouseX;
      const my = state.mouseY;
      const dx = mx - faceScrX;
      const dy = my - faceScrY;
      const distSq = dx * dx + dy * dy;
      const inDeadzone = !state.hasMouseMoved || distSq < deadzoneR * deadzoneR;

      let imgToDraw;

      if (inDeadzone) {
        // Neutral frame — she looks directly into the camera
        imgToDraw = state.centerImg || state.frames[0];
        // Gently drift angle back to 0 (right) to avoid snap when exiting deadzone
        state.currentAngle = lerpAngle(state.currentAngle, 0, LERP_FACTOR * 0.3);
      } else {
        // atan2 with flipped Y (screen Y increases downward, but math Y increases upward)
        const targetAngle = Math.atan2(-dy, dx);

        // Shortest-path lerp
        state.currentAngle = lerpAngle(state.currentAngle, targetAngle, LERP_FACTOR);

        // Map [-PI, PI] to frame index [0..63]
        // angle 0 = right = frame 0; increasing CCW = increasing index
        let normAngle = state.currentAngle;
        while (normAngle < 0) normAngle += 2 * Math.PI;
        while (normAngle >= 2 * Math.PI) normAngle -= 2 * Math.PI;

        const frameIdx = Math.round((normAngle / (2 * Math.PI)) * NUM_FRAMES) % NUM_FRAMES;
        imgToDraw = state.frames[frameIdx];
      }

      // ── Draw EXACTLY ONE frame at full opacity — zero ghosting ──────────
      if (imgToDraw && imgToDraw.complete && imgToDraw.naturalWidth > 0) {
        ctx.globalAlpha = 1.0;
        ctx.drawImage(imgToDraw, drawX, drawY, drawW, drawH);
      }

      stateRef.current.rafId = requestAnimationFrame(render);
    }

    stateRef.current.rafId = requestAnimationFrame(render);

    const currentState = stateRef.current;
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (currentState.rafId) {
        cancelAnimationFrame(currentState.rafId);
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <canvas
      ref={canvasRef}
      className="character-canvas"
      aria-hidden="true"
      role="presentation"
    />
  );
}
