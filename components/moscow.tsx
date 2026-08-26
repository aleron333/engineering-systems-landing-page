import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const DISTRICTS = ['ЦАО', 'САО', 'СВАО', 'ВАО', 'ЮВАО', 'ЮАО', 'ЮЗАО', 'ЗАО', 'СЗАО', 'ЗелАО', 'НАО', 'ТАО']

export function Moscow() {
  return (
    <section id="moscow" className="scroll-mt-24 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="География"
              title="Работаем по всей Москве"
              description="Выезжаем на объекты в пределах города — от центра до районов за МКАД. Схема ниже показывает радиально-кольцевую структуру города и носит условный характер."
            />

            <Reveal delay={220}>
              <ul className="mt-10 flex flex-wrap gap-2">
                {DISTRICTS.map((district) => (
                  <li
                    key={district}
                    className="rounded-sm border border-border bg-card/60 px-3 py-1.5 font-mono text-[0.6875rem] tracking-[0.14em] text-muted-foreground uppercase transition-colors duration-300 hover:border-primary/30 hover:text-foreground"
                  >
                    {district}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <RingDiagram />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function RingDiagram() {
  const radials = Array.from({ length: 12 }, (_, index) => (index * 360) / 12)

  return (
    <figure className="relative overflow-hidden rounded-lg border border-border bg-card/50 p-6 md:p-10">
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(65%_65%_at_50%_50%,black,transparent)]"
      />
      <svg
        viewBox="0 0 400 400"
        role="img"
        aria-label="Условная схема радиально-кольцевой структуры Москвы: центр, радиальные направления и кольцевые магистрали"
        className="relative mx-auto block w-full max-w-[26rem]"
      >
        <g stroke="currentColor" className="text-foreground/12" strokeWidth="1">
          {radials.map((angle) => {
            const rad = (angle * Math.PI) / 180
            return (
              <line
                key={angle}
                x1={200 + Math.cos(rad) * 26}
                y1={200 + Math.sin(rad) * 26}
                x2={200 + Math.cos(rad) * 178}
                y2={200 + Math.sin(rad) * 178}
              />
            )
          })}
        </g>

        <g fill="none">
          <circle cx="200" cy="200" r="178" stroke="currentColor" strokeWidth="1" className="text-primary/30" />
          <circle
            cx="200"
            cy="200"
            r="126"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 6"
            className="text-foreground/22"
          />
          <circle cx="200" cy="200" r="78" stroke="currentColor" strokeWidth="1" className="text-foreground/22" />
          <circle cx="200" cy="200" r="34" stroke="currentColor" strokeWidth="1" className="text-primary/45" />
        </g>

        <g className="text-primary" fill="currentColor">
          <circle cx="200" cy="200" r="4.5" />
          <circle cx="200" cy="200" r="12" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </g>

        {/* нодовые точки на кольцах */}
        <g className="text-primary/70" fill="currentColor">
          {[30, 105, 165, 250, 320].map((angle, index) => {
            const rad = (angle * Math.PI) / 180
            const r = index % 2 === 0 ? 178 : 126
            return <circle key={angle} cx={200 + Math.cos(rad) * r} cy={200 + Math.sin(rad) * r} r="2.5" />
          })}
        </g>
      </svg>

      <figcaption className="relative mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5 font-mono text-[0.625rem] tracking-[0.2em] text-muted-foreground uppercase">
        <span>Условная схема</span>
        <span className="text-primary/80">Москва</span>
      </figcaption>
    </figure>
  )
}
