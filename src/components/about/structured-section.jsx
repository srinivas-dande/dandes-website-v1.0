'use client'
import { useState } from "react"
import { PopupFormModal } from "../dandes/popup-form-modal"

const checkItems = [
  'Strong foundations in Python, data handling, and problem-solving.',
  'Solid understanding of core Machine Learning, model evaluation, and practical decision making.',
  'Hands-on project experience, including mini projects and an end-to-end capstone.',
  'Exposure to modern industry areas like Deep Learning, NLP, Generative Al, LLMS, Agentic Al, and MLOps.',
  'Career preparation through resume review, LinkedIn guidance, and mock interviews.',

]

export function StructuredSection() {

  const [showPopup, setShowPopup] = useState(false)

  return (
    <section style={{ backgroundColor: '#fff', padding: '40px 0 80px' }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        gap: 64,
        flexWrap: 'wrap',
      }}>

        {/* Left Content */}
        <div style={{ flex: 1, minWidth: 320 }}>
          <h2 style={{
            fontSize: 32,
            fontWeight: 800,
            color: '#1a1a1a',
            lineHeight: 1.3,
            margin: '0 0 24px',
            maxWidth: 520,
          }}>
            What We Help You Build
          </h2>

          <p style={{
            fontSize: '1rem',
            color: '#555',
            lineHeight: 1.75,
            margin: '0 0 32px',
            maxWidth: 560,
          }}>
            Our goal is simple: you should be able to learn concepts, apply them in projects, and explain your work confidently in interviews.
          </p>

          <h3 style={{
            fontSize: '1.1rem',
            fontWeight: 700,
            color: '#1a1a1a',
            margin: '0 0 20px',
          }}>
            What sets us apart
          </h3>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px' }}>
            {checkItems.map((item, i) => (
              <li key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
                marginBottom: 14,
              }}>
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  style={{ flexShrink: 0, marginTop: 2 }}
                >
                  <circle cx={11} cy={11} r={10} stroke="#10b981" strokeWidth={1.5} fill="none" />
                  <path d="M7 11 L10 14 L15 8" stroke="#10b981" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                <span style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.6 }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setShowPopup(true)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              backgroundColor: '#d12027',
              color: '#fff',
              fontSize: '0.95rem',
              fontWeight: 600,
              padding: '14px 28px',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
            }}
          >
            Get course details
            <svg width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <line x1={4} y1={9} x2={14} y2={9} />
              <polyline points="10,5 14,9 10,13" />
            </svg>
          </button>
        </div>

        {/* Right Image */}
        <div style={{ flex: 1, minWidth: 320 }}>
          <div
            style={{
              borderRadius: 20, 
              overflow: 'hidden', 
            }}
          >
            <img
              src="/images/about/team.png"
              alt="Team collaborating on AI projects with laptops"
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
      <PopupFormModal
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
    </section>
  )
}
