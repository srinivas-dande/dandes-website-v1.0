import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import { BlogPostHero } from "@/app/blog/will-ai-replace-software-engineers-the-reality-behind-the-headlines/blog-post-hero"
import { BlogPostContent } from "@/app/blog/will-ai-replace-software-engineers-the-reality-behind-the-headlines/blog-post-content"
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
        <BlogPostHero />
        <BlogPostContent />
        <Footer />
    </main>
  )
}
