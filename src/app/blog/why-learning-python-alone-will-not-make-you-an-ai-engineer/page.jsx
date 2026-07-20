import { CountdownBanner } from "@/components/dandes/countdown-banner"
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
