import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import SrinivasHero from '@/components/srinivas/srinivas-hero'
import TrainerClarity from '@/components/srinivas/trainer-clarity'
import ExperienceSection from '@/components/srinivas/experience-section'
import TeachingStyle from '@/components/srinivas/teaching-style'
import LearnWithSrinivas from '@/components/srinivas/learn-with-srinivas'
import CurriculumHighlights from '@/components/srinivas/curriculum-highlights'
import { Testimonials} from "@/components/srinivas/testimonials"
import ConnectAndLearn from '@/components/srinivas/connect-and-learn'
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'Srinivas Dande - Founder & Lead Instructor | Dandes Academy',
  description: 'Meet Srinivas Dande, Founder and Lead Instructor at Dandes Academy with 20+ years of experience in AI, ML, and Data Science training.',
}

export default function SrinivasPage() {
  return (
    <main>
      <CountdownBanner />
      <Header />
      <SrinivasHero />
      <TrainerClarity />
      <ExperienceSection />
      <TeachingStyle />
      <LearnWithSrinivas />
      <CurriculumHighlights />
      <Testimonials/>
      <ConnectAndLearn />
      <Footer />
    </main>
  )
}
