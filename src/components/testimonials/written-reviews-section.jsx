'use client'

import { useState } from 'react'


export default function WrittenReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const reviews = [
    {
      company: 'VOIS',
      rating: 5,
      quote: '"I started my learning journey at JLC in 2013 during the early stage of my career under Srinivas Dande Sir. Over the years, I learned Java, Microservices, Angular, and React, which helped me adapt to evolving technologies. When the AI/ML program was introduced at Dandes Academy, I joined with complete confidence. AI/ML curriculum is well structured and updated to reflect current industry standards. This rogram combines conceptual depth with hands-on learning through projects."',
      name: 'Millon Zahino',
      role: 'Behavioral Science',
      avatar: '/images/testimonials/avatar-placeholder.jpg',
    },
    {
      company: 'VOIS',
      rating: 5,
      quote: '"I started my learning journey at JLC in 2013 during the early stage of my career under Srinivas Dande Sir. Over the years, I learned Java, Microservices, Angular, and React, which helped me adapt to evolving technologies. When the AI/ML program was introduced at Dandes Academy, I joined with complete confidence. AI/ML curriculum is well structured and updated to reflect current industry standards. This rogram combines conceptual depth with hands-on learning through projects."',
      name: 'Millon Zahino',
      role: 'Behavioral Science',
      avatar: '/images/testimonials/avatar-placeholder.jpg',
    },
    {
      company: 'VOIS',
      rating: 5,
      quote: '"I started my learning journey at JLC in 2013 during the early stage of my career under Srinivas Dande Sir. Over the years, I learned Java, Microservices, Angular, and React, which helped me adapt to evolving technologies. When the AI/ML program was introduced at Dandes Academy, I joined with complete confidence. AI/ML curriculum is well structured and updated to reflect current industry standards. This rogram combines conceptual depth with hands-on learning through projects."',
      name: 'Millon Zahino',
      role: 'Behavioral Science',
      avatar: '/images/testimonials/avatar-placeholder.jpg',
    },
  ]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
  }

  // Star component
  const Star = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#DC2626">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )

  // LinkedIn icon
  const LinkedInIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#0077B5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )

  return (
    <section
      style={{
        padding: '80px 24px',
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
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
              marginBottom: 20,
            }}
          >
            What Students Say About <span style={{ color: '#DC2626' }}>Dandes Academy,</span> Written Reviews, and LinkedIn Proof
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#6B7280',
              lineHeight: 1.6,
              maxWidth: 800,
              margin: '0 auto',
            }}
          >
            Read verified feedback from learners, including written reviews and LinkedIn testimonials, to understand their experience with the training, projects, and interview preparation.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: 20,
          }}
        >
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: -20,
              zIndex: 10,
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Cards Container */}
          <div
            style={{
              display: 'flex',
              gap: 24,
              overflow: 'hidden',
              padding: '0 40px',
              flex: 1,
              transform: `translateX(-${currentIndex * 33.33}%)`,
              transition: 'transform 0.5s ease',
            }}
            className="reviews-container"
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                style={{
                  flex: '0 0 calc(33.333% - 16px)',
                  backgroundColor: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 12,
                  padding: 28,
                  display: 'flex',
                  flexDirection: 'column',
                  opacity: index === reviews.length - 1 ? 0.4 : 1,
                }}
                className="review-card"
              >
                {/* Header - Stars and Company */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 20,
                    paddingBottom: 20,
                    borderBottom: '1px solid #E5E7EB',
                  }}
                >
                  <div style={{ display: 'flex', gap: 2 }}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} />
                    ))}
                  </div>
                  <span
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: '#7C3AED',
                      letterSpacing: 2,
                    }}
                  >
                    {review.company}
                  </span>
                </div>

                {/* Quote */}
                <p
                  style={{
                    fontSize: 14,
                    color: '#374151',
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: 24,
                  }}
                >
                  {review.quote}
                </p>

                {/* Profile Footer */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: 20,
                    borderTop: '1px solid #E5E7EB',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        backgroundColor: '#E5E7EB',
                        overflow: 'hidden',
                      }}
                    >
                      <img
                        src={review.avatar}
                        alt={review.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: 15,
                          fontWeight: 600,
                          color: '#111',
                          margin: 0,
                        }}
                      >
                        {review.name}
                      </p>
                      <p
                        style={{
                          fontSize: 13,
                          color: '#6B7280',
                          margin: 0,
                        }}
                      >
                        {review.role}
                      </p>
                    </div>
                  </div>
                  <LinkedInIcon />
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: -20,
              zIndex: 10,
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .review-card {
            flex: 0 0 calc(50% - 12px) !important;
          }
        }
        @media (max-width: 768px) {
          .review-card {
            flex: 0 0 100% !important;
          }
        }
      `}</style>
    </section>
  )
}
