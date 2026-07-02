'use client'
import { useState } from 'react'

const faqData = [
  {
    q: '1. Do I need prior System Design experience?',
    a: 'No. The course starts with the fundamentals and gradually progresses to advanced System Design concepts. Basic programming knowledge is recommended, but prior System Design experience is not required.',
  },
  {
    q: '2. Is this course suitable for working professionals?',
    a: 'Yes. The course is designed for working professionals with weekday evening and weekend live classes. All sessions are recorded and available on the LMS for flexible learning.',
  },
  {
    q: '3. Will this help me prepare for System Design interviews?',
    a: 'Yes. The course includes High-Level Design (HLD), Low-Level Design (LLD), real-world case studies, architecture discussions, and interview-focused practice to help you perform confidently in System Design interviews.',
  },
  {
    q: '4. How long is the course?',
    a: 'The System Design Course is a 6-month structured program covering High-Level Design, Low-Level Design, real-world case studies, and interview preparation.',
  },
  {
    q: '5. Will I work on real-world System Design problems?',
    a: "Yes. Throughout the course, you'll design systems such as BookMyShow, Amazon, Swiggy, Uber, WhatsApp, Netflix, URL Shortener, Parking Lot, and more to gain practical experience.",
  },
  {
    q: '6. Are the classes live or recorded?',
    a: 'All classes are live, instructor-led sessions. Every session is recorded and uploaded to the LMS, allowing you to revisit concepts or catch up on missed classes.',
  },
  {
    q: '7. Can I switch to another batch if needed?',
    a: 'Yes. If your schedule changes, you can request a batch transfer, subject to the availability of seats in upcoming batches.',
  },
  {
    q: '8. Do you provide interview preparation support?',
    a: 'Yes. The course includes System Design interview preparation, mock interviews, resume guidance, and career support to help you prepare for senior software engineering roles.',
  },
  {
    q: '9. What is the course fee?',
    a: 'Please contact our team or submit the inquiry form to receive the latest fee structure, available offers, and EMI options.',
  },
  {
    q: '10. Is there a free demo before enrolling?',
    a: 'Yes. You can attend our free live demo to understand the course structure, teaching methodology, curriculum, and ask questions before enrolling.',
  },
];

export function SdFaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section style={{ backgroundColor: '#fff', padding: '80px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#1a1a1a', margin: '0 0 12px' }}>
            Frequently Asked Questions About the System Design Course
          </h2>
          <p style={{ color: '#6b7280', fontSize: '0.95rem', margin: 0 }}>
            Quick answers to common queries about batches, recordings, and career support.
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
