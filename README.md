# Zain Waqar · Portfolio

A single-page personal portfolio built with **React + TypeScript**, **Vite**, **Tailwind CSS v4**, and **Motion**. Content is fully data-driven from [`src/constants.ts`](src/constants.ts).

**Sections:** hero → stats strip → skills → about → experience → projects → philosophy → contact.

## Featured work

- **Food Delivery Mobile App** (Cross-Platform Mobile App · Flutter & Dart): cross-platform mobile app for Android & iOS with custom widgets, menu browsing, and bottom navigation.
- **Image Compression Tool** (Desktop GUI Application · Java, Swing & DSA): custom Huffman, RLE, and JPEG compression algorithms implemented from scratch with binary file I/O.
- **Smart Resume Analyzer** (Full-Stack Web App · NLP & FastAPI): ATS compatibility scoring engine using an NLP pipeline (spaCy/scikit-learn) with FastAPI REST backend and React frontend.

## Stack

| Concern      | Tool                                      |
| ------------ | ----------------------------------------- |
| Build        | Vite 6                                    |
| Framework    | React 18 + TypeScript (strict)            |
| Styling      | Tailwind CSS v4 (`@tailwindcss/vite`)     |
| Animation    | `motion/react`                            |
| Typing hero  | `react-type-animation`                    |
| Contact form | `@emailjs/browser` (client-side)          |
| SVG imports  | `vite-plugin-svgr`                        |

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

## Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the Vite dev server                    |
| `npm run build`   | Type-check (`tsc -b`) then build to `dist/`  |
| `npm run preview` | Preview the production build locally         |
| `npm run deploy`  | Build and publish `dist/` to GitHub Pages    |

## Contact form (EmailJS)

The form works without configuration: if no keys are set it falls back to opening the
visitor's email client via `mailto:`. To send through EmailJS instead:

1. Create a free account at <https://www.emailjs.com/>.
2. Copy `.env.example` to `.env` and fill in your IDs:

   ```env
   VITE_EMAILJS_SERVICE_ID=...
   VITE_EMAILJS_TEMPLATE_ID=...
   VITE_EMAILJS_PUBLIC_KEY=...
   ```

   The `VITE_` prefix is required for Vite to expose them. These are public,
   client-side keys by design; never put private secrets here. `.env` is git-ignored.
3. Your EmailJS template should reference the form fields: `name`, `email`, `subject`, `message`.

## Editing content

All copy and data live in [`src/constants.ts`](src/constants.ts): hero/about text, headline
stats, skills, projects, experience, philosophy values, and social links,
each typed against [`src/types/index.ts`](src/types/index.ts). The resume is served from
`public/Zain_Waqar_Resume.pdf` and viewed at the `/resume` route; replace that file (and
update `RESUME_FILE` if renamed) to swap in a new resume.

## Deployment

**Vercel / Netlify (recommended, zero-config):** import the repo, `npm run build`, output `dist/`.
Leave `base` unset in `vite.config.ts` (already the default here).

**GitHub Pages:**

1. In `vite.config.ts`, set `base: '/<your-repo-name>/'`.
2. Run `npm run deploy` (publishes `dist/` to the `gh-pages` branch).

## Credits

Layout inspired by the *Illustration Based Portfolio* template by Jhanvi Shah. Illustrations
in this build are original inline SVGs.
