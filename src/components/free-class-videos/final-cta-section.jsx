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
          backgroundColor: '#f3e8ff',
          borderRadius: 24,
          padding: '80px 40px',
          overflow: 'hidden',
        }}
      >
        {/* Left Triangle */}
        <div
          style={{
            position: 'absolute',
            left: -30,
            top: '50%',
            transform: 'translateY(-50%) rotate(15deg)',
            width: 0,
            height: 0,
            borderTop: '80px solid transparent',
            borderBottom: '80px solid transparent',
            borderRight: '100px solid #c4b5fd',
            opacity: 0.7,
          }}
        />

        {/* Bottom Right Triangle */}
        <div
          style={{
            position: 'absolute',
            right: 60,
            bottom: -20,
            width: 0,
            height: 0,
            borderLeft: '70px solid transparent',
            borderRight: '70px solid transparent',
            borderBottom: '100px solid #c4b5fd',
            transform: 'rotate(15deg)',
            opacity: 0.8,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            maxWidth: 800,
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: 24,
              lineHeight: 1.3,
            }}
          >
            Want A Structured Roadmap Instead Of Guessing What To Learn Next?
          </h2>

          <p
            style={{
              fontSize: 16,
              color: '#666',
              marginBottom: 32,
              lineHeight: 1.6,
            }}
          >
            Join the free live webinar to understand AI Engineer vs ML Engineer paths, a practical learning order, and how to avoid common beginner mistakes.
          </p>

          {/* CTA */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <a
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                backgroundColor: '#fff',
                padding: '8px 8px 8px 24px',
                borderRadius: 50,
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#1a1a1a',
                }}
              >
                Register for the free webinar
              </span>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  backgroundColor: '#dc2626',
                  borderRadius: 8,
                  color: '#fff',
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section > div {
            padding: 60px 24px !important;
          }
          h2 {
            font-size: 28px !important;
          }
        }
      `}</style>
    </section>
  )
}
