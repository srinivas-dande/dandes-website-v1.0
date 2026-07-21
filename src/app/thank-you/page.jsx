import { Header } from "@/components/dandes/header"
import ThankYouSection from '@/components/thank-you/thank-you-section'
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'Thank You | Dandes Academy',
  description: 'Thanks for contacting Dandes Academy. We’ve received your details and will reach out soon with course information and next steps.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function ThankYouPage() {
  return (
    <main>
      <Header />
      <ThankYouSection />
      <Footer />
    </main>
  )
}
