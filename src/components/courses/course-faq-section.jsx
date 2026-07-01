"use client"

import { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: "1: Which course should I choose",
    answer:
      "If your goal is to build a career in AI, choose the AI & Machine Learning Course. If you are preparing for senior software engineering roles, choose the System Design Course. If you want to strengthen your coding skills for placements or technical interviews, choose the Data Structures & Algorithms Course. If you're unsure, share your background in the inquiry form, and our team will help you choose the right program.",
  },
  {
    id: 2,
    question: "2: Are the classes live or recorded",
    answer:
      "All classes are live, instructor-led sessions. Every session is recorded and uploaded to the LMS within 24 hours, allowing you to revisit concepts or catch up on any classes you miss.",
  },
  {
    id: 3,
    question: "3: Can I learn while working full-time or managing college",
    answer:
      "Yes. Our programs are designed for working professionals and students. With weekday evening and weekend batches, you can learn without disrupting your work or academic schedule.",
  },
  {
    id: 4,
    question: "4: Do you provide interview preparation support",
    answer:
      "Yes. Every program includes interview preparation through mock interviews, resume reviews, LinkedIn profile optimization, portfolio guidance, and career mentoring.",
  },
  {
    id: 5,
    question: "5: Do you guarantee placements",
    answer:
      "We do not guarantee placements. However, we prepare you thoroughly with structured learning, real-world projects, interview preparation, and career guidance to help you become job-ready.",
  },
  {
    id: 6,
    question: "6: How do I get the syllabus, fees, and next batch schedule",
    answer:
      "Simply fill out the inquiry form on this page. We'll share the complete syllabus, fee structure, and upcoming batch schedule with you. You can also attend our free live demo to learn more about the program.",
  },
  {
    id: 7,
    question: "7: Is there a free demo before enrolling",
    answer:
      "Yes. We conduct a free live demo where the instructor explains the course roadmap, teaching approach, projects, and career opportunities, followed by a live Q&A session.",
  },
  {
    id: 8,
    question: "8: What if I miss classes or my schedule changes",
    answer:
      "No problem. Every live session is recorded and uploaded to the LMS within 24 hours, so you can continue learning at your own pace whenever your schedule allows.",
  },
  {
    id: 9,
    question: "9: Do I need prior experience to join?",
    answer:
      "No. Our programs follow a structured learning path that starts from the fundamentals and gradually progresses to advanced topics. The prerequisites vary by course, and our team will help you determine the best fit based on your background.",
  },
  {
    id: 10,
    question: "10: Will I receive a certificate after completing the course?",
    answer:
      "Yes. Upon successfully completing the program and meeting the course requirements, you'll receive a Course Completion Certificate from Dandes Academy.",
  },
]

export function CourseFaqSection() {
  const [openId, setOpenId] = useState(1)

  const toggle = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[820px] mx-auto px-4 lg:px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-3">
            Frequently Asked{' '}
            <span style={{ color: '#d12027' }}>Questions</span>
          </h2>
          <p className="text-gray-500 text-base">
            Quick answers to common queries about batches, recordings, and career support.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  backgroundColor: '#ffffff',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  style={{ background: 'none', cursor: 'pointer' }}
                >
                  <span
                    className="text-base font-semibold"
                    style={{ color: '#1a1a1a' }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="text-xl font-light flex-shrink-0 ml-4"
                    style={{ color: '#d12027', lineHeight: 1 }}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div
                    className="px-6 pb-5"
                    style={{ borderTop: '1px solid #f3f4f6' }}
                  >
                    <p
                      className="text-sm leading-relaxed pt-4"
                      style={{ color: '#4b5563' }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
