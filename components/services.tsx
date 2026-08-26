import { Cable, Cctv, CircuitBoard, EthernetPort, PackageCheck, Router, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const SERVICES = [
  {
    icon: Cable,
    title: 'Электромонтаж',
    text: 'Монтаж и подключение электрических систем, прокладка кабеля и выполнение электромонтажных работ.',
  },
  {
    icon: Router,
    title: 'Сетевое оборудование',
    text: 'Настройка интернет-оборудования, маршрутизаторов, коммутаторов и локальных сетей.',
  },
  {
    icon: Cctv,
    title: 'Видеонаблюдение',
    text: 'Монтаж камер видеонаблюдения, подключение оборудования и настройка удалённого доступа.',
  },
  {
    icon: ShieldCheck,
    title: 'Системы охраны',
    text: 'Монтаж и настройка оборудования для систем безопасности.',
  },
  {
    icon: EthernetPort,
    title: 'Слаботочные системы',
    text: 'Монтаж кабельных сетей и слаботочного оборудования.',
  },
  {
    icon: CircuitBoard,
    title: 'Электромонтажные работы',
    text: 'Работы с оборудованием соответствующего класса напряжения при наличии необходимых условий и допусков.',
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Услуги"
          title="Направления работ"
          description="Полный спектр электромонтажных и слаботочных работ — от прокладки кабеля до настройки оборудования."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={index * 60} className="h-full">
              <ServiceCard {...service} index={index} />
            </Reveal>
          ))}

          <Reveal delay={360} className="sm:col-span-2 lg:col-span-3">
            <ServiceCard
              icon={PackageCheck}
              title="Монтаж под ключ"
              text="Комплексное выполнение работ — от монтажа до подключения и настройки оборудования."
              index={6}
              featured
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

type ServiceCardProps = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  title: string
  text: string
  index: number
  featured?: boolean
}

function ServiceCard({ icon: Icon, title, text, index, featured }: ServiceCardProps) {
  return (
    <article
      className={cn(
        'group relative flex h-full flex-col justify-between gap-10 bg-card p-7 transition-colors duration-500 hover:bg-elevated md:p-9',
        featured && 'bg-elevated/60',
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px scale-x-0 bg-linear-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100"
      />
      <div className="flex items-start justify-between gap-6">
        <span className="grid size-11 shrink-0 place-items-center rounded-sm border border-border bg-background/60 text-primary transition-colors duration-500 group-hover:border-primary/40">
          <Icon className="size-5" strokeWidth={1.5} />
        </span>
        <span className="font-mono text-[0.625rem] tracking-[0.2em] text-muted-foreground/60 tabular-nums">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div>
        <h3
          className={cn(
            'text-lg font-medium tracking-[-0.01em]',
            featured && 'text-xl md:text-2xl',
          )}
        >
          {title}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground text-pretty">{text}</p>
      </div>
    </article>
  )
}
