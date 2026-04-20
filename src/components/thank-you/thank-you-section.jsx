'use client'

export default function ThankYouSection() {
  const features = [
    {
      icon: "/images/thank-you/video.png",
      title: 'Watch Free Class Videos',
      description: 'Access our library of foundational AI concepts and tutorials.',
    },
    {
      icon: "/images/thank-you/webinar.png",
      title: 'View Upcoming Webinars',
      description: 'Register for live sessions with our industry-leading instructors.',
    },
    {
      icon: "/images/thank-you/whatsapp.png",
      title: 'Message us on WhatsApp',
      description: 'Connect with our support team for immediate assistance.',
    },
  ]

  return (
    <section
      style={{
        minHeight: '100vh',
        backgroundColor: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 1280,
          height: 400,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <img
          src="/images/thank-you/decorative-bg.png"
          alt=""
          aria-hidden="true"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 900,
          margin: '0 auto',
          padding: '60px 24px 80px',
          textAlign: 'center',
        }}
      >
        {/* Checkmark icon */}
        <div
          style={{
            width: 80,
            height: 80,
            backgroundColor: '#DC2626',
            borderRadius: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 32px',
            boxShadow: '0 4px 20px rgba(220, 38, 38, 0.2)',
          }}
        >
          <img
            src="/images/thank-you/tick.png"
            alt="tick"
            style={{
              width: 80,
              height: 80,
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: '#111',
            marginBottom: 8,
            lineHeight: 1.1,
          }}
        >
          Thank you!
        </h1>
        <h2
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: '#111',
            marginBottom: 24,
            lineHeight: 1.2,
          }}
        >
          We&apos;ve received your details.
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: 18,
            color: '#6B7280',
            marginBottom: 48,
            lineHeight: 1.6,
          }}
        >
          You&apos;re one step closer to becoming industry-ready in{' '}
          <span style={{ color: '#DC2626', fontWeight: 600 }}>AI & Machine Learning</span>.
        </p>

        {/* Next Steps Card */}
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: 12,
            padding: '32px 40px',
            textAlign: 'left',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
            borderTop: '4px solid #DC2626',
            marginTop: 60,
            marginBottom: 60,
            maxWidth: 650,
            margin: '60px auto',
          }}
        >
          <p
            style={{
              fontSize: 18,
              color: '#111',
              fontWeight: 500,
              marginBottom: 24,
              lineHeight: 1.5,
            }}
          >
            Our team will share the next steps with you shortly via Email / WhatsApp / Phone.
          </p>

          <p
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: '#DC2626',
              letterSpacing: '0.1em',
              marginBottom: 16,
            }}
          >
            NEXT STEPS
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {/* Step 1 */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{ flexShrink: 0, marginTop: 2 }}>
                <img
                src="/images/thank-you/mail.png"
                alt="mail"
                style={{
                  width: 20,
                  height: 20,
                  objectFit: 'contain',
                }}
              />
              </div>
              <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.5, margin: 0 }}>
                Check your inbox for a confirmation message and a detailed course roadmap.
              </p>
            </div>

            {/* Step 2 */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{ flexShrink: 0, marginTop: 2 }}>
                <img
                  src="/images/thank-you/clock.png"
                  alt="clock"
                  style={{
                    width: 20,
                    height: 20,
                    objectFit: 'contain',
                  }}
                />
              </div>
              <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.5, margin: 0 }}>
                Explore free resources to start your learning journey immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            marginBottom: 80,
          }}
          className="feature-cards-grid"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                borderRadius: 12,
                padding: '28px 24px',
                textAlign: 'left',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                border: '1px solid #F3F4F6',
              }}
            >
              <div>
                <img
                  src={feature.icon}
                  alt={feature.title}
                  style={{
                    width: 24,
                    height: 24,
                    objectFit: 'contain',
                  }}
                />
              </div>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#111',
                  marginBottom: 8,
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: '#6B7280',
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Need Help Section */}
        <div
          style={{
            backgroundColor: '#F9FAFB',
            borderRadius: 12,
            padding: '32px 40px',
          }}
        >
          <p
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: '#6B7280',
              letterSpacing: '0.08em',
              marginBottom: 20,
            }}
          >
            NEED HELP?
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              alignItems: 'center',
            }}
          >
            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <img
                src="/images/thank-you/email.png"
                alt="email"
                style={{
                  width: 18,
                  height: 18,
                  objectFit: 'contain',
                }}
              />
              <span style={{ fontSize: 14, color: '#6B7280', fontWeight: 500 }}>EMAIL:</span>
              <a
                href="mailto:HELLO@DANDESACADEMY.COM"
                style={{
                  fontSize: 14,
                  color: '#DC2626',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                HELLO@DANDESACADEMY.COM
              </a>
            </div>

            {/* WhatsApp */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <img
                src="/images/thank-you/whatsapp2.png"
                alt="whatsapp"
                style={{
                  width: 18,
                  height: 18,
                  objectFit: 'contain',
                }}
              />
              <span style={{ fontSize: 14, color: '#6B7280', fontWeight: 500 }}>WHATSAPP/CALL:</span>
              <a
                href="tel:+917090366699"
                style={{
                  fontSize: 14,
                  color: '#DC2626',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                +91 7090366699
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .feature-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
