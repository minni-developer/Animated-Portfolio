import { Fragment, useMemo } from 'react';
import { navLinks } from '../data/content';
import { useScrollSpy } from '../hooks/useScrollSpy';

/**
 * Nav
 * Floating pill navigation shown over the hero and sticky across viewport.
 * Uses useScrollSpy to dynamically highlight the section currently in view.
 */
export default function Nav() {
  const sectionIds = useMemo(() => navLinks.map((link) => link.id), []);
  const activeId = useScrollSpy(sectionIds, 160);

  return (
    <nav className="nav-pill" role="navigation" aria-label="Main navigation">
      {navLinks.map((link, i) => {
        const isActive = activeId === link.id;
        return (
          <Fragment key={link.id}>
            <a
              href={`#${link.id}`}
              className={isActive ? 'active' : ''}
              aria-current={isActive ? 'true' : undefined}
            >
              {link.label}
            </a>
            {i < navLinks.length - 1 && <span className="nav-divider" aria-hidden="true" />}
          </Fragment>
        );
      })}
    </nav>
  );
}
