'use client'
import { useState } from "react"
import { PopupFormModal } from "../dandes/popup-form-modal"  

export default function JoinTheJourney() {

  const [showPopup, setShowPopup] = useState(false)

  return (
    <section style={{ padding: '80px 24px', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 80, alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Left Content */}
          <div style={{ flex: '1 1 450px' }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: '#1a1a1a', marginBottom: 24 }}>
              Join The Journey
            </h2>
            
            <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.7, marginBottom: 32 }}>
              If you are exploring AI and ML roles and want a structured roadmap, start with the free webinar or download the detailed course brochure to review the full coverage.
            </p>
            
            <h3 style={{ fontSize: 20, fontWeight: 600, color: '#1a1a1a', marginBottom: 24 }}>
              For queries, reach out anytime.
            </h3>
            
            <div style={{ marginBottom: 28 }}>
              <p style={{ fontSize: 13, color: '#9ca3af', marginBottom: 4 }}>Email</p>
              <p style={{ fontSize: 18, fontWeight: 500, color: '#1a1a1a' }}>hello@dandesacademy.com</p>
            </div>
            
            <div style={{ marginBottom: 28 }}>
              <p style={{ fontSize: 13, color: '#9ca3af', marginBottom: 4 }}>WhatsApp</p>
              <p style={{ fontSize: 18, fontWeight: 500, color: '#1a1a1a' }}>+91 7090366699</p>
            </div>
            
            <div style={{ marginBottom: 32 }}>
              <p style={{ fontSize: 13, color: '#9ca3af', marginBottom: 4 }}>Location</p>
              <p style={{ fontSize: 18, fontWeight: 500, color: '#1a1a1a' }}>Bangalore, India</p>
            </div>
            
            <button
              onClick={() => setShowPopup(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '14px 28px',
                backgroundColor: '#d12027',
                color: '#fff',
                fontSize: 15,
                fontWeight: 500,
                borderRadius: 8,
                textDecoration: 'none',
              }}
            >
              Get course details
              <svg width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </button>
          </div>

          {/* Right Image */}
          <div style={{ flex: '1 1 450px' }}>
            <div
              style={{
                borderRadius: 16,
                overflow: 'hidden',
                backgroundColor: '#e5e7eb',
              }}
            >
              <img
                src="/images/aiml/code-see.png"
                alt="Team collaborating on AI and ML projects"
                style={{
                  width: '100%',
                  height: 450,
                  objectFit: 'cover',
                  objectPosition: 'right center',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <PopupFormModal
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
    </section>
  )
}
