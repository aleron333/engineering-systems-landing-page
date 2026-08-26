import { Advantages } from '@/components/advantages'
import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { MobileContactBar } from '@/components/mobile-contact-bar'
import { Moscow } from '@/components/moscow'
import { Process } from '@/components/process'
import { Services } from '@/components/services'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 md:pb-0">
        <Hero />
        <Services />
        <Advantages />
        <Process />
        <Moscow />
        <Contact />
      </main>
      <SiteFooter />
      <MobileContactBar />
    </>
  )
}
