'use client'

import { useState } from 'react'

export default function SkillsTestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      name: 'Navneeth Ranjan',
      title: 'Assistant VP, Citi Corp, Bangalore',
      experience: '15+ Years Experience',
      image: '/images/testimonials/navneeth.jpg',
      afterJoining: 'Gaining hands-on experience in AI/ML projects and concepts',
      helpedMost: [
        'Structured learning path',
        'Hands-on projects aligned with industry needs',
        'Continuous support and guidance',
      ],
      quotes: [
        "Before joining Dande Sir's course, I was confused about AI/ML. Now I have clarity, confidence, and a clear direction to move forward.",
      ],
    },
    {
      name: 'Navneeth Ranjan',
      title: 'Assistant VP, Citi Corp, Bangalore',
      experience: '15+ Years Experience',
      image: '/images/testimonials/navneeth-2.jpg',
      afterJoining: 'Actively transitioning into AI/ML with strong practical understanding',
      helpedMost: [
        'Strong foundation from basics to advanced',
        'Practical implementation with real datasets',
        'Clear explanation of real-world use cases',
      ],
      quotes: [
        "This course gave me a complete roadmap. I am now confident about my transition into AI/ML.",
        "Dande Sir explains every concept with so much clarity and patience. This course gave me real confidence to move into AI/ML.",
      ],
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 2 >= testimonials.length ? 0 : prev + 2))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 2 < 0 ? Math.max(0, testimonials.length - 2) : prev - 2))
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
          Courses That Build <span style={{ color: '#DC2626' }}>Skills</span>, <span style={{ color: '#DC2626' }}>Projects</span>, And <span style={{ color: '#DC2626' }}>Interview</span>
          <br />
          <span style={{ color: '#DC2626' }}>Readiness</span> Not Just Completion
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 16,
            color: '#6B7280',
            textAlign: 'center',
            marginBottom: 48,
          }}
        >
          Pick the program that matches your goal, career transition,
          <br />
          interview preparation, or stronger fundamentals.
        </p>

        {/* Testimonial Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 24,
            marginBottom: 40,
          }}
          className="testimonial-grid"
        >
          {testimonials.slice(currentSlide, currentSlide + 2).map((testimonial, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #E5E7EB',
                borderRadius: 12,
                padding: 24,
                backgroundColor: '#fff',
              }}
            >
              {/* Header with profile */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  marginBottom: 24,
                }}
              >
                <div style={{ display: 'flex', gap: 12 }}>
                  {/* Profile image */}
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 8,
                      overflow: 'hidden',
                      backgroundColor: '#f3f4f6',
                    }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: 18,
                        fontWeight: 600,
                        color: '#DC2626',
                        margin: 0,
                        marginBottom: 4,
                      }}
                    >
                      {testimonial.name}
                    </h3>
                    <p style={{ fontSize: 14, color: '#4B5563', margin: 0, marginBottom: 2 }}>
                      {testimonial.title}
                    </p>
                    <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>
                      • {testimonial.experience}
                    </p>
                  </div>
                </div>
                {/* LinkedIn icon */}
                <div
                  style={{
                    width: 32,
                    height: 32,
                    backgroundColor: '#0A66C2',
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </div>

              {/* After Joining */}
              <div style={{ marginBottom: 20 }}>
                <p style={{ fontSize: 13, color: '#6B7280', margin: 0, marginBottom: 4 }}>
                  After Joining Dandes Academy:
                </p>
                <p style={{ fontSize: 15, fontWeight: 500, color: '#111', margin: 0 }}>
                  {testimonial.afterJoining}
                </p>
              </div>

              {/* What helped most */}
              <div style={{ marginBottom: 20 }}>
                <p style={{ fontSize: 13, color: '#6B7280', margin: 0, marginBottom: 10 }}>
                  What helped most
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {testimonial.helpedMost.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 14, color: '#111' }}>→</span>
                      <span style={{ fontSize: 14, color: '#374151' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quotes */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {testimonial.quotes.map((quote, i) => (
                  <div
                    key={i}
                    style={{
                      borderLeft: '3px solid #E5E7EB',
                      paddingLeft: 12,
                    }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        color: '#4B5563',
                        fontStyle: 'italic',
                        margin: 0,
                        lineHeight: 1.6,
                      }}
                    >
                      {`"${quote}"`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
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
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .testimonial-grid {
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
