'use client'

import { useState } from 'react'
import { useRouter } from "next/navigation"

export default function ShareExperienceSection() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    linkedinUrl: '',
    currentRole: '',
    background: '',
    outcomeType: '',
    beforeLpa: '',
    afterLpa: '',
    percentIncrease: '',
    review: '',
    videoUrl: '',
    allowPublish: false,
  })

  const outcomeTypes = ['Offer', 'Role Change', 'Salary Hike', 'Skill Upgrade']

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleOutcomeSelect = (outcome) => {
    setFormData((prev) => ({
      ...prev,
      outcomeType: outcome,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    
    setTimeout(() => {
      router.push("/thank-you")
    }, 500)
  }

  return (
    <section
      style={{
        padding: '80px 24px',
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: '#111',
              lineHeight: 1.3,
              marginBottom: 16,
            }}
          >
            Are You A <span style={{ color: '#DC2626' }}>Dandes Academy Learner?</span>
            <br />
            Share Your Experience
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#6B7280',
            }}
          >
            Your review helps future learners pick the right path and stay consistent.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name and LinkedIn Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 20,
              marginBottom: 20,
            }}
            className="form-row"
          >
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#374151',
                  marginBottom: 8,
                }}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="First name"
                value={formData.name}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '1px solid #E5E7EB',
                  borderRadius: 8,
                  fontSize: 15,
                  color: '#111',
                  backgroundColor: '#F9FAFB',
                  outline: 'none',
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#374151',
                  marginBottom: 8,
                }}
              >
                LinkedIn URL (optional)
              </label>
              <input
                type="text"
                name="linkedinUrl"
                placeholder="First name"
                value={formData.linkedinUrl}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '1px solid #E5E7EB',
                  borderRadius: 8,
                  fontSize: 15,
                  color: '#111',
                  backgroundColor: '#F9FAFB',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          {/* Current Role and Background Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 20,
              marginBottom: 20,
            }}
            className="form-row"
          >
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#374151',
                  marginBottom: 8,
                }}
              >
                Current role + company
              </label>
              <input
                type="text"
                name="currentRole"
                placeholder="Current website URL"
                value={formData.currentRole}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '1px solid #E5E7EB',
                  borderRadius: 8,
                  fontSize: 15,
                  color: '#111',
                  backgroundColor: '#F9FAFB',
                  outline: 'none',
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#374151',
                  marginBottom: 8,
                }}
              >
                Background (Fresher / Career switch / X yrs exp)
              </label>
              <input
                type="text"
                name="background"
                placeholder="Fresher / Career switch / X yrs exp"
                value={formData.background}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '1px solid #E5E7EB',
                  borderRadius: 8,
                  fontSize: 15,
                  color: '#111',
                  backgroundColor: '#F9FAFB',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          {/* Outcome Type */}
          <div style={{ marginBottom: 20 }}>
            <label
              style={{
                display: 'block',
                fontSize: 14,
                fontWeight: 500,
                color: '#374151',
                marginBottom: 12,
              }}
            >
              Outcome Type
            </label>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {outcomeTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleOutcomeSelect(type)}
                  style={{
                    padding: '12px 24px',
                    borderRadius: 50,
                    border: '1px solid #E5E7EB',
                    backgroundColor: formData.outcomeType === type ? '#FEF2F2' : '#F9FAFB',
                    color: formData.outcomeType === type ? '#DC2626' : '#374151',
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Package Change */}
          <div style={{ marginBottom: 20 }}>
            <label
              style={{
                display: 'block',
                fontSize: 14,
                fontWeight: 500,
                color: '#374151',
                marginBottom: 12,
              }}
            >
              Package Change (optional)
            </label>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: 16,
              }}
              className="package-row"
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid #E5E7EB',
                  borderRadius: 8,
                  backgroundColor: '#F9FAFB',
                  overflow: 'hidden',
                }}
              >
                <span style={{ padding: '14px 16px', color: '#9CA3AF', fontSize: 15 }}>₹ Before</span>
                <input
                  type="text"
                  name="beforeLpa"
                  value={formData.beforeLpa}
                  onChange={handleInputChange}
                  style={{
                    flex: 1,
                    padding: '14px 16px',
                    border: 'none',
                    fontSize: 15,
                    color: '#111',
                    backgroundColor: 'transparent',
                    outline: 'none',
                    textAlign: 'right',
                  }}
                />
                <span style={{ padding: '14px 16px', color: '#6B7280', fontSize: 14 }}>LPA</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid #E5E7EB',
                  borderRadius: 8,
                  backgroundColor: '#F9FAFB',
                  overflow: 'hidden',
                }}
              >
                <span style={{ padding: '14px 16px', color: '#9CA3AF', fontSize: 15 }}>₹ After</span>
                <input
                  type="text"
                  name="afterLpa"
                  value={formData.afterLpa}
                  onChange={handleInputChange}
                  style={{
                    flex: 1,
                    padding: '14px 16px',
                    border: 'none',
                    fontSize: 15,
                    color: '#111',
                    backgroundColor: 'transparent',
                    outline: 'none',
                    textAlign: 'right',
                  }}
                />
                <span style={{ padding: '14px 16px', color: '#6B7280', fontSize: 14 }}>LPA</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid #E5E7EB',
                  borderRadius: 8,
                  backgroundColor: '#F9FAFB',
                  overflow: 'hidden',
                }}
              >
                <span style={{ padding: '14px 16px', color: '#9CA3AF', fontSize: 15 }}>%Increase</span>
                <input
                  type="text"
                  name="percentIncrease"
                  value={formData.percentIncrease}
                  onChange={handleInputChange}
                  style={{
                    flex: 1,
                    padding: '14px 16px',
                    border: 'none',
                    fontSize: 15,
                    color: '#111',
                    backgroundColor: 'transparent',
                    outline: 'none',
                    textAlign: 'right',
                  }}
                />
                <span style={{ padding: '14px 16px', color: '#6B7280', fontSize: 14 }}>%</span>
              </div>
            </div>
          </div>

          {/* Your Review */}
          <div style={{ marginBottom: 20 }}>
            <label
              style={{
                display: 'block',
                fontSize: 14,
                fontWeight: 500,
                color: '#374151',
                marginBottom: 8,
              }}
            >
              Your Review
            </label>
            <textarea
              name="review"
              placeholder="100-400 words about your experience..."
              value={formData.review}
              onChange={handleInputChange}
              rows={5}
              style={{
                width: '100%',
                padding: '14px 16px',
                border: '1px solid #E5E7EB',
                borderRadius: 8,
                fontSize: 15,
                color: '#111',
                backgroundColor: '#F9FAFB',
                outline: 'none',
                resize: 'vertical',
                fontFamily: 'inherit',
              }}
            />
          </div>

          {/* Video URL */}
          <div style={{ marginBottom: 24 }}>
            <label
              style={{
                display: 'block',
                fontSize: 14,
                fontWeight: 500,
                color: '#374151',
                marginBottom: 8,
              }}
            >
              Video (optional — upload or YouTube link)
            </label>
            <input
              type="text"
              name="videoUrl"
              placeholder="https://youtube.com/..."
              value={formData.videoUrl}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '14px 16px',
                border: '1px solid #E5E7EB',
                borderRadius: 8,
                fontSize: 15,
                color: '#111',
                backgroundColor: '#F9FAFB',
                outline: 'none',
              }}
            />
          </div>

          {/* Checkbox */}
          <div style={{ marginBottom: 32 }}>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                cursor: 'pointer',
              }}
            >
              <input
                type="checkbox"
                name="allowPublish"
                checked={formData.allowPublish}
                onChange={handleInputChange}
                style={{
                  width: 20,
                  height: 20,
                  accentColor: '#DC2626',
                  cursor: 'pointer',
                }}
              />
              <span style={{ fontSize: 14, color: '#374151' }}>
                I allow Dandes Academy to publish this on the website.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '16px 40px',
              backgroundColor: '#DC2626',
              color: '#fff',
              fontSize: 16,
              fontWeight: 600,
              borderRadius: 8,
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
          >
            Submit Review
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
          .package-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
