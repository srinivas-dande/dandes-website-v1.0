import Schema from "@/components/seo/Schema";
import { Header } from "@/components/dandes/header"
import ContactHero from '@/components/contact/contact-hero'
import ContactFormSection from '@/components/contact/contact-form-section'
import NotReadyCommit from '@/components/contact/not-ready-commit'
import FaqSection from '@/components/contact/faq-section'
import { Footer } from "@/components/dandes/footer"


export const metadata = {
  title: 'Contact Dandes Academy | Admissions & Support',
  description: 'Contact Dandes Academy for AI/ML, System Design, and DSA course guidance, admissions details, batch schedules, fees, and learner support.',
  alternates: {
    canonical: "https://www.dandesacademy.com/contact-us",
  },
  keywords: [
  'contact Dandes Academy',
  'Dandes Academy admissions',
  'course counselling',
  'AI ML course enquiry',
  'system design course enquiry',
  'DSA course enquiry',
  'online course support',
  'course fees and batches',
  'AI ML admissions',
  'system design admissions',
  'DSA course admissions',
  'tech course counselling',
  'online learning support',
  'technology course fees',
  'live course batches',
  'career guidance for software engineers',
  'Dandes Academy contact',
  'Dandes Academy',
],
robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.dandesacademy.com/contact-us/#webpage",
      "url": "https://www.dandesacademy.com/contact-us/",
      "name": "Contact Us",
      "description": "Contact Dandes Academy for admissions, AI/ML courses, System Design, DSA programs, and career guidance.",
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
      "@id": "https://www.dandesacademy.com/contact-us/#breadcrumb",
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
          "name": "Contact Us",
          "item": "https://www.dandesacademy.com/contact-us/"
        }
      ]
    },
    {
      "@type": "ContactPage",
      "@id": "https://www.dandesacademy.com/contact-us/#contactpage",
      "url": "https://www.dandesacademy.com/contact-us/",
      "name": "Contact Dandes Academy",
      "about": {
        "@id": "https://www.dandesacademy.com/#organization"
      },
      "mainEntity": {
        "@id": "https://www.dandesacademy.com/#organization"
      }
    }
  ]
};
  return (
    <main>
      <Schema data={contactSchema} />
      <Header />
      <ContactHero />
      <ContactFormSection />
      <NotReadyCommit />
      <FaqSection />
      <Footer />
    </main>
  )
}
