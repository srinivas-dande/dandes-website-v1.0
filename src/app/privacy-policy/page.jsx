import Schema from "@/components/seo/Schema";
import { Header } from "@/components/dandes/header"
import PrivacyHero from '@/components/privacy-policy/privacy-hero'
import PrivacyContent from '@/components/privacy-policy/privacy-content'
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'Privacy Policy | Dandes Academy',
  description: 'Read Dandes Academy’s Privacy Policy to understand how personal information is collected, used, protected, and managed for courses, webinars, and support.',
  alternates: {
    canonical: "https://www.dandesacademy.com/privacy-policy",
  },
  keywords: [
  'Dandes Academy privacy policy',
  'online course privacy policy',
  'student data privacy',
  'personal information policy',
  'website privacy practices',
  'data protection policy',
  'user privacy policy',
  'information security policy',
  'online learning privacy',
  'cookie policy',
  'data collection practices',
  'student information security',
  'website data protection',
  'privacy compliance',
  'Dandes Academy data policy',
  'Dandes Academy',
],
robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  const privacyPolicySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.dandesacademy.com/privacy-policy/#webpage",
      "url": "https://www.dandesacademy.com/privacy-policy/",
      "name": "Privacy Policy",
      "description": "Read the Dandes Academy Privacy Policy to understand how we collect, use, store, and protect your personal information.",
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
      "@id": "https://www.dandesacademy.com/privacy-policy/#breadcrumb",
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
          "name": "Privacy Policy",
          "item": "https://www.dandesacademy.com/privacy-policy/"
        }
      ]
    }
  ]
};
  return (
    <main>
       <Schema data={privacyPolicySchema} />
      <Header />
      <PrivacyHero />
      <PrivacyContent />
      <Footer />
    </main>
  )
}
