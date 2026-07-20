import { CountdownBanner } from '@/components/dandes/countdown-banner'
import { Header } from '@/components/dandes/header'
import { AimlHeroSection } from '@/components/ai-ml/aiml-hero-section'
import { FeaturesSection } from "@/components/dandes/features-section"
import { AimlCurriculumSection } from '@/components/ai-ml/aiml-curriculum-section'
import { AimlAudienceSection } from '@/components/ai-ml/aiml-audience-section'
import { AimlLearningFormat } from '@/components/ai-ml/aiml-learning-format'
import { AimlJourneySection } from '@/components/ai-ml/aiml-journey-section'
import { AimlStructuredSection } from '@/components/ai-ml/aiml-structured-section'
import { InstructorSection } from "@/components/dandes/instructor-section"
import { TestimonialsSection } from "@/components/dandes/testimonials-section"
import { AimlFaqSection } from '@/components/ai-ml/aiml-faq-section'
import { AimlCTASection } from "@/components/ai-ml/aiml-cta-section"
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'AI & ML Course Online with Projects | Dandes Academy',
  description: 'Join live AI and Machine Learning classes with projects, capstone, LMS recordings, MLOps, Generative AI, and interview preparation.',
  alternates: {
    canonical: "https://www.dandesacademy.com/courses/ai-machine-learning-course",
  },
  keywords: [
  'AI and machine learning course',
  'AI ML course online',
  'machine learning course with projects',
  'generative AI course',
  'MLOps course',
  'artificial intelligence training',
  'machine learning classes online',
  'AI engineer course',
  'AI certification course',
  'deep learning course',
  'Python for AI and machine learning',
  'LLM course',
  'GenAI training',
  'AI career program',
  'AI course with placement support',
  'live AI ML training',
  'online artificial intelligence course',
  'Dandes Academy',
],
};

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
