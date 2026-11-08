import { useEffect, useRef } from 'react';

/**
 * useMagneticCursor
 * Drives two DOM elements (dot + aura) as a smooth custom cursor.
 * Uses direct DOM manipulation (no state) for 60fps zero-lag tracking.
 */
export function useMagneticCursor(dotRef, auraRef) {
  const mousePos = useRef({ x: -200, y: -200 });
  const auraPos = useRef({ x: -200, y: -200 });
  const rafId = useRef(null);

  useEffect(() => {
    const AURA_LERP = 0.12;

    const onMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animate = () => {
      // Aura lags behind with lerp
      auraPos.current.x += (mousePos.current.x - auraPos.current.x) * AURA_LERP;
      auraPos.current.y += (mousePos.current.y - auraPos.current.y) * AURA_LERP;

      if (auraRef.current) {
        auraRef.current.style.left = `${auraPos.current.x}px`;
        auraRef.current.style.top = `${auraPos.current.y}px`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    // Use event delegation on document for hover detection
    const onMouseOver = (e) => {
      if (e.target.closest('a, button, .btn, [data-magnetic], .pillar-intro-card, .artifact-card, .maturity-item')) {
        auraRef.current?.classList.add('hovering');
      } else {
        auraRef.current?.classList.remove('hovering');
      }
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [dotRef, auraRef]);
}
