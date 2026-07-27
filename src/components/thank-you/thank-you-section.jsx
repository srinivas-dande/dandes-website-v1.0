'use client'

export default function ThankYouSection() {
  const features = [
  {
    icon: "/images/thank-you/video.png",
    title: "Watch Free Class Videos",
    description: "Access our library of foundational AI concepts and tutorials.",
    link: "/free-class-videos",
  },
  {
    icon: "/images/thank-you/webinar.png",
    title: "View Testimonials",
    description: "Register for live sessions with our industry-leading instructors.",
    link: "/testimonials",
  },
  {
  icon: "/images/thank-you/whatsapp.png",
  title: "Read Blogs",
  description: "Read Various Dandes Academys Blogs",
  link: "/blog",
},
];

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
          width: '100%',
          height: '420px',
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <img
          src="/images/thank-you/decorative-bg.webp"
          alt="thank you"
          aria-hidden="true"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
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
          You&apos;re one step closer to becoming industry-ready{' '}
          <span style={{ color: '#DC2626', fontWeight: 600 }}></span>.
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
            marginTop: 80,
            marginBottom: 60,
            maxWidth: 650,
            margin: '80px auto 60px',
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
            <a
  key={index}
  href={feature.link}
  target={feature.link.startsWith("https") ? "_blank" : "_self"}
  rel={feature.link.startsWith("https") ? "noopener noreferrer" : undefined}
  style={{
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: "28px 24px",
    textAlign: "left",
    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.04)",
    border: "1px solid #F3F4F6",
    textDecoration: "none",
    display: "block",
    transition: "all 0.2s ease",
    color: "inherit",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
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
            </a>
          ))}
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
