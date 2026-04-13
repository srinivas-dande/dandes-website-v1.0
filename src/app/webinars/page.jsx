import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import TeachingPreviewSection from '@/components/webinars/teaching-preview-section'

import WebinarsInstructorSection from '@/components/webinars/webinars-instructor-section'
import FreeVideosSection from '@/components/webinars/free-videos-section'
import StartingPointSection from '@/components/webinars/starting-point-section'
import RoadmapCtaSection from '@/components/webinars/roadmap-cta-section'
import FaqSection from '@/components/webinars/faq-section'
import FinalCtaSection from '@/components/webinars/final-cta-section'
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'Webinars | Dandes Academy',
  description: 'Watch free webinars taught by Srinivas Dande. Learn AI, ML, and engineering concepts with 20+ years of teaching experience.',
}

export default function WebinarsPage() {
  return (
    <main>
      <CountdownBanner />
      <Header />
      <TeachingPreviewSection />
      <WebinarsInstructorSection />
      <FreeVideosSection />
      <StartingPointSection />
      <RoadmapCtaSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
