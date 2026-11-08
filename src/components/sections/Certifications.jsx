import { certifications, continuousLearning, education } from '../../data/content';
import PillarBadge from '../PillarBadge';

/**
 * Certifications
 * Displays credentialed certifications, continuous learning/communities, and formal education.
 * Data pulled from `certifications`, `continuousLearning`, and `education` in src/data/content.js.
 */
export default function Certifications() {
  return (
    <section className="section section-alt reveal-on-scroll" id="certifications">
      <div className="section-inner">
        <p className="section-eyebrow">08 — Certifications &amp; Credentials</p>

        {/* ── Certifications Grid ── */}
        <div className="cert-grid">
          {certifications.map((c) => (
            <div className="cert-card" key={c.name}>
              <div className="cert-card-head">
                <h4>{c.name}</h4>
                <div className="cert-badges-wrap">
                  <span
                    className={`badge ${
                      c.status === 'Certified' ? 'badge-solid' : 'badge-outline'
                    }`}
                  >
                    {c.status}
                  </span>
                </div>
              </div>
              <div className="cert-card-bottom">
                <p className="cert-meta">
                  {c.issuer} · {c.year}
                </p>
                {c.pillar && <PillarBadge pillar={c.pillar} size="small" />}
              </div>
            </div>
          ))}
        </div>

        {/* ── Continuous Learning & Communities ── */}
        <p className="section-eyebrow" style={{ marginTop: '56px', marginBottom: '20px' }}>
          Continuous Learning &amp; Professional Affiliations
        </p>
        <div className="learning-grid">
          {continuousLearning.map((item, i) => (
            <div className="learning-card" key={i}>
              <span className="learning-type">{item.type}</span>
              <h4>{item.title}</h4>
              <p>{item.details}</p>
            </div>
          ))}
        </div>

        {/* ── Education ── */}
        <p className="section-eyebrow" style={{ marginTop: '56px', marginBottom: '20px' }}>
          Education
        </p>
        <div className="education-list">
          {education.map((e) => (
            <div className="education-item" key={e.degree}>
              <div className="timeline-head">
                <h3>{e.degree}</h3>
                <span className="timeline-period">{e.period}</span>
              </div>
              <p className="timeline-company">{e.school}</p>
              <p className="timeline-summary">{e.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
