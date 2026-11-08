/**
 * content.js
 * ─────────────────────────────────────────────────────────────────────────
 * Every piece of text on the site lives here instead of being hard-coded
 * inside components. This means you can update your bio, add a job, add a
 * certificate, or add a project WITHOUT touching any JSX/CSS.
 *
 * Fields marked "// PLACEHOLDER" are dummy/sample data so the layout has
 * realistic GRC content to show. Replace them with your real details before
 * publishing this site or sending the link to anyone.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Manahil Sabir',
  greeting: "Hi, I'm",
  title: 'GRC Analyst',
  tagline:
    'Building information security, quality and risk programs from the ground up — turning “we have no policies yet” into audit-ready.',
  location: 'Pakistan', // PLACEHOLDER — set your real city if you want it public
  email: 'manahil.sabir@example.com', // PLACEHOLDER
  linkedin: 'https://www.linkedin.com/in/manahil-sabir', // PLACEHOLDER
  github: '', // optional — leave blank to hide
  resumeUrl: '/resume.pdf', // add your real PDF to /public/resume.pdf
  socials: [
    {
      platform: 'Email',
      url: 'mailto:manahil.sabir@example.com', // PLACEHOLDER
      icon: 'mail',
      label: 'Email Manahil',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/manahil-sabir', // PLACEHOLDER
      icon: 'linkedin',
      label: 'Connect on LinkedIn',
    },
    {
      platform: 'ISACA Profile',
      url: 'https://www.isaca.org/credentialing', // PLACEHOLDER — add your member link
      icon: 'shield',
      label: 'ISACA Member / Certifications',
    },
    {
      platform: 'WhatsApp',
      url: 'https://wa.me/923000000000', // PLACEHOLDER — replace or leave blank to hide
      icon: 'whatsapp',
      label: 'Chat on WhatsApp',
    },
    {
      platform: 'GitHub',
      url: '', // optional — currently blank, filtered out automatically
      icon: 'github',
      label: 'GitHub Repositories',
    },
    {
      platform: 'X / Twitter',
      url: '', // optional — blank, filtered out automatically
      icon: 'twitter',
      label: 'Follow on X',
    },
  ],
};

// ───────────────────────────────────────────────────────────────────────────
// GRC PILLARS — "How I Work" core framing
// ───────────────────────────────────────────────────────────────────────────
export const grcPillars = [
  {
    id: 'governance',
    name: 'Governance',
    tagline: 'Strategy, Structure & Policy',
    // PLACEHOLDER — 2-3 sentences describing Manahil's governance philosophy
    description:
      'Designing structured ISMS frameworks, steering committee cadences, and practical policy hierarchies that align business strategy with ISO standards — ensuring governance enables teams rather than impeding delivery.',
    accent: '#8B5CF6',
  },
  {
    id: 'risk',
    name: 'Risk Management',
    tagline: 'Identification, Analysis & Treatment',
    // PLACEHOLDER — 2-3 sentences describing risk assessment approach
    description:
      'Applying structured risk methodologies (ISO 27005 & ISO 22301) to identify vulnerabilities, quantify asset impact, maintain living risk registers, and guide executive risk treatment decisions with defensible scoring.',
    accent: '#A855F7',
  },
  {
    id: 'compliance',
    name: 'Compliance & Audit',
    tagline: 'Control Testing & Defensible Evidence',
    // PLACEHOLDER — 2-3 sentences describing compliance and audit readiness
    description:
      'Translating PCI DSS, ISO Annex A controls, and C4I requirements into verifiable evidence trails. Running internal audits, closing gap assessments, and validating control effectiveness ahead of external reviews.',
    accent: '#6366F1',
  },
];

// ───────────────────────────────────────────────────────────────────────────
// ABOUT — short professional summary & key metrics
// ───────────────────────────────────────────────────────────────────────────
export const about = {
  heading: 'About',
  paragraphs: [
    'I’m a GRC Analyst at SKY47, where I own information security, quality and service-management compliance for an organization building its governance function largely from scratch — policies, risk registers, control frameworks, and audit readiness, end to end.',
    'My work sits at the intersection of ISO management-system standards, PCI DSS, and internal/external audit — translating framework requirements into controls that actually get implemented, not just documented.',
    'I care about GRC that holds up under real audit scrutiny: evidence trails, measurable controls, and programs that survive the transition from “new org” to “mature org.”',
  ],
  highlights: [
    {
      value: '8+',
      numericValue: 8,
      suffix: '+',
      label: 'Standards & Frameworks',
      note: 'ISO, PCI DSS & C4I',
    },
    {
      value: '3',
      numericValue: 3,
      suffix: '',
      label: 'Management Systems Built',
      note: 'ISMS · QMS · SMS',
    },
    {
      value: '100%',
      numericValue: 100,
      suffix: '%',
      label: 'Audit Traceability',
      note: 'Evidence-backed controls',
    },
    {
      value: '2+',
      numericValue: 2,
      suffix: '+',
      label: 'Years in GRC Practice',
      note: 'Zero-to-one implementation',
    },
  ],
};

// ───────────────────────────────────────────────────────────────────────────
// EXPERIENCE — work history, most recent first
// ───────────────────────────────────────────────────────────────────────────
export const experience = [
  {
    role: 'GRC Analyst',
    company: 'SKY47',
    period: '2024 — Present', // PLACEHOLDER dates — set your real start date
    pillar: 'governance',
    summary:
      'Standing up the organization’s first formal governance, risk and compliance function across information security, quality and service management.',
    bullets: [
      {
        text: 'Built the ISMS from the ground up in line with ISO/IEC 27001, including scope, risk methodology (ISO/IEC 27005), and the Statement of Applicability.',
        pillar: 'governance',
      },
      {
        text: 'Ran internal audits and gap assessments across ISO 9001, ISO/IEC 20000 and PCI DSS to size up compliance debt for a newly formed org.',
        pillar: 'compliance',
      },
      {
        text: 'Authored and rolled out policies, SOPs and control procedures — the first documented governance layer the company has had.',
        pillar: 'governance',
      },
      {
        text: 'Established corporate risk register, risk acceptance workflows, and residual risk tracking aligned to ISO/IEC 27005.',
        pillar: 'risk',
      },
      {
        text: 'Coordinated with engineering and operations to close audit findings and track remediation through to evidence sign-off.',
        pillar: 'compliance',
      },
    ],
  },
  {
    role: 'GRC / Compliance Intern', // PLACEHOLDER role
    company: 'Previous Organization', // PLACEHOLDER — name your actual employer
    period: '2023 — 2024', // PLACEHOLDER
    pillar: 'compliance',
    summary: 'Supported early-stage audit preparation and documentation work.',
    bullets: [
      {
        text: 'Assisted with evidence collection for internal audits and control verification interviews.',
        pillar: 'compliance',
      },
      {
        text: 'Helped map existing technical workflows against ISO 27001 control objectives.',
        pillar: 'governance',
      },
      {
        text: 'Learned the audit lifecycle from initial gap analysis through corrective action tracking.',
        pillar: 'risk',
      },
    ],
  },
];

// ───────────────────────────────────────────────────────────────────────────
// STANDARDS & FRAMEWORKS — tagged with GRC Pillars
// ───────────────────────────────────────────────────────────────────────────
export const standards = [
  {
    code: 'ISO/IEC 27001',
    name: 'Information Security Management (ISMS)',
    pillar: 'governance',
    scope: 'Organizational Security',
    note: 'Core framework — scope definition, risk treatment, SoA, and internal audit oversight.',
  },
  {
    code: 'ISO/IEC 27005',
    name: 'Information Security Risk Management',
    pillar: 'risk',
    scope: 'Risk Methodology',
    note: 'Risk identification, threat/vulnerability analysis, impact scoring, and treatment plans.',
  },
  {
    code: 'ISO/IEC 27017',
    name: 'Cloud Security Controls',
    pillar: 'compliance',
    scope: 'Cloud Environment',
    note: 'Cloud-specific control verification layered on top of ISO/IEC 27002.',
  },
  {
    code: 'ISO/IEC 27018',
    name: 'Protection of PII in the Cloud',
    pillar: 'compliance',
    scope: 'Data Privacy',
    note: 'Privacy controls for personally identifiable information stored in multi-tenant cloud services.',
  },
  {
    code: 'ISO 22301',
    name: 'Business Continuity Management',
    pillar: 'risk',
    scope: 'Resilience & BCP',
    note: 'Business impact analysis (BIA), disaster recovery alignment, and continuity testing.',
  },
  {
    code: 'ISO 9001',
    name: 'Quality Management System (QMS)',
    pillar: 'governance',
    scope: 'Quality & Process',
    note: 'Process consistency, non-conformance logging, root cause analysis, and continual improvement.',
  },
  {
    code: 'ISO/IEC 20000',
    name: 'IT Service Management (ITSM)',
    pillar: 'governance',
    scope: 'Service Operations',
    note: 'Service delivery controls, incident/change/problem management alignment, and SLA tracking.',
  },
  {
    code: 'ISO/IEC 42001',
    name: 'AI Management System',
    pillar: 'governance',
    scope: 'AI Governance',
    note: 'Governance controls for responsible AI usage, data lineage, and model risk management.',
  },
  {
    code: 'PCI DSS v4.0',
    name: 'Payment Card Industry Data Security Standard',
    pillar: 'compliance',
    scope: 'Cardholder Security',
    note: 'Cardholder data environment (CDE) scoping, network segmentation, and control validation.',
  },
  {
    code: 'C4I Audit',
    name: 'Command, Control, Communications & Intelligence',
    pillar: 'compliance',
    scope: 'Mission-Critical Systems',
    note: 'Audit exposure to C4I environments and rigorous operational control testing.',
  },
];

// ───────────────────────────────────────────────────────────────────────────
// METHODOLOGY — 4-Step GRC Engagement Lifecycle (NEW SECTION)
// ───────────────────────────────────────────────────────────────────────────
export const methodology = {
  eyebrow: 'Engagement Methodology',
  heading: 'How I Build Audit-Ready Programs',
  intro:
    'A pragmatic 4-phase methodology designed to bring clarity and control to zero-to-one compliance initiatives without bureaucratic paralysis.', // PLACEHOLDER
  steps: [
    {
      step: '01',
      title: 'Scoping & Gap Assessment',
      pillar: 'risk',
      timeframe: 'Weeks 1 — 3',
      description:
        'Establish organizational boundaries, map data flows (CDE/PII), and evaluate current operational reality against target frameworks.',
      deliverables: ['Gap Analysis Matrix', 'CDE & Data Flow Diagrams', 'Executive Risk Overview'],
    },
    {
      step: '02',
      title: 'Control Architecture & Policies',
      pillar: 'governance',
      timeframe: 'Weeks 4 — 7',
      description:
        'Draft fit-for-purpose policies and procedures that reflect realistic engineering practices while satisfying rigorous standard clauses.',
      deliverables: ['Information Security Policy Set', 'Statement of Applicability (SoA)', 'RACI Governance Matrix'],
    },
    {
      step: '03',
      title: 'Operational Rollout & Evidence',
      pillar: 'compliance',
      timeframe: 'Weeks 8 — 12',
      description:
        'Integrate controls into existing workflows (Jira, cloud consoles, HR onboarding), establishing automated and repeatable evidence gathering.',
      deliverables: ['Risk Treatment Plans', 'Control Implementation Evidence', 'Vendor Risk Baseline'],
    },
    {
      step: '04',
      title: 'Internal Audit & Continuous Assurance',
      pillar: 'compliance',
      timeframe: 'Ongoing Cadence',
      description:
        'Execute internal audit cycles, test control operational effectiveness, resolve corrective actions, and prepare leadership for external audits.',
      deliverables: ['Internal Audit Report', 'Corrective Action Plan (CAP)', 'Management Review Pack'],
    },
  ],
};

// ───────────────────────────────────────────────────────────────────────────
// DOCUMENTATION & ARTIFACTS — GRC Evidence Gallery (NEW SECTION)
// ───────────────────────────────────────────────────────────────────────────
export const artifacts = {
  eyebrow: 'GRC Documentation & Artifacts',
  heading: 'Defensible Work Products',
  intro:
    'Sample and sanitized excerpts demonstrating the structure, rigor, and clarity of documentation produced for audit defense.', // PLACEHOLDER
  items: [
    {
      id: 'risk-register',
      title: 'Enterprise Risk Register & Heatmap',
      pillar: 'risk',
      standard: 'ISO/IEC 27005',
      badge: 'Risk Tooling',
      summary:
        'Quantitative risk matrix scoring likelihood, impact, existing controls, and residual risk tolerance.',
      highlight: 'Identifies 35+ asset-threat pairs with assigned risk owners and mitigation due dates.',
      format: 'Spreadsheet / GRC Repository',
      tags: ['Likelihood x Impact', 'Residual Risk', 'Treatment Plans'],
    },
    {
      id: 'soa-matrix',
      title: 'Statement of Applicability (SoA)',
      pillar: 'governance',
      standard: 'ISO/IEC 27001:2022',
      badge: 'Core ISMS',
      summary:
        'Detailed mapping of all 93 Annex A controls with inclusion rationale, implementation status, and mapped policies.',
      highlight: 'Provides external auditors with an unambiguous roadmap of applicable organizational controls.',
      format: 'Governance Database',
      tags: ['Annex A (93 Controls)', 'Inclusion Justification', 'Evidence Pointers'],
    },
    {
      id: 'access-policy',
      title: 'Access Control & Acceptable Use Policy',
      pillar: 'governance',
      standard: 'ISO 27001 / PCI DSS',
      badge: 'Policy Baseline',
      summary:
        'Structured policy document defining MFA enforcement, privileged account reviews, and offboarding SLAs.',
      highlight: 'Engineered with enforceable guidelines rather than ambiguous generic statements.',
      format: 'Policy Framework (Markdown / Confluence)',
      tags: ['RBAC', 'MFA Enforced', 'Quarterly Access Reviews'],
    },
    {
      id: 'pci-checklist',
      title: 'PCI DSS v4.0 Control Validation Checklist',
      pillar: 'compliance',
      standard: 'PCI DSS v4.0',
      badge: 'Audit Readiness',
      summary:
        'Rigorous testing script verifying cardholder encryption, firewall configuration reviews, and vulnerability scanning cadences.',
      highlight: 'Streamlines pre-assessment readiness to prevent surprises during QSA evaluation.',
      format: 'Audit Workpaper',
      tags: ['Requirement 1-12', 'Evidence Sampling', 'Compensating Controls'],
    },
  ],
};

// ───────────────────────────────────────────────────────────────────────────
// COMPLIANCE MATURITY SNAPSHOT — Interactive Domain Overview (NEW SECTION)
// ───────────────────────────────────────────────────────────────────────────
export const maturitySnapshot = {
  eyebrow: 'Maturity Snapshot',
  heading: 'GRC Program Capabilities',
  intro:
    'Self-rated capability snapshot across five core security and governance domains, reflecting progress toward structured maturity.', // PLACEHOLDER
  domains: [
    {
      domain: 'Information Security Governance',
      level: 4,
      maxLevel: 5,
      levelLabel: 'Managed & Measured',
      pillar: 'governance',
      summary: 'Executive committee, formal ISMS scope, ratified policies, and regular management reviews.',
    },
    {
      domain: 'Risk Assessment & Treatment',
      level: 4,
      maxLevel: 5,
      levelLabel: 'Systematic',
      pillar: 'risk',
      summary: 'ISO 27005 methodology, living risk register, calibrated impact scales, and owner accountability.',
    },
    {
      domain: 'Audit Readiness & Evidence Trails',
      level: 4,
      maxLevel: 5,
      levelLabel: 'Defensible',
      pillar: 'compliance',
      summary: 'Centralized evidence repositories, traceable sampling methods, and pre-audit dry runs.',
    },
    {
      domain: 'Business Continuity & Resilience',
      level: 3,
      maxLevel: 5,
      levelLabel: 'Defined',
      pillar: 'risk',
      summary: 'Business impact analyses mapped, continuity plans documented, scheduled for annual drill testing.',
    },
    {
      domain: 'Third-Party / Vendor Risk',
      level: 3,
      maxLevel: 5,
      levelLabel: 'Defined',
      pillar: 'governance',
      summary: 'Vendor intake questionnaire, critical supplier categorization, and annual SOC 2/ISO reviews.',
    },
  ],
};

// ───────────────────────────────────────────────────────────────────────────
// PROJECTS / CASE STUDIES — tagged with GRC Pillars
// ───────────────────────────────────────────────────────────────────────────
export const projects = [
  // PLACEHOLDER — sample case studies shaped around zero-to-one GRC work
  {
    title: 'Building an ISMS from Zero',
    tag: 'ISO/IEC 27001',
    pillar: 'governance',
    problem:
      'SKY47 had no formal information security program — no policies, no risk register, no defined scope for certification.',
    action:
      'Defined ISMS scope, ran an organization-wide risk assessment against ISO/IEC 27005, and drafted the full policy set plus Statement of Applicability.',
    result:
      'Delivered a certification-ready ISMS structure with 100% of Annex A controls assessed and technical owners assigned.', // PLACEHOLDER metric
  },
  {
    title: 'Enterprise Risk Assessment & Treatment Matrix',
    tag: 'ISO/IEC 27005 · ISO 22301',
    pillar: 'risk',
    problem:
      'Risk decisions were made ad-hoc with no standardized likelihood-impact criteria or central risk register.',
    action:
      'Formulated an ISO 27005-compliant quantitative risk scoring methodology, conducted workshops across 6 departments, and cataloged residual risks.',
    result:
      'Created the organization’s foundational Risk Register tracking 40+ threat scenarios with agreed treatment budgets.', // PLACEHOLDER metric
  },
  {
    title: 'PCI DSS Readiness & Gap Remediation',
    tag: 'PCI DSS v4.0',
    pillar: 'compliance',
    problem:
      'Payment-handling workflows had never been scoped against PCI DSS, creating undefined compliance exposure.',
    action:
      'Mapped the cardholder data environment, ran a gap assessment against all 12 PCI DSS requirements, and prioritized technical remediation by risk.',
    result:
      'Reduced open PCI gaps by an estimated 60% within one quarter and produced a remediation roadmap leadership could track.', // PLACEHOLDER metric
  },
  {
    title: 'First Formal Internal Audit Cycle',
    tag: 'ISO 9001 · ISO/IEC 20000',
    pillar: 'compliance',
    problem:
      'No internal audit function existed to test whether documented procedures were actually operationalized by teams.',
    action:
      'Designed an internal audit charter, scope schedule, and evidence checklists covering QMS and ITSM processes, then executed the audit cycle end to end.',
    result:
      'Surfaced and tracked corrective actions for every major non-conformance found, closing out the cycle ahead of the external audit.',
  },
  {
    title: 'AI Governance Groundwork',
    tag: 'ISO/IEC 42001',
    pillar: 'governance',
    problem:
      'Teams began adopting AI tools with no governance layer around proprietary data privacy, model risk, or oversight.',
    action:
      'Drafted an initial AI usage policy, data boundary guidelines, and risk-assessment template aligned to ISO/IEC 42001.',
    result:
      'Gave executive leadership a lightweight governance baseline before AI tooling scaled further across engineering.',
  },
];

// ───────────────────────────────────────────────────────────────────────────
// CERTIFICATIONS & CONTINUOUS LEARNING
// ───────────────────────────────────────────────────────────────────────────
export const certifications = [
  // PLACEHOLDER — sample certifications; replace with actual credentials
  {
    name: 'ISO/IEC 27001:2022 Lead Auditor',
    issuer: 'PECB', // PLACEHOLDER issuer
    year: '2024',
    status: 'Certified',
    pillar: 'governance',
    id: 'PECB-27001-LA',
  },
  {
    name: 'ISO 9001:2015 Internal Auditor',
    issuer: 'TÜV Rheinland', // PLACEHOLDER issuer
    year: '2024',
    status: 'Certified',
    pillar: 'governance',
    id: 'TUV-9001-IA',
  },
  {
    name: 'PCI DSS Foundations',
    issuer: 'PCI Security Standards Council', // PLACEHOLDER issuer
    year: '2025',
    status: 'In Progress',
    pillar: 'compliance',
    id: 'PCI-FND',
  },
  {
    name: 'Certified in Risk and Information Systems Control (CRISC)',
    issuer: 'ISACA',
    year: '2025',
    status: 'In Progress',
    pillar: 'risk',
    id: 'ISACA-CRISC',
  },
];

export const continuousLearning = [
  // PLACEHOLDER — active learning, communities, and reading
  {
    title: 'ISACA Member & Emerging Leader Community',
    type: 'Professional Community',
    details: 'Active participation in local ISACA chapter sessions on cyber risk quantification and AI security.',
  },
  {
    title: 'ISO/IEC 42001 AI Auditor Curriculum',
    type: 'Self-Study & Training',
    details: 'Tracking international AI management standards, model validation principles, and data provenance.',
  },
  {
    title: 'PCI SSC Guidance on v4.0 Multi-Factor Authentication',
    type: 'Industry Research',
    details: 'Technical review of updated authentication requirements and phased compliance deadlines.',
  },
];

// ───────────────────────────────────────────────────────────────────────────
// EDUCATION
// ───────────────────────────────────────────────────────────────────────────
export const education = [
  {
    degree: 'BS, Software Engineering',
    school: 'Your University', // PLACEHOLDER — add your real university name
    period: '2020 — 2024', // PLACEHOLDER
    note: 'Coursework spanning software development, systems design and information security fundamentals.',
  },
];

// ───────────────────────────────────────────────────────────────────────────
// SKILLS — quick-scan chips grouped by category
// ───────────────────────────────────────────────────────────────────────────
export const skillGroups = [
  {
    category: 'Frameworks & Standards',
    items: ['ISO/IEC 27001', 'ISO/IEC 27005', 'ISO 9001', 'ISO/IEC 20000', 'PCI DSS', 'ISO/IEC 42001', 'ISO 22301'],
  },
  {
    category: 'GRC Practice',
    items: ['Risk Assessment', 'Internal Audit', 'Gap Analysis', 'Policy Drafting', 'Control Testing', 'Audit Evidence Management', 'Statement of Applicability'],
  },
  {
    category: 'Tools & Platforms', // PLACEHOLDER — swap in the tools you actually use
    items: ['Excel / Risk Registers', 'SharePoint', 'Jira / Confluence', 'Google Workspace', 'ServiceNow (Overview)'],
  },
];

// Section labels used in the nav pill — keep this in sync with the <section id="..."> values
export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Pillars & Standards' },
  { id: 'methodology', label: 'Methodology' },
  { id: 'projects', label: 'Projects' },
  { id: 'artifacts', label: 'Artifacts' },
  { id: 'maturity', label: 'Maturity' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];
