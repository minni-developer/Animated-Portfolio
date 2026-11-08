# Manahil Sabir — GRC Portfolio

An evolved, single-page React 19 + Vite portfolio for **Manahil Sabir, GRC Analyst**. Features an animated canvas hero (mouse-tracking face direction across 64 WebP frames) recolored to deep aubergine purple (`#4B2E83`), structured explicitly around the three core pillars of GRC: **Governance, Risk Management, and Compliance & Audit**.

---

## Quick start

```bash
npm install
npm run dev       # Starts local dev server at http://127.0.0.1:5173/
npm run build     # Production bundle built to dist/
npm run preview   # Preview the production build locally
npm run lint      # Fast linter check via oxlint
```

---

## Where to edit things

All copy and credentials are separated from JSX and styling:

| I want to change... | Edit this file / section |
|---|---|
| Name, title, tagline, email, resume link | `src/data/content.js` → `profile` |
| Social profiles (LinkedIn, ISACA, WhatsApp, GitHub, etc.) | `src/data/content.js` → `profile.socials` |
| GRC Pillars overview ("How I Work") | `src/data/content.js` → `grcPillars` |
| About bio & numeric highlight stats | `src/data/content.js` → `about` |
| Work history, bullets & assigned GRC pillars | `src/data/content.js` → `experience` |
| Standards & frameworks index (with pillar tags) | `src/data/content.js` → `standards` |
| 4-step engagement methodology & deliverables | `src/data/content.js` → `methodology` |
| Case studies & problem/action/result cards | `src/data/content.js` → `projects` |
| Documentation & audit evidence samples (spec modal) | `src/data/content.js` → `artifacts` |
| 5-domain compliance maturity capability scorecard | `src/data/content.js` → `maturitySnapshot` |
| Certifications & continuous learning / communities | `src/data/content.js` → `certifications` & `continuousLearning` |
| Education | `src/data/content.js` → `education` |
| Nav pill section links | `src/data/content.js` → `navLinks` |
| Colors, design tokens, responsive typography | `src/index.css` |

> **Note on Placeholders:** Several entries in `src/data/content.js` are marked `// PLACEHOLDER` (sample company names, metrics, and dates). Replace these with your real details before publishing.

---

## Key Features & Architecture

### 1. Governance / Risk / Compliance (GRC) Pillar Filtering
- All standards, projects, and work history bullets are categorized under **Governance**, **Risk**, or **Compliance**.
- `Skills.jsx` and `Projects.jsx` include client-side segmented filter controls with item count indicators and smooth animated transitions.
- A 3-column "How I Work" intro block provides recruiters and non-technical hiring managers with an immediate plain-language understanding of Manahil's practice.

### 2. New Sections
- **Methodology Stepper (`Methodology.jsx`)**: An interactive 4-phase horizontal workflow (Scoping & Gap Assessment → Control Architecture & Policies → Operational Rollout & Evidence → Internal Audit & Continuous Assurance) highlighting concrete deliverables.
- **Documentation & Artifacts Gallery (`Artifacts.jsx`)**: Evidence gallery showcasing realistic work products (Risk Register & Heatmap, Statement of Applicability Matrix, Access Control Policy Template, and PCI DSS v4.0 Checklist) with an "Inspect Spec" modal viewer.
- **Compliance Maturity Snapshot (`MaturitySnapshot.jsx`)**: An interactive 5-domain capability scorecard displaying operational maturity against external audit verification benchmarks.
- **Continuous Learning & Affiliations (`Certifications.jsx`)**: Dedicated section for active learning tracks (ISACA, PECB, PCI SSC Guidance).

### 3. Full Social Presence & Contact
- `profile.socials` in `content.js` allows configuring links for Email, LinkedIn, ISACA Member profile, WhatsApp, GitHub, and X/Twitter.
- Platforms with empty URLs are hidden automatically.
- Optional "Send Quick Message" expandable form prepared for Formspree (`https://formspree.io/f/...`) or Web3Forms endpoints.

### 4. Aubergine Purple Theme & Hero Frame Recolor
- `--bg: #4B2E83` (deep aubergine purple) and `--accent: #8B5CF6` (violet) provide high contrast on the light paper content theme below the hero.
- All 64 directional frames + `center.webp` in `public/frames/` were recolored via chroma-key color distance in `dev-assets/recolor_frames.py`.
- Original red frames are preserved in `dev-assets/original_frames/`.

---

## Project Structure

```
src/
  data/
    content.js               ← All editable text, metrics, and profiles
  components/
    Nav.jsx                  ← Floating nav pill with dynamic scrollspy
    CharacterCanvas.jsx      ← Full-screen 60fps cursor-tracking canvas
    PillarFilter.jsx         ← Segmented filter control (All/Gov/Risk/Comp)
    PillarBadge.jsx          ← Semantic color-coded pillar tag
    AnimatedCounter.jsx      ← Stat count-up counter (reduced-motion safe)
    Icons.jsx                ← Lightweight inline SVG icons
    sections/
      Hero.jsx               ← Canvas intro + CTA
      About.jsx              ← Bio + animated counter cards
      Experience.jsx         ← Career timeline with bullet pillar tags
      Skills.jsx             ← "How I Work" + filterable standards table
      Methodology.jsx        ← 4-phase interactive engagement stepper
      Projects.jsx           ← Filterable case study cards
      Artifacts.jsx          ← Documentation gallery + spec modal
      MaturitySnapshot.jsx   ← Interactive 5-domain capability scorecard
      Certifications.jsx     ← Credentials + continuous learning + education
      Contact.jsx            ← Social presence grid + quick message form
  hooks/
    useMagneticCursor.js     ← Custom magnetic cursor dot + aura
    useScrollSpy.js          ← Viewport section observer for nav active state
    useScrollReveal.js       ← Viewport scroll entrance triggers
  index.css                  ← Design tokens, animations, and responsive styles
  App.jsx                    ← App layout & section composition

dev-assets/
  recolor_frames.py          ← Chroma-key color replacement script (red -> purple)
  original_frames/           ← Backup of original 65 source frames
  character.mp4              ← Original raw character video
  extract_frames.py          ← Slices video into 64 directional WebP poses
```

---

## Deployment Checklist

1. Place your real resume PDF at `public/resume.pdf` (or update `profile.resumeUrl`).
2. Review and update `// PLACEHOLDER` values in `src/data/content.js`.
3. If using the quick message form, plug in your Formspree or Web3Forms endpoint in `Contact.jsx`.
4. Run `npm run build` and deploy the output `dist/` directory to Vercel, Netlify, or GitHub Pages.
