'use client'

import { useState } from 'react'

const faqData = [
  {
    question: 'Is this really free?',
    answer: 'No hidden payment. No credit card. Register, attend, and decide.',
  },
  {
    question: "What if I can't make it to this session?",
    answer: 'We run sessions regularly. If you miss one, you can register for the next available slot. We will also share recording access for registered attendees.',
  },
  {
    question: 'Will I be pushed to enroll during the webinar?',
    answer: 'No. The webinar is about giving you clarity, not selling you a course. We will share course details for those who are interested, but there is no pressure.',
  },
  {
    question: "I've been in tech for 15+ years. Is this too basic for me?",
    answer: 'Not at all. The webinar is designed for experienced professionals who want to transition into AI/ML. We cover strategic topics like role selection, realistic timelines, and how to leverage your existing experience.',
  },
  {
    question: 'What if I have a very specific question about my situation?',
    answer: 'There is a live Q&A at the end of every session. You can ask anything about your background, career goals, or learning path.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section
      style={{
        padding: '80px 20px',
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: 32,
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 50,
            color: '#111',
          }}
        >
          Frequently Asked <span style={{ color: '#d12027' }}>Questions</span>
        </h2>

        {/* FAQ Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {faqData.map((faq, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: 12,
                overflow: 'hidden',
                backgroundColor: '#fff',
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                style={{
                  width: '100%',
                  padding: '24px 28px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: '#111',
                    paddingRight: 20,
                  }}
                >
                  {index + 1}. {faq.question}
                </span>
                <span
                  style={{
                    fontSize: 24,
                    fontWeight: 300,
                    color: openIndex === index ? '#111' : '#d12027',
                    flexShrink: 0,
                  }}
                >
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div
                  style={{
                    padding: '0 28px 24px 28px',
                  }}
                >
                  <p
                    style={{
                      fontSize: 15,
                      color: '#666',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 640px) {
          h2 {
            font-size: 26px !important;
          }
          button span:first-child {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  )
}
