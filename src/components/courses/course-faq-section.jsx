"use client"

import { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: "1: Which course should I choose",
    answer:
      "If your goal is AI roles, choose AI and Machine Learning. If you are preparing for senior engineering interviews, choose System Design. If you want to improve coding rounds and placements, choose Data Structures and Algorithms. If you are unsure, share your background in the inquiry form, and we will guide you.",
  },
  {
    id: 2,
    question: "2: Are the classes live or recorded",
    answer:
      "All classes are live, instructor-led sessions. Recordings are uploaded to the LMS within 24 hours so you can revisit any session you miss or want to review.",
  },
  {
    id: 3,
    question: "3: Can I learn while working full-time or managing college",
    answer:
      "Yes. Batches are scheduled on weekends and weekday evenings specifically for working professionals and students with busy schedules.",
  },
  {
    id: 4,
    question: "4: Do you provide interview preparation support",
    answer:
      "Yes. Interview preparation is built into every program through mock interviews, resume reviews, LinkedIn optimization, and focused practice sessions.",
  },
  {
    id: 5,
    question: "5: Do you guarantee placements",
    answer:
      "We do not guarantee placements, but we prepare you thoroughly for interviews with structured practice, real projects, and career support guidance.",
  },
  {
    id: 6,
    question: "6: How do I get the syllabus, fees, and next batch timings",
    answer:
      "Fill out the inquiry form on this page or register for the free webinar. We will share the complete syllabus, fee structure, and upcoming batch schedule with you directly.",
  },
  {
    id: 7,
    question: "7: Is there a free webinar before enrolling",
    answer:
      "Yes. We run a free webinar where the instructor walks through the curriculum, format, and answers your questions. You can register using the button on this page.",
  },
  {
    id: 8,
    question: "8: What if I miss classes or my schedule changes",
    answer:
      "All live sessions are recorded and available on the LMS. You can catch up at your own pace without missing any content.",
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
