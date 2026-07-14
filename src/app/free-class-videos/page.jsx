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
  title: 'Free Class Videos | Python, DSA, System Design | Dandes',
  description: 'Watch free class videos from Dandes Academy on Python, Pandas, System Design, CAP, PACELC, consistency models, AVL trees, and Red-Black trees.',
  keywords: [
  'free coding class videos',
  'free Python classes',
  'free Pandas tutorials',
  'free system design videos',
  'free DSA videos',
  'CAP theorem tutorial',
  'PACELC theorem tutorial',
  'AVL tree tutorial',
  'Red-Black tree tutorial',
  'free machine learning tutorials',
  'free AI tutorials',
  'Python programming tutorials',
  'data structures tutorials',
  'algorithms tutorials',
  'coding interview preparation videos',
  'software engineering tutorials',
  'Dandes Academy free classes',
  'Dandes Academy',
],
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
