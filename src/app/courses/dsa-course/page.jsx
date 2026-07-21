import Schema from "@/components/seo/Schema";
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
  const dsaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.dandesacademy.com/courses/dsa-course/#webpage",
      "url": "https://www.dandesacademy.com/courses/dsa-course/",
      "name": "Data Structures & Algorithms Course",
      "description": "Data Structures & Algorithms Course",
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
      "@id": "https://www.dandesacademy.com/courses/dsa-course/#breadcrumb",
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
          "name": "Data Structures & Algorithms",
          "item": "https://www.dandesacademy.com/courses/dsa-course/"
        }
      ]
    },
    {
      "@type": "Course",
      "@id": "https://www.dandesacademy.com/courses/dsa-course/#course",
      "name": "Data Structures & Algorithms Course",
      "description": "DSA training to build strong problem-solving fundamentals and prepare for technical interviews.",
      "provider": {
        "@id": "https://www.dandesacademy.com/#organization"
      },
      "inLanguage": "en-IN",
      "educationalLevel": "Beginner to Intermediate",
      "teaches": [
        "Data Structures",
        "Algorithms",
        "Problem Solving",
        "Coding Interviews"
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
      <Schema data={dsaSchema} />
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
