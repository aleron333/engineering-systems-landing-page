import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const STEPS = [
  { step: '01', title: 'Связываетесь с нами' },
  { step: '02', title: 'Обсуждаем задачу' },
  { step: '03', title: 'Выполняем монтаж' },
  { step: '04', title: 'Проверяем результат' },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading eyebrow="Процесс" title="Как проходит работа" />

        <ol className="relative mt-14 grid gap-px bg-border md:grid-cols-4">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 hidden h-px bg-linear-to-r from-primary/60 via-primary/20 to-transparent md:block"
          />
          {STEPS.map((item, index) => (
            <Reveal key={item.step} delay={index * 90} as="li" className="h-full">
              <div className="group relative flex h-full flex-col justify-between gap-12 bg-background px-1 py-8 transition-colors duration-500 md:px-6 md:py-10">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-3xl leading-none font-medium tracking-[-0.02em] text-primary/85 tabular-nums md:text-4xl">
                    {item.step}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px flex-1 bg-border transition-colors duration-500 group-hover:bg-primary/30"
                  />
                </div>
                <h3 className="text-base leading-snug font-medium text-balance md:text-lg">{item.title}</h3>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
