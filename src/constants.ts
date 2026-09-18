import type { Certification, Experience, Project, Skill, Socials, Stat, Value } from './types'

/** Outbound contact links. The email here is the public-facing personal address. */
export const SOCIALS: Socials = {
  github: 'https://github.com/Doger69',
  linkedin: 'https://www.linkedin.com/in/zain-waqar',
  email: 'zaindogar.dev@gmail.com',
}

/** Direct phone number from resume. */
export const PHONE = '+92 346 1963984'

/** In-app route for the resume viewer page. */
export const RESUME_PAGE = '/resume'

/** Resume PDF served from /public (used by the viewer + the download button). */
export const RESUME_FILE = `${import.meta.env.BASE_URL}Zain_Waqar_Resume.pdf`

/** Hero section copy. `roles` cycle through the typing animation. */
export const HERO = {
  greeting: "Hi, I'm",
  name: 'Zain Waqar',
  roles: [
    'a Mobile Application Developer.',
    1800,
    'a MERN Stack Developer.',
    1800,
    'a Flutter & Cross-Platform Engineer.',
    1800,
    'a Full-Stack & Web Developer.',
    1800,
    'a Computer Science Graduate from GCU.',
    1800,
  ] as (string | number)[],
  bio: 'Mobile Application & MERN Stack Developer with production experience shipping a comprehensive POS checkout system in Flutter & GetX — featuring reactive state management, offline-first data persistence, and REST API integration. Completed BSc in Computer Science at GC University Lahore, actively building cross-platform mobile apps and modern full-stack web solutions with React, Next.js, and Node.',
  location: 'Lahore, Pakistan',
}

/** About section: multi-paragraph bio. */
export const ABOUT_PARAGRAPHS: string[] = [
  "I'm a Computer Science graduate from GC University Lahore with production mobile experience, passionate about building responsive, robust, and user-centric mobile applications.",
  "At Gen-T AI Solutions, I developed the checkout and shift management flow for a production point-of-sale (POS) application. I built an offline-first caching layer ensuring reliable local data persistence during connectivity drops with automatic background sync, integrated camera-based barcode scanning for rapid product lookups, and systematically debugged race conditions in real-time state updates across multi-step checkout flows.",
  "My cross-platform toolkit centers around Flutter and GetX with pixel-accurate Material Design components across iOS and Android. In parallel, I actively build native Android applications leveraging Kotlin, Jetpack Compose, MVVM architecture, ViewModel, LiveData/StateFlow, Coroutines, and Room for local persistence.",
  "Beyond application development, I bring strong computer science fundamentals in Data Structures & Algorithms, OOP, and Software Engineering — demonstrated in projects ranging from custom Huffman & RLE image compression in Java to an end-to-end ATS resume analysis platform.",
]

/** Headline metrics shown in the stats strip below the hero.
 *  Entries corresponding to unverified production metrics preserve bracketed placeholders [X]. */
export const STATS: Stat[] = [
  { value: '[X]%', label: 'reduction in data errors (offline POS sync on reconnect)' },
  { value: '[X]', label: 'screens delivered with pixel-accurate Material Design UI' },
  { value: '3+', label: 'development stacks (Flutter, Android, MERN)' },
  { value: '2026', label: 'BSc Computer Science graduate, GCU Lahore' },
  { value: '3', label: 'shipped production & featured projects' },
  { value: '1', label: 'production POS checkout system shipped' },
  { value: '[X]s', label: 'cut in checkout time via camera barcode scanning' },
  { value: 'Agile', label: 'collaborative sprint & Git review delivery' },
]

/** Flat, curated skills shown as square icon cards.
 *  `icon` is a slug resolved to a brand glyph in `components/Skills/skillIcons`. */
export const SKILLS: Skill[] = [
  // Mobile & Cross-Platform
  { name: 'Flutter', icon: 'flutter' },
  { name: 'Dart', icon: 'dart' },
  { name: 'Kotlin', icon: 'kotlin' },
  { name: 'Android SDK', icon: 'android' },
  { name: 'GetX', icon: 'getx' },
  { name: 'Android Studio', icon: 'androidstudio' },
  { name: 'iOS & Android', icon: 'ios' },

  // Programming Languages
  { name: 'Java', icon: 'java' },
  { name: 'Python', icon: 'python' },
  { name: 'C / C++', icon: 'cpp' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'SQL', icon: 'sql' },

  // Web, MERN & Backend
  { name: 'React.js', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'Express.js', icon: 'express' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'REST APIs', icon: 'rest' },
  { name: 'FastAPI', icon: 'fastapi' },
  { name: 'Git / GitHub', icon: 'github' },
  { name: 'SQLite', icon: 'sqlite' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'Agile / Scrum', icon: 'agile' },

  // Core Computer Science
  { name: 'Data Structures', icon: 'dsa' },
  { name: 'Algorithms', icon: 'dsa' },
  { name: 'OOP', icon: 'oop' },
  { name: 'Networks', icon: 'networks' },
]

