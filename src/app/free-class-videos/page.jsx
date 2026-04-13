import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import HeroSection from '@/components/free-class-videos/hero-section'
import VideoContentSection from '@/components/free-class-videos/video-content-section'
import FinalCtaSection from '@/components/free-class-videos/final-cta-section'
import FaqSection from '@/components/free-class-videos/faq-section'
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'Free Class Videos | Dandes Academy',
  description: 'Watch free full-length video sessions on Python, Pandas, System Design, and DSA. Build strong fundamentals with Dandes Academy.',
}

export default function FreeClassVideosPage() {
  return (
    <main>
      <CountdownBanner />
      <Header />
      <HeroSection />
      <VideoContentSection />
      <FinalCtaSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
