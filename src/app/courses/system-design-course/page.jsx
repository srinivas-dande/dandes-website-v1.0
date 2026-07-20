import { CountdownBanner } from '@/components/dandes/countdown-banner'
import { Header } from '@/components/dandes/header'
import { SdHeroSection } from '@/components/system-design-course/sd-hero-section'
import { SdFeaturesSection } from "@/components/system-design-course/sd-features-section"
import { SdCurriculumSection } from '@/components/system-design-course/sd-curriculum-section'
import { SdAudienceSection } from '@/components/system-design-course/sd-audience-section'
import { SdLearningFormat } from '@/components/system-design-course/sd-learning-format'
import { SdJourneySection } from '@/components/system-design-course/sd-journey-section'
import { SdStructuredSection } from '@/components/system-design-course/sd-structured-section'
import { SdInstructorSection } from "@/components/system-design-course/sd-instructor-section"
import { TestimonialsSection } from "@/components/dandes/testimonials-section"
import { SdFaqSection } from '@/components/system-design-course/sd-faq-section'
import { SdCTASection } from "@/components/system-design-course/sd-cta-section"
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'System Design Course (HLD/LLD) | Dandes Academy',
  description: 'Learn HLD, LLD, CAP/PACELC, caching, databases, messaging, APIs, scalability, and real-world design cases with live online training.',
  alternates: {
    canonical: "https://www.dandesacademy.com/courses/system-design-course",
  },
  keywords: [
  'system design course',
  'system design course online',
  'HLD and LLD course',
  'system design interview preparation',
  'high level design course',
  'low level design course',
  'software architecture course',
  'scalable system design training',
  'system design for software engineers',
  'distributed systems course',
  'microservices architecture course',
  'backend system design',
  'software design interview course',
  'advanced system design',
  'live system design classes',
  'system design certification',
  'software engineering design course',
  'Dandes Academy',
],
};

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
