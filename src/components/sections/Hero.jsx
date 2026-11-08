import CharacterCanvas from '../CharacterCanvas';
import Nav from '../Nav';
import { profile } from '../../data/content';

/**
 * Hero
 * Full-viewport intro: animated character canvas (follows the cursor),
 * the floating nav pill, and the name/tagline/CTA block bottom-left.
 * This is the same visual you already had — just wired to real content
 * and pulled out of App.jsx so App.jsx stays readable.
 */
export default function Hero({ onFrameProgress }) {
  return (
    <header className="hero" id="hero">
      {/* Full-screen character canvas — bottom layer */}
      <CharacterCanvas onReady={onFrameProgress} />

      <Nav />

      <section className="hero-text" aria-label="Hero introduction">
        <p className="hero-greeting">{profile.greeting}</p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-bio">
          <strong>{profile.title}</strong> — {profile.tagline}
        </p>
        <div className="hero-buttons">
          <a
            href={profile.resumeUrl}
            className="btn btn-solid"
            id="btn-resume"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
          >
            Resume
            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                d="M7.5 1.5v9M4 7l3.5 3.5L11 7M2 13.5h11"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#contact" className="btn btn-ghost" id="btn-contact" aria-label="Get in touch">
            Let's Talk
          </a>
        </div>
      </section>

      {/* Scroll cue — hints that there's more content below the fold */}
      <a href="#about" className="scroll-cue" aria-label="Scroll to learn more">
        <span />
      </a>
    </header>
  );
}
