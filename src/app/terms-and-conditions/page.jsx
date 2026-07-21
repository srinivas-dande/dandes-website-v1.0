import Schema from "@/components/seo/Schema";
import { Header } from "@/components/dandes/header"
import TermsHero from '@/components/terms-conditions/terms-hero'
import TermsContent from '@/components/terms-conditions/terms-content'
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'Terms & Conditions | Dandes Academy',
  description: 'Review Dandes Academy’s terms for course access, payments, learner responsibilities, content usage, career support, and important policy updates.',
  alternates: {
    canonical: "https://www.dandesacademy.com/terms-and-conditions",
  },
  keywords: [
  'Dandes Academy terms and conditions',
  'online course terms',
  'course payment terms',
  'learner responsibilities',
  'course access policy',
  'content usage policy',
  'course enrollment terms',
  'online learning terms',
  'refund and cancellation policy',
  'student code of conduct',
  'intellectual property policy',
  'website terms of use',
  'digital content policy',
  'online education terms',
  'Dandes Academy policies',
  'Dandes Academy',
],
}

export default function TermsConditionsPage() {
  const termsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.dandesacademy.com/terms-and-conditions/#webpage",
      "url": "https://www.dandesacademy.com/terms-and-conditions/",
      "name": "Terms & Conditions",
      "description": "Read the Terms & Conditions governing the use of the Dandes Academy website, courses, services, and learning platform.",
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
      "@id": "https://www.dandesacademy.com/terms-and-conditions/#breadcrumb",
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
          "name": "Terms & Conditions",
          "item": "https://www.dandesacademy.com/terms-and-conditions/"
        }
      ]
    }
  ]
};
  return (
    <main>
      <Schema data={termsSchema} />
      <Header />
      <TermsHero />
      <TermsContent />
      <Footer />
    </main>
  )
}
