"use client"

import { useState } from 'react'

const tabContent = {
  professionals: {
    title: "AI And Machine Learning Course For Working Professionals",
    description: "If you are already working in tech and want to move into AI and ML, this course is built to fit real schedules and real career goals. You learn with live classes, recordings when you miss a session, and a paced roadmap that focuses on long-term mastery.",
    benefitsTitle: "You will benefit most if you want to:",
    benefits: [
      "Transition into AI and ML roles without quitting your job.",
      "Break career stagnation by adding high-impact, future-proof skills.",
      "Stop relying on scattered resources and follow one structured roadmap.",
      "Build projects you can confidently explain in interviews."
    ],
    closing: "If you want a shortcut to three months, this program may not be the right fit. If you want a structured path with real depth, this is designed for you."
  },
  students: {
    title: "AI And Machine Learning Course For Students And Job Seekers",
    description: "If you are preparing for placements, looking for your first job, or want to build a strong foundation in AI/ML before entering the workforce, this course gives you real skills, not just certificates.",
    benefitsTitle: "You will benefit most if you want to:",
    benefits: [
      "Build a portfolio that stands out to recruiters.",
      "Understand AI/ML deeply, not just surface-level tutorials.",
      "Prepare for technical interviews with confidence.",
      "Learn from someone with 20+ years of industry experience."
    ],
    closing: "If you're looking for a quick certification to add to your resume, this may not be right. If you want to actually learn and be job-ready, this is for you."
  }
}

// Green checkmark icon
function CheckIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <circle cx="12" cy="12" r="12" fill="#10b981" fillOpacity="0.15" />
      <path
        d="M7 12.5L10.5 16L17 9"
        stroke="#10b981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function TwoAudiencesSection() {
  const [activeTab, setActiveTab] = useState('professionals')
  const content = tabContent[activeTab]

  return (
    <section
      style={{
        padding: '80px 20px',
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <h2
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: '#111',
            textAlign: 'center',
            marginBottom: 24,
            lineHeight: 1.2,
          }}
        >
          These Webinars Are For Two Very Different People
        </h2>

        <p
          style={{
            fontSize: 16,
            color: '#666',
            textAlign: 'center',
            lineHeight: 1.7,
            maxWidth: 800,
            margin: '0 auto 48px auto',
          }}
        >
          This program is designed for people who want a clear learning path, consistent support, and real project work.
          Whether you are switching to AI from a backend or engineering role, or preparing for placements with a stronger
          profile, the structure helps you stay on track and build confidence.
        </p>

        {/* Tabs */}
        <div
          style={{
            backgroundColor: '#f5f5f5',
            borderRadius: 8,
            padding: '8px',
            marginBottom: 48,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button
              onClick={() => setActiveTab('professionals')}
              style={{
                padding: '16px 48px',
                fontSize: 15,
                fontWeight: 600,
                color: '#111',
                backgroundColor: activeTab === 'professionals' ? '#fff' : 'transparent',
                border: 'none',
                borderRadius: 6,
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.2s ease',
              }}
            >
              For working professionals
              {activeTab === 'professionals' && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 8,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60%',
                    height: 3,
                    backgroundColor: '#d12027',
                    borderRadius: 2,
                  }}
                />
              )}
            </button>

            <button
              onClick={() => setActiveTab('students')}
              style={{
                padding: '16px 48px',
                fontSize: 15,
                fontWeight: 600,
                color: '#111',
                backgroundColor: activeTab === 'students' ? '#fff' : 'transparent',
                border: 'none',
                borderRadius: 6,
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.2s ease',
              }}
            >
              For students and job seekers
              {activeTab === 'students' && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 8,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60%',
                    height: 3,
                    backgroundColor: '#d12027',
                    borderRadius: 2,
                  }}
                />
              )}
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: '#111',
              marginBottom: 20,
            }}
          >
            {content.title}
          </h3>

          <p
            style={{
              fontSize: 15,
              color: '#666',
              lineHeight: 1.7,
              maxWidth: 850,
              margin: '0 auto 32px auto',
            }}
          >
            {content.description}
          </p>

          {/* Benefits Card */}
          <div
            style={{
              border: '1px solid #e5e5e5',
              borderRadius: 12,
              padding: '28px 32px',
              textAlign: 'left',
              maxWidth: 700,
              margin: '0 auto 32px auto',
            }}
          >
            <h4
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: '#111',
                marginBottom: 20,
              }}
            >
              {content.benefitsTitle}
            </h4>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              {content.benefits.map((benefit, index) => (
                <li
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                  }}
                >
                  <CheckIcon />
                  <span
                    style={{
                      fontSize: 15,
                      color: '#444',
                      lineHeight: 1.5,
                    }}
                  >
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Closing paragraph */}
          <p
            style={{
              fontSize: 15,
              color: '#666',
              lineHeight: 1.7,
              maxWidth: 750,
              margin: '0 auto',
            }}
          >
            {content.closing}
          </p>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          h2 {
            font-size: 28px !important;
          }
          button {
            padding: 12px 20px !important;
            font-size: 14px !important;
          }
        }
        @media (max-width: 480px) {
          h2 {
            font-size: 24px !important;
          }
          button {
            padding: 10px 16px !important;
            font-size: 13px !important;
          }
        }
      `}</style>
    </section>
  )
}
