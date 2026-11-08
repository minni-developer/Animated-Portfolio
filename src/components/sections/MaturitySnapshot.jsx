import { useState } from 'react';
import { maturitySnapshot } from '../../data/content';
import PillarBadge from '../PillarBadge';

/**
 * MaturitySnapshot
 * Interactive capability & maturity scorecard across 5 core GRC domains.
 * Data pulled from `maturitySnapshot` in src/data/content.js.
 */
export default function MaturitySnapshot() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeDomain = maturitySnapshot.domains[selectedIdx];

  const levelNames = ['Ad-Hoc', 'Developing', 'Defined', 'Managed & Measured', 'Optimized'];

  return (
    <section className="section reveal-on-scroll" id="maturity">
      <div className="section-inner">
        <p className="section-eyebrow">07 — {maturitySnapshot.eyebrow}</p>
        <div className="section-header-block">
          <h2>{maturitySnapshot.heading}</h2>
          <p className="section-intro-text">{maturitySnapshot.intro}</p>
        </div>

        <div className="maturity-container">
          {/* ── Left Column: Domain List with Maturity Gauges ── */}
          <div className="maturity-list" role="tablist" aria-label="Maturity Domains">
            {maturitySnapshot.domains.map((d, idx) => {
              const isSelected = selectedIdx === idx;
              const percentage = (d.level / d.maxLevel) * 100;

              return (
                <button
                  key={d.domain}
                  role="tab"
                  aria-selected={isSelected}
                  className={`maturity-item ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => setSelectedIdx(idx)}
                >
                  <div className="maturity-item-header">
                    <span className="domain-name">{d.domain}</span>
                    <span className="domain-level-tag">
                      Level {d.level}/5 · {d.levelLabel}
                    </span>
                  </div>

                  {/* 5-Segment Visual Maturity Track */}
                  <div className="maturity-bar-track">
                    <div
                      className="maturity-bar-fill"
                      style={{ width: `${percentage}%` }}
                    />
                    <div className="maturity-segments">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className="segment-tick" />
                      ))}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── Right Column: Selected Domain In-Depth Card ── */}
          <div className="maturity-detail-card filter-animated" key={activeDomain.domain}>
            <div className="detail-card-head">
              <PillarBadge pillar={activeDomain.pillar} />
              <span className="maturity-badge">
                Tier {activeDomain.level} / 5
              </span>
            </div>

            <h3>{activeDomain.domain}</h3>
            <p className="domain-level-status">
              Maturity Classification: <strong>{activeDomain.levelLabel}</strong> (
              {levelNames[activeDomain.level - 1]})
            </p>

            <div className="domain-summary-box">
              <span className="box-label">Current Operational Posture:</span>
              <p>{activeDomain.summary}</p>
            </div>

            <div className="maturity-benchmark">
              <span className="benchmark-title">Audit Target Readiness:</span>
              <div className="benchmark-meter">
                <div
                  className="benchmark-fill"
                  style={{ width: `${(activeDomain.level / 5) * 100}%` }}
                />
              </div>
              <span className="benchmark-note">
                Satisfies external auditor verification threshold for Stage 2 ISO &amp; PCI DSS assessments.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
