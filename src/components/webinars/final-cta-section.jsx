"use client"

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
          backgroundColor: '#f5f0fa',
          borderRadius: 16,
          padding: '60px 40px',
          overflow: 'hidden',
        }}
      >
        {/* Left triangle - pointing inward from left */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            width: 0,
            height: 0,
            borderTop: '60px solid transparent',
            borderBottom: '60px solid transparent',
            borderLeft: '50px solid #d8c8e8',
          }}
        />

        {/* Bottom right triangle - pointing up-left */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 80,
            width: 0,
            height: 0,
            borderLeft: '70px solid transparent',
            borderRight: '70px solid transparent',
            borderBottom: '90px solid #c9b8e0',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 24,
          }}
        >
          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <button
              style={{
                backgroundColor: '#c41e3a',
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
                gap: 12,
                backgroundColor: '#fff',
                padding: '8px 12px 8px 20px',
                borderRadius: 8,
                border: '1px solid #e5e7eb',
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#111',
                }}
              >
                Register for the free webinar
              </span>
              <span
                style={{
                  width: 36,
                  height: 36,
                  backgroundColor: '#c41e3a',
                  borderRadius: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </span>
            </div>
          </div>

          {/* Disclaimer */}
          <p
            style={{
              fontSize: 14,
              color: '#6b7280',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Free to watch. No payment required. No spam.
          </p>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 640px) {
          section > div {
            padding: 40px 20px !important;
          }
          section > div > div:last-of-type > div:first-child {
            flex-direction: column !important;
          }
          section > div > div:last-of-type > div:first-child > button {
            width: 100% !important;
          }
          section > div > div:last-of-type > div:first-child > div {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  )
}
