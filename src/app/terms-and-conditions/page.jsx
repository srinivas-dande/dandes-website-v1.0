import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import TermsHero from '@/components/terms-conditions/terms-hero'
import TermsContent from '@/components/terms-conditions/terms-content'
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'Terms & Conditions | Dandes Academy',
  description: 'Review Dandes Academy’s terms for course access, payments, learner responsibilities, content usage, career support, and important policy updates.',
  alternates: {
    canonical: "https://www.dandesacademy.com/terms-and-conditions",
  },
  keywords: [
  'Dandes Academy terms and conditions',
  'online course terms',
  'course payment terms',
  'learner responsibilities',
  'course access policy',
  'content usage policy',
  'course enrollment terms',
  'online learning terms',
  'refund and cancellation policy',
  'student code of conduct',
  'intellectual property policy',
  'website terms of use',
  'digital content policy',
  'online education terms',
  'Dandes Academy policies',
  'Dandes Academy',
],
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
