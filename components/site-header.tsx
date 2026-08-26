'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const NAV = [
  { href: '#services', label: 'Услуги' },
  { href: '#advantages', label: 'О работе' },
  { href: '#process', label: 'Процесс' },
  { href: '#moscow', label: 'Москва' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'glass border-b border-border' : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 md:h-20 md:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span
            aria-hidden="true"
            className="relative grid size-8 place-items-center rounded-sm border border-border bg-elevated"
          >
            <span className="h-3 w-px bg-primary" />
            <span className="absolute h-px w-3 bg-primary/50" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[0.8125rem] font-medium tracking-[0.18em] uppercase">Электромонтаж</span>
            <span className="mt-1 font-mono text-[0.625rem] tracking-[0.24em] text-muted-foreground uppercase">
              инженерные системы
            </span>
          </span>
        </a>

        <nav aria-label="Основная навигация" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden shrink-0 items-center gap-2 rounded-sm border border-primary/35 bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary transition-all duration-300 hover:border-primary/60 hover:bg-primary/15 md:inline-flex"
        >
          Заказать услугу
        </a>
      </div>
    </header>
  )
}
