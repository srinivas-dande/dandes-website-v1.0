"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "What programs does Dandes Academy offer?",
    answer: "Dandes Academy offers three career-focused programs: AI & Machine Learning, System Design, and Data Structures & Algorithms (DSA). Each program is designed to help learners build practical skills, complete real-world projects, and prepare for technical interviews.",
  },
  {
    question: "Are the classes live or recorded?",
    answer: "All classes are conducted live by experienced instructors. Every session is also recorded and made available through our LMS, allowing you to revisit lessons anytime for revision or catch up on missed classes.",
  },
  {
    question: "Which program should I choose?",
    answer: "The right program depends on your career goals. AI & Machine Learning is ideal for AI careers, System Design is designed for experienced engineers preparing for senior roles, and DSA is best for coding interviews and placement preparation. Our team can help you choose the most suitable program.",
  },
  {
    question: "Who are these programs designed for?",
    answer: "Our programs are designed for students, fresh graduates, working professionals, and career changers who want structured, project-based learning to advance their technology careers.",
  },
  {
    question: "Can I learn while working full-time or studying?",
    answer: "Yes. Our programs are designed to fit around busy schedules. With live online classes, recorded sessions, and LMS access, you can learn at your own pace while continuing your job or college education.",
  },
  {
    question: "Do you provide interview preparation?",
    answer: "Yes. We provide interview-focused preparation, including resume reviews, LinkedIn profile guidance, mock interviews, project discussions, and career guidance to help you prepare with confidence.",
  },
  {
    question: "Do you provide placement assistance?",
    answer: "Yes. We provide placement assistance through resume reviews, LinkedIn optimization, mock interviews, job search guidance, interview preparation, and referrals whenever opportunities are available. While we don't guarantee placements, we focus on helping you become interview-ready and improve your career opportunities.",
  },
  {
    question: "How can I get the course fee and next batch details?",
    answer: "Simply register for a Free Live Demo or submit the enquiry form on our website. Our team will share the complete curriculum, fee structure, upcoming batch schedule, and answer any questions you may have.",
  },
  {
    question: "Is there a Free Live Demo before enrolling?",
    answer: "Yes. We conduct Free Live Demo sessions where you can experience our teaching style, understand the curriculum, explore the learning roadmap, and ask questions before making your decision.",
  },
  {
    question: "What happens if I miss a live class?",
    answer: "Don't worry. Every live session is recorded and uploaded to the LMS, allowing you to catch up at your convenience. You can also clarify your doubts during subsequent classes or mentor support sessions.",
  },
  {
    question: "Do I need prior programming or AI experience?",
    answer: "No. Our programs are designed to take you from the fundamentals to advanced topics through a structured learning roadmap. Whether you're a student, a working professional, or transitioning into AI, you'll learn step by step with instructor guidance.",
  },
  {
    question: "Will I receive a certificate after completing the program?",
    answer: "Yes. Upon successfully completing the program and the required projects, you'll receive a course completion certificate from Dandes Academy. More importantly, you'll graduate with practical skills, real-world projects, and a portfolio that showcases your capabilities.",
  },
  {
    question: "How long will I have access to the LMS and class recordings?",
    answer: "You'll receive 5 years of LMS access, including class recordings, course materials, assignments, and learning resources. This allows you to revisit concepts and continue learning at your own pace.",
  },
  {
    question: "Will I work on real-world projects during the program?",
    answer: "Yes. Every program includes hands-on assignments and industry-oriented projects that help you apply concepts, strengthen practical skills, build your portfolio, and prepare for technical interviews.",
  },
  {
    question: "Who will teach the classes?",
    answer: "All programs are led by experienced instructors through live, instructor-led classes. Our AI & Machine Learning Program is taught by Srinivas Dande, Founder & Lead Trainer of Dandes Academy, ensuring a consistent teaching style, structured learning experience, and continuous mentorship throughout the program.",
  },
  
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-6 md:py-9 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-[#d12027]">Questions</span>
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about our programs, live classes, learning experience, career support, recordings, and more.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-b-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-foreground pr-4">
                  {index + 1}. {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-[#d12027] flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
