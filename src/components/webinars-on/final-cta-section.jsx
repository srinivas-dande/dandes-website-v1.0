'use client'

export default function FinalCtaSection() {
  return (
    <section
      style={{
        padding: '60px 20px',
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {/* Main container with lavender background */}
        <div
          style={{
            backgroundColor: '#f5f0fa',
            borderRadius: 24,
            padding: '80px 40px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Left triangle */}
          <div
            style={{
              position: 'absolute',
              left: -20,
              top: '50%',
              transform: 'translateY(-50%) rotate(15deg)',
              width: 0,
              height: 0,
              borderTop: '80px solid transparent',
              borderBottom: '80px solid transparent',
              borderRight: '100px solid #c9b8e0',
              opacity: 0.7,
            }}
          />

          {/* Right triangle */}
          <div
            style={{
              position: 'absolute',
              right: -10,
              bottom: 20,
              width: 0,
              height: 0,
              borderLeft: '80px solid transparent',
              borderRight: '80px solid transparent',
              borderBottom: '120px solid #c9b8e0',
              transform: 'rotate(-15deg)',
              opacity: 0.8,
            }}
          />

          {/* Content */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              textAlign: 'center',
              maxWidth: 800,
              margin: '0 auto',
            }}
          >
            {/* Heading */}
            <h2
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: '#111',
                marginBottom: 24,
                lineHeight: 1.2,
              }}
            >
              The Window To Transition Is Open. For Now.
            </h2>

            {/* First paragraph */}
            <p
              style={{
                fontSize: 16,
                color: '#555',
                lineHeight: 1.7,
                marginBottom: 16,
              }}
            >
              AI/ML roles are growing fast. But so is the competition. The engineers who transition in the next 12 to 18 months will be ahead of the ones who waited two years and then rushed.
            </p>

            {/* Second paragraph */}
            <p
              style={{
                fontSize: 16,
                color: '#555',
                lineHeight: 1.7,
                marginBottom: 32,
              }}
            >
              {"This webinar doesn't cost you money. It costs you an hour. In return, you get clarity."}
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16,
                flexWrap: 'wrap',
                marginBottom: 24,
              }}
            >
              <button
                style={{
                  backgroundColor: '#d12027',
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
              </button>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  borderRadius: 8,
                  padding: '6px 6px 6px 20px',
                  gap: 12,
                }}
              >
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#111',
                  }}
                >
                  Register for the free webinar
                </span>
                <button
                  style={{
                    backgroundColor: '#d12027',
                    color: '#fff',
                    width: 40,
                    height: 40,
                    borderRadius: 6,
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Disclaimer */}
            <p
              style={{
                fontSize: 14,
                color: '#777',
              }}
            >
              {"Free. Live. You'll get the link on WhatsApp and email. No spam."}
            </p>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          h2 {
            font-size: 28px !important;
          }
        }
        @media (max-width: 480px) {
          h2 {
            font-size: 24px !important;
          }
        }
      `}</style>
    </section>
  )
}
