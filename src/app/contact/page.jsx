import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import ContactHero from '@/components/contact/contact-hero'
import ContactFormSection from '@/components/contact/contact-form-section'
import NotReadyCommit from '@/components/contact/not-ready-commit'
import FaqSection from '@/components/contact/faq-section'
import { Footer } from "@/components/dandes/footer"


export const metadata = {
  title: 'Contact Us | Dandes Academy',
  description: 'Got questions about our AI and Data Science courses? Reach out to Dandes Academy. Real people, fast responses, no bots.',
}

export default function ContactPage() {
  return (
    <main>
      <CountdownBanner />
      <Header />
      <ContactHero />
      <ContactFormSection />
      <NotReadyCommit />
      <FaqSection />
      <Footer />
    </main>
  )
}
