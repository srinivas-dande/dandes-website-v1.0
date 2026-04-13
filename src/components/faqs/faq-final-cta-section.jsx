'use client'
export default function FaqFinalCtaSection() {
  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .cta-buttons {
            flex-direction: column !important;
            align-items: center !important;
          }
          .cta-heading {
            font-size: 28px !important;
          }
        }
      `}</style>
      
      <section style={{ padding: '60px 20px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Lavender container with triangles */}
          <div
            style={{
              backgroundColor: '#f3e8f8',
              borderRadius: 24,
              padding: '80px 40px',
              position: 'relative',
              overflow: 'hidden',
              textAlign: 'center',
            }}
          >
            {/* Left triangle */}
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
                borderRight: '100px solid #d4b8e8',
                opacity: 0.7,
              }}
            />

            {/* Bottom right triangle */}
            <div
              style={{
                position: 'absolute',
                right: 40,
                bottom: -40,
                width: 0,
                height: 0,
                borderLeft: '80px solid transparent',
                borderRight: '80px solid transparent',
                borderBottom: '120px solid #c9a8e0',
                opacity: 0.8,
              }}
            />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2
                className="cta-heading"
                style={{
                  fontSize: 40,
                  fontWeight: 700,
                  color: '#111',
                  marginBottom: 24,
                }}
              >
                Still Have Questions?
              </h2>

              <p
                style={{
                  fontSize: 17,
                  color: '#555',
                  lineHeight: 1.6,
                  maxWidth: 700,
                  margin: '0 auto 32px auto',
                }}
              >
                Message us on <strong style={{ color: '#111' }}>WhatsApp at +91 7090366699.</strong> Or register for the free webinar and ask Srinivas directly during the live Q&A.
              </p>

              {/* CTA Buttons */}
              <div
                className="cta-buttons"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 16,
                  marginBottom: 32,
                }}
              >
                <a
                  href="#"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#c53030',
                    color: '#fff',
                    padding: '14px 36px',
                    borderRadius: 8,
                    fontSize: 16,
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'background-color 0.2s',
                  }}
                >
                  Contact us
                </a>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    backgroundColor: '#fff',
                    padding: '8px 8px 8px 20px',
                    borderRadius: 8,
                  }}
                >
                  <span style={{ fontSize: 16, fontWeight: 500, color: '#111' }}>
                    Register for the free webinar
                  </span>
                  <a
                    href="#"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      backgroundColor: '#c53030',
                      borderRadius: 6,
                      textDecoration: 'none',
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
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Disclaimer */}
              <p
                style={{
                  fontSize: 14,
                  color: '#666',
                  lineHeight: 1.6,
                  maxWidth: 600,
                  margin: '0 auto',
                }}
              >
                Live online classes with LMS recordings. No spam, your details are used only to share course information and contact you about your inquiry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
