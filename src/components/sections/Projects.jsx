import { useState, useMemo } from 'react';
import { projects } from '../../data/content';
import PillarFilter from '../PillarFilter';
import PillarBadge from '../PillarBadge';

/**
 * Projects & Case Studies
 * Problem -> Action -> Result cards showing zero-to-one GRC implementation work.
 * Supports client-side filtering across Governance, Risk, and Compliance pillars.
 */
export default function Projects() {
  const [activePillar, setActivePillar] = useState('all');

  const counts = useMemo(() => {
    return {
      all: projects.length,
      governance: projects.filter((p) => p.pillar === 'governance').length,
      risk: projects.filter((p) => p.pillar === 'risk').length,
      compliance: projects.filter((p) => p.pillar === 'compliance').length,
    };
  }, []);

  const filteredProjects = useMemo(() => {
    if (activePillar === 'all') return projects;
    return projects.filter((p) => p.pillar === activePillar);
  }, [activePillar]);

  return (
    <section className="section reveal-on-scroll" id="projects">
      <div className="section-inner">
        <p className="section-eyebrow">05 — Projects &amp; Case Studies</p>

        <div className="section-filter-wrap">
          <div className="filter-header">
            <h3>Measurable GRC Engagements</h3>
            <span className="filter-hint">Filter by operational pillar:</span>
          </div>
          <PillarFilter
            currentPillar={activePillar}
            onSelectPillar={setActivePillar}
            counts={counts}
          />
        </div>

        <div className="project-grid filter-animated" key={activePillar}>
          {filteredProjects.map((p) => (
            <article className="project-card" key={p.title}>
              <div className="project-card-top">
                <span className="project-tag">{p.tag}</span>
                <PillarBadge pillar={p.pillar} size="small" />
              </div>

              <h3>{p.title}</h3>

              <dl className="project-details">
                <div className="project-detail-row">
                  <dt>Problem</dt>
                  <dd>{p.problem}</dd>
                </div>
                <div className="project-detail-row">
                  <dt>Action</dt>
                  <dd>{p.action}</dd>
                </div>
                <div className="project-detail-row project-result-row">
                  <dt>Result</dt>
                  <dd className="project-result-text">{p.result}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
