import { Header } from "@/components/dandes/header"
import  StudentTestimonial  from "@/components/student-testimonial/share-experience-section"
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'Srinivas Dande - Founder & Lead Instructor | Dandes Academy',
  description: 'Meet Srinivas Dande, Founder and Lead Instructor at Dandes Academy with 20+ years of experience in AI, ML, and Data Science training.',
  alternates: {
    canonical: "https://www.dandesacademy.com/student-testimonial-form",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function SrinivasPage() {
  return (
    <main>
      <Header />
      <StudentTestimonial />
      <Footer />
    </main>
  )
}
