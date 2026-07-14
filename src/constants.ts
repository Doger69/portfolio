import type { Experience, Project, Skill, Socials } from './types'

/** Outbound contact links. The email here is the public-facing personal address. */
export const SOCIALS: Socials = {
  github: 'https://github.com/muzzary',
  linkedin: 'https://www.linkedin.com/in/muzzarybabar',
  email: 'muzzarybabar@gmail.com',
}

/** In-app route for the resume viewer page. */
export const RESUME_PAGE = '/resume'

/** Resume PDF served from /public (used by the viewer + the download button). */
export const RESUME_FILE = '/Muzzary_Babar_Resume.pdf'

/** Hero section copy. `roles` cycle through the typing animation. */
export const HERO = {
  greeting: "Hi, I'm",
  name: 'Muzzary Babar',
  roles: [
    'a Software Engineer.',
    1800,
    'a Full-Stack (MERN) Developer.',
    1800,
    'an AI / LLM Integration Engineer.',
    1800,
    'a builder who benchmarks his own work.',
    1800,
  ] as (string | number)[],
  bio: "Computer Science graduate from GCU Lahore building AI-integrated software across full-stack web and applied ML. I ship real products — a local-first RAG desktop app, a deployed MERN app with an AI career assistant, and a benchmarked coding agent — then measure whether they actually work.",
  location: 'Lahore, Pakistan',
}

/** About section — multi-paragraph bio. */
export const ABOUT_PARAGRAPHS: string[] = [
  "I'm a Computer Science graduate from GCU Lahore who builds AI-integrated software and then measures whether it actually works.",
  "I built CiteFinder, a local-first RAG desktop app that answers only from a user's own PDFs and cites the exact file and page. I benchmarked retrieval on a 7,000+ chunk corpus and raised accuracy from 0.50 to 0.92 hit@1 by selecting a better embedding model, then shipped the whole stack as a one-click Windows installer.",
  "I designed and deployed a full-stack MERN app end to end — JWT auth, bcrypt, rate limiting, 20 automated API tests, and an LLM feature that scores how well a resume matches a job. Most recently I built mimicfable, a Claude Code subagent with a reproducible 12-run benchmark against baseline Opus, and published the honest result: correctness was a tie; the real difference was test discipline.",
  "I'm currently a Software Engineer Intern at AlpharexX, working on full-stack development, backend APIs, server security, and AI integration. I work daily with AI coding assistants, care about clean and tested code, and prefer building things that work over things that just demo well.",
]

/** Flat, curated skills shown as square icon cards.
 *  `icon` is a slug resolved to a brand glyph in `components/Skills/skillIcons`. */
