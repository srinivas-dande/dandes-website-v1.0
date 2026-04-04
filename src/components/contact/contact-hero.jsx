"use client"

export default function ContactHero() {
  const features = [
    'Real people on the other end',
    'Response within a few hours on most days',
    'WhatsApp preferred for faster replies',
  ]

  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: '#f9fafb',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        overflow: 'hidden',
      }}
    >
      {/* Grid Background */}
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
          textAlign: 'center',
        }}
      >
        {/* Heading */}
        <h1
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: '#1f2937',
            lineHeight: 1.2,
            marginBottom: 24,
          }}
        >
          Got Questions? We&apos;re Right Here.
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 18,
            color: '#6b7280',
            lineHeight: 1.7,
            marginBottom: 40,
            maxWidth: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          No bots. No 48-hour wait. If you have a question about a course, a batch, or whether Dandes Academy is
          the right fit for you, just reach out. We&apos;ll get back to you.
        </p>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 40,
            marginBottom: 48,
            whiteSpace: 'nowrap',
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              {/* Checkmark Icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d12027"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span
                style={{
                  fontSize: 15,
                  color: '#4b5563',
                  fontWeight: 500,
                }}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 24,
          }}
        >
          {/* Primary Button */}
          <button
            style={{
              backgroundColor: '#d12027',
              color: '#fff',
              fontSize: 16,
              fontWeight: 600,
              padding: '16px 40px',
              borderRadius: 8,
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#b91c22')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#d12027')}
          >
            Get course details
          </button>

          {/* Secondary Link */}
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontSize: 16,
              fontWeight: 600,
              color: '#1f2937',
              textDecoration: 'none',
            }}
          >
            Register for the free webinar
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 36,
                height: 36,
                backgroundColor: '#d12027',
                borderRadius: '50%',
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 32px !important;
          }
          p {
            font-size: 16px !important;
          }
        }
        @media (max-width: 640px) {
          section > div:last-of-type > div:first-of-type {
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  )
}
