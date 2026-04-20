"use client"
import Link from "next/link"

export default function ConnectAndLearn() {
  return (
    <section
      style={{
        backgroundColor: '#fff',
        padding: '80px 0',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* Header */}
        <header style={{ maxWidth: 800, marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: 20,
            }}
          >
            Connect And Learn.
          </h2>
          <p
            style={{
              fontSize: 17,
              color: '#6b7280',
              lineHeight: 1.7,
            }}
          >
            If you want to understand the roadmap before enrolling, start with the webinar
            and see how the program is structured. You can also connect on LinkedIn and
            explore YouTube content to learn about learning styles and teaching approaches.
          </p>
        </header>

        {/* Cards Grid */}
        <div
          style={{
            display: 'flex',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          {/* Left - Webinar Card */}
          <div
            style={{
              flex: '2 1 500px',
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: 12,
              padding: 40,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              minHeight: 320,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Content */}
            <div
              style={{
                maxWidth: 400,
                zIndex: 1,
                position: 'relative',
                top: -60,
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  backgroundColor: '#fef2f2',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 24,
                }}
              >
                <img
                  src="/srinivas/icons/webinar.png"
                  alt="Webinar icon"
                  style={{
                    width: 56,
                    height: 56,
                    objectFit: "contain",
                  }}
                />
              </div>

              <h3
                
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: 12,
                }}
              >
                Start with Webinar
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: '#6b7280',
                  lineHeight: 1.6,
                  marginBottom: 24,
                }}
              >
                Deep dive into our curriculum architecture and learning
                methodology in an interactive session.
              </p>

              <Link
                href="/webinars"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#dc2626',
                  color: '#fff',
                  padding: '14px 28px',
                  borderRadius: 8,
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                Start with Webinar
              </Link>
            </div>

            {/* Large Grid Icon */}
            <div
              style={{
                position: 'absolute',
                right: 90,
                bottom: 140,
              }}
            >
              <img
                src="/srinivas/icons/grid-large.png"
                alt="Grid icon"
                style={{
                  width: 140,
                  height: 140,
                  objectFit: "contain",
                  opacity: 0.6,
                }}
              />
            </div>
          </div>

          {/* Right Column - LinkedIn & YouTube */}
          <div
            style={{
              flex: '1 1 300px',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            {/* LinkedIn Card */}
            <div
              style={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: 12,
                padding: 28,
                flex: 1,
              }}
            >
              {/* LinkedIn Icon */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  backgroundColor: '#0077b5',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                }}
              >
                <img
                  src="/srinivas/icons/linkedin.png"
                  alt="LinkedIn icon"
                  style={{
                    width: 40,
                    height: 40,
                    objectFit: "contain",
                  }}
                />
              </div>

              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: 8,
                }}
              >
                Connect on LinkedIn
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: '#6b7280',
                  lineHeight: 1.5,
                  marginBottom: 16,
                }}
              >
                Join our professional network of 10k+ engineers.
              </p>

              <a
                href="https://www.linkedin.com/in/srinivasdande/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  color: '#dc2626',
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                Follow us
                <img
                  src="/srinivas/icons/youtube.png"
                  alt="YouTube icon"
                  style={{
                    width: 22,
                    height: 22,
                    objectFit: "contain",
                  }}
                />
              </a>
            </div>

            {/* YouTube Card */}
            <div
              style={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: 12,
                padding: 28,
                flex: 1,
              }}
            >
              {/* YouTube Icon */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  backgroundColor: '#fef2f2',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" fill="#dc2626" stroke="none" />
                </svg>
              </div>

              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: 8,
                }}
              >
                Explore YouTube Content
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: '#6b7280',
                  lineHeight: 1.5,
                  marginBottom: 16,
                }}
              >
                Watch technical deep-dives and teaching demos.
              </p>

              <a
                href="https://www.youtube.com/@DandesAcademy"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  color: '#dc2626',
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                Watch Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

                </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          section {
            padding: 60px 0 !important;
          }

          section > div {
            padding: 0 16px !important;
          }

          section > div > div {
            flex-direction: column !important;
          }

          section > div > div > div:first-child {
            min-height: auto !important;
            padding: 28px !important;
          }

          section > div > div > div:first-child > div:first-child {
            top: 0 !important;
            max-width: 100% !important;
          }

          section > div > div > div:first-child > div:last-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