export const SKILLS: Skill[] = [
  { name: 'Python', icon: 'python' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Java', icon: 'java' },
  { name: 'C++', icon: 'cpp' },
  { name: 'React', icon: 'react' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Express', icon: 'express' },
  { name: 'FastAPI', icon: 'fastapi' },
  { name: 'JWT', icon: 'jwt' },
  { name: 'Tailwind', icon: 'tailwind' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'RAG', icon: 'rag' },
  { name: 'Vector Search', icon: 'vector' },
  { name: 'ONNX', icon: 'onnx' },
  { name: 'LLM APIs', icon: 'openai' },
  { name: 'scikit-learn', icon: 'scikitlearn' },
  { name: 'Pandas', icon: 'pandas' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Vercel', icon: 'vercel' },
  { name: 'Git / GitHub', icon: 'github' },
  { name: 'Linux', icon: 'linux' },
  { name: 'Jest', icon: 'jest' },
]

/** Featured projects, ordered by impact. */
export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'mimicfable',
    meta: 'A Disciplined Coding Agent, Benchmarked Honestly · 2026',
    description:
      "A custom Claude Code subagent plus a fully reproducible 12-run benchmark against baseline Opus, graded by hidden test suites validated before every run. I published the honest headline: correctness was a 46/46 tie — the replicated edge was test discipline (regression suites in 4/7 tasks vs 1/7). I corrected an earlier over-claim publicly and disclosed a confound I found in my own methodology.",
    technologies: ['Claude Code SDK', 'Node.js', 'Python', 'Benchmarking', 'git'],
    liveUrl: null,
    sourceUrl: 'https://github.com/muzzary/mimicfable',
  },
  {
    id: '02',
    title: 'CiteFinder',
    meta: 'Local-First RAG Citation Assistant · 2026',
    description:
      "A local-first desktop app that answers strictly from a user's own PDFs and attributes every answer to a file and page. A hybrid pipeline (pgvector dense search + Postgres full-text, fused with Reciprocal Rank Fusion) plus a data-driven embedder swap raised retrieval from 0.50 to 0.92 hit@1 and 0.72 to 0.94 MRR on a 7,000+ chunk corpus. A strict grounding gate refuses off-topic queries before any LLM call, so it never fabricates a source. Ships as a one-click Windows installer with bundled PostgreSQL — no Docker.",
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'ONNX', 'LLMs'],
    liveUrl: null,
    sourceUrl: 'https://github.com/muzzary/citefinder',
  },
  {
    id: '03',
    title: 'JobTracker',
    meta: 'Full-Stack MERN App with AI Assistant · 2026',
    description:
      'A deployed MERN app that tracks job applications on a drag-and-drop Kanban board and runs a free AI assistant on every application. Ships a 12-endpoint REST API with JWT + bcrypt auth, rate limiting, ownership-scoped queries, and 20 automated Jest/Supertest tests with the LLM mocked. The AI resume matcher scores fit 0–100 with unmet requirements; I re-architected the assistant from a flaky tool-calling planner into reliable parallel tools and documented why.',
    technologies: ['React 18', 'Node.js', 'Express', 'MongoDB', 'JWT', 'OpenRouter', 'Jest'],
    liveUrl: 'https://job-tracker-muzzary.vercel.app',
    sourceUrl: 'https://github.com/muzzary/job-tracker',
  },
  {
    id: '04',
    title: 'Job Hunt Agent',
    meta: 'Personal Outreach Automation Tool · 2026',
    description:
      'A tool that does the boring 90% of a job search — finding people, researching them, and drafting honest first messages — while I keep the human 10%: review and send. Ranks every contact 0–100 offline, enriches only the top few to conserve a free search budget, extracts one real recent fact per company (with a source link) or falls back to an honest opener, and classifies each email as verified or guessed. Enforces a strict never-auto-send rule.',
    technologies: ['Python', 'Groq API', 'Google CSE', 'Hunter.io', 'Apollo'],
    liveUrl: null,
    sourceUrl: null,
  },
  {
    id: '05',
    title: 'Sales Automation System',
    meta: 'Final Year Project · 2025–2026',
    description:
      'A three-layer LinkedIn outreach automation pipeline that automates lead discovery, message personalisation, and CRM routing, cutting manual outreach effort by an estimated 80%. Uses an LLM for sentiment and skill-match scoring, with fault-tolerant n8n workflows, retry queues, and error-state handling.',
    technologies: ['Python', 'n8n', 'GPT-4', 'Puppeteer', 'Google Sheets'],
    liveUrl: null,
    sourceUrl: null,
  },
  {
    id: '06',
    title: 'Student Grade Prediction',
    meta: 'Machine Learning Model · 2024',
    description:
      'Trained and compared Decision Tree, SVM, and Random Forest models to predict student grades from academic and behavioural features. Improved accuracy through data cleaning, feature engineering, cross-validation, and hyperparameter tuning, delivered with visualisations and a written performance analysis.',
    technologies: ['Python', 'scikit-learn', 'Pandas', 'Jupyter'],
    liveUrl: null,
    sourceUrl: null,
  },
  {
    id: '07',
    title: 'Cinema Database System',
    meta: 'Academic Project',
    description:
      'A normalized relational database covering movies, bookings, users, and payments. Includes optimized SQL queries, stored procedures, a full ER diagram, and normalization documentation.',
    technologies: ['SQL', 'MySQL', 'ER Design', 'Normalization'],
    liveUrl: null,
    sourceUrl: null,
  },
  {
    id: '08',
    title: 'Online Learning Platform',
    meta: 'System Design · Academic Project',
    description:
      'Full pre-implementation documentation, including an SRS, use-case diagrams, DFDs, and system architecture for an e-learning platform designed to serve 500+ users, applying SDLC and agile planning principles.',
    technologies: ['Software Engineering', 'UML', 'DFD', 'SDLC'],
    liveUrl: null,
    sourceUrl: null,
  },
]

/** Professional experience timeline. `icon` resolves to a badge glyph in the
 *  Experience component; `accent` tints the badge background. */
export const EXPERIENCE: Experience[] = [
  {
    role: 'Software Engineer Intern (Full-Stack Developer)',
    company: 'AlpharexX · AI & Automation Products',
    period: 'Jun 2026 – Present · Remote',
    icon: 'rocket',
    accent: '#ef4444',
    highlights: [
      'Full-stack web and backend API development, working directly with the founder to ship secure, scalable, production-ready AI products.',
      'Server deployment, infrastructure management, and server security / cybersecurity implementation.',
      'AI integration and model-training support, plus performance optimization, database design, and bug fixing.',
    ],
  },
  {
    role: 'Python Development Intern',
    company: 'Khizex Software Solutions',
    period: 'Summer 2026 · 6 weeks · Remote',
    icon: 'intern',
    accent: '#3776ab',
    highlights: [
      'Built Python features on live production projects with direct business impact.',
      'Practised agile delivery through weekly team sync-ups and specialised workshops with senior engineers.',
      'Delivered a final project report documenting contributions (Ref: KX/INT/PYD/044).',
    ],
  },
  {
    role: 'Independent Freelancer — Software, Web, ML & Database',
    company: 'Self-employed · International clients',
    period: '2023 – Present',
    icon: 'freelance',
    accent: '#000000',
    highlights: [
      'Delivered web, database, ML, NLP, and software projects for international clients — including a foreign university and UK-based clients — remotely from requirements to delivery.',
      'Maintained a 100% on-time delivery record with positive feedback across all engagements.',
      'Managed each project independently, making technical decisions and communicating clearly across time zones.',
    ],
  },
]

/** Navigation links shared by the header (desktop + mobile). */
export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const
