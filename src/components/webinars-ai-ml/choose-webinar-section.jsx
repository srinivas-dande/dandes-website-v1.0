"use client"
import { useState } from "react"
import { PopupFormModal } from "../dandes/popup-form-modal"

const webinars = [
  {
    id: 1,
    status: "AVAILABLE NOW",
    title: "AI/ML Career Transition Webinar",
    forLabel: "Working professionals",
    benefits: "Full AI/ML roadmap, portfolio strategy, salary transition clarity",
  },
  {
    id: 2,
    status: "AVAILABLE NOW",
    title: "AI/ML for Students and Placement Prep",
    forLabel: "Students and job seekers",
    benefits: "Placement differentiation strategy, AI project portfolio, salary targeting",
  },
]

export default function ChooseWebinarSection() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <section
      style={{
        padding: '80px 0',
        backgroundColor: '#f8f9fa',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 40px',
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: 60,
          }}
        >
          <h2
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: '#111',
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Choose The Webinar That Fits Your Goal
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#666',
              lineHeight: 1.6,
            }}
          >
            New webinar topics are added regularly. Bookmark this page.
          </p>
        </div>

        {/* Webinar Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 40,
          }}
          className="webinar-cards-grid"
        >
          {webinars.map((webinar) => (
            <div
              key={webinar.id}
              style={{
                backgroundColor: '#fff',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}
            >
              {/* Red top border */}
              <div
                style={{
                  height: 8,
                  backgroundColor: '#d12027',
                }}
              />

              {/* Card content */}
              <div
                style={{
                  padding: '32px 40px 40px',
                }}
              >
                {/* Status label */}
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#d12027',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                  }}
                >
                  {webinar.status}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: '#111',
                    marginTop: 12,
                    marginBottom: 24,
                    lineHeight: 1.3,
                  }}
                >
                  {webinar.title}
                </h3>

                {/* For section */}
                <div style={{ marginBottom: 20 }}>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: '#666',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                    }}
                  >
                    FOR:
                  </span>
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: '#111',
                      marginTop: 4,
                    }}
                  >
                    {webinar.forLabel}
                  </p>
                </div>

                {/* What you'll get section */}
                <div style={{ marginBottom: 32 }}>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: '#666',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {"WHAT YOU'LL GET:"}
                  </span>
                  <p
                    style={{
                      fontSize: 15,
                      color: '#444',
                      marginTop: 4,
                      lineHeight: 1.5,
                    }}
                  >
                    {webinar.benefits}
                  </p>
                </div>

                {/* Register button */}
                <button
                  onClick={() => setShowPopup(true)}

                  style={{
                    width: '100%',
                    backgroundColor: '#d12027',
                    color: '#fff',
                    padding: '16px 24px',
                    borderRadius: 8,
                    fontSize: 16,
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Register now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .webinar-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
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
