import { useState } from 'react';
import { artifacts } from '../../data/content';
import PillarBadge from '../PillarBadge';
import Icon from '../Icons';

/**
 * Artifacts
 * GRC Documentation & Work Product Gallery.
 * Demonstrates evidence-oriented deliverables such as Risk Registers, SoA Matrices,
 * Policy Baselines, and Audit Checklists.
 * Data is pulled from `artifacts` in src/data/content.js.
 */
export default function Artifacts() {
  const [selectedArtifact, setSelectedArtifact] = useState(null);

  return (
    <section className="section section-alt reveal-on-scroll" id="artifacts">
      <div className="section-inner">
        <p className="section-eyebrow">06 — {artifacts.eyebrow}</p>
        <div className="section-header-block">
          <h2>{artifacts.heading}</h2>
          <p className="section-intro-text">{artifacts.intro}</p>
        </div>

        <div className="artifacts-grid">
          {artifacts.items.map((item) => (
            <article className="artifact-card" key={item.id}>
              <div className="artifact-header">
                <div className="artifact-badges">
                  <span className="artifact-type-badge">{item.badge}</span>
                  <PillarBadge pillar={item.pillar} size="small" />
                </div>
                <span className="artifact-format">{item.format}</span>
              </div>

              <h3 className="artifact-title">{item.title}</h3>
              <p className="artifact-standard">
                <strong>Standard:</strong> {item.standard}
              </p>
              <p className="artifact-summary">{item.summary}</p>

              <div className="artifact-highlight-box">
                <span className="highlight-tag">Audit Value:</span>
                <p>{item.highlight}</p>
              </div>

              <div className="artifact-tags">
                {item.tags.map((tag, i) => (
                  <span className="artifact-tag-pill" key={i}>
                    {tag}
                  </span>
                ))}
              </div>

              <button
                type="button"
                className="artifact-view-btn"
                onClick={() => setSelectedArtifact(item)}
                aria-label={`View sample details for ${item.title}`}
              >
                <span>Inspect Spec</span>
                <Icon name="arrowRight" size={14} />
              </button>
            </article>
          ))}
        </div>

        {/* ── Document Spec Modal Viewer ── */}
        {selectedArtifact && (
          <div
            className="artifact-modal-backdrop"
            onClick={() => setSelectedArtifact(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-artifact-title"
          >
            <div
              className="artifact-modal-dialog"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="artifact-modal-head">
                <div className="modal-title-group">
                  <span className="artifact-type-badge">{selectedArtifact.badge}</span>
                  <h3 id="modal-artifact-title">{selectedArtifact.title}</h3>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setSelectedArtifact(null)}
                  aria-label="Close dialog"
                >
                  ✕
                </button>
              </div>

              <div className="artifact-modal-body">
                <div className="modal-meta-grid">
                  <div>
                    <span className="meta-label">Governing Framework</span>
                    <span className="meta-val">{selectedArtifact.standard}</span>
                  </div>
                  <div>
                    <span className="meta-label">GRC Pillar</span>
                    <PillarBadge pillar={selectedArtifact.pillar} />
                  </div>
                  <div>
                    <span className="meta-label">Documentation Format</span>
                    <span className="meta-val">{selectedArtifact.format}</span>
                  </div>
                </div>

                <div className="modal-section">
                  <h4>Control Objective &amp; Structure</h4>
                  <p>{selectedArtifact.summary}</p>
                </div>

                <div className="modal-section modal-mock-preview">
                  <div className="preview-terminal-header">
                    <span className="terminal-dot" />
                    <span className="terminal-dot" />
                    <span className="terminal-dot" />
                    <span className="terminal-filename">
                      {selectedArtifact.id}-sanitized-excerpt.md
                    </span>
                  </div>
                  <pre className="terminal-content">
{`# ${selectedArtifact.title} [CONFIDENTIAL EXCERPT]
Scope: Enterprise Information Security Management System (ISMS)
Standard Reference: ${selectedArtifact.standard}
Pillar Classification: ${selectedArtifact.pillar.toUpperCase()}
Audit Traceability: Verified | Owner: GRC Lead

Core Attributes & Tracking Fields:
${selectedArtifact.tags.map((t, idx) => `  [0${idx + 1}] ${t} -> Verified across testing sample`).join('\n')}

Validation Status:
  ✓ Aligned with internal audit review schedule
  ✓ Defensible evidence trail mapped to Annex A / DSS baseline
  ✓ Periodic executive review cadence documented`}
                  </pre>
                </div>

                <div className="modal-section">
                  <h4>Audit Defensibility Note</h4>
                  <p>{selectedArtifact.highlight}</p>
                </div>
              </div>

              <div className="artifact-modal-foot">
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setSelectedArtifact(null)}
                >
                  Close Spec
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
