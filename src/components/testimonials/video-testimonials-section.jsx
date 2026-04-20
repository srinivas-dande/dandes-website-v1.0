'use client'

import { useState } from 'react'
import { PopupFormModal } from "../dandes/popup-form-modal"


export default function VideoTestimonialsSection() {

  const [showPopup, setShowPopup] = useState(false)

  const [currentSlide, setCurrentSlide] = useState(0)

  const videos = [
    {
      image: '/images/testimonials/video-1.jpg',
      title: 'ML Engineer Offer at ₹18 LPA',
      subtitle: '4 yrs Backend Dev • Projects + Interview Prep',
    },
    {
      image: '/images/testimonials/video-2.jpg',
      title: 'Data Scientist Role Switch',
      subtitle: 'Fresher, CS Graduate • Fundamentals + Capstone',
    },
    {
      image: '/images/testimonials/video-3.jpg',
      title: '₹35 → ₹55 LPA Architect Role',
      subtitle: '4 yrs Backend Dev • Projects + Interview Prep',
    },
    {
      image: '/images/testimonials/video-4.jpg',
      title: 'Senior ML Engineer at Google',
      subtitle: '6 yrs Software Dev • Advanced ML + System Design',
    },
    {
      image: '/images/testimonials/video-5.jpg',
      title: 'AI Researcher at Microsoft',
      subtitle: 'PhD Graduate • Deep Learning + Research',
    },
    {
      image: '/images/testimonials/video-6.jpg',
      title: 'Data Lead at Amazon',
      subtitle: '8 yrs Analytics • Leadership + Strategy',
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 3 >= videos.length ? 0 : prev + 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 3 < 0 ? Math.max(0, videos.length - 3) : prev - 3))
  }

  return (
    <section
      style={{
        padding: '80px 24px',
        backgroundColor: '#F9FAFB',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: 40,
            fontWeight: 700,
            color: '#111',
            textAlign: 'center',
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          Watch Learners Explain Their Journey
          <br />
          (In Their Own Words)
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 16,
            color: '#6B7280',
            textAlign: 'center',
            marginBottom: 48,
            maxWidth: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Watch learners share their journey in their own words, from where they started 
          to what they focused on, and the outcome they achieved after the program.
        </p>

        {/* Video Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            marginBottom: 40,
          }}
          className="video-grid"
        >
          {videos.slice(currentSlide, currentSlide + 3).map((video, index) => (
            <div key={index}>
              {/* Video thumbnail */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: 12,
                  overflow: 'hidden',
                  aspectRatio: '4/5',
                  marginBottom: 16,
                  backgroundColor: '#e5e7eb',
                }}
              >
                <img
                  src={video.image}
                  alt={video.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                {/* Play button */}
                <button
                  style={{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    backgroundColor: '#DC2626',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(220, 38, 38, 0.4)',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                </button>
              </div>

              {/* Video info */}
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#111',
                  margin: 0,
                  marginBottom: 6,
                }}
              >
                {video.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: '#6B7280',
                  margin: 0,
                }}
              >
                {video.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
            marginBottom: 48,
          }}
        >
          <button
            onClick={prevSlide}
            style={{
              width: 44,
              height: 44,
              borderRadius: 8,
              backgroundColor: '#DC2626',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            style={{
              width: 44,
              height: 44,
              borderRadius: 8,
              backgroundColor: '#DC2626',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* CTA Section */}
        <div style={{ textAlign: 'center' }}>
          <h3
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: '#111',
              marginBottom: 20,
            }}
          >
            Want a clear roadmap to start?
          </h3>
          <button
            onClick={() => setShowPopup(true)}

            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
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
            Register for the Free AI/ML Webinar.
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          
        </div>
        
        <PopupFormModal
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .video-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .video-grid {
            grid-template-columns: 1fr !important;
          }
          h2 {
            font-size: 28px !important;
          }
        }
      `}</style>
    </section>
  )
}
