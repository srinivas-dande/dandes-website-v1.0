"use client"

const benefits = [
  "What AI engineering and ML roles actually expect in 2026",
  "Which skills matter, in what order, and why",
  "What a realistic learning plan looks like for your background",
  "Guidance on roles to target and what interviews expect.",
  
]

function GreenCheckIcon() {
  return (
    <div
      style={{
        width: 24,
        height: 24,
        borderRadius: '50%',
        backgroundColor: '#10b981',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  )
}

export default function WhatYouGetSection() {
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
          className="what-you-get-container"
        >
          {/* Left - Image */}
          <div
            style={{
              flex: '0 0 45%',
              maxWidth: '45%',
            }}
            className="what-you-get-image"
          >
            <img
              src="/images/aiml/code-see.png"
              alt="Team collaborating on AI/ML projects"
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
            className="what-you-get-content"
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
              What You Actually Get From Attending
            </h2>

            <p
              style={{
                fontSize: 16,
                color: '#555',
                lineHeight: 1.6,
                marginBottom: 28,
              }}
            >
              A lot of people spend weeks researching AI/ML programs, comparing syllabus PDFs, reading reviews, and still aren&apos;t sure. The webinar shortcuts that.
            </p>

            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: '#111',
                marginBottom: 20,
              }}
            >
              In one live session, you&apos;ll understand:
            </h3>

            {/* Benefits list */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                marginBottom: 28,
              }}
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                  }}
                >
                  <GreenCheckIcon />
                  <span
                    style={{
                      fontSize: 16,
                      color: '#333',
                      lineHeight: 1.5,
                    }}
                  >
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <p
              style={{
                fontSize: 16,
                color: '#555',
                lineHeight: 1.6,
                marginBottom: 28,
              }}
            >
              Then there&apos;s a live Q&A. No scripted answers. Ask what you actually want to know.
            </p>

            {/* CTA Button */}
            <button
              style={{
                backgroundColor: '#d12027',
                color: '#fff',
                padding: '14px 24px',
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
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
          .what-you-get-container {
            flex-direction: column !important;
            gap: 32px !important;
          }

          .what-you-get-image {
            width: 100% !important;
            max-width: 100% !important;
            flex: none !important;
          }

          .what-you-get-content {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}
