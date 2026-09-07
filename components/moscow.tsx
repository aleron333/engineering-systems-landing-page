import { MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const COVERAGE = ['В черте города', 'За МКАД', 'Московская область']

export function Moscow() {
  return (
    <section id="moscow" className="scroll-mt-24 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="География"
              title="Москва и Московская область"
              description="Выезжаем на объекты в Москве и Московской области — от центра города до районов за МКАД."
            />

            <Reveal delay={220}>
              <ul className="mt-10 flex flex-wrap gap-2">
                {COVERAGE.map((area) => (
                  <li
                    key={area}
                    className="rounded-sm border border-border bg-card/60 px-3 py-1.5 font-mono text-[0.6875rem] tracking-[0.14em] text-muted-foreground uppercase"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-lg border border-border bg-card/50 p-10 text-center md:p-14">
              <div
                aria-hidden="true"
                className="grid-lines pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(65%_65%_at_50%_50%,black,transparent)]"
              />
              <span className="relative grid size-14 place-items-center rounded-sm border border-primary/40 bg-background/60 text-primary">
                <MapPin className="size-6" strokeWidth={1.5} />
              </span>
              <p className="relative text-xl font-medium tracking-[-0.01em] text-balance md:text-2xl">
                Работаем по всему региону
              </p>
              <p className="relative max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">
                Москва и Московская область — выезд на объект для оценки и монтажа.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
