import Schema from "@/components/seo/Schema";
import { Header } from "@/components/dandes/header"
import { BlogHeroSection } from "@/app/blog/blog-hero-section"
import { BlogListingSection } from "@/app/blog/blog-listing-section"
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'Tech Career Insights & Learning Resources | Dandes Academy Blog',
  description: 'Explore practical articles on AI/ML, System Design, DSA, software careers, interview preparation, and skill development from Dandes Academy.',
  alternates: {
    canonical: "https://www.dandesacademy.com/blog",
  },
  keywords: [
  'technology career blog',
  'AI ML learning resources',
  'system design tutorials',
  'DSA tutorials',
  'coding interview preparation tips',
  'software engineering career advice',
  'artificial intelligence articles',
  'tech skill development',
  'machine learning tutorials',
  'AI engineering blog',
  'software development tutorials',
  'data structures and algorithms tutorials',
  'technical interview tips',
  'career growth for software engineers',
  'programming learning resources',
  'technology learning blog',
  'Dandes Academy blog',
  'Dandes Academy',
],
robots: {
    index: true,
    follow: true,
  },
}

export default function BlogPage() {
  const blogSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.dandesacademy.com/blog/#webpage",
      "url": "https://www.dandesacademy.com/blog/",
      "name": "Blog",
      "description": "Read AI, Machine Learning, System Design, Data Structures & Algorithms, interview preparation, and software engineering articles from Dandes Academy.",
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
      "@id": "https://www.dandesacademy.com/blog/#breadcrumb",
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
        }
      ]
    },
    {
      "@type": "Blog",
      "@id": "https://www.dandesacademy.com/blog/#blog",
      "url": "https://www.dandesacademy.com/blog/",
      "name": "Dandes Academy Blog",
      "publisher": {
        "@id": "https://www.dandesacademy.com/#organization"
      },
      "inLanguage": "en-IN"
    }
  ]
};
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
        <Header />
        <Schema data={blogSchema} />
        <BlogHeroSection />
        <BlogListingSection/>
        <Footer />
    </main>
  )
}
