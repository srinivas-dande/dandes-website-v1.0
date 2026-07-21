import Schema from "@/components/seo/Schema";
import { Header } from "@/components/dandes/header"
import AboutHero from '@/components/about/about-hero'
import WhyDandesAcademy from '@/components/about/why-dandes-academy'
import WhatWeTeach from '@/components/about/what-we-teach'
import FlexibilitySupport from '@/components/about/flexibility-support'
import JoinTheJourney from '@/components/about/join-the-journey'
import { AimlLearningFormat } from '@/components/ai-ml/aiml-learning-format'
import { StructuredSection } from '@/components/about/structured-section'

import { InstructorSection } from "@/components/dandes/instructor-section"
import { Footer } from "@/components/dandes/footer"


export const metadata = {
  title: "About Dandes Academy | Mission, Vision & Mentors",
  description: "Learn about Dandes Academy’s mission, founder-led teaching, and commitment to practical AI/ML, System Design, and DSA training for professionals.",
  alternates: {
    canonical: "https://www.dandesacademy.com/about-us",
  },
  keywords: [
  'about Dandes Academy',
  'online technology training academy',
  'AI ML training institute',
  'system design training academy',
  'DSA training institute',
  'software engineering mentors',
  'live online tech education',
  'AI and machine learning institute',
  'online software engineering academy',
  'technology upskilling platform',
  'coding education platform',
  'career-focused tech training',
  'professional software development training',
  'live online coding academy',
  'industry expert mentors',
  'technology learning platform',
  'Dandes Academy',
],
};


export default function AboutPage() {
  const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.dandesacademy.com/about-us/#webpage",
      "url": "https://www.dandesacademy.com/about-us/",
      "name": "About Us",
      "description": "Learn about Dandes Academy, our mission, training approach, and founder.",
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
      "@id": "https://www.dandesacademy.com/about-us/#breadcrumb",
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
          "name": "About Us",
          "item": "https://www.dandesacademy.com/about-us/"
        }
      ]
    },
    {
      "@type": "AboutPage",
      "@id": "https://www.dandesacademy.com/about-us/#aboutpage",
      "url": "https://www.dandesacademy.com/about-us/",
      "name": "About Dandes Academy",
      "about": {
        "@id": "https://www.dandesacademy.com/#organization"
      }
    }
  ]
};
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <Schema data={aboutSchema} />
      <Header />
      <AboutHero />
      <WhyDandesAcademy />
      <StructuredSection />
      <WhatWeTeach />
      <AimlLearningFormat />
      <FlexibilitySupport />
      <InstructorSection />
      <JoinTheJourney />
      <Footer />
    </main>
  )
}
