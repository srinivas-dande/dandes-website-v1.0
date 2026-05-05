import { CountdownBanner } from '@/components/dandes/countdown-banner'
import { Header } from '@/components/dandes/header'
import { DsaHeroSection } from '@/components/data-structures-algorithms/dsa-hero-section'
import { DsaFeaturesSection } from "@/components/data-structures-algorithms/dsa-features-section"
import { DsaCurriculumSection } from '@/components/data-structures-algorithms/dsa-curriculum-section'
import { DsaAudienceSection } from '@/components/data-structures-algorithms/dsa-audience-section'
import { DsaLearningFormat } from '@/components/data-structures-algorithms/dsa-learning-format'
import { DsaWebinarSection } from "@/components/data-structures-algorithms/dsa-webinar-section"
import { DsaJourneySection } from '@/components/data-structures-algorithms/dsa-journey-section'
import { DsaStructuredSection } from '@/components/data-structures-algorithms/dsa-structured-section'
import { DsaInstructorSection } from "@/components/data-structures-algorithms/dsa-instructor-section"
import { DsaTestimonialsSection } from "@/components/data-structures-algorithms/dsa-testimonials-section"
import { DsaFaqSection } from '@/components/data-structures-algorithms/dsa-faq-section'
import { DsaCTASection } from "@/components/data-structures-algorithms/dsa-cta-section"
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'AI and ML Training Program | Dandes Academy',
  description: 'Learn the complete AI and ML path with live instructor-led classes, structured practice, and interview preparation.',
}

export default function SDPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f7f8fa' }}>
      <CountdownBanner />
      <Header />
      <DsaHeroSection />
      <DsaFeaturesSection />
      <DsaCurriculumSection />
      <DsaAudienceSection />
      <DsaLearningFormat />
      <DsaWebinarSection />
      <DsaJourneySection />
      <DsaStructuredSection />
      <DsaInstructorSection />
      <DsaTestimonialsSection />
      <DsaFaqSection />
      <DsaCTASection />
      <Footer />
    </main>
  )
}
