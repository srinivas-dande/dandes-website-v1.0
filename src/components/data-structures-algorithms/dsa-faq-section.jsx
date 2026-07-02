'use client'
import { useState } from 'react'

const faqData = [
  {
    q: '1. Do I need prior coding experience?',
    a: 'Basic programming knowledge is helpful, but the course starts from the fundamentals and gradually progresses to advanced Data Structures & Algorithms concepts.',
  },
  {
    q: '2. How long is the course?',
    a: 'The Data Structures & Algorithms Course is a 6-month structured program covering core data structures, algorithms, problem-solving techniques, and coding interview preparation.',
  },
  {
    q: '3. Will this help me prepare for coding interviews?',
    a: 'Yes. The course focuses on coding interview preparation through structured learning, problem-solving patterns, coding practice, and interview-focused discussions.',
  },
  {
    q: '4. Are the classes live or recorded?',
    a: 'All classes are live, instructor-led sessions. Every session is recorded and uploaded to the LMS, allowing you to revisit concepts or catch up on missed classes.',
  },
  {
    q: '5. Can I switch to another batch if needed?',
    a: 'Yes. If your schedule changes, you can request a batch transfer, subject to the availability of seats in upcoming batches.',
  },
  {
    q: '6. What is the course fee?',
    a: 'Please contact our team or submit the inquiry form to receive the latest fee structure, available offers, and EMI options.',
  },
  {
    q: '7. Do you provide interview preparation support?',
    a: 'Yes. The course includes coding interview preparation, resume guidance, mock interview support, and career guidance to help you prepare for technical interviews.',
  },
  {
    q: '8. Is there a free demo before enrolling?',
    a: 'Yes. You can attend our free live demo to understand the course structure, teaching methodology, curriculum, and ask your questions before enrolling.',
  },
];

export function DsaFaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section style={{ backgroundColor: '#fff', padding: '80px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#1a1a1a', margin: '0 0 12px' }}>
            Frequently Asked Questions About the Data Structures & Algorithms Course
          </h2>
          <p style={{ color: '#6b7280', fontSize: '0.95rem', margin: 0 }}>
            Find answers to the most common questions about the DSA Course, including batches, live classes, recordings, interview preparation, and enrollment.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqData.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                style={{
                  backgroundColor: '#f9fafb',
                  borderRadius: 12,
                  borderLeft: '4px solid transparent',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px 24px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1a1a1a' }}>
                    {item.q}
                  </span>
                  <span style={{
                    fontSize: 22,
                    fontWeight: 300,
                    color: '#d12027',
                    marginLeft: 16,
                    flexShrink: 0,
                  }}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div style={{ padding: '0 24px 20px', color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    {item.a}
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
