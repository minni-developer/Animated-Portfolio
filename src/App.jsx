import { useRef, useState, useCallback } from 'react';
import './index.css';
import { useMagneticCursor } from './hooks/useMagneticCursor';
import { useScrollReveal } from './hooks/useScrollReveal';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Methodology from './components/sections/Methodology';
import Projects from './components/sections/Projects';
import Artifacts from './components/sections/Artifacts';
import MaturitySnapshot from './components/sections/MaturitySnapshot';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

/**
 * App
 * ───────────────────────────────────────────────────────────────────────
 * Top-level layout composing all portfolio sections.
 * All text copy lives in src/data/content.js.
 * All styling and design tokens live in src/index.css.
 * ───────────────────────────────────────────────────────────────────────
 */
export default function App() {
  // Custom magnetic cursor — dot + soft aura following the mouse
  const dotRef = useRef(null);
  const auraRef = useRef(null);
  useMagneticCursor(dotRef, auraRef);

  // Scroll reveal observer for entrance animations
  useScrollReveal();

  // Loading screen progress, driven by the hero's frame-preload callback
  const [loadProgress, setLoadProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const handleFrameProgress = useCallback((progress) => {
    setLoadProgress(progress);
    if (progress >= 1) {
      setTimeout(() => setLoaded(true), 200);
    }
  }, []);

  return (
    <>
      {/* Custom cursor — hidden automatically on touch devices via CSS */}
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={auraRef} className="cursor-aura" aria-hidden="true" />

      {/* Loading screen — shown until all hero animation frames are ready */}
      <div
        className={`loading-screen${loaded ? ' fade-out' : ''}`}
        aria-hidden={loaded}
      >
        <span className="loading-label">Loading</span>
        <div className="loading-bar-track">
          <div
            className="loading-bar-fill"
            style={{ width: `${Math.round(loadProgress * 100)}%` }}
          />
        </div>
        <span
          className="loading-label"
          style={{ fontSize: '11px', marginTop: '-8px' }}
        >
          {Math.round(loadProgress * 100)}%
        </span>
      </div>

      <main role="main">
        <Hero onFrameProgress={handleFrameProgress} />
        <About />
        <Experience />
        <Skills />
        <Methodology />
        <Projects />
        <Artifacts />
        <MaturitySnapshot />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
