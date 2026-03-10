"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "What courses does Dandes Academy offer",
    answer: "Dandes Academy offers three core programs: AI and Machine Learning, System Design, and Data Structures and Algorithms. You can choose one based on your goal, career transition, senior interviews, or placements.",
  },
  {
    question: "Are the classes live or recorded",
    answer: "Classes are primarily live and instructor-led. However, all sessions are recorded and available on our LMS for you to catch up or revise at your convenience.",
  },
  {
    question: "Which course should I choose",
    answer: "It depends on your career goals. AI/ML is great for career transitions, System Design for senior roles, and DSA for placement preparation. Our counselors can help guide you.",
  },
  {
    question: "Who are these programs designed for",
    answer: "Our programs are designed for working professionals looking to upskill, students preparing for placements, and career changers transitioning into tech or AI roles.",
  },
  {
    question: "Can I learn while working full-time or managing college",
    answer: "Yes! Our programs are designed for busy schedules. With weekend batches, recordings, and flexible learning options, you can balance work or college alongside your learning.",
  },
  {
    question: "Do you provide interview preparation support",
    answer: "Absolutely. We provide resume reviews, mock interviews, LinkedIn profile optimization, and guidance on how to present your projects during interviews.",
  },
  {
    question: "Do you guarantee placement",
    answer: "While we don't guarantee placements, we provide comprehensive career support including interview preparation, resume building, and job referrals to maximize your chances.",
  },
  {
    question: "How do I get the course fees and next batch details",
    answer: "Register for our free webinar or fill out the enquiry form on our website. Our team will share the complete syllabus, fee structure, and next batch schedule with you.",
  },
  {
    question: "Is there a free session before enrolling",
    answer: "Yes, we conduct free webinars where you can experience our teaching style, understand the curriculum, and ask questions before making a decision.",
  },
  {
    question: "What if I miss classes or my schedule changes",
    answer: "All live sessions are recorded and available on the LMS. You can watch them at your convenience and use doubt sessions to catch up on anything you missed.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-[#d12027]">Questions</span>
          </h2>
          <p className="text-gray-600">
            Quick answers to common queries about batches, recordings, and career support.
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
