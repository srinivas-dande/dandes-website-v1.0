import { CountdownBanner } from '@/components/dandes/countdown-banner'
import { Header } from '@/components/dandes/header'
import { DsaHeroSection } from '@/components/data-structures-algorithms/dsa-hero-section'
import { DsaFeaturesSection } from "@/components/data-structures-algorithms/dsa-features-section"
import { DsaCurriculumSection } from '@/components/data-structures-algorithms/dsa-curriculum-section'
import { DsaAudienceSection } from '@/components/data-structures-algorithms/dsa-audience-section'
import { DsaLearningFormat } from '@/components/data-structures-algorithms/dsa-learning-format'
import { DsaJourneySection } from '@/components/data-structures-algorithms/dsa-journey-section'
import { DsaStructuredSection } from '@/components/data-structures-algorithms/dsa-structured-section'
import { DsaInstructorSection } from "@/components/data-structures-algorithms/dsa-instructor-section"
import { DsaTestimonialsSection } from "@/components/data-structures-algorithms/dsa-testimonials-section"
import { DsaFaqSection } from '@/components/data-structures-algorithms/dsa-faq-section'
import { DsaCTASection } from "@/components/data-structures-algorithms/dsa-cta-section"
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'DSA Course: Data Structures & Algorithms | Dandes Academy',
  description: 'Build DSA problem-solving skills with arrays, strings, hashing, stacks, queues, trees, graphs, recursion, DP, and guided coding interview practice.',
  alternates: {
    canonical: "https://www.dandesacademy.com/courses/dsa-course",
  },
  keywords: [
  'DSA course',
  'data structures and algorithms course',
  'DSA course online',
  'coding interview preparation course',
  'data structures training',
  'algorithms course',
  'DSA for software engineers',
  'coding interview practice',
  'live DSA classes',
  'DSA with Java',
  'DSA with Python',
  'problem solving course',
  'competitive programming course',
  'technical interview preparation',
  'software engineer interview preparation',
  'coding skills development',
  'online DSA training',
  'Dandes Academy',
],
};

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
