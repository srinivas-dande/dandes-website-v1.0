import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import ContactHero from '@/components/contact/contact-hero'
import ContactFormSection from '@/components/contact/contact-form-section'
import NotReadyCommit from '@/components/contact/not-ready-commit'
import FaqSection from '@/components/contact/faq-section'
import { Footer } from "@/components/dandes/footer"


export const metadata = {
  title: 'Contact Dandes Academy | Admissions & Support',
  description: 'Contact Dandes Academy for AI/ML, System Design, and DSA course guidance, admissions details, batch schedules, fees, and learner support.',
  alternates: {
    canonical: "https://www.dandesacademy.com/contact-us",
  },
  keywords: [
  'contact Dandes Academy',
  'Dandes Academy admissions',
  'course counselling',
  'AI ML course enquiry',
  'system design course enquiry',
  'DSA course enquiry',
  'online course support',
  'course fees and batches',
  'AI ML admissions',
  'system design admissions',
  'DSA course admissions',
  'tech course counselling',
  'online learning support',
  'technology course fees',
  'live course batches',
  'career guidance for software engineers',
  'Dandes Academy contact',
  'Dandes Academy',
],
};

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
