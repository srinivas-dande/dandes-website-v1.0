"use client"

import { useState } from "react"
import { PopupFormModal } from "../dandes/popup-form-modal"

export default function SrinivasHero() {

  const [showPopup, setShowPopup] = useState(false)

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
      }}
    >


      {/* ✅ Mobile Image */}
      <div className="block md:hidden">
        <img
          src="/srinivas/hero-bg-mobile-srinivas.png"
          alt=""
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Background Image */}
      <div
        className="hidden md:block"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none', // ✅ IMPORTANT (avoid click issues)
        }}
      >
        <img
          src="/srinivas/hero-bg.png"
          alt=""
          style={{
            width: '250%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'right center',
            transform: 'scale(1.08) translateX(-3%)',
          }}
        />
      </div>

      {/* Content Overlay */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1200,
          margin: '0 auto',
          padding: '80px 32px',
          minHeight: 420,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Left Content */}
        <div style={{ maxWidth: 700 }}>
          <h1
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: '#1a1a1a',
              lineHeight: 1.15,
              marginBottom: 28,
              margin: 0,
            }}
          >
            Srinivas Dande, Founder and Lead Instructor at Dandes Academy
          </h1>

          <p
            style={{
              fontSize: 18,
              color: '#4b5563',
              lineHeight: 1.7,
              marginTop: 28,
              marginBottom: 40,
              maxWidth: 620,
            }}
          >
            Srinivas Dande is the Founder and Lead Instructor at Dandes Academy.
            With 20+ years of experience, he brings a blend of real-world engineering,
            system architecture, and structured teaching that helps learners build strong
            fundamentals, work on practical projects, and prepare confidently for
            technical interviews.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowPopup(true)}
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
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Get course details
            </button>

            <button
              onClick={() => setShowPopup(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                fontSize: 16,
                fontWeight: 600,
                color: '#1a1a1a',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
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
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          section > div:nth-child(2) {
            padding: 60px 32px !important;
          }
          section > div:nth-child(2) > div h1 {
            font-size: 36px !important;
          }
        }
        @media (max-width: 640px) {
          section > div:nth-child(2) {
            padding: 40px 20px !important;
            min-height: 480px !important;
          }
          section > div:nth-child(2) > div h1 {
            font-size: 28px !important;
          }
          section > div:nth-child(2) > div p {
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
