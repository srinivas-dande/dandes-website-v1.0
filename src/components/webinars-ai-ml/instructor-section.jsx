"use client"

export default function InstructorSection() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: 600,
      }}
    >
      {/* Full section background image - hidden on mobile */}
      <img
        src="/images/instructor-bg.png"
        alt=""
        aria-hidden="true"
        className="instructor-bg-image"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'left center',
          zIndex: 0,
        }}
      />

      {/* Content container - positioned on the right */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1200,
          margin: '0 auto',
          padding: '80px 40px',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        {/* Right - Content */}
        <div style={{ maxWidth: 680, paddingLeft: 40 }}>
          {/* Mobile instructor image - shown only on mobile at TOP */}
          <div className="mobile-instructor-image">
            <img
              src="/images/instructor.png"
              alt="Srinivas Dande - Founder and Instructor"
              style={{
                width: '100%',
                maxWidth: 350,
                height: 'auto',
                margin: '0 auto 30px auto',
                display: 'block',
              }}
            />
          </div>

          {/* Badge */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              backgroundColor: '#fdf2f8',
              color: '#be185d',
              padding: '8px 16px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                backgroundColor: '#be185d',
                borderRadius: 2,
              }}
            />
            Meet Your Instructor
          </span>

          {/* Heading */}
          <h2
            style={{
              fontSize: 42,
              fontWeight: 700,
              color: '#111',
              marginBottom: 24,
              lineHeight: 1.2,
            }}
          >
            Every webinar is hosted by Srinivas Dande
          </h2>

          {/* Description paragraph 1 */}
          <p
            style={{
              fontSize: 17,
              color: '#444',
              lineHeight: 1.7,
              marginBottom: 20,
            }}
          >
            Founder and Lead Instructor at Dandes Academy. Ex-Sun Microsystems. 20+ years in engineering and teaching. Trained over 20,000 engineers in Java, System Design, and AI/ML.
          </p>

          {/* Description paragraph 2 */}
          <p
            style={{
              fontSize: 17,
              color: '#444',
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            He doesn&apos;t run webinars to sell. He runs them because he&apos;s seen what a clear roadmap does for someone who&apos;s been circling the same confusion for months.
          </p>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: 20,
              marginBottom: 32,
              flexWrap: 'wrap',
            }}
          >
            {/* Stat 1 - Ex-Sun Microsystems */}
            <div
              style={{
                flex: '1 1 200px',
                maxWidth: 220,
                padding: '24px 28px',
                backgroundColor: '#fff',
                borderRadius: 12,
                border: '1px solid #e5e7eb',
              }}
            >
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: '#d12027',
                  marginBottom: 4,
                  lineHeight: 1.2,
                }}
              >
                Ex-Sun<br />Microsystems
              </div>
              <div
                style={{
                  fontSize: 15,
                  color: '#666',
                }}
              >
                Years Exp.
              </div>
            </div>

            {/* Stat 2 - Engineers */}
            <div
              style={{
                flex: '1 1 160px',
                maxWidth: 180,
                padding: '24px 28px',
                backgroundColor: '#fff',
                borderRadius: 12,
                border: '1px solid #e5e7eb',
              }}
            >
              <div
                style={{
                  fontSize: 42,
                  fontWeight: 700,
                  color: '#d12027',
                  marginBottom: 4,
                  lineHeight: 1,
                }}
              >
                20k+
              </div>
              <div
                style={{
                  fontSize: 15,
                  color: '#666',
                }}
              >
                Engineers
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <button
              style={{
                backgroundColor: '#d12027',
                color: '#fff',
                padding: '14px 28px',
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              Register for free webinar
            </button>

            {/* Watch on YouTube */}
            <a
              href="https://www.youtube.com/@DandesAcademy"
              target="_blank"
              rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 15,
                  fontWeight: 500,
                  color: '#111',
                  textDecoration: 'none',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#d12027">
                  <path d="M8 5v14l11-7z" />
                </svg>
                  Watch On YouTube
              </a>

            {/* LinkedIn icon */}
            <a
              href="https://www.linkedin.com/in/srinivasdande/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 44,
                height: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 8,
                border: '1px solid #e5e7eb',
                backgroundColor: '#fff',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#0a66c2">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        .mobile-instructor-image {
          display: none;
        }
        @media (max-width: 1024px) {
          section > div > div {
            max-width: 100% !important;
            padding-left: 0 !important;
          }
        }
        @media (max-width: 768px) {
          .instructor-bg-image {
            display: none !important;
          }
          .mobile-instructor-image {
            display: block !important;
            margin-bottom: 24px;
          }
          section > div {
            justify-content: center !important;
            padding: 40px 20px !important;
          }
          section > div > div {
            max-width: 100% !important;
            padding-left: 0 !important;
          }
          h2 {
            font-size: 28px !important;
          }
        }
      `}</style>
    </section>
  )
}
