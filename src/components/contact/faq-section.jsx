'use client'

import { useState } from 'react'

const faqData = [
  {
    question: "Not Ready to Enroll Yet?",
    answer:
      "Absolutely! Choosing the right learning program is an important decision. Attend one of our free demo sessions, speak with our program advisors, and get all your questions answered before enrolling. Take your time—we're here to help whenever you're ready.",
  },
  {
    question: "How Soon Will I Receive a Response?",
    answer:
      "Our team strives to respond to all inquiries as quickly as possible during business hours. Whether you contact us through the contact form, WhatsApp, or phone, we'll get back to you at the earliest.",
  },
  {
    question: "Can I Contact You Directly Instead of Filling Out the Form?",
    answer: (
    <>
      Yes! You're welcome to call or message us directly on WhatsApp at{" "}
      <a
        href="https://wa.me/917090366699"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontWeight: 600,
          color: "#d12027",
          textDecoration: "none",
        }}
      >
        +91 7090366699
      </a>
      . While the contact form helps us understand your requirements better,
      we're happy to assist you through whichever method is most convenient.
    </>
  ),
  },
  {
    question: "I'm Not Sure Which Course Is Right for Me. Can You Help?",
    answer:
      "Of course! Tell us about your background, current role, and career goals, and our team will recommend the most suitable learning path. You can also attend a free demo session to better understand the curriculum before making a decision.",
  },
  {
    question: "I Submitted the Form but Haven't Heard Back. What Should I Do?",
    answer:
      "If you haven't received a response within one business day, please check your spam or junk folder. If you still don't see any communication from us, feel free to contact us directly via WhatsApp at , and we'll be happy to assist you.",
  },
  {
    question: "Can I Visit Dandes Academy in Person?",
    answer:
      "Dandes Academy is an online-first learning platform, so all classes, mentoring sessions, and interactions are conducted virtually. If you're in Bangalore and would like to meet us, please contact us in advance and we'll do our best to arrange a suitable time.",
  },
];

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
