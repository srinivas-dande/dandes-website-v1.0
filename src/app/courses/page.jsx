
import Schema from "@/components/seo/Schema";
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
  alternates: {
    canonical: "https://www.dandesacademy.com/courses",
  },
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
  const coursesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.dandesacademy.com/courses/#webpage",
      "url": "https://www.dandesacademy.com/courses/",
      "name": "Courses",
      "description": "Courses",
      "isPartOf": {
        "@id": "https://www.dandesacademy.com/#website"
      },
      "about": {
        "@id": "https://www.dandesacademy.com/#organization"
      },
      "primaryImageOfPage": {
        "@id": "https://www.dandesacademy.com/#logo"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dandesacademy.com/courses/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.dandesacademy.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Courses",
          "item": "https://www.dandesacademy.com/courses/"
        }
      ]
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.dandesacademy.com/courses/#collection",
      "url": "https://www.dandesacademy.com/courses/",
      "name": "Courses",
      "isPartOf": {
        "@id": "https://www.dandesacademy.com/#website"
      },
      "about": {
        "@id": "https://www.dandesacademy.com/#organization"
      },
      "hasPart": [
        {
          "@id": "https://www.dandesacademy.com/courses/ai-machine-learning/#course"
        },
        {
          "@id": "https://www.dandesacademy.com/courses/system-design/#course"
        },
        {
          "@id": "https://www.dandesacademy.com/courses/data-structures-algorithms/#course"
        }
      ]
    }
  ]
};
  return (
    <main className="min-h-screen bg-background">
      <Schema data={coursesSchema} />
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
