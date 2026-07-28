import Schema from "@/components/seo/Schema";
import { Header } from "@/components/dandes/header"
import { BlogPostHero } from "@/app/blog/why-most-ai-learning-journeys-fail-and-how-to-avoid-it/blog-post-hero"
import { BlogPostContent } from "@/app/blog/why-most-ai-learning-journeys-fail-and-how-to-avoid-it/blog-post-content"
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title:
    "Why Most AI Learning Journeys Fail | Dandes Academy",
  description:
    "Discover why many AI learners struggle to make progress and learn a practical roadmap to build job-ready AI and Machine Learning skills.",
  alternates: {
    canonical: "https://www.dandesacademy.com/blog/why-most-ai-learning-journeys-fail-and-how-to-avoid-it",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function BlogPage() {
  const blogPostSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.dandesacademy.com/blog/why-most-ai-learning-journeys-fail-and-how-to-avoid-it#blogposting",
      "url": "https://www.dandesacademy.com/blog/why-most-ai-learning-journeys-fail-and-how-to-avoid-it",
      "headline": "Why Most AI Learning Journeys Fail",
      "description": "Discover why many AI learners struggle to make progress and learn a practical roadmap to build job-ready AI and Machine Learning skills.",
      "datePublished": "2026-07-21",
      "dateModified": "2026-07-21",
      "author": {
        "@id": "https://www.dandesacademy.com/#founder"
      },
      "publisher": {
        "@id": "https://www.dandesacademy.com/#organization"
      },
      "mainEntityOfPage": {
        "@id": "https://www.dandesacademy.com/blog/why-most-ai-learning-journeys-fail-and-how-to-avoid-it#webpage"
      },
      "image": [
        "https://www.dandesacademy.com/images/blog/why-most-ai-learning-journeys-fail-and-how-to-avoid-it.webp"
      ],
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.dandesacademy.com/blog/why-most-ai-learning-journeys-fail-and-how-to-avoid-it#webpage",
      "url": "https://www.dandesacademy.com/blog/why-most-ai-learning-journeys-fail-and-how-to-avoid-it",
      "name": "Why Most AI Learning Journeys Fail",
      "isPartOf": {
        "@id": "https://www.dandesacademy.com/#website"
      },
      "about": {
        "@id": "https://www.dandesacademy.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://www.dandesacademy.com/blog/why-most-ai-learning-journeys-fail-and-how-to-avoid-it#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dandesacademy.com/blog/why-most-ai-learning-journeys-fail-and-how-to-avoid-it#breadcrumb",
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
          "name": "Blog",
          "item": "https://www.dandesacademy.com/blog/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Why Most AI Learning Journeys Fail",
          "item": "https://www.dandesacademy.com/blog/why-most-ai-learning-journeys-fail-and-how-to-avoid-it"
        }
      ]
    }
  ]
};
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
       <Schema data={blogPostSchema} />
        <Header />
        <BlogPostHero />
        <BlogPostContent />
        <Footer />
    </main>
  )
}
