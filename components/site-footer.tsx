import { CONTACTS, PHONE_HREF } from '@/lib/contacts'

const LINKS = [
  { label: 'Telegram', href: CONTACTS.telegram },
  { label: 'WhatsApp', href: CONTACTS.whatsapp },
  { label: 'MAX', href: CONTACTS.max },
  { label: 'Позвонить', href: PHONE_HREF },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12 md:py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-sm font-medium tracking-[0.14em] uppercase">Электромонтаж и инженерные системы</p>
          <p className="mt-2 font-mono text-[0.6875rem] tracking-[0.18em] text-muted-foreground uppercase">
            Москва · Монтаж под ключ
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
