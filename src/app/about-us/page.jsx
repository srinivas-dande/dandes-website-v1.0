import { CountdownBanner } from "@/components/dandes/countdown-banner"
import { Header } from "@/components/dandes/header"
import AboutHero from '@/components/about/about-hero'
import WhyDandesAcademy from '@/components/about/why-dandes-academy'
import WhatWeTeach from '@/components/about/what-we-teach'
import FlexibilitySupport from '@/components/about/flexibility-support'
import JoinTheJourney from '@/components/about/join-the-journey'
import { AimlLearningFormat } from '@/components/ai-ml/aiml-learning-format'
import { StructuredSection } from '@/components/about/structured-section'

import { InstructorSection } from "@/components/dandes/instructor-section"
import { Footer } from "@/components/dandes/footer"


export const metadata = {
  title: "About Dandes Academy | Mission, Vision & Mentors",
  description: "Learn about Dandes Academy’s mission, founder-led teaching, and commitment to practical AI/ML, System Design, and DSA training for professionals.",
  alternates: {
    canonical: "https://www.dandesacademy.com/about-us",
  },
  keywords: [
  'about Dandes Academy',
  'online technology training academy',
  'AI ML training institute',
  'system design training academy',
  'DSA training institute',
  'software engineering mentors',
  'live online tech education',
  'AI and machine learning institute',
  'online software engineering academy',
  'technology upskilling platform',
  'coding education platform',
  'career-focused tech training',
  'professional software development training',
  'live online coding academy',
  'industry expert mentors',
  'technology learning platform',
  'Dandes Academy',
],
};


export default function AboutPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <CountdownBanner />
      <Header />
      <AboutHero />
      <WhyDandesAcademy />
      <StructuredSection />
      <WhatWeTeach />
      <AimlLearningFormat />
      <FlexibilitySupport />
      <InstructorSection />
      <JoinTheJourney />
      <Footer />
    </main>
  )
}
