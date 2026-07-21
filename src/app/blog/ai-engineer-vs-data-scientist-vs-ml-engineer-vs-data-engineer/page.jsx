
import Schema from "@/components/seo/Schema";
import { Header } from "@/components/dandes/header"
import { BlogPostHero } from "@/app/blog/ai-engineer-vs-data-scientist-vs-ml-engineer-vs-data-engineer/blog-post-hero"
import { BlogPostContent } from "@/app/blog/ai-engineer-vs-data-scientist-vs-ml-engineer-vs-data-engineer/blog-post-content"
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title:
    "AI Engineer vs Data Scientist vs ML Engineer | Dandes Academy",
  description:
    "Compare AI Engineer, Data Scientist, ML Engineer, and Data Engineer roles to understand their responsibilities, required skills, salaries, and career paths.",
  alternates: {
    canonical: "https://www.dandesacademy.com/blog/ai-engineer-vs-data-scientist-vs-ml-engineer-vs-data-engineer",
  },
}

export default function BlogPage() {
  const blogPostSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.dandesacademy.com/blog/ai-engineer-vs-data-scientist-vs-ml-engineer-vs-data-engineer#blogposting",
      "url": "https://www.dandesacademy.com/blog/ai-engineer-vs-data-scientist-vs-ml-engineer-vs-data-engineer",
      "headline": "AI Engineer vs Data Scientist vs ML Engineer",
      "description": "Compare AI Engineer, Data Scientist, ML Engineer, and Data Engineer roles to understand their responsibilities, required skills, salaries, and career paths.",
      "datePublished": "2026-07-21",
      "dateModified": "2026-07-21",
      "author": {
        "@id": "https://www.dandesacademy.com/#founder"
      },
      "publisher": {
        "@id": "https://www.dandesacademy.com/#organization"
      },
      "mainEntityOfPage": {
        "@id": "https://www.dandesacademy.com/blog/ai-engineer-vs-data-scientist-vs-ml-engineer-vs-data-engineer#webpage"
      },
      "image": [
        "https://www.dandesacademy.com/images/blog/ai-engineer-vs-data-scientist-vs-ml-engineer-vs-data-engineer.webp"
      ],
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.dandesacademy.com/blog/ai-engineer-vs-data-scientist-vs-ml-engineer-vs-data-engineer#webpage",
      "url": "https://www.dandesacademy.com/blog/ai-engineer-vs-data-scientist-vs-ml-engineer-vs-data-engineer",
      "name": "AI Engineer vs Data Scientist vs ML Engineer",
      "isPartOf": {
        "@id": "https://www.dandesacademy.com/#website"
      },
      "about": {
        "@id": "https://www.dandesacademy.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://www.dandesacademy.com/blog/ai-engineer-vs-data-scientist-vs-ml-engineer-vs-data-engineer#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dandesacademy.com/blog/ai-engineer-vs-data-scientist-vs-ml-engineer-vs-data-engineer#breadcrumb",
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
          "name": "AI Engineer vs Data Scientist vs ML Engineer",
          "item": "https://www.dandesacademy.com/blog/ai-engineer-vs-data-scientist-vs-ml-engineer-vs-data-engineer"
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

