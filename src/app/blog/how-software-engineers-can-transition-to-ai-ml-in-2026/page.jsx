import Schema from "@/components/seo/Schema";
import { Header } from "@/components/dandes/header"
import { BlogPostHero } from "@/app/blog/how-software-engineers-can-transition-to-ai-ml-in-2026/blog-post-hero"
import { BlogPostContent } from "@/app/blog/how-software-engineers-can-transition-to-ai-ml-in-2026/blog-post-content"
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title:
    "How Software Engineers Can Transition to AI/ML | Dandes Academy",
  description:
    "Explore a step-by-step roadmap for software engineers to transition into AI and Machine Learning with the right skills, projects, and career strategy.",
  alternates: {
    canonical: "https://www.dandesacademy.com/blog/how-software-engineers-can-transition-to-ai-ml-in-2026",
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
      "@id": "https://www.dandesacademy.com/blog/how-software-engineers-can-transition-to-ai-ml-in-2026#blogposting",
      "url": "https://www.dandesacademy.com/blog/how-software-engineers-can-transition-to-ai-ml-in-2026",
      "headline": "How Software Engineers Can Transition to AI/ML",
      "description": "Explore a step-by-step roadmap for software engineers to transition into AI and Machine Learning with the right skills, projects, and career strategy.",
      "datePublished": "2026-07-21",
      "dateModified": "2026-07-21",
      "author": {
        "@id": "https://www.dandesacademy.com/#founder"
      },
      "publisher": {
        "@id": "https://www.dandesacademy.com/#organization"
      },
      "mainEntityOfPage": {
        "@id": "https://www.dandesacademy.com/blog/how-software-engineers-can-transition-to-ai-ml-in-2026#webpage"
      },
      "image": [
        "https://www.dandesacademy.com/images/blog/how-software-engineers-can-transition-to-ai-ml-in-2026.webp"
      ],
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.dandesacademy.com/blog/how-software-engineers-can-transition-to-ai-ml-in-2026#webpage",
      "url": "https://www.dandesacademy.com/blog/how-software-engineers-can-transition-to-ai-ml-in-2026",
      "name": "How Software Engineers Can Transition to AI/ML",
      "isPartOf": {
        "@id": "https://www.dandesacademy.com/#website"
      },
      "about": {
        "@id": "https://www.dandesacademy.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://www.dandesacademy.com/blog/how-software-engineers-can-transition-to-ai-ml-in-2026#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dandesacademy.com/blog/how-software-engineers-can-transition-to-ai-ml-in-2026#breadcrumb",
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
          "name": "How Software Engineers Can Transition to AI/ML",
          "item": "https://www.dandesacademy.com/blog/how-software-engineers-can-transition-to-ai-ml-in-2026"
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
