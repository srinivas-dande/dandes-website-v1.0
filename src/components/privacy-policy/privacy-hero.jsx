'use client'

export default function PrivacyHero() {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: '#f9fafb',
        overflow: 'hidden',
        padding: '80px 24px',
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
          zIndex: 10,
          maxWidth: 900,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Main Heading */}
        <h1
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: '#1a1a1a',
            lineHeight: 1.2,
            marginBottom: 24,
          }}
        >
          Privacy Policy
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 18,
            color: '#6b7280',
            lineHeight: 1.6,
            maxWidth: 700,
            margin: '0 auto',
          }}
        >
          {"We keep this simple and readable. Here's exactly what we collect, why we collect it, and what we do with it."}
        </p>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 60px 20px !important;
          }
          h1 {
            font-size: 36px !important;
          }
          p {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  )
}
