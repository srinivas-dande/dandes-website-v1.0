'use client'
import { useState } from "react"
import { PopupFormModal } from "../dandes/popup-form-modal"

export default function TeachingPreviewSection() {

  const [showPopup, setShowPopup] = useState(false)

  const benefits = [
    
    <>
      Taught by Srinivas Dande, the same instructor who leads the full <br />
      program.
    </>,
    <>
      Covers topics across the curriculum: Python, ML, <br />
      Deep Learning, and more.
    </>,
    
    'No sign-up needed for most videos. Just watch.',
    'Want the full structured path? The webinar is your next step.',
  ]

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: 520,
      }}
    >

      {/* Desktop image */}
      <img
        src="/images/webinars/teaching-preview-bg.png"
        alt=""
        aria-hidden="true"
        className="hero-bg-image desktop-image"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'right center',
          zIndex: 0,
        }}
      />

      {/* Mobile image */}
      <img
        src="/images/webinars/teaching-preview-bg-mobile.png"
        alt=""
        aria-hidden="true"
        className="hero-bg-image mobile-image"
        style={{
          display: 'none',
          width: '100%',
          height: '350px',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />


      {/* Content container - positioned on the left */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1200,
          margin: '0 auto',
          padding: '60px 32px',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        {/* Left - Content */}
        <div style={{ maxWidth: 580 }} className="teaching-content">
          {/* Heading */}
          <h2
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: '#111',
              marginBottom: 20,
              lineHeight: 1.15,
            }}
          >
            See the Teaching Before You Decide
          </h2>

          {/* Description paragraph */}
          <p
            style={{
              fontSize: 16,
              color: '#374151',
              lineHeight: 1.6,
              marginBottom: 24,
            }}
          >
            These are real class recordings from the Dandes Academy AI/ML program. 
            Not trailers. Not demo reels. Actual sessions, so you know exactly what 
            learning here feels like before you commit to anything.
          </p>

          {/* Checkmark list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
            {benefits.map((benefit, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    backgroundColor: '#dcfce7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.6, margin: 0 }}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            {/* Red button */}
            <button
              onClick={() => setShowPopup(true)}

              style={{
                backgroundColor: '#d12027',
                color: '#fff',
                padding: '14px 24px',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Get course details
            </button>

            
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .teaching-content {
            max-width: 100% !important;
            background: rgba(255,255,255,0.95);
            padding: 30px;
            border-radius: 16px;
          }
        }
        @media (max-width: 768px) {
          .desktop-image {
            display: none !important;
          }
          .mobile-image {
            display: block !important;
          }
          section {
            min-height: auto !important;
          }
          .teaching-bg-image {
            position: relative !important;
            height: 350px !important;
            object-position: center !important;
          }
          section > div {
            padding: 40px 20px !important;
          }
          .teaching-content {
            max-width: 100% !important;
            background: #fff;
            padding: 24px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          }
          .teaching-content h2 {
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
