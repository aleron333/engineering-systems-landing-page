import { ArrowUpRight, MessageCircle, MessagesSquare, Phone, Send } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { CONTACTS, PHONE_HREF } from '@/lib/contacts'

const CHANNELS = [
  { icon: Send, label: 'Telegram', hint: 'Написать в Telegram', href: CONTACTS.telegram },
  { icon: MessageCircle, label: 'WhatsApp', hint: 'Написать в WhatsApp', href: CONTACTS.whatsapp },
  { icon: MessagesSquare, label: 'MAX', hint: 'Написать в MAX', href: CONTACTS.max },
  { icon: Phone, label: 'Позвонить', hint: 'Звонок по телефону', href: PHONE_HREF },
]

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-border py-20 md:py-28">
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_70%_at_50%_100%,black,transparent)]"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="font-mono text-[0.6875rem] tracking-[0.28em] text-primary uppercase">Связаться</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-3xl leading-[1.1] font-semibold tracking-[-0.025em] text-balance sm:text-4xl lg:text-[2.75rem]">
              Нужен электромонтаж или монтаж оборудования?
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">
              Свяжитесь с нами удобным способом и расскажите о задаче.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {CHANNELS.map((channel, index) => (
            <Reveal key={channel.label} delay={index * 70} className="h-full">
              <a
                href={channel.href}
                className="group flex h-full items-center justify-between gap-6 rounded-lg border border-border bg-card/70 px-6 py-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-elevated active:scale-[0.99] md:px-8 md:py-8"
              >
                <span className="flex items-center gap-5">
                  <span className="grid size-12 place-items-center rounded-sm border border-border bg-background/60 text-primary transition-colors duration-300 group-hover:border-primary/40">
                    <channel.icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-lg font-medium tracking-[-0.01em]">{channel.label}</span>
                    <span className="mt-1 font-mono text-[0.625rem] tracking-[0.16em] text-muted-foreground uppercase">
                      {channel.hint}
                    </span>
                  </span>
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  strokeWidth={1.5}
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
