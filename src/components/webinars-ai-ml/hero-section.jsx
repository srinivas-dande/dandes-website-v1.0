'use client'
import { useState } from "react"
import Link from "next/link"
import { PopupFormModal } from "../dandes/popup-form-modal"


export default function HeroSection() {

  const [showPopup, setShowPopup] = useState(false)

  const benefits = [
    'Free to attend. No credit card. No catch.',
    'Live sessions, not pre-recorded replays',
    'Ask questions in real time',
    'Walk away with a clear roadmap, not just more confusion',
  ]

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: 580,
      }}
    >
      {/* Desktop image */}
      <img
        src="/images/webinars-ai-ml/hero-bg-ml.png"
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
        src="/images/webinars-ai-ml/hero-mobile-bg-ml.png"
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
        <div style={{ maxWidth: 580 }} className="hero-content">
          {/* Heading */}
          <h1
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: '#111',
              marginBottom: 20,
              lineHeight: 1.15,
            }}
          >
            Free Live Webinars. Get Clarity Before You Enroll.
          </h1>

          {/* Description paragraph */}
          <p
            style={{
              fontSize: 17,
              color: '#374151',
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            Not sure where to start with AI and ML? Each webinar gives you a structured 
            roadmap, honest answers about what learning actually takes, and a live Q&A 
            with Srinivas Dande. Before you commit to anything.
          </p>

          {/* Checkmark list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
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
                <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.6, margin: 0 }}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            {/* Red button */}
            <Link
              href = "/ai-machine-learning-course"
              style={{
                backgroundColor: '#d12027',
                color: '#fff',
                padding: '16px 32px',
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Get course details
            </Link>

            {/* Register for webinar */}
            <div
              onClick={() => setShowPopup(true)}

              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                backgroundColor: '#fff',
                padding: '8px 8px 8px 20px',
                borderRadius: 50,
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              }}
            >
              <button style={{ fontSize: 15, fontWeight: 500, color: '#111', cursor: 'pointer', }}>
                Register for the free AI/ML webinar
              </button>
              <button
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  backgroundColor: '#d12027',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .hero-content {
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
          .hero-bg-image {
            position: relative !important;
            height: 350px !important;
            object-position: center !important;
          }
          section > div {
            padding: 40px 20px !important;
          }
          .hero-content {
            max-width: 100% !important;
            background: #fff;
            padding: 24px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          }
          .hero-content h1 {
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
