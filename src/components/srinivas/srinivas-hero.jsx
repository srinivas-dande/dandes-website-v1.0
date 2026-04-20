"use client"

import { useState } from "react"
import Link from "next/link"
import { PopupFormModal } from "../dandes/popup-form-modal" 

export default function SrinivasHero() {
  
  const [showPopup, setShowPopup] = useState(false)

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '600px',
        backgroundColor: '#f8f9fa',
        backgroundImage: `
          linear-gradient(to right, #e5e7eb 1px, transparent 1px),
          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        overflow: 'hidden',
        
      }}
    >
      <div
        style={{
          maxWidth: '100%',
          padding: '80px 0 0 24px',
          display: 'flex',
          alignItems: 'center',
          gap: 60,
        }}
      >
        {/* Left Content */}
        <div style={{ flex: 1, maxWidth: 700 }}>
          <h1
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: '#1a1a1a',
              lineHeight: 1.15,
              marginBottom: 28,
            }}
          >
            Srinivas Dande, Founder and Lead Instructor at Dandes Academy
          </h1>

          <p
            style={{
              fontSize: 18,
              color: '#4b5563',
              lineHeight: 1.7,
              marginBottom: 40,
            }}
          >
            Srinivas Dande is the Founder and Lead Instructor at Dandes Academy. 
            With 20+ years of experience, he brings a blend of real-world engineering, 
            system architecture, and structured teaching that helps learners build strong 
            fundamentals, work on practical projects, and prepare confidently for 
            technical interviews.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <Link
              href="/free-class-videos"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 36px',
                backgroundColor: '#d12027',
                color: '#fff',
                fontSize: 16,
                fontWeight: 600,
                borderRadius: 8,
                textDecoration: 'none',
              }}
            >
              Get course details
            </Link>

            <button
              onClick={() => setShowPopup(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                fontSize: 16,
                fontWeight: 600,
                color: '#1a1a1a',
                textDecoration: 'none',
              }}
            >
              Register for Free AI/ML Webinar
              <span
                style={{
                  width: 36,
                  height: 36,
                  backgroundColor: '#d12027',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width={14} height={14} fill="none" stroke="#fff" strokeWidth={2.5}>
                  <path d="M5 3 L10 7 L5 11" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Right - Image Section */}
        <div
          style={{
            position: 'relative',
            flex: 1,
            minHeight: 520,
          }}
        >
          {/* Red Circle Background - positioned top right, partially cut off */}
          <img
            src="/srinivas/red-circle.png"
            alt="Red circle background"
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 490,
              height: 520,
              objectFit: 'contain',
              objectPosition: 'bottom right',
              zIndex: 2,
            }}
          />

          {/* Srinivas Image - positioned to overlap circle */}
          <img
            src="/srinivas/srinivas.png"
            alt="Srinivas Dande - Founder and Lead Instructor at Dandes Academy"
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 550,
              height: 620,
              objectFit: 'contain',
              objectPosition: 'bottom right',
              zIndex: 2,
            }}
          />

          {/* Experience Badge - positioned at chest level to the left of Srinivas */}
          <div
            style={{
              position: 'absolute',
              bottom: 150,
              right: 360,
              backgroundColor: '#fff',
              padding: '18px 26px',
              borderRadius: 12,
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              zIndex: 3,
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: 42,
                fontWeight: 700,
                color: '#d12027',
                lineHeight: 1,
              }}
            >
              20+
            </div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: '#6b7280',
                letterSpacing: 1.2,
                marginTop: 6,
              }}
            >
              YEARS EXPERIENCE
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          section > div {
            flex-direction: column;
            text-align: center;
            padding: 60px 24px;
          }
          section > div > div:first-child {
            max-width: 100%;
          }
          section > div > div:first-child h1 {
            font-size: 36px;
          }
          section > div > div:first-child > div {
            justify-content: center;
            flex-wrap: wrap;
          }
          section > div > div:last-child {
            margin-top: 40px;
          }
        }
        @media (max-width: 640px) {
          section {
            min-height: auto !important;
          }

          section > div {
            padding: 40px 16px !important;
          }

          section > div > div:last-child {
            min-height: auto !important;
            display: none;
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
