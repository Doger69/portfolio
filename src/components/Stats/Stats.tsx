import { STATS } from '../../constants'
import Reveal from '../UI/Reveal'

/** Dark metric strip below the hero: quantified, verifiable highlights. */
export default function Stats() {
  return (
    <section className="bg-ink py-14 text-cream md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={(i % 4) * 0.06}>
              <div className="text-center">
                <p className="font-display text-3xl font-extrabold text-accent sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mx-auto mt-2 max-w-[18ch] text-xs font-medium leading-relaxed text-cream/60 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
