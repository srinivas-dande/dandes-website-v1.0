import { CountdownBanner } from '@/components/dandes/countdown-banner'
import { Header } from '@/components/dandes/header'
import { AimlHeroSection } from '@/components/ai-ml/aiml-hero-section'
import { FeaturesSection } from "@/components/dandes/features-section"
import { AimlCurriculumSection } from '@/components/ai-ml/aiml-curriculum-section'
import { AimlAudienceSection } from '@/components/ai-ml/aiml-audience-section'
import { AimlLearningFormat } from '@/components/ai-ml/aiml-learning-format'
import { WebinarSection } from "@/components/dandes/webinar-section"
import { AimlJourneySection } from '@/components/ai-ml/aiml-journey-section'
import { AimlStructuredSection } from '@/components/ai-ml/aiml-structured-section'
import { InstructorSection } from "@/components/dandes/instructor-section"
import { TestimonialsSection } from "@/components/dandes/testimonials-section"
import { AimlFaqSection } from '@/components/ai-ml/aiml-faq-section'
import { AimlCTASection } from "@/components/ai-ml/aiml-cta-section"
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'AI and ML Training Program | Dandes Academy',
  description: 'Learn the complete AI and ML path with live instructor-led classes, structured practice, and interview preparation.',
}

export default function AiMlPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f7f8fa' }}>
      <CountdownBanner />
      <Header />
      <AimlHeroSection />
      <FeaturesSection />
      <AimlCurriculumSection />
      <AimlAudienceSection />
      <AimlLearningFormat />
      <WebinarSection />
      <AimlJourneySection />
      <AimlStructuredSection />
      <InstructorSection />
      <TestimonialsSection />
      <AimlFaqSection />
      <AimlCTASection />
      <Footer />
    </main>
  )
}
