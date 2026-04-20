import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import HeroSection from '@/components/testimonials/hero-section'
import SkillsTestimonialsSection from '@/components/testimonials/skills-testimonials-section'
import VideoTestimonialsSection from '@/components/testimonials/video-testimonials-section'
import WrittenReviewsSection from '@/components/testimonials/written-reviews-section'
import ExpectedOutcomesSection from '@/components/testimonials/expected-outcomes-section'
import ShareExperienceSection from '@/components/testimonials/share-experience-section'
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'Testimonials | Dandes Academy',
  description: 'Real outcomes from Dandes Academy learners. Reviews, role transitions, and salary growth from students who built AI/ML skills with hands-on projects.',
}

export default function TestimonialsPage() {
  return (
    <main>
      <CountdownBanner />
      <Header />
      <HeroSection />
      <SkillsTestimonialsSection />
      <VideoTestimonialsSection />
      <WrittenReviewsSection />
      <ExpectedOutcomesSection />
      <ShareExperienceSection />
      <Footer />
    </main>
  )
}
