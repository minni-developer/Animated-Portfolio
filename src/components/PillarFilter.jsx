/**
 * PillarFilter
 * Segmented control toggle for filtering items by Governance, Risk, or Compliance.
 * Features animated active indicator pill and item counts.
 */
export default function PillarFilter({ currentPillar, onSelectPillar, counts }) {
  const options = [
    { id: 'all', label: 'All Pillars' },
    { id: 'governance', label: 'Governance' },
    { id: 'risk', label: 'Risk' },
    { id: 'compliance', label: 'Compliance' },
  ];

  return (
    <div className="pillar-filter-bar" role="tablist" aria-label="Filter by GRC Pillar">
      {options.map((opt) => {
        const count = counts ? counts[opt.id] : null;
        const isActive = currentPillar === opt.id;
        return (
          <button
            key={opt.id}
            role="tab"
            aria-selected={isActive}
            className={`filter-btn ${isActive ? 'active' : ''} filter-btn-${opt.id}`}
            onClick={() => onSelectPillar(opt.id)}
          >
            <span className="filter-btn-label">{opt.label}</span>
            {count !== null && count !== undefined && (
              <span className="filter-count-badge" aria-label={`${count} items`}>
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
