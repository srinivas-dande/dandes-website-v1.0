import Schema from "@/components/seo/Schema";
import { Header } from "../components/dandes/header";
import { HeroSection } from "../components/dandes/hero-section"
import { FeaturesSection } from "../components/dandes/features-section"
import { CoursesSection } from "../components/dandes/courses-section"
import { LiveClassesSection } from "../components/dandes/live-classes-section"
import { AudienceSection } from "../components/dandes/audience-section"
import { CareerSupportSection } from "../components/dandes/career-support-section"
import { WebinarSection } from "../components/dandes/webinar-section"
import { ComparisonSection } from "../components/dandes/comparison-section"
import { InstructorSection } from "../components/dandes/instructor-section"
import { TestimonialsSection } from "../components/dandes/testimonials-section"
import { FAQSection } from "../components/dandes/faq-section"
import { CTASection } from "../components/dandes/cta-section"
import { Footer } from "../components/dandes/footer"
 
export default function Home() {
  const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.dandesacademy.com/#webpage",
      "url": "https://www.dandesacademy.com/",
      "name": "Homepage",
      "description": "Homepage",
      "isPartOf": {
        "@id": "https://www.dandesacademy.com/#website"
      },
      "about": {
        "@id": "https://www.dandesacademy.com/#organization"
      },
      "primaryImageOfPage": {
        "@id": "https://www.dandesacademy.com/#logo"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dandesacademy.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.dandesacademy.com/"
        }
      ]
    }
  ]
};
  return (
    <main className="min-h-screen bg-background">
       <Schema data={homeSchema} />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CoursesSection />
      <LiveClassesSection />
      <AudienceSection />
      <CareerSupportSection />
      <WebinarSection />
      <ComparisonSection />
      <InstructorSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
