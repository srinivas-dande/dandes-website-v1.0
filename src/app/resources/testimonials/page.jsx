import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import HeroSection from '@/components/testimonials/hero-section'
import SkillsTestimonialsSection from '@/components/testimonials/skills-testimonials-section'
import VideoTestimonialsSection from '@/components/testimonials/video-testimonials-section'
import ExpectedOutcomesSection from '@/components/testimonials/expected-outcomes-section'
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'Student Reviews & Success Stories | Dandes Academy',
  description: 'Read student reviews and success stories from Dandes Academy learners who improved tech skills, prepared for interviews, and grew their careers.',
  alternates: {
    canonical: "https://www.dandesacademy.com/resources/testimonials",
  },
  keywords: [
  'Dandes Academy reviews',
  'Dandes Academy testimonials',
  'student reviews',
  'online course success stories',
  'AI ML course reviews',
  'system design course reviews',
  'DSA course reviews',
  'learner success stories',
  'student testimonials',
  'AI course success stories',
  'software engineering course reviews',
  'placement success stories',
  'career transformation stories',
  'online learning reviews',
  'tech course testimonials',
  'coding course reviews',
  'Dandes Academy student feedback',
  'Dandes Academy',
],
};

export default function TestimonialsPage() {
  return (
    <main>
      <CountdownBanner />
      <Header />
      <HeroSection />
      <SkillsTestimonialsSection />
      <VideoTestimonialsSection />
      
      <ExpectedOutcomesSection />
      
      <Footer />
    </main>
  )
}
