import { useState, useMemo } from 'react';
import { standards, skillGroups, grcPillars } from '../../data/content';
import PillarFilter from '../PillarFilter';
import PillarBadge from '../PillarBadge';

/**
 * Skills & Standards
 * Features:
 * 1. "How I Work" 3-column intro framing (Governance, Risk, Compliance)
 * 2. Segmented client-side filter tab bar
 * 3. Standards table with color-coded pillar tags and smooth animated transitions
 * 4. Categorized core skill chips
 */
export default function Skills() {
  const [activePillar, setActivePillar] = useState('all');

  // Compute counts per pillar for filter badges
  const counts = useMemo(() => {
    return {
      all: standards.length,
      governance: standards.filter((s) => s.pillar === 'governance').length,
      risk: standards.filter((s) => s.pillar === 'risk').length,
      compliance: standards.filter((s) => s.pillar === 'compliance').length,
    };
  }, []);

  // Filtered standards list
  const filteredStandards = useMemo(() => {
    if (activePillar === 'all') return standards;
    return standards.filter((s) => s.pillar === activePillar);
  }, [activePillar]);

  return (
    <section className="section reveal-on-scroll" id="skills">
      <div className="section-inner">
        <p className="section-eyebrow">03 — How I Work: GRC Pillars &amp; Standards</p>

        {/* ── 3-Column "How I Work" GRC Framing Block ── */}
        <div className="pillars-intro">
          {grcPillars.map((p) => (
            <div
              className={`pillar-intro-card pillar-card-${p.id} ${
                activePillar === p.id ? 'is-selected' : ''
              }`}
              key={p.id}
              onClick={() => setActivePillar(activePillar === p.id ? 'all' : p.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActivePillar(activePillar === p.id ? 'all' : p.id);
                }
              }}
              aria-label={`Filter by ${p.name}`}
            >
              <div className="pillar-intro-head">
                <PillarBadge pillar={p.id} />
                <span className="pillar-tagline">{p.tagline}</span>
              </div>
              <h4>{p.name}</h4>
              <p>{p.description}</p>
            </div>
          ))}
        </div>

        {/* ── Filter Controls ── */}
        <div className="section-filter-wrap">
          <div className="filter-header">
            <h3>Standards &amp; Frameworks Index</h3>
            <span className="filter-hint">Filter by operational discipline:</span>
          </div>
          <PillarFilter
            currentPillar={activePillar}
            onSelectPillar={setActivePillar}
            counts={counts}
          />
        </div>

        {/* ── Filtered Standards Table with Animated Transition ── */}
        <div className="standards-table-wrapper" key={activePillar}>
          <div className="standards-table filter-animated" role="table">
            <div className="standards-row standards-head" role="row">
              <span role="columnheader">Standard</span>
              <span role="columnheader">Scope / Domain</span>
              <span role="columnheader">Pillar</span>
              <span role="columnheader">Application &amp; Implementation</span>
            </div>
            {filteredStandards.map((s) => (
              <div className="standards-row" role="row" key={s.code}>
                <span className="standards-code" role="cell">
                  {s.code}
                </span>
                <span className="standards-name" role="cell">
                  {s.name}
                </span>
                <span className="standards-pillar-cell" role="cell">
                  <PillarBadge pillar={s.pillar} size="small" />
                </span>
                <span className="standards-note" role="cell">
                  {s.note}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Grouped Skill Chips ── */}
        <p className="section-eyebrow" style={{ marginTop: '56px', marginBottom: '24px' }}>
          Functional Competencies &amp; Toolkit
        </p>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.category}>
              <h4>{group.category}</h4>
              <div className="skill-chips">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
