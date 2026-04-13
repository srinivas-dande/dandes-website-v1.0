import HeroSection from '@/components/webinars-ai-ml/hero-section'
import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import WhatYouGetSection from '@/components/webinars-ai-ml/what-you-get-section'
import TwoAudiencesSection from '@/components/webinars-ai-ml/two-audiences-section'
import ChooseWebinarSection from '@/components/webinars-ai-ml/choose-webinar-section'
import InstructorSection from '@/components/webinars-ai-ml/instructor-section'
import FaqSection from '@/components/webinars-ai-ml/faq-section'
import FinalCtaSection from '@/components/webinars-ai-ml/final-cta-section'
import { Footer } from "@/components/dandes/footer"


export const metadata = {
  title: 'Webinars on AI ML | Dandes Academy',
  description: 'Join live webinars on AI and ML. Learn what AI engineering roles expect, which skills matter, and get a realistic learning plan for your background.',
}

export default function WebinarsAiMlPage() {
  return (
    <main>
      <CountdownBanner />
      <Header />
      <HeroSection />
      <WhatYouGetSection />
      <TwoAudiencesSection />
      <ChooseWebinarSection />
      <InstructorSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
