'use client'
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
