import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import PrivacyHero from '@/components/privacy-policy/privacy-hero'
import PrivacyContent from '@/components/privacy-policy/privacy-content'
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'Privacy Policy | Dandes Academy',
  description: 'Privacy Policy for Dandes Academy. Learn what data we collect, why we collect it, and how we use it.',
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <CountdownBanner />
      <Header />
      <PrivacyHero />
      <PrivacyContent />
      <Footer />
    </main>
  )
}
