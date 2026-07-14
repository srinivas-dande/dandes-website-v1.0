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

export const metadata = {
  title: "Courses | AI/ML, System Design & DSA | Dandes Academy",
  description:
    "Explore live online courses in AI/ML, System Design, and Data Structures & Algorithms. Get syllabus, fees, batch details, and guidance before enrolling.",
  keywords: [
  'online technology courses',
  'live online courses for software engineers',
  'AI ML courses online',
  'system design training',
  'DSA courses online',
  'coding interview courses',
  'software career courses',
  'online software engineering courses',
  'AI and machine learning training',
  'live AI ML classes',
  'system design course online',
  'data structures and algorithms course',
  'technical interview preparation',
  'software engineer upskilling',
  'career growth for software engineers',
  'live coding classes',
  'online programming courses',
  'Dandes Academy',
],
};

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
