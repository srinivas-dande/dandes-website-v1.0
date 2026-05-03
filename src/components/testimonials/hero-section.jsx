'use client'
import { useState } from "react"
import Link from "next/link"
import { PopupFormModal } from "../dandes/popup-form-modal"


export default function HeroSection() {

  const [showPopup, setShowPopup] = useState(false)

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: 550,
      }}
    >

      {/* Desktop image */}
      <img
        src="/images/testimonials/hero-bg-Testimonials.png"
        alt=""
        aria-hidden="true"
        className="hero-bg-image desktop-image"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'right center',
          zIndex: 0,
        }}
      />


      {/* Mobile image */}
      <img
        src="/images/testimonials/hero-mobile-bg.png"
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

      {/* Content container */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1200,
          margin: '0 auto',
          padding: '30px 40px 80px',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        {/* Left content */}
        <div style={{ maxWidth: 620 }} className="hero-content">
          {/* Heading */}
          <h1
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: '#111',
              lineHeight: 1,
              marginBottom: 24,
            }}
          >
            Real Outcomes from Dandes Academy, Reviews, Role Transitions, and Salary Growth
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: 18,
              color: '#4B5563',
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            Real stories from learners who built AI/ML skills the way industry uses them: 
            strong fundamentals, hands-on projects, and interview-ready preparation.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 40 }}>
            {/* Red button */}
            <Link
              href="/courses"
              style={{
                backgroundColor: '#DC2626',
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
              <button style={{ fontSize: 15, fontWeight: 500, color: '#111', cursor: 'pointer'}}>
                Register for Free AI/ML Webinar
              </button>
              <button
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  backgroundColor: '#DC2626',
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

          <PopupFormModal
            showPopup={showPopup}
            setShowPopup={setShowPopup}
          />


          {/* Feature text with star */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            {/* Yellow star */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#FBBF24" style={{ flexShrink: 0, marginTop: 2 }}>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.6, margin: 0 }}>
              Live instructor-led training, structured roadmap, projects + capstone, 
              career support, and long-term access to recordings/materials.
            </p>
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
            font-size: 32px !important;
          }
        }
      `}</style>
    </section>
  )
}
