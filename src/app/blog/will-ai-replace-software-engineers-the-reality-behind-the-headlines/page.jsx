import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import { BlogPostHero } from "@/app/blog/will-ai-replace-software-engineers-the-reality-behind-the-headlines/blog-post-hero"
import { BlogPostContent } from "@/app/blog/will-ai-replace-software-engineers-the-reality-behind-the-headlines/blog-post-content"
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title:
    "Will AI Replace Software Engineers? | Dandes Academy",
  description:
    "Will AI replace software engineers? Learn how AI is transforming software development, which skills remain essential, and how developers can stay ahead.",
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
