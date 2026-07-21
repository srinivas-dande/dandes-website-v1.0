import Schema from "@/components/seo/Schema";
import { Header } from "@/components/dandes/header"
import { BlogPostHero } from "@/app/blog/will-ai-replace-software-engineers-the-reality-behind-the-headlines/blog-post-hero"
import { BlogPostContent } from "@/app/blog/will-ai-replace-software-engineers-the-reality-behind-the-headlines/blog-post-content"
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title:
    "Will AI Replace Software Engineers? | Dandes Academy",
  description:
    "Will AI replace software engineers? Learn how AI is transforming software development, which skills remain essential, and how developers can stay ahead.",
  alternates: {
    canonical: "https://www.dandesacademy.com/blog/will-ai-replace-software-engineers-the-reality-behind-the-headlines",
  },
}

export default function BlogPage() {
  const blogPostSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.dandesacademy.com/blog/will-ai-replace-software-engineers-the-reality-behind-the-headlines#blogposting",
      "url": "https://www.dandesacademy.com/blog/will-ai-replace-software-engineers-the-reality-behind-the-headlines",
      "headline": "Will AI Replace Software Engineers?",
      "description": "Will AI replace software engineers? Learn how AI is transforming software development, which skills remain essential, and how developers can stay ahead.",
      "datePublished": "2026-07-21",
      "dateModified": "2026-07-21",
      "author": {
        "@id": "https://www.dandesacademy.com/#founder"
      },
      "publisher": {
        "@id": "https://www.dandesacademy.com/#organization"
      },
      "mainEntityOfPage": {
        "@id": "https://www.dandesacademy.com/blog/will-ai-replace-software-engineers-the-reality-behind-the-headlines#webpage"
      },
      "image": [
        "https://www.dandesacademy.com/images/blog/will-ai-replace-software-engineers-the-reality-behind-the-headlines.webp"
      ],
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.dandesacademy.com/blog/will-ai-replace-software-engineers-the-reality-behind-the-headlines#webpage",
      "url": "https://www.dandesacademy.com/blog/will-ai-replace-software-engineers-the-reality-behind-the-headlines",
      "name": "Will AI Replace Software Engineers?",
      "isPartOf": {
        "@id": "https://www.dandesacademy.com/#website"
      },
      "about": {
        "@id": "https://www.dandesacademy.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://www.dandesacademy.com/blog/will-ai-replace-software-engineers-the-reality-behind-the-headlines#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dandesacademy.com/blog/will-ai-replace-software-engineers-the-reality-behind-the-headlines#breadcrumb",
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
          "name": "Will AI Replace Software Engineers?",
          "item": "https://www.dandesacademy.com/blog/will-ai-replace-software-engineers-the-reality-behind-the-headlines"
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
