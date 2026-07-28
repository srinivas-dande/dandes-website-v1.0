import Schema from "@/components/seo/Schema";
import { Header } from "@/components/dandes/header"
import { BlogPostHero } from "@/app/blog/from-java-developer-to-ai-engineer/blog-post-hero"
import { BlogPostContent } from "@/app/blog/from-java-developer-to-ai-engineer/blog-post-content"
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title:
    "From Java Developer to AI Engineer | Dandes Academy",
  description:
    "Learn how Java developers can successfully move into AI Engineering by building practical AI skills, real-world projects, and industry experience.",
  alternates: {
    canonical: "https://www.dandesacademy.com/blog/from-java-developer-to-ai-engineer",
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
      "@id": "https://www.dandesacademy.com/blog/from-java-developer-to-ai-engineer#blogposting",
      "url": "https://www.dandesacademy.com/blog/from-java-developer-to-ai-engineer",
      "headline": "From Java Developer to AI Engineer",
      "description": "Learn how Java developers can successfully move into AI Engineering by building practical AI skills, real-world projects, and industry experience.",
      "datePublished": "2026-07-21",
      "dateModified": "2026-07-21",
      "author": {
        "@id": "https://www.dandesacademy.com/#founder"
      },
      "publisher": {
        "@id": "https://www.dandesacademy.com/#organization"
      },
      "mainEntityOfPage": {
        "@id": "https://www.dandesacademy.com/blog/from-java-developer-to-ai-engineer#webpage"
      },
      "image": [
        "https://www.dandesacademy.com/images/blog/from-java-developer-to-ai-engineer.webp"
      ],
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.dandesacademy.com/blog/from-java-developer-to-ai-engineer#webpage",
      "url": "https://www.dandesacademy.com/blog/from-java-developer-to-ai-engineer",
      "name": "From Java Developer to AI Engineer",
      "isPartOf": {
        "@id": "https://www.dandesacademy.com/#website"
      },
      "about": {
        "@id": "https://www.dandesacademy.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://www.dandesacademy.com/blog/from-java-developer-to-ai-engineer#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dandesacademy.com/blog/from-java-developer-to-ai-engineer#breadcrumb",
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
          "name": "From Java Developer to AI Engineer",
          "item": "https://www.dandesacademy.com/blog/from-java-developer-to-ai-engineer"
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

