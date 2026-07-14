/** Shared domain types for the portfolio content model.
 *  All site content is data-driven from `src/constants.ts` against these types. */

/** A single technology/skill rendered as a card or pill. */
export interface Skill {
  name: string
  /** Optional icon identifier (emoji or short label) shown on the card. */
  icon?: string
}

/** A named group of skills (e.g. "Frontend", "AI / ML"). */
export interface SkillGroup {
  category: string
  items: Skill[]
}

/** A headline metric shown in the stats strip. */
export interface Stat {
  /** The metric value, e.g. "0.50→0.92" or "100%". */
  value: string
  /** Short description of what the value measures. */
  label: string
}

/** A portfolio project card. */
export interface Project {
  /** Display index, e.g. "01", "02". */
  id: string
  title: string
  /** Short, human-readable role/context line (e.g. "Personal Project · 2026"). */
  meta: string
  description: string
  technologies: string[]
  /** Live deployment URL, or null when the project has no public demo. */
  liveUrl: string | null
  /** Source repository URL, or null when private. */
  sourceUrl: string | null
}

/** A professional experience / role entry. */
export interface Experience {
  role: string
  company: string
  period: string
  /** Badge icon slug (resolved in the Experience component). */
  icon?: 'rocket' | 'freelance' | 'intern'
  /** Badge background color (hex). */
  accent?: string
  /** Short bullet points describing the engagement. */
  highlights: string[]
}

/** Outbound social / contact links surfaced across the site. */
export interface Socials {
  github: string
  linkedin: string
  email: string
}
