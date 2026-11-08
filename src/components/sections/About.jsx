import { about } from '../../data/content';
import AnimatedCounter from '../AnimatedCounter';

/**
 * About
 * Professional summary + dynamic animated highlight stat cards.
 * Data is pulled directly from `about` in src/data/content.js.
 */
export default function About() {
  return (
    <section className="section reveal-on-scroll" id="about">
      <div className="section-inner">
        <p className="section-eyebrow">01 — {about.heading}</p>
        <div className="about-grid">
          <div className="about-text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="about-highlights">
            {about.highlights.map((h) => (
              <div className="highlight-card" key={h.label}>
                <span className="highlight-value">
                  {h.numericValue !== undefined ? (
                    <AnimatedCounter target={h.numericValue} suffix={h.suffix} />
                  ) : (
                    h.value
                  )}
                </span>
                <span className="highlight-label">{h.label}</span>
                {h.note && <span className="highlight-note">{h.note}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
