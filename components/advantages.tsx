import { Layers, MapPin, PackageCheck, Wrench } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const ADVANTAGES = [
  {
    icon: Wrench,
    title: 'Свой инструмент',
    text: 'Используем собственный профессиональный инструмент и необходимое оборудование.',
  },
  {
    icon: MapPin,
    title: 'Работаем по всей Москве',
    text: 'Выезжаем на объекты по всей Москве.',
  },
  {
    icon: Layers,
    title: 'Комплексный подход',
    text: 'Электромонтаж, слаботочные системы, сети, видеонаблюдение и системы безопасности.',
  },
  {
    icon: PackageCheck,
    title: 'Монтаж под ключ',
    text: 'Выполняем полный комплекс работ — от монтажа до подключения и настройки оборудования.',
  },
]

export function Advantages() {
  return (
    <section id="advantages" className="scroll-mt-24 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading eyebrow="Подход" title="Почему обращаются к нам" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {ADVANTAGES.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} className="h-full">
              <article className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-lg border border-border bg-card/70 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_60px_-30px] hover:shadow-black md:p-9">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-24 -right-16 size-48 rounded-full bg-primary/6 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                />
                <span className="grid size-11 place-items-center rounded-sm border border-border bg-background/60 text-primary transition-colors duration-500 group-hover:border-primary/40">
                  <item.icon className="size-5" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="text-lg font-medium tracking-[-0.01em]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
