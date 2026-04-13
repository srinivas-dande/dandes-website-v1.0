"use client"

import { useState } from 'react'

const faqs = [
  {
    question: "Are these real class recordings or promotional content?",
    answer: "Real class recordings. These are actual sessions from the AI/ML program, not edited highlights or marketing videos. What you see is how Srinivas teaches."
  },
  {
    question: "Do I need to sign up or pay anything to watch?",
    answer: "No sign up or payment required. All free videos are available to watch immediately without any registration or payment."
  },
  {
    question: "Can I learn the full AI/ML curriculum from these videos?",
    answer: "These free videos cover selected topics from the curriculum. For the complete structured learning path, you would need to enroll in the full program."
  },
  {
    question: "What should I watch if I'm a complete beginner?",
    answer: "Start with the Python fundamentals session, then move to Machine Learning core concepts. These will give you a solid foundation before exploring advanced topics."
  },
  {
    question: "What should I watch if I'm an experienced engineer?",
    answer: "Jump directly to Deep Learning, Generative AI and LLM concepts, or the real-world project walkthroughs to see the depth and practical focus of the teaching."
  },
  {
    question: "What's the next step after watching?",
    answer: "Register for the free webinar to get the full roadmap, understand the program structure, and see if it's the right fit for your learning goals."
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
          maxWidth: 900,
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: 36,
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 16,
            color: '#111',
          }}
        >
          Frequently Asked{' '}
          <span style={{ color: '#d12027' }}>Questions</span>
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 16,
            color: '#666',
            textAlign: 'center',
            marginBottom: 48,
          }}
        >
          Quick answers to common queries about batches, recordings, and career support.
        </p>

        {/* FAQ Items */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: 12,
                overflow: 'hidden',
              }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFaq(index)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 24px',
                  backgroundColor: '#fff',
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
                    fontWeight: 400,
                    color: openIndex === index ? '#111' : '#d12027',
                    flexShrink: 0,
                    marginLeft: 16,
                  }}
                >
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div
                  style={{
                    padding: '0 24px 20px 24px',
                    backgroundColor: '#fff',
                  }}
                >
                  <p
                    style={{
                      fontSize: 15,
                      color: '#555',
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
