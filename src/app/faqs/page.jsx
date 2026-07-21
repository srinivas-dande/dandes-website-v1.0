import Schema from "@/components/seo/Schema";
import { Header } from "@/components/dandes/header"
import FaqHeroSection from '@/components/faqs/faq-hero-section'
import FaqContentSection from '@/components/faqs/faq-content-section'
import FaqFinalCtaSection from '@/components/faqs/faq-final-cta-section'

import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'FAQs | Dandes Academy Courses, Batches & Support',
  description: 'Get answers about Dandes Academy courses, live classes, LMS recordings, projects, fees, batches, placement assistance, refunds, and learner support.',
  alternates: {
    canonical: "https://www.dandesacademy.com/faqs",
  },
  keywords: [
  'Dandes Academy FAQs',
  'online course FAQs',
  'AI ML course fees',
  'system design course fees',
  'DSA course fees',
  'live class schedule',
  'LMS recordings',
  'placement assistance',
  'course refund policy',
  'AI ML course duration',
  'system design course duration',
  'DSA course duration',
  'online learning platform',
  'course certification',
  'career support',
  'technical mentorship',
  'Dandes Academy',
],
};

export default function FaqsPage() {
  const faqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.dandesacademy.com/faqs/#webpage",
      "url": "https://www.dandesacademy.com/faqs/",
      "name": "FAQs",
      "description": "Frequently Asked Questions",
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
      "@id": "https://www.dandesacademy.com/faqs/#breadcrumb",
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
          "name": "FAQs",
          "item": "https://www.dandesacademy.com/faqs/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.dandesacademy.com/faqs/#faq",
      "mainEntity": Object.values(faqData)
        .flatMap(section => section.questions)
        .map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
    }
  ]
};
  return (
    <main>
      <Schema data={faqSchema} />
      <Header />
      <FaqHeroSection />
      <FaqContentSection />
      <FaqFinalCtaSection />
      <Footer />
    </main>
  )
}
