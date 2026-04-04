import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import TermsHero from '@/components/terms-conditions/terms-hero'
import TermsContent from '@/components/terms-conditions/terms-content'
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'Terms and Conditions | Dandes Academy',
  description: 'Terms and Conditions for Dandes Academy. These terms govern your use of our website and enrollment in any program.',
}

export default function TermsConditionsPage() {
  return (
    <main>
      <CountdownBanner />
      <Header />
      <TermsHero />
      <TermsContent />
      <Footer />
    </main>
  )
}