/** Featured projects from resume. */
export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'Food Delivery Mobile App',
    meta: 'Cross-Platform Mobile App · Flutter & Dart',
    description:
      'Built a cross-platform food delivery app for Android & iOS with Home, Orders, Login, and Profile screens and bottom navigation routing. Designed reusable custom widgets (FoodItemCard, CategoryCard) for a scalable UI architecture, implementing search, category browsing, and card-based menu listings.',
    technologies: ['Flutter', 'Dart', 'Material Design', 'Android', 'iOS', 'UI/UX'],
    liveUrl: null,
    sourceUrl: 'https://github.com/Doger69/Food-Delivery-App',
  },
  {
    id: '02',
    title: 'Image Compression Tool',
    meta: 'Desktop GUI Application · Java, Swing & DSA',
    description:
      'Built a desktop GUI application implementing JPEG, Run Length Encoding (RLE), and Huffman Coding from scratch using frequency analysis, a min heap priority queue, and binary tree construction. Implemented a row-by-row RLE encoder with binary file I/O and an interactive file picker interface with real-time compression feedback.',
    technologies: ['Java', 'Swing', 'Data Structures', 'Algorithms', 'Binary File I/O'],
    liveUrl: null,
    sourceUrl: 'https://github.com/Doger69/Image-Compression-Tool',
  },
  {
    id: '03',
    title: 'Smart Resume Analyzer',
    meta: 'Full-Stack Web App · NLP & FastAPI',
    description:
      'Developed a full-stack web app with a REST API (FastAPI, JWT authentication) and an NLP pipeline (scikit-learn / spaCy) scoring resume to job description ATS compatibility, with role-based candidate/employer dashboards.',
    technologies: ['Python', 'FastAPI', 'React.js', 'NLP', 'scikit-learn', 'spaCy', 'JWT'],
    liveUrl: 'https://resume-analyzer-eight-ecru.vercel.app',
    sourceUrl: 'https://github.com/Doger69/Resume-Analyzer',
  },
]

/** Professional experience timeline. `icon` resolves to a badge glyph in the
 *  Experience component; `accent` tints the badge background. */
export const EXPERIENCE: Experience[] = [
  {
    role: 'Mobile Application Developer',
    company: 'Gen-T AI Solutions',
    period: 'June 2026 – Present',
    icon: 'rocket',
    accent: '#ef4444',
    highlights: [
      'Shipped the checkout and shift management flow for a production POS app used by [store staff / X locations], cutting cash handling data integrity errors by [X%] through systematic debugging of race conditions in real time state updates.',
      'Delivered a fully offline capable checkout experience with zero data loss during connectivity drops, measured by [X% of transactions completed offline without sync errors], by building a local first caching layer with automatic background sync on reconnect.',
      'Cut average in store checkout time by [X seconds/%] by integrating camera based barcode scanning with real time product lookup against a REST API backend.',
      'Reduced design QA revision cycles to near zero across [X] screens by implementing pixel accurate, responsive UI matched against an existing desktop/web design system using Material Design components.',
      'Kept a [X] person cross functional team shipping on schedule across [X] sprints by collaborating daily in an Agile workflow with disciplined Git branching and structured code review practices.',
    ],
  },
]

/** Guiding principles: the engineering philosophy behind the work. */
export const VALUES: Value[] = [
  {
    title: 'Offline-first is non-negotiable.',
    body: 'Network connectivity is unpredictable in real-world retail and on-the-go mobile environments. Local-first caching layers and resilient background sync safeguard data integrity and ensure a seamless user experience even when disconnected.',
  },
  {
    title: 'Pixel-accurate, responsive UI.',
    body: 'Great apps feel native on every display. I focus on fluid animations, structured Material Design components, and consistent layout behavior across diverse screen sizes and densities.',
  },
  {
    title: 'Clean architecture over quick hacks.',
    body: 'Scalable mobile apps demand disciplined separation of concerns. Clear MVVM patterns, reactive state management with GetX or StateFlow, and structured repositories make code testable and maintainable.',
  },
  {
    title: 'Rigorous fundamentals & code review.',
    body: 'From binary I/O and tree structures to Git branching and pull request reviews in Agile sprints, solid CS foundations ensure reliable, performant software delivery.',
  },
]

/** Verified certifications placeholder (retained for type-safety). */
export const CERTIFICATIONS: Certification[] = []

/** Navigation links shared by the header (desktop + mobile). */
export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const
