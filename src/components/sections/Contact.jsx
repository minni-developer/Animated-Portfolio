import { useState } from 'react';
import { profile } from '../../data/content';
import Icon from '../Icons';

/**
 * Contact
 * Final call-to-action section with full social presence grid.
 * Only renders platforms with valid, non-empty URLs.
 */
export default function Contact() {
  const year = new Date().getFullYear();
  const [formOpen, setFormOpen] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  // Filter out any social entry with empty or missing URL
  const activeSocials = (profile.socials || []).filter(
    (item) => item.url && item.url.trim().length > 0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements['contact-sender-name'].value;
    const senderEmail = form.elements['contact-sender-email'].value;
    const message = form.elements['contact-sender-message'].value;

    // No backend is configured here, so this can't silently "send" anything —
    // faking a success state would mean a hiring manager's message quietly
    // goes nowhere. Instead, open the visitor's own email client with
    // everything pre-filled, which works with zero setup on Manahil's end.
    // To switch to a true in-page submit later, swap this for a fetch() call
    // to a Formspree (https://formspree.io) or Web3Forms endpoint instead.
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${senderEmail})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setFormStatus('sent');
    setTimeout(() => {
      setFormStatus(null);
      setFormOpen(false);
      form.reset();
    }, 2500);
  };

  return (
    <section className="section section-contact reveal-on-scroll" id="contact">
      <div className="section-inner section-inner-narrow">
        <p className="section-eyebrow">Get In Touch</p>
        <h2 className="contact-heading">Let's talk risk, controls &amp; compliance.</h2>
        <p className="contact-sub">
          Open to GRC Analyst and Information Security Compliance opportunities. Whether you are
          standing up a zero-to-one ISMS or preparing for an upcoming audit, I'd love to connect.
        </p>

        {/* ── Main Action Buttons ── */}
        <div className="contact-actions">
          <a
            href={`mailto:${profile.email}`}
            className="btn btn-solid"
            id="btn-contact-email"
          >
            <Icon name="mail" size={16} />
            <span>Email Me</span>
          </a>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => setFormOpen(!formOpen)}
            id="btn-toggle-form"
          >
            <Icon name="fileText" size={16} />
            <span>{formOpen ? 'Hide Quick Message' : 'Send Quick Message'}</span>
          </button>
        </div>

        {/* ── Quick Message — opens a pre-filled email, no backend required ── */}
        {formOpen && (
          <div className="contact-form-container filter-animated">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="contact-sender-name">Your Name / Organization</label>
                <input
                  id="contact-sender-name"
                  name="contact-sender-name"
                  type="text"
                  required
                  placeholder="e.g. Jane Doe (Audit Director)"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-sender-email">Your Work Email</label>
                <input
                  id="contact-sender-email"
                  name="contact-sender-email"
                  type="email"
                  required
                  placeholder="jane.doe@company.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-sender-message">Message / Opportunity Scope</label>
                <textarea
                  id="contact-sender-message"
                  name="contact-sender-message"
                  rows={4}
                  required
                  placeholder="Describe your compliance requirements or role..."
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-solid">
                  {formStatus === 'sent' ? 'Opening your email…' : 'Send Inquiry'}
                </button>
                <span className="form-endpoint-note">
                  Opens your email client with this pre-filled — no account needed on either side.
                </span>
              </div>
            </form>
          </div>
        )}

        {/* ── Full Social Presence Icon Grid ── */}
        <div className="socials-container">
          <p className="socials-title">Connect &amp; Verify Credentials:</p>
          <div className="social-grid" role="list">
            {activeSocials.map((s) => {
              const isExternal = !s.url.startsWith('mailto:') && !s.url.startsWith('tel:');
              return (
                <a
                  key={s.platform}
                  href={s.url}
                  className="social-card"
                  role="listitem"
                  title={s.label || s.platform}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                >
                  <div className="social-icon-box">
                    <Icon name={s.icon} size={20} />
                  </div>
                  <div className="social-card-text">
                    <span className="social-platform">{s.platform}</span>
                    <span className="social-label">{s.label || 'View Profile'}</span>
                  </div>
                  {isExternal && (
                    <span className="social-arrow" aria-hidden="true">
                      ↗
                    </span>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>
          © {year} {profile.name} · GRC Analyst Portfolio · Built with React &amp; Vite
        </p>
      </footer>
    </section>
  );
}
