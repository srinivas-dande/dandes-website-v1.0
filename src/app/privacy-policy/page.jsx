import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import PrivacyHero from '@/components/privacy-policy/privacy-hero'
import PrivacyContent from '@/components/privacy-policy/privacy-content'
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'Privacy Policy | Dandes Academy',
  description: 'Read Dandes Academy’s Privacy Policy to understand how personal information is collected, used, protected, and managed for courses, webinars, and support.',
  alternates: {
    canonical: "https://www.dandesacademy.com/privacy-policy",
  },
  keywords: [
  'Dandes Academy privacy policy',
  'online course privacy policy',
  'student data privacy',
  'personal information policy',
  'website privacy practices',
  'data protection policy',
  'user privacy policy',
  'information security policy',
  'online learning privacy',
  'cookie policy',
  'data collection practices',
  'student information security',
  'website data protection',
  'privacy compliance',
  'Dandes Academy data policy',
  'Dandes Academy',
],
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
