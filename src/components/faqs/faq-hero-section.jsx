'use client'

export default function FaqHeroSection() {
  return (
    <section
      style={{
        backgroundColor: '#f8f9fa',
        backgroundImage: `
          linear-gradient(to right, #e5e5e5 1px, transparent 1px),
          linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        padding: '80px 24px',
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Main Heading */}
        <h1
          style={{
            fontSize: 42,
            fontWeight: 700,
            color: '#111',
            marginBottom: 24,
            lineHeight: 1.2,
          }}
          className="faq-hero-heading"
        >
          Everything You Want to Know Before You Enroll
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 18,
            color: '#555',
            lineHeight: 1.6,
            maxWidth: 700,
            margin: '0 auto',
          }}
          className="faq-hero-subtitle"
        >
          Real answers to the questions people ask most. If you don&apos;t find yours here,
          message us on <strong style={{ color: '#111' }}>WhatsApp at +91 7090366699</strong>.
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .faq-hero-heading {
            font-size: 28px !important;
          }
          .faq-hero-subtitle {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  )
}
