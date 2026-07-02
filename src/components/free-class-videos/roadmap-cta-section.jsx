"use client"
import { useState } from "react"
import Link from "next/link"
import { PopupFormModal } from "../dandes/popup-form-modal"

export default function RoadmapCtaSection() {

  const [showPopup, setShowPopup] = useState(false)

  return (
    <section
      style={{
        padding: '60px 20px',
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          backgroundColor: '#e8f5f0',
          borderRadius: 24,
          padding: '80px 40px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Left decorative triangle */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            width: 0,
            height: 0,
            borderTop: '80px solid transparent',
            borderBottom: '80px solid transparent',
            borderLeft: '50px solid #a7e0c8',
          }}
        />

        {/* Bottom right decorative triangle */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 60,
            width: 0,
            height: 0,
            borderLeft: '70px solid transparent',
            borderRight: '70px solid transparent',
            borderBottom: '80px solid #a7e0c8',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            maxWidth: 800,
            margin: '0 auto',
          }}
        >
          {/* Heading */}
          <h2
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: '#111',
              marginBottom: 24,
              lineHeight: 1.2,
            }}
          >
            Ready For The Full Roadmap?
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: 16,
              color: '#555',
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            The free videos give you a taste. The webinar gives you the full picture. What the program covers, how long it takes, what you&apos;ll build, and whether it&apos;s the right fit for your goal.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
              flexWrap: 'wrap',
              marginBottom: 32,
            }}
          >
            {/* Primary button */}
            <Link
             href = "/free-class-videos"
              style={{
                backgroundColor: '#c91c2b',
                color: '#fff',
                padding: '16px 32px',
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Watch Free class videos
            </Link>

            {/* Secondary button with arrow */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              
              <button
                onClick={() => setShowPopup(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#111',
                  }}
                >
                  Register for the free webinar
                </span>

                <div
                  style={{
                    backgroundColor: '#c91c2b',
                    color: '#fff',
                    width: 40,
                    height: 40,
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
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Disclaimer */}
          <p
            style={{
              fontSize: 13,
              color: '#666',
              lineHeight: 1.6,
            }}
          >
            No spam. Your details are used only to share course information and contact you<br />
            about your inquiry.
          </p>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 640px) {
          h2 {
            font-size: 28px !important;
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
