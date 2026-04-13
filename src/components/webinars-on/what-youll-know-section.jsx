"use client"

const benefits = [
  "Which AI/ML role fits your background best",
  "What companies actually look for in 2026",
  "A practical learning roadmap in the right order",
  "How to build a portfolio that helps you get shortlisted",
  
]

export default function WhatYoullKnowSection() {
  return (
    <section
      style={{
        padding: '80px 0',
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 60,
          }}
          className="what-youll-know-container"
        >
          {/* Left - Image */}
          <div
            style={{
              flex: '0 0 45%',
              maxWidth: '45%',
            }}
            className="what-youll-know-image"
          >
            <img
              src="/images/webinars-on/team-meeting.jpg"
              alt="Team of professionals collaborating in a meeting"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 16,
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* Right - Content */}
          <div
            style={{
              flex: 1,
              minWidth: 0,
            }}
            className="what-youll-know-content"
          >
            <h2
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: '#111',
                marginBottom: 20,
                lineHeight: 1.2,
                marginTop: 0,
              }}
            >
              What You&apos;ll Know After 60 Minutes
            </h2>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: '#555',
                marginBottom: 28,
              }}
            >
              Most professionals do not need more random tutorials. They need clarity on what role to target, what to learn next, and how to make the shift while working full-time.
            </p>

            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: '#111',
                marginBottom: 20,
              }}
            >
              In this live webinar, you&apos;ll get:
            </h3>

            {/* Benefits list */}
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                marginBottom: 32,
              }}
            >
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    marginBottom: 14,
                  }}
                >
                  {/* Green checkmark circle */}
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      backgroundColor: '#10b981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span
                    style={{
                      fontSize: 16,
                      color: '#444',
                      lineHeight: 1.5,
                    }}
                  >
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              style={{
                backgroundColor: '#d12027',
                color: '#fff',
                padding: '14px 28px',
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              Get course details
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 900px) {
          .what-youll-know-container {
            flex-direction: column !important;
          }
          .what-youll-know-image {
            flex: none !important;
            max-width: 100% !important;
            width: 100% !important;
            margin-bottom: 32px;
          }
          .what-youll-know-content {
            width: 100% !important;
          }
        }
        @media (max-width: 640px) {
          h2 {
            font-size: 26px !important;
          }
          section {
            padding: 50px 0 !important;
          }
        }
      `}</style>
    </section>
  )
}
