"use client"

export default function TeachingStyle() {
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
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: 16,
            }}
          >
            Teaching Style Learners Trust.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#6b7280',
              maxWidth: 600,
              margin: '0 auto',
            }}
          >
            Designed for those who seek mastery, not just a certificate.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="teaching-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
        >
          {/* Card 1 - Concept Clarity */}
          <div
            style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: 12,
              padding: 32,
            }}
          >
            {/* Mint Green Icon */}
            <div
              style={{
                width: 56,
                height: 56,
                backgroundColor: '#d1fae5',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
              }}
            >
              <img
                src="/srinivas/icons/concept-icon.png"
                alt="Concept clarity icon"
                style={{
                  width: 56,
                  height: 56,
                  objectFit: 'contain',
                }}
              />
            </div>

            <h3
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: '#374151',
                marginBottom: 12,
              }}
            >
              Concept Clarity
            </h3>
            <p
              style={{
                fontSize: 15,
                color: '#6b7280',
                lineHeight: 1.6,
              }}
            >
              Every lecture starts at zero, building a rock-solid mental model of the subject.
            </p>
          </div>

          {/* Card 2 - Analytical Thinking */}
          <div
            style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: 12,
              padding: 32,
            }}
          >
            {/* Orange/Peach Icon */}
            <div
              style={{
                width: 56,
                height: 56,
                backgroundColor: '#fed7aa',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
              }}
            >
              <img
                src="/srinivas/icons/analytics-icon.png"
                alt="Analytical thinking icon"
                style={{
                  width: 56,
                  height: 56,
                  objectFit: 'contain',
                }}
              />
            </div>

            <h3
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: '#374151',
                marginBottom: 12,
              }}
            >
              Analytical Thinking
            </h3>
            <p
              style={{
                fontSize: 15,
                color: '#6b7280',
                lineHeight: 1.6,
              }}
            >
              {"We don't just teach code; we teach how to think through architectural tradeoffs."}
            </p>
          </div>

          {/* Card 3 - Disciplined Solving */}
          <div
            style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: 12,
              padding: 32,
            }}
          >
            {/* Purple/Lavender Icon */}
            <div
              style={{
                width: 56,
                height: 56,
                backgroundColor: '#e9d5ff',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
              }}
            >
              <img
                src="/srinivas/icons/discipline-icon.png"
                alt="Disciplined solving icon"
                style={{
                  width: 56,
                  height: 56,
                  objectFit: 'contain',
                }}
              />
            </div>

            <h3
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: '#374151',
                marginBottom: 12,
              }}
            >
              Disciplined Solving
            </h3>
            <p
              style={{
                fontSize: 15,
                color: '#6b7280',
                lineHeight: 1.6,
              }}
            >
              Adopting a systematic approach to debugging and system design challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 900px) {
          section {
          padding: 60px 16px !important;
          overflow-x: hidden;
        }

        .teaching-grid {
          grid-template-columns: 1fr !important;
          gap: 16px !important;
        }

        h2 {
          font-size: 28px !important;
          line-height: 1.3;
        }
      }
    `}</style>
    </section>
  )
}
