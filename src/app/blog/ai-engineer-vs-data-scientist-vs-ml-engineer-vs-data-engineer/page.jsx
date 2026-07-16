import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import { BlogPostHero } from "@/app/blog/ai-engineer-vs-data-scientist-vs-ml-engineer-vs-data-engineer/blog-post-hero"
import { BlogPostContent } from "@/app/blog/ai-engineer-vs-data-scientist-vs-ml-engineer-vs-data-engineer/blog-post-content"
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title:
    "AI Engineer vs Data Scientist vs ML Engineer | Dandes Academy",
  description:
    "Compare AI Engineer, Data Scientist, ML Engineer, and Data Engineer roles to understand their responsibilities, required skills, salaries, and career paths.",
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

