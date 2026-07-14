import { VALUES } from '../../constants'
import Reveal from '../UI/Reveal'
import SectionHeading from '../UI/SectionHeading'

/** Engineering philosophy — the principles behind how the work gets built. */
export default function Values() {
  return (
    <section id="values" className="scroll-mt-20 bg-ink py-20 text-cream md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12">
          <SectionHeading eyebrow="How I work" solid="What I" outline="Value" onDark />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={(i % 2) * 0.08}>
              <article className="h-full rounded-3xl border border-cream/10 bg-cream/[0.03] p-7 transition-colors hover:border-cream/25">
                <h3 className="font-display text-xl font-bold text-accent">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">{value.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
