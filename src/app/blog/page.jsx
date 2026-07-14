import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import { BlogHeroSection } from "@/app/blog/blog-hero-section"
import { BlogListingSection } from "@/app/blog/blog-listing-section"
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'Tech Career Insights & Learning Resources | Dandes Academy Blog',
  description: 'Explore practical articles on AI/ML, System Design, DSA, software careers, interview preparation, and skill development from Dandes Academy.',
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
}

export default function BlogPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
        <CountdownBanner />
        <Header />
        <BlogHeroSection />
        <BlogListingSection/>
        <Footer />
    </main>
  )
}
