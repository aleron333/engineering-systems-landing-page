import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const _inter = Inter({ subsets: ['latin', 'cyrillic'] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Электромонтаж и инженерные системы в Москве',
  description:
    'Электромонтаж, слаботочные системы, видеонаблюдение, системы охраны и настройка сетевого оборудования. Монтаж под ключ по всей Москве.',
  keywords: [
    'электромонтаж Москва',
    'слаботочные системы',
    'видеонаблюдение',
    'системы охраны',
    'настройка сетевого оборудования',
    'монтаж под ключ',
  ],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    title: 'Электромонтаж и инженерные системы в Москве',
    description:
      'Электромонтаж, слаботочные системы, видеонаблюдение, системы охраны и настройка сетевого оборудования.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#111315',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-background">
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
