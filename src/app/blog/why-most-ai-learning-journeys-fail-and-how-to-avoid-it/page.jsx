import { CountdownBanner } from "@/components/dandes/countdown-banner"
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
