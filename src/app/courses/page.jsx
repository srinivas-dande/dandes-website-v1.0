import { CountdownBanner } from '@/components/dandes/countdown-banner'
import { Header } from '@/components/dandes/header'
import { CourseHeroSection } from '@/components/courses/course-hero-section'
import { FeaturesSection } from "@/components/dandes/features-section"
import { CourseTabsSection } from '@/components/courses/course-tabs-section'
import { WebinarSection } from "@/components/dandes/webinar-section"
import { CourseAudienceSection } from '@/components/courses/course-audience-section'
import { CourseComparisonSection } from '@/components/courses/course-comparison-section'
import { InstructorSection } from "@/components/dandes/instructor-section"
import { CourseFaqSection } from '@/components/courses/course-faq-section'
import { CourseCtaSection } from '@/components/courses/course-cta-section'
import { Footer } from "@/components/dandes/footer"

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-background">
      <CountdownBanner />
      <Header />
      <CourseHeroSection />
      <FeaturesSection />
      <CourseTabsSection />
      <WebinarSection />
      <CourseAudienceSection />
      <CourseComparisonSection />
      <InstructorSection />
      <CourseFaqSection />
      <CourseCtaSection />
      <Footer />
    </main>
  )
}
