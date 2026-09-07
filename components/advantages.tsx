import { Layers, MapPin, PackageCheck, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const ADVANTAGES = [
  {
    icon: ShieldCheck,
    title: 'Гарантия 2 года на работы',
    text: 'Даём гарантию 2 года на выполненные работы — на наш монтаж, подключение и настройку.',
    highlight: true,
  },
  {
    icon: MapPin,
    title: 'Москва и область',
    text: 'Выезжаем на объекты в Москве и Московской области.',
  },
  {
    icon: Layers,
    title: 'Комплексный подход',
    text: 'Электромонтаж, слаботочные системы, сети, видеонаблюдение и системы безопасности у одного подрядчика.',
  },
  {
    icon: PackageCheck,
    title: 'Монтаж под ключ',
    text: 'Полный цикл работ — от монтажа до подключения и настройки оборудования.',
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
              <article
                className={cn(
                  'group relative flex h-full flex-col gap-6 overflow-hidden rounded-lg border border-border bg-card/70 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_60px_-30px] hover:shadow-black md:p-9',
                  item.highlight && 'border-primary/40 bg-primary/[0.06]',
                )}
              >
                <div
                  aria-hidden="true"
                  className={cn(
                    'pointer-events-none absolute -top-24 -right-16 size-48 rounded-full bg-primary/6 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100',
                    item.highlight && 'opacity-100',
                  )}
                />
                <span
                  className={cn(
                    'grid size-11 place-items-center rounded-sm border border-border bg-background/60 text-primary transition-colors duration-500 group-hover:border-primary/40',
                    item.highlight && 'border-primary/40',
                  )}
                >
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
