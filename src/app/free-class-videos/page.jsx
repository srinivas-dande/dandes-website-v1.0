import Schema from "@/components/seo/Schema";
import { Header } from "@/components/dandes/header"
import TeachingPreviewSection from '@/components/free-class-videos/teaching-preview-section'
import WebinarsInstructorSection from '@/components/free-class-videos/webinars-instructor-section'
import FreeVideosSection from '@/components/free-class-videos/free-videos-section'
import StartingPointSection from '@/components/free-class-videos/starting-point-section'
import RoadmapCtaSection from '@/components/free-class-videos/roadmap-cta-section'
import FaqSection from '@/components/free-class-videos/faq-section'
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'Free Class Videos | Python, DSA, System Design | Dandes',
  description: 'Watch free class videos from Dandes Academy on Python, Pandas, System Design, CAP, PACELC, consistency models, AVL trees, and Red-Black trees.',
  alternates: {
    canonical: "https://www.dandesacademy.com/free-class-videos",
  },
  keywords: [
  'free coding class videos',
  'free Python classes',
  'free Pandas tutorials',
  'free system design videos',
  'free DSA videos',
  'CAP theorem tutorial',
  'PACELC theorem tutorial',
  'AVL tree tutorial',
  'Red-Black tree tutorial',
  'free machine learning tutorials',
  'free AI tutorials',
  'Python programming tutorials',
  'data structures tutorials',
  'algorithms tutorials',
  'coding interview preparation videos',
  'software engineering tutorials',
  'Dandes Academy free classes',
  'Dandes Academy',
],
robots: {
    index: true,
    follow: true,
  },
}

export default function WebinarsPage() {
 const freeClassVideosSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.dandesacademy.com/free-class-videos/#webpage",
      "url": "https://www.dandesacademy.com/free-class-videos/",
      "name": "Free Class Videos",
      "description": "Free Class Videos",
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
      "@id": "https://www.dandesacademy.com/free-class-videos/#breadcrumb",
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
          "name": "Free Class Videos",
          "item": "https://www.dandesacademy.com/free-class-videos/"
        }
      ]
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.dandesacademy.com/free-class-videos/#collection",
      "url": "https://www.dandesacademy.com/free-class-videos/",
      "name": "Free Class Videos",
      "about": {
        "@id": "https://www.dandesacademy.com/#organization"
      },
      "mainEntity": {
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Python Functions Explained from Scratch",
      "url": "https://www.youtube.com/watch?v=CAedba0swHc"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Creating DataFrames in Pandas",
      "url": "https://www.youtube.com/watch?v=ACLf9h9NgrA"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Pandas Indexing & DataFrame Operations",
      "url": "https://www.youtube.com/watch?v=Y0Q0vLwmOkw"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Python Functions Explained from Scratch",
      "url": "https://www.youtube.com/watch?v=XIxDpAhsV7s"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "User-Defined Functions in Python",
      "url": "https://www.youtube.com/watch?v=gOCZMZ_S6V4"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Variable Scope in Python",
      "url": "https://www.youtube.com/watch?v=Hm8zyBC1QtQ"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Lists in Python Explained",
      "url": "https://www.youtube.com/watch?v=PV49QoN8clQ"
    },
    {
      "@type": "ListItem",
      "position": 8,
      "name": "Python List Functions & Methods",
      "url": "https://www.youtube.com/watch?v=TZTcWIcn4Os"
    },
    {
      "@type": "ListItem",
      "position": 9,
      "name": "Advanced List Methods in Python",
      "url": "https://www.youtube.com/watch?v=faTinioXEr0"
    },
    {
      "@type": "ListItem",
      "position": 10,
      "name": "CAP Theorem Explained",
      "url": "https://www.youtube.com/watch?v=Oa1k50OKmaM"
    },
    {
      "@type": "ListItem",
      "position": 11,
      "name": "PACELC Theorem",
      "url": "https://www.youtube.com/watch?v=2PvjrkfPOTE"
    },
    {
      "@type": "ListItem",
      "position": 12,
      "name": "Consistency Models",
      "url": "https://www.youtube.com/watch?v=T6UwxVdZRHo"
    },
    {
      "@type": "ListItem",
      "position": 13,
      "name": "I BALANCED",
      "url": "https://www.youtube.com/watch?v=pHqwhMhyJv8"
    },
    {
      "@type": "ListItem",
      "position": 14,
      "name": "AVL Tree Rotations",
      "url": "https://www.youtube.com/watch?v=Gmo4vF6DHIY"
    },
    {
      "@type": "ListItem",
      "position": 15,
      "name": "Red-Black Trees",
      "url": "https://www.youtube.com/watch?v=4lyS4-dqAmo"
    }
  ]
}
    }
  ]
};
  return (
    <main>
      <Schema data={freeClassVideosSchema} />
      <Header />
      <TeachingPreviewSection />
      <WebinarsInstructorSection />
      <FreeVideosSection />
      <StartingPointSection />
      <RoadmapCtaSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
