import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import FaqHeroSection from '@/components/faqs/faq-hero-section'
import FaqContentSection from '@/components/faqs/faq-content-section'
import FaqFinalCtaSection from '@/components/faqs/faq-final-cta-section'

import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'FAQs | Dandes Academy Courses, Batches & Support',
  description: 'Get answers about Dandes Academy courses, live classes, LMS recordings, projects, fees, batches, placement assistance, refunds, and learner support.',
  alternates: {
    canonical: "https://www.dandesacademy.com/faqs",
  },
  keywords: [
  'Dandes Academy FAQs',
  'online course FAQs',
  'AI ML course fees',
  'system design course fees',
  'DSA course fees',
  'live class schedule',
  'LMS recordings',
  'placement assistance',
  'course refund policy',
  'AI ML course duration',
  'system design course duration',
  'DSA course duration',
  'online learning platform',
  'course certification',
  'career support',
  'technical mentorship',
  'Dandes Academy',
],
};

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
