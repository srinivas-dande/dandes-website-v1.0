'use client'

import { useState } from "react"
import Link from "next/link"
import { PopupFormModal } from "../dandes/popup-form-modal"

export default function AboutHero() {

  const [showPopup, setShowPopup] = useState(false)

  return (
    <section
      style={{
        position: 'relative',
        padding: '80px 24px 100px',
        overflow: 'hidden',
      }}
    >
      {/* Full Background Image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <img
          src="/images/about/hero-bg-about.png"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h1
          style={{
            fontSize: 42,
            fontWeight: 700,
            color: '#1a1a1a',
            lineHeight: 1.2,
            marginBottom: 28,
          }}
        >
          About Dandes Academy, Practical Training
          <br />
          In AI And Machine Learning
        </h1>
        
        <p
          style={{
            fontSize: 18,
            color: '#4b5563',
            lineHeight: 1.7,
            maxWidth: 900,
            margin: '0 auto 40px',
          }}
        >
          Dandes Academy is an industry-focused training platform built to help learners master AI and Machine
          Learning with strong fundamentals, hands-on projects, and interview-ready preparation. We run live online
          classes, supported by recordings, doubt support, and a structured learning roadmap that takes you from
          beginner foundations to real-world AI and ML workflows.
        </p>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
          <Link
            href="/courses"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px 32px',
              backgroundColor: '#d12027',
              color: '#fff',
              fontSize: 16,
              fontWeight: 500,
              borderRadius: 8,
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
          >
            Get course details
          </Link>
          
          <a
            onClick={() => setShowPopup(true)}

            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 16,
              fontWeight: 500,
              color: '#1a1a1a',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Register for the free webinar
            <span
              style={{
                width: 32,
                height: 32,
                backgroundColor: '#d12027',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width={14} height={14} fill="none" stroke="#fff" strokeWidth={2}>
                <path d="M5 3 L10 7 L5 11" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <PopupFormModal
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />

    </section>
  )
}
