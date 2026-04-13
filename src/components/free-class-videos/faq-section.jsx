'use client'

import { useState } from 'react'

const faqData = [
  {
    question: 'Are these videos completely free?',
    answer: 'Yes. This page is a free library of full-length classes across Python, Pandas, DSA, and system design topics.',
  },
  {
    question: 'What is the best order to watch the videos?',
    answer: 'We recommend starting with Python foundations, then moving to Pandas for data analysis, followed by System Design interview prep, and finally DSA deep dives.',
  },
  {
    question: 'Do I need to sign up to watch the videos?',
    answer: 'No sign-up is required. All videos are freely accessible on this page without any registration.',
  },
  {
    question: 'Who are these videos for?',
    answer: 'These videos are for engineers and students who want to build strong fundamentals in Python, Pandas, System Design, and Data Structures & Algorithms.',
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
            fontSize: 36,
            fontWeight: 700,
            color: '#111',
            textAlign: 'center',
            marginBottom: 16,
          }}
        >
          FAQ
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
          {faqData.map((faq, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #e5e5e5',
                borderRadius: 12,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
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
                  {index + 1}. {faq.question}
                </span>
                <span
                  style={{
                    fontSize: 24,
                    fontWeight: 300,
                    color: openIndex === index ? '#111' : '#c8102e',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {/* Answer */}
              <div
                style={{
                  maxHeight: openIndex === index ? 200 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                }}
              >
                <p
                  style={{
                    padding: '0 28px 24px 28px',
                    fontSize: 15,
                    color: '#555',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
