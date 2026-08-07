import Schema from "@/components/seo/Schema";
import { Header } from '@/components/dandes/header'
import { AimlHeroSection } from '@/components/applied-ai-course/applied-aiml-hero-section'
import { AppliedFeaturesSection } from "@/components/applied-ai-course/applied-aiml-features-section"
import { AimlCurriculumSection } from '@/components/applied-ai-course/applied-aiml-curriculum-section'
import { AppliedAimlAudienceSection } from '@/components/applied-ai-course/applied-aiml-audience-section'
import { AimlLearningFormat } from '@/components/applied-ai-course/applied-aiml-learning-format'
import { AimlJourneySection } from '@/components/applied-ai-course/applied-aiml-journey-section'
import { AimlStructuredSection } from '@/components/applied-ai-course/applied-aiml-structured-section'
import { InstructorSection } from "@/components/dandes/instructor-section"
import { TestimonialsSection } from "@/components/dandes/testimonials-section"
import { AimlFaqSection } from '@/components/applied-ai-course/applied-aiml-faq-section'
import { AimlCTASection } from "@/components/applied-ai-course/applied-aiml-cta-section"
import { Footer } from "@/components/dandes/footer"

export const metadata = {
  title: 'Applied AI Engineering Course — GenAI, LLM, Agentic AI & MLOps | Dandes Academy',
  description: 'Applied AI Engineering course. Build and deploy real GenAI, LLM, RAG and Agentic AI applications.',
  alternates: {
    canonical: "https://www.dandesacademy.com/courses/ai-machine-learning-course",
  },
  keywords: [
  'applied AI engineering course',
'LLM engineer course',
'agentic AI course',
'RAG course online',
'AI engineer job ready course',
'generative AI course',
'MLOps course',
'GenAI training',
'LLM course',
'AI engineer course',
'AI career program',
'AI course with placement support',
'live AI engineering training',
'online artificial intelligence course',
'weekend AI course',
'Dandes Academy'
],
robots: {
    index: true,
    follow: true,
  },
};

export default function AiMlPage() {
  const aiMlSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.dandesacademy.com/courses/ai-machine-learning-course/#webpage",
      "url": "https://www.dandesacademy.com/courses/ai-machine-learning-course/",
      "name": "AI & Machine Learning Course",
      "description": "AI & Machine Learning Course",
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
      "@id": "https://www.dandesacademy.com/courses/ai-machine-learning-course/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.dandesacademy.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Courses",
          "item": "https://www.dandesacademy.com/courses/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "AI & Machine Learning",
          "item": "https://www.dandesacademy.com/courses/ai-machine-learning-course/"
        }
      ]
    },
    {
      "@type": "Course",
      "@id": "https://www.dandesacademy.com/courses/ai-machine-learning-course/#course",
      "name": "AI & Machine Learning Course",
      "description": "Live instructor-led AI/ML training with hands-on projects, curriculum from fundamentals to production-ready systems, and interview preparation.",
      "provider": {
        "@id": "https://www.dandesacademy.com/#organization"
      },
      "inLanguage": "en-IN",
      "educationalLevel": "Beginner to Advanced",
      "teaches": [
        "Python",
        "Machine Learning",
        "Deep Learning",
        "NLP",
        "Generative AI",
        "LLMs",
        "MLOps"
      ],
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": [
          "online",
          "live"
        ],
        "instructor": {
          "@id": "https://www.dandesacademy.com/#founder"
        }
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.dandesacademy.com/courses/ai-machine-learning-course/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can join this course? Is it suitable for freshers and non-IT backgrounds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This course is designed for anyone who wants to build a career in AI/ML. It is suitable for freshers, working professionals, career switchers, and non-IT backgrounds. The program starts from fundamentals and gradually moves to advanced concepts."
          }
        },
        {
          "@type": "Question",
          "name": "Is the course online, and will I get recorded sessions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The course is conducted in online live mode. If you miss any class, recordings are provided so you can catch up at your convenience."
          }
        }
      ]
    }
  ]
};
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f7f8fa' }}>
      <Schema data={aiMlSchema} />
      <Header />
      <AimlHeroSection />
      <AppliedFeaturesSection />
      <AimlCurriculumSection />
      <AppliedAimlAudienceSection />
      <AimlLearningFormat />
      
      <AimlJourneySection />
      <AimlStructuredSection />
      <InstructorSection />
      <TestimonialsSection />
      <AimlFaqSection />
      <AimlCTASection />
      <Footer />
    </main>
  )
}
