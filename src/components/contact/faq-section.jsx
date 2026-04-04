'use client'

import { useState } from 'react'

const faqData = [
  {
    question: "Not ready to commit? That's okay.",
    answer: "No. The program is structured to start with foundations and build up step by step. Basic coding familiarity helps, but you do not need prior AI experience."
  },
  {
    question: "How quickly will I get a response?",
    answer: "We typically respond within a few hours on most days. WhatsApp messages get the fastest replies. If you write in over the weekend, expect a reply by Monday morning."
  },
  {
    question: "Can I call instead of filling the form?",
    answer: "Yes, you can reach us directly on WhatsApp at +91 7090366699. We prefer WhatsApp for faster responses and better tracking of your queries."
  },
  {
    question: "What if I'm not sure which course is right for me?",
    answer: "No problem! Just mention your background and goals in the message, and we'll help you figure out the best path. You can also start with the free webinar to get a clearer picture."
  },
  {
    question: "I filled out the form but haven't heard back. What should I do?",
    answer: "Please check your spam folder first. If you still haven't received a response within 24 hours, reach out to us directly on WhatsApp at +91 7090366699."
  },
  {
    question: "Can I visit in person?",
    answer: "We are an online-first academy, so all our classes and interactions happen virtually. However, if you're in Bangalore and would like to meet, feel free to reach out and we can arrange something."
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
        padding: '80px 24px',
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: 48,
          }}
        >
          <h2
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: 16,
            }}
          >
            FAQ
          </h2>
          <p
            style={{
              fontSize: 18,
              color: '#6b7280',
              lineHeight: 1.6,
            }}
          >
            Quick answers to common queries about batches, recordings, and career support.
          </p>
        </div>

        {/* FAQ Items */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {faqData.map((item, index) => (
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
                    color: '#1a1a1a',
                  }}
                >
                  {index + 1}. {item.question}
                </span>
                <span
                  style={{
                    fontSize: 24,
                    fontWeight: 300,
                    color: openIndex === index ? '#1a1a1a' : '#c81e1e',
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
                    backgroundColor: '#fff',
                  }}
                >
                  <p
                    style={{
                      fontSize: 16,
                      color: '#4b5563',
                      lineHeight: 1.7,
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
