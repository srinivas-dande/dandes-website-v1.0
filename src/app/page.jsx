import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import { HeroSection } from "@/components/dandes/hero-section"
import { FeaturesSection } from "@/components/dandes/features-section"
import { CoursesSection } from "@/components/dandes/courses-section"
import { LiveClassesSection } from "@/components/dandes/live-classes-section"
import { AudienceSection } from "@/components/dandes/audience-section"
import { CareerSupportSection } from "@/components/dandes/career-support-section"
import { WebinarSection } from "@/components/dandes/webinar-section"
import { ComparisonSection } from "@/components/dandes/comparison-section"
import { InstructorSection } from "@/components/dandes/instructor-section"
import { TestimonialsSection } from "@/components/dandes/testimonials-section"
import { FAQSection } from "@/components/dandes/faq-section"
import { CTASection } from "@/components/dandes/cta-section"
import { Footer } from "@/components/dandes/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <CountdownBanner />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CoursesSection />
      <LiveClassesSection />
      <AudienceSection />
      <CareerSupportSection />
      <WebinarSection />
      <ComparisonSection />
      <InstructorSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
