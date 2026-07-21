import Schema from "@/components/seo/Schema";
import { Header } from "@/components/dandes/header"
import { BlogPostHero } from "@/app/blog/why-learning-python-alone-will-not-make-you-an-ai-engineer/blog-post-hero"
import { BlogPostContent } from "@/app/blog/why-learning-python-alone-will-not-make-you-an-ai-engineer/blog-post-content"
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title:
    "Why Python Alone Won't Make You an AI Engineer | Dandes Academy",
  description:
    "Python is only the beginning. Learn the essential AI, Machine Learning, mathematics, and project skills required to become an AI Engineer.",
  alternates: {
    canonical: "https://www.dandesacademy.com/blog/why-learning-python-alone-will-not-make-you-an-ai-engineer",
  },
}
export default function BlogPage() {
  const blogPostSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.dandesacademy.com/blog/why-learning-python-alone-will-not-make-you-an-ai-engineer#blogposting",
      "url": "https://www.dandesacademy.com/blog/why-learning-python-alone-will-not-make-you-an-ai-engineer",
      "headline": "Why Python Alone Won't Make You an AI Engineer",
      "description": "Python is only the beginning. Learn the essential AI, Machine Learning, mathematics, and project skills required to become an AI Engineer.",
      "datePublished": "2026-07-21",
      "dateModified": "2026-07-21",
      "author": {
        "@id": "https://www.dandesacademy.com/#founder"
      },
      "publisher": {
        "@id": "https://www.dandesacademy.com/#organization"
      },
      "mainEntityOfPage": {
        "@id": "https://www.dandesacademy.com/blog/why-learning-python-alone-will-not-make-you-an-ai-engineer#webpage"
      },
      "image": [
        "https://www.dandesacademy.com/images/blog/why-learning-python-alone-will-not-make-you-an-ai-engineer.webp"
      ],
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.dandesacademy.com/blog/why-learning-python-alone-will-not-make-you-an-ai-engineer#webpage",
      "url": "https://www.dandesacademy.com/blog/why-learning-python-alone-will-not-make-you-an-ai-engineer",
      "name": "Why Python Alone Won't Make You an AI Engineer",
      "isPartOf": {
        "@id": "https://www.dandesacademy.com/#website"
      },
      "about": {
        "@id": "https://www.dandesacademy.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://www.dandesacademy.com/blog/why-learning-python-alone-will-not-make-you-an-ai-engineer#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dandesacademy.com/blog/why-learning-python-alone-will-not-make-you-an-ai-engineer#breadcrumb",
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
          "name": "Why Python Alone Won't Make You an AI Engineer",
          "item": "https://www.dandesacademy.com/blog/why-learning-python-alone-will-not-make-you-an-ai-engineer"
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
