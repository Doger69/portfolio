import { CERTIFICATIONS } from '../../constants'
import Reveal from '../UI/Reveal'
import SectionHeading from '../UI/SectionHeading'
import { ExternalLinkIcon } from '../UI/icons'

/** Verified credentials, each linking to its public verification page. */
export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 flex justify-center">
          <SectionHeading
            eyebrow="Verified credentials"
            solid="My"
            outline="Certifications"
            className="text-center"
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.name} delay={(i % 2) * 0.08}>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-center justify-between gap-4 rounded-2xl border-2 border-ink/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-ink hover:shadow-lg hover:shadow-ink/5"
              >
                <div>
                  <h3 className="font-display text-lg font-bold leading-snug text-ink">{cert.name}</h3>
                  <p className="mt-1 text-sm text-ink/50">{cert.issuer} · 2026</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent">
                  Verify <ExternalLinkIcon />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
