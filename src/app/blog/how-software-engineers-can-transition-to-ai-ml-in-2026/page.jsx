import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import { BlogPostHero } from "@/app/blog/how-software-engineers-can-transition-to-ai-ml-in-2026/blog-post-hero"
import { BlogPostContent } from "@/app/blog/how-software-engineers-can-transition-to-ai-ml-in-2026/blog-post-content"
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title:
    "How Software Engineers Can Transition to AI/ML | Dandes Academy",
  description:
    "Explore a step-by-step roadmap for software engineers to transition into AI and Machine Learning with the right skills, projects, and career strategy.",
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
