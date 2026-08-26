import { MessageCircle, Phone, Send } from 'lucide-react'
import { CONTACTS, PHONE_HREF } from '@/lib/contacts'

const ITEMS = [
  { icon: Send, label: 'Telegram', href: CONTACTS.telegram },
  { icon: MessageCircle, label: 'WhatsApp', href: CONTACTS.whatsapp },
  { icon: Phone, label: 'Позвонить', href: PHONE_HREF },
]

export function MobileContactBar() {
  return (
    <nav
      aria-label="Быстрая связь"
      className="glass fixed inset-x-0 bottom-0 z-50 border-t border-border pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <ul className="grid grid-cols-3">
        {ITEMS.map((item, index) => (
          <li key={item.label} className={index > 0 ? 'border-l border-border' : undefined}>
            <a
              href={item.href}
              className="flex flex-col items-center justify-center gap-1.5 py-3 text-[0.6875rem] font-medium text-foreground transition-colors duration-200 active:text-primary"
            >
              <item.icon className="size-5 text-primary" strokeWidth={1.5} aria-hidden="true" />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
