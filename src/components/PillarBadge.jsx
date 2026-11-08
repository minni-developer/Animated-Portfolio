/**
 * PillarBadge
 * Renders a color-coded GRC pillar tag (Governance, Risk, Compliance).
 */
export default function PillarBadge({ pillar, size = 'normal' }) {
  if (!pillar) return null;

  const labels = {
    governance: 'Governance',
    risk: 'Risk',
    compliance: 'Compliance',
  };

  const formatted = pillar.toLowerCase();
  const label = labels[formatted] || pillar;

  return (
    <span className={`pillar-badge pillar-${formatted} pillar-badge-${size}`}>
      <span className="pillar-dot" aria-hidden="true" />
      {label}
    </span>
  );
}
