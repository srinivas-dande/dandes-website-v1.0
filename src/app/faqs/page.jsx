import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import FaqHeroSection from '@/components/faqs/faq-hero-section'
import FaqContentSection from '@/components/faqs/faq-content-section'
import FaqFinalCtaSection from '@/components/faqs/faq-final-cta-section'

import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'FAQs | Dandes Academy',
  description: 'Frequently asked questions about Dandes Academy courses, learning format, fees, payment options, and career support.',
}

export default function FaqsPage() {
  return (
    <main>
      <CountdownBanner />
      <Header />
      <FaqHeroSection />
      <FaqContentSection />
      <FaqFinalCtaSection />
      <Footer />
    </main>
  )
}
