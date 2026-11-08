import { useState } from 'react';
import { methodology } from '../../data/content';
import PillarBadge from '../PillarBadge';

/**
 * Methodology
 * 4-Step horizontal interactive stepper describing Manahil's pragmatic approach
 * to building and scaling GRC management systems (Assess -> Design -> Implement -> Audit).
 * Data comes from `methodology` in src/data/content.js.
 */
export default function Methodology() {
  const [activeStep, setActiveStep] = useState(0);
  const current = methodology.steps[activeStep];

  return (
    <section className="section section-alt reveal-on-scroll" id="methodology">
      <div className="section-inner">
        <p className="section-eyebrow">04 — {methodology.eyebrow}</p>
        <div className="section-header-block">
          <h2>{methodology.heading}</h2>
          <p className="section-intro-text">{methodology.intro}</p>
        </div>

        {/* ── Stepper Navigation ── */}
        <div className="methodology-stepper" role="tablist" aria-label="Methodology Steps">
          {methodology.steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.step}
                role="tab"
                aria-selected={isActive}
                className={`step-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveStep(idx)}
              >
                <div className="step-num-pill">{step.step}</div>
                <div className="step-btn-text">
                  <span className="step-btn-title">{step.title}</span>
                  <span className="step-btn-time">{step.timeframe}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Active Step Card Display ── */}
        <div className="methodology-card-display filter-animated" key={activeStep}>
          <div className="methodology-card-head">
            <div className="card-phase-tag">
              <span className="phase-indicator">Phase {current.step}</span>
              <PillarBadge pillar={current.pillar} />
            </div>
            <span className="phase-duration">{current.timeframe}</span>
          </div>

          <h3 className="methodology-card-title">{current.title}</h3>
          <p className="methodology-card-desc">{current.description}</p>

          <div className="deliverables-container">
            <h4>Key Operational Deliverables &amp; Evidence:</h4>
            <ul className="deliverables-list">
              {current.deliverables.map((item, i) => (
                <li key={i} className="deliverable-item">
                  <span className="check-bullet" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
