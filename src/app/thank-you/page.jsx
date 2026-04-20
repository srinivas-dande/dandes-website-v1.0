import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import ThankYouSection from '@/components/thank-you/thank-you-section'
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'Thank You | Dandes Academy',
  description: 'Thank you for registering with Dandes Academy. We have received your details and will contact you shortly.',
}

export default function ThankYouPage() {
  return (
    <main>
      <CountdownBanner />
      <Header />
      <ThankYouSection />
      <Footer />
    </main>
  )
}
