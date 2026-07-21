import Schema from "@/components/seo/Schema";
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
    canonical: "https://www.dandesacademy.com/testimonials",
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
  const testimonialsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.dandesacademy.com/testimonials/#webpage",
      "url": "https://www.dandesacademy.com/testimonials/",
      "name": "Testimonials",
      "description": "Testimonials from Dandes Academy learners",
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
      "@id": "https://www.dandesacademy.com/testimonials/#breadcrumb",
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
          "name": "Testimonials",
          "item": "https://www.dandesacademy.com/testimonials/"
        }
      ]
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.dandesacademy.com/testimonials/#collection",
      "url": "https://www.dandesacademy.com/testimonials/",
      "name": "Testimonials",
      "about": {
        "@id": "https://www.dandesacademy.com/#organization"
      },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Deepak Kumar Singh"
              },
              "reviewBody": "I started my learning journey at JLC in 2013... When the AI/ML program was introduced at Dandes Academy, I joined with complete confidence. AI/ML curriculum is well structured and updated to reflect current industry standards.",
              "itemReviewed": {
                "@id": "https://www.dandesacademy.com/#organization"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Yashwant Kumar"
              },
              "reviewBody": "AI/ML sessions are structured to deepen understanding rather than rush through topics and are closely aligned with industry expectations.",
              "itemReviewed": {
                "@id": "https://www.dandesacademy.com/#organization"
              }
            }
          }
        ]
      }
    }
  ]
};
  return (
    <main>
      <Schema data={testimonialsSchema} />
      <Header />
      <HeroSection />
      <SkillsTestimonialsSection />
      <VideoTestimonialsSection />
      
      <ExpectedOutcomesSection />
      
      <Footer />
    </main>
  )
}
