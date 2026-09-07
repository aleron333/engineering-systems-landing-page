import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const TRUST = ['Москва и область', 'Гарантия 2 года', 'Монтаж под ключ']

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-28">
      {/* technical grid backdrop */}
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-px w-full max-w-6xl -translate-x-1/2 bg-linear-to-r from-transparent via-primary/25 to-transparent"
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-[0.6875rem] tracking-[0.28em] text-primary uppercase">
                <span aria-hidden="true" className="h-px w-8 bg-primary/60" />
                Москва и Московская область
              </p>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-7 text-4xl leading-[1.06] font-semibold tracking-[-0.03em] text-balance sm:text-5xl lg:text-[3.75rem]">
                Электромонтаж и инженерные системы под ключ
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Один подрядчик на весь комплекс работ — от монтажа до подключения и настройки. Работаем в Москве и области, даём гарантию 2 года на выполненные работы.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-4 text-sm font-semibold tracking-wide text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_-8px] hover:shadow-primary/45 active:scale-[0.985]"
                >
                  Связаться с нами
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-sm border border-border px-7 py-4 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary/40 hover:text-primary"
                >
                  Услуги
                </a>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <ul className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-border pt-8">
                {TRUST.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 font-mono text-[0.6875rem] tracking-[0.14em] text-muted-foreground uppercase"
                  >
                    <span aria-hidden="true" className="size-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={220} className="relative">
            <div className="relative overflow-hidden rounded-lg border border-border bg-card shadow-[0_40px_90px_-40px] shadow-black/80">
              <Image
                src="/images/hero-panel.png"
                alt="Иллюстрация профессионального электрического распределительного щита с аккуратно проложенной кабельной разводкой"
                width={1024}
                height={1024}
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
                className="h-full w-full object-scale-down"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 border-t border-border/60 px-5 py-4 font-mono text-[0.625rem] tracking-[0.2em] text-muted-foreground uppercase">
                <span>Иллюстрация</span>
                <span className="text-primary/80">Инженерное оборудование</span>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-6 -bottom-6 -z-10 h-24 rounded-full bg-primary/10 blur-3xl"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
