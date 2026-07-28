import Schema from "@/components/seo/Schema";
import { Header } from "@/components/dandes/header"
import SrinivasHero from '@/components/srinivas/srinivas-hero'
import TrainerClarity from '@/components/srinivas/trainer-clarity'
import ExperienceSection from '@/components/srinivas/experience-section'
import TeachingStyle from '@/components/srinivas/teaching-style'
import LearnWithSrinivas from '@/components/srinivas/learn-with-srinivas'
import CurriculumHighlights from '@/components/srinivas/curriculum-highlights'
import { Testimonials} from "@/components/srinivas/testimonials"
import ConnectAndLearn from '@/components/srinivas/connect-and-learn'
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'Srinivas Dande | Founder of Dandes Academy',
  description: 'Meet Srinivas Dande, founder and lead trainer of Dandes Academy, with 20+ years of experience in software development, System Design, DSA, and AI/ML.',
  alternates: {
    canonical: "https://www.dandesacademy.com/srinivas-dande",
  },
  keywords: [
  'Srinivas Dande',
  'Dandes Academy founder',
  'system design trainer',
  'DSA trainer',
  'AI ML trainer',
  'software engineering mentor',
  'coding interview coach',
  'technology instructor',
  'AI and machine learning mentor',
  'system design mentor',
  'technical interview coach',
  'software architecture trainer',
  'programming instructor',
  'software engineering educator',
  'technology career mentor',
  'online coding trainer',
  'Dandes Academy',
],
robots: {
    index: true,
    follow: true,
  },
};

export default function SrinivasPage() {
  const founderSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.dandesacademy.com/srinivas-dande/#webpage",
      "url": "https://www.dandesacademy.com/srinivas-dande/",
      "name": "Srinivas Dande",
      "description": "Learn about Srinivas Dande, Founder & Lead Instructor at Dandes Academy, with 20+ years of experience in product development, system architecture, AI, and technical training.",
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
      "@id": "https://www.dandesacademy.com/srinivas-dande/#breadcrumb",
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
          "name": "Srinivas Dande",
          "item": "https://www.dandesacademy.com/srinivas-dande/"
        }
      ]
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.dandesacademy.com/srinivas-dande/#profilepage",
      "url": "https://www.dandesacademy.com/srinivas-dande/",
      "name": "Srinivas Dande - Founder & Lead Instructor",
      "mainEntity": {
        "@id": "https://www.dandesacademy.com/#founder"
      },
      "about": {
        "@id": "https://www.dandesacademy.com/#founder"
      }
    }
  ]
};
  return (
    <main>
       <Schema data={founderSchema} />
      <Header />
      <SrinivasHero />
      <TrainerClarity />
      <ExperienceSection />
      <TeachingStyle />
      <LearnWithSrinivas />
      <CurriculumHighlights />
      <Testimonials/>
      <ConnectAndLearn />
      <Footer />
    </main>
  )
}
