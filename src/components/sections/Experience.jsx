import { experience } from '../../data/content';
import PillarBadge from '../PillarBadge';

/**
 * Experience
 * Chronological timeline of GRC roles. Each bullet item is mapped to its
 * governing GRC pillar (Governance, Risk, Compliance).
 */
export default function Experience() {
  return (
    <section className="section section-alt reveal-on-scroll" id="experience">
      <div className="section-inner">
        <p className="section-eyebrow">02 — Experience</p>
        <div className="timeline">
          {experience.map((job) => (
            <article className="timeline-item" key={`${job.company}-${job.role}`}>
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-content">
                <div className="timeline-head">
                  <div className="timeline-role-group">
                    <h3>{job.role}</h3>
                    <p className="timeline-company">{job.company}</p>
                  </div>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <p className="timeline-summary">{job.summary}</p>
                <ul className="timeline-bullets">
                  {job.bullets.map((b, i) => {
                    const text = typeof b === 'string' ? b : b.text;
                    const pillar = typeof b === 'object' ? b.pillar : null;
                    return (
                      <li key={i} className="timeline-bullet-item">
                        <span className="bullet-text">{text}</span>
                        {pillar && <PillarBadge pillar={pillar} size="small" />}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
