"use client"
import { useState } from "react"
import Link from "next/link"
import { PopupFormModal } from "../dandes/popup-form-modal"

export default function FinalCtaSection() {

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
          position: 'relative',
        }}
      >
        {/* Main container with lavender background */}
        <div
          style={{
            backgroundColor: '#f5f0fa',
            borderRadius: 16,
            padding: '60px 40px',
            position: 'relative',
            overflow: 'hidden',
            minHeight: 200,
          }}
        >
          {/* Left triangle - rotated, partially visible */}
          <div
            style={{
              position: 'absolute',
              left: -40,
              top: '50%',
              transform: 'translateY(-50%) rotate(25deg)',
              width: 0,
              height: 0,
              borderLeft: '80px solid transparent',
              borderRight: '80px solid transparent',
              borderBottom: '140px solid #c9b8e0',
              opacity: 0.6,
              zIndex: 1,
            }}
          />

          {/* Right triangle - bottom right */}
          <div
            style={{
              position: 'absolute',
              right: -20,
              bottom: -30,
              width: 0,
              height: 0,
              borderLeft: '100px solid transparent',
              borderRight: '100px solid transparent',
              borderBottom: '160px solid #c9b8e0',
              transform: 'rotate(-30deg)',
              opacity: 0.7,
              zIndex: 1,
            }}
          />

          {/* Content */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 20,
            }}
          >
            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <Link
                href = "/free-class-videos"
                style={{
                  backgroundColor: '#c8102e',
                  color: '#fff',
                  padding: '16px 32px',
                  borderRadius: 8,
                  fontSize: 16,
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Watch free class videos
              </Link>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  backgroundColor: '#fff',
                  padding: '8px 8px 8px 24px',
                  borderRadius: 8,
                }}
              >
                <button
                  onClick={() => setShowPopup(true)}

                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#111',
                  }}
                >
                  Register for the free AI/ML webinar
                </button>
                <button
                  style={{
                    backgroundColor: '#c8102e',
                    color: '#fff',
                    width: 40,
                    height: 40,
                    borderRadius: 6,
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Disclaimer */}
            <p
              style={{
                fontSize: 14,
                color: '#666',
                textAlign: 'center',
                maxWidth: 500,
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              Free. Live. No spam. Your details are only used to send webinar access.
            </p>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 640px) {
          section > div > div {
            padding: 40px 20px !important;
          }
          section > div > div > div:last-child > div:first-child {
            flex-direction: column !important;
          }
          section > div > div > div:last-child > div:first-child > button {
            width: 100% !important;
          }
          section > div > div > div:last-child > div:first-child > div {
            width: 100% !important;
            justify-content: space-between !important;
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
