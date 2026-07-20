import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import { BlogPostHero } from "@/app/blog/from-java-developer-to-ai-engineer/blog-post-hero"
import { BlogPostContent } from "@/app/blog/from-java-developer-to-ai-engineer/blog-post-content"
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title:
    "From Java Developer to AI Engineer | Dandes Academy",
  description:
    "Learn how Java developers can successfully move into AI Engineering by building practical AI skills, real-world projects, and industry experience.",
  alternates: {
    canonical: "https://www.dandesacademy.com/blog/from-java-developer-to-ai-engineer",
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

