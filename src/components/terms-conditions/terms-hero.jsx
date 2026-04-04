'use client'

export default function TermsHero() {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: '#f9fafb',
        overflow: 'hidden',
      }}
    >
      {/* Grid Background Pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          opacity: 0.6,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 900,
          margin: '0 auto',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: '#111827',
            marginBottom: 24,
            lineHeight: 1.2,
          }}
        >
          Terms and Conditions
        </h1>

        <p
          style={{
            fontSize: 18,
            color: '#6b7280',
            lineHeight: 1.7,
            marginBottom: 20,
            maxWidth: 700,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          These terms govern your use of the Dandes Academy website and your enrollment
          in any program. Please read before enrolling.
        </p>

        <p
          style={{
            fontSize: 16,
            color: '#374151',
            fontWeight: 500,
          }}
        >
          Last Updated: <span style={{ color: '#c41e2a' }}>March 2026</span>
        </p>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 36px !important;
          }
          p {
            font-size: 16px !important;
          }
        }
        @media (max-width: 480px) {
          h1 {
            font-size: 28px !important;
          }
        }
      `}</style>
    </section>
  )
}
