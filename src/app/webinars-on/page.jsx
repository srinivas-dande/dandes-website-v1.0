import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import { WebinaronHeroSection } from "@/components/webinars-on/hero-section"
import WhatYoullKnowSection from '@/components/webinars-on/what-youll-know-section'
import RightPlaceSection from '@/components/webinars-on/right-place-section'
import InstructorSection from '@/components/webinars-on/instructor-section'
import WhatToExpectSection from '@/components/webinars-on/what-to-expect-section'
import FinalCtaSection from '@/components/webinars-on/final-cta-section'
import FaqSection from '@/components/webinars-on/faq-section'

import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'Webinars On | Dandes Academy',
  description: 'Join live webinars to learn what you need to know for AI/ML career transition. Get clarity on roles, learning roadmap, and portfolio building.',
}

export default function WebinarsOnPage() {
  return (
    <main>
      <CountdownBanner />
      <Header />
      <WebinaronHeroSection />
      <WhatYoullKnowSection />
      <RightPlaceSection />
      <InstructorSection />
      <WhatToExpectSection />
      <FinalCtaSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
