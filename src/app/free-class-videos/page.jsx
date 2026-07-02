import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import TeachingPreviewSection from '@/components/free-class-videos/teaching-preview-section'
import WebinarsInstructorSection from '@/components/free-class-videos/webinars-instructor-section'
import FreeVideosSection from '@/components/free-class-videos/free-videos-section'
import StartingPointSection from '@/components/free-class-videos/starting-point-section'
import RoadmapCtaSection from '@/components/free-class-videos/roadmap-cta-section'
import FaqSection from '@/components/free-class-videos/faq-section'
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
      <Footer />
    </main>
  )
}
