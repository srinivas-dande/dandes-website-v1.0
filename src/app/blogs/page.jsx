import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import { BlogHeroSection } from "@/app/blogs/blog-hero-section"
import { BlogListingSection } from "@/app/blogs/blog-listing-section"
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'AI & ML Blog | Dandes Academy',
  description: 'Practical guides, project walkthroughs, and interview-ready tips for AI and Machine Learning careers.',
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
