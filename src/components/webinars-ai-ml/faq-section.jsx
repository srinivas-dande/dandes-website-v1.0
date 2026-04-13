"use client"

import { useState } from 'react'

const faqData = [
  {
    question: "Are the webinars really free?",
    answer: "Yes. No payment required, no hidden upsell mid-session. You attend, you learn, you decide."
  },
  {
    question: "Are these live sessions or recorded?",
    answer: "These are live sessions where you can interact in real-time. Recordings are available for registered participants who miss a session."
  },
  {
    question: "Will I be pushed to buy the course during the webinar?",
    answer: "No. The webinar is designed to give you genuine value and clarity. If the program fits your goals, we'll share how to join, but there's no pressure."
  },
  {
    question: "Can I ask questions during the webinar?",
    answer: "Yes, there's a dedicated Q&A segment at the end of every session. You can also drop questions in the chat throughout."
  },
  {
    question: "What should I do if I miss a session?",
    answer: "Register anyway. We'll send you the recording link so you can watch at your convenience."
  },
  {
    question: "Is there a webinar for System Design or DSA too?",
    answer: "Currently, our webinars focus on AI/ML. System Design and DSA webinars may be added in the future based on demand."
  }
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section
      style={{
        padding: '80px 0',
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: 36,
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 50,
            color: '#111',
          }}
        >
          Frequently Asked <span style={{ color: '#d12027' }}>Questions</span>
        </h2>

        {/* FAQ Items */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {faqData.map((faq, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: 12,
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
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
                  }}
                >
                  {index + 1}: {faq.question}
                </span>
                <span
                  style={{
                    fontSize: 24,
                    fontWeight: 300,
                    color: openIndex === index ? '#111' : '#d12027',
                    flexShrink: 0,
                    marginLeft: 16,
                  }}
                >
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div
                  style={{
                    padding: '0 24px 20px 24px',
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
            font-size: 28px !important;
          }
          button span:first-child {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  )
}
