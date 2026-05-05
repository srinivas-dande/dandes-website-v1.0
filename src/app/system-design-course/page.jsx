import { CountdownBanner } from '@/components/dandes/countdown-banner'
import { Header } from '@/components/dandes/header'
import { SdHeroSection } from '@/components/system-design-course/sd-hero-section'
import { SdFeaturesSection } from "@/components/system-design-course/sd-features-section"
import { SdCurriculumSection } from '@/components/system-design-course/sd-curriculum-section'
import { SdAudienceSection } from '@/components/system-design-course/sd-audience-section'
import { SdLearningFormat } from '@/components/system-design-course/sd-learning-format'
import { SdWebinarSection } from "@/components/system-design-course/sd-webinar-section"
import { SdJourneySection } from '@/components/system-design-course/sd-journey-section'
import { SdStructuredSection } from '@/components/system-design-course/sd-structured-section'
import { SdInstructorSection } from "@/components/system-design-course/sd-instructor-section"
import { TestimonialsSection } from "@/components/dandes/testimonials-section"
import { SdFaqSection } from '@/components/system-design-course/sd-faq-section'
import { SdCTASection } from "@/components/system-design-course/sd-cta-section"
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
      <SdHeroSection />
      <SdFeaturesSection />
      <SdCurriculumSection />
      <SdAudienceSection />
      <SdLearningFormat />
      <SdWebinarSection />
      <SdJourneySection />
      <SdStructuredSection />
      <SdInstructorSection />
      <TestimonialsSection />
      <SdFaqSection />
      <SdCTASection />
      <Footer />
    </main>
  )
}
