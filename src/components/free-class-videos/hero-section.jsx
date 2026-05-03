'use client'
import { useState } from "react"
import { PopupFormModal } from "../dandes/popup-form-modal"

export default function HeroSection() {

  const [showPopup, setShowPopup] = useState(false)

  return (
    <section
      style={{
        backgroundColor: '#f8f9fa',
        backgroundImage: `
          linear-gradient(to right, #e5e5e5 1px, transparent 1px),
          linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        padding: '80px 20px',
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Heading */}
        <h1
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: '#111',
            marginBottom: 8,
            lineHeight: 1.2,
          }}
          className="hero-heading"
        >
          Free Class Videos
        </h1>

        {/* Subheading in red */}
        <p
          style={{
            fontSize: 40,
            fontWeight: 700,
            color: '#C41E3A',
            marginBottom: 24,
            lineHeight: 1.2,
          }}
          className="hero-subheading"
        >
          (Python, Pandas, System Design, DSA)
        </p>

        {/* Description */}
        <p
          style={{
            fontSize: 18,
            color: '#555',
            lineHeight: 1.7,
            marginBottom: 40,
            maxWidth: 800,
            margin: '0 auto 40px auto',
          }}
        >
          Welcome to the Dandes Academy free video library. These full-length sessions help you build strong
          fundamentals in Python and Pandas, as well as interview-focused topics such as system design basics
          and self-balancing trees. Pick a track below or follow the recommended order to learn step by step.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          {/* Primary CTA */}
          <button
           
            onClick={() => {
              window.dispatchEvent(new Event("openFirstVideo"))
            }}
            style={{
              backgroundColor: '#C41E3A',
              color: 'white',
              padding: '16px 40px',
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Watch videos
          </button>

          {/* Secondary CTA */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              backgroundColor: 'white',
              padding: '8px 8px 8px 24px',
              borderRadius: 50,
            }}
          >
            <button
              onClick={() => setShowPopup(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                backgroundColor: 'white',
                padding: '8px 8px 8px 24px',
                borderRadius: 50,
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#111',
                }}
              >
                Join the free AI/ML webinar
              </span>

              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#C41E3A',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-heading {
            font-size: 32px !important;
          }
          .hero-subheading {
            font-size: 24px !important;
          }
        }
      `}</style>
      <PopupFormModal
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />

    </section>
  )
}
