"use client"

import { useState } from "react"
import Link from "next/link"
import { PopupFormModal } from "../dandes/popup-form-modal" 

export default function NotReadyCommit() {

  const [showPopup, setShowPopup] = useState(false)

  return (
    <section
      style={{
        padding: '60px 24px',
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
        {/* Main Card with Purple Background */}
        <div
          style={{
            backgroundColor: '#f5eefa',
            borderRadius: 24,
            padding: '80px 60px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Left Triangle - lighter purple, partially visible */}
          <div
            style={{
              position: 'absolute',
              left: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 0,
              height: 0,
              borderTop: '60px solid transparent',
              borderBottom: '60px solid transparent',
              borderRight: '80px solid #e0d4eb',
            }}
          />

          {/* Second Left Triangle - smaller, below */}
          <div
            style={{
              position: 'absolute',
              left: 30,
              bottom: 60,
              width: 0,
              height: 0,
              borderLeft: '40px solid transparent',
              borderRight: '40px solid transparent',
              borderBottom: '60px solid #d8c9e8',
              transform: 'rotate(-30deg)',
            }}
          />

          {/* Right Triangle - darker purple */}
          <div
            style={{
              position: 'absolute',
              right: 40,
              bottom: -30,
              width: 0,
              height: 0,
              borderLeft: '80px solid transparent',
              borderRight: '80px solid transparent',
              borderBottom: '120px solid #c9a8e0',
              transform: 'rotate(15deg)',
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
                fontSize: 42,
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: 24,
                lineHeight: 1.2,
              }}
            >
              {"Not Ready To Commit? That's Okay."}
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 18,
                color: '#4b5563',
                lineHeight: 1.6,
                marginBottom: 40,
              }}
            >
              {"Start with the free webinar. You'll get a clear roadmap, see how the program is structured, and get your questions answered live. Before you make any decision."}
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 24,
                marginBottom: 40,
                flexWrap: 'wrap',
              }}
            >
              {/* Primary Button */}
              <Link
                href="/free-class-videos"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#c41e3a',
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 600,
                  padding: '16px 32px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  transition: 'background-color 0.2s',
                }}
              >
                Watch free class videos
              </Link>

              {/* Secondary Link */}
              <button
                onClick={() => setShowPopup(true)}
                
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 12,
                  color: '#1a1a1a',
                  fontSize: 16,
                  fontWeight: 600,
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                Register for the free webinar
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                    backgroundColor: '#c41e3a',
                    borderRadius: '50%',
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Footer Text */}
            <p
              style={{
                fontSize: 14,
                color: '#6b7280',
                lineHeight: 1.6,
              }}
            >
              Live online classes with LMS recordings. No spam, your details are used only to
              <br />
              share course information and contact you about your inquiry.
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          section > div > div {
            padding: 60px 24px !important;
          }
          h2 {
            font-size: 28px !important;
          }
          p {
            font-size: 16px !important;
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
