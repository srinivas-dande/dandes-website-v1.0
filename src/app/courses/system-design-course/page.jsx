
import Schema from "@/components/seo/Schema";
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
  const systemDesignSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.dandesacademy.com/courses/system-design-course/#webpage",
      "url": "https://www.dandesacademy.com/courses/system-design-course/",
      "name": "System Design Course",
      "description": "System Design Course",
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
      "@id": "https://www.dandesacademy.com/courses/system-design-course/#breadcrumb",
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "System Design",
          "item": "https://www.dandesacademy.com/courses/system-design-course/"
        }
      ]
    },
    {
      "@type": "Course",
      "@id": "https://www.dandesacademy.com/courses/system-design-course/#course",
      "name": "System Design Course",
      "description": "System Design training focused on fundamentals, real-world architecture, and interview preparation.",
      "provider": {
        "@id": "https://www.dandesacademy.com/#organization"
      },
      "inLanguage": "en-IN",
      "educationalLevel": "Intermediate to Advanced",
      "teaches": [
        "System Design",
        "Architecture",
        "Scalability",
        "Distributed Systems"
      ],
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": [
          "online",
          "live"
        ],
        "instructor": {
          "@id": "https://www.dandesacademy.com/#founder"
        }
      }
    }
  ]
};
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f7f8fa' }}>
      <Schema data={systemDesignSchema} />
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
