"use client"
export default function ExperienceSection() {
  return (
    <section
      style={{
        backgroundColor: '#f8f9fa',
        padding: '80px 24px',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Experience That Connects Learning To Real Work.
          </h2>
          <p
            style={{
              fontSize: 17,
              color: '#6b7280',
              lineHeight: 1.6,
            }}
          >
            From the early days of Java at Sun Microsystems to the
            <br />
            frontiers of Agentic AI.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          {/* Top Row */}
          <div
            style={{
              display: 'flex',
              gap: 20,
              flexWrap: 'wrap',
            }}
          >
            {/* Sun Microsystems Card */}
            <div
              style={{
                flex: '1 1 60%',
                minWidth: 300,
                backgroundColor: '#fff',
                borderRadius: 16,
                padding: '32px 36px',
                border: '1px solid #e5e7eb',
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#d12027',
                  letterSpacing: 1.5,
                  marginBottom: 12,
                }}
              >
                LEGACY & FOUNDATION
              </p>
              <h3
                style={{
                  fontSize: 26,
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: 16,
                }}
              >
                Sun Microsystems Era
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: '#6b7280',
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                Starting his career at the birthplace of Java, Srinivas mastered the core of system architecture and
                scalable engineering long before "The Cloud" was a buzzword.
              </p>
              {/* Icons */}
              <div style={{ display: 'flex', gap: 16 }}>
                {/* Network/nodes icon */}
                <img
                  src="/srinivas/icons/network-icon.png"
                  alt="Network icon"
                  style={{
                    width: 32,
                    height: 32,
                    objectFit: 'contain',
                  }}
                />
                {/* Terminal/code icon */}
                <img
                  src="/srinivas/icons/terminal-icon.png"
                  alt="Terminal icon"
                  style={{
                    width: 32,
                    height: 32,
                    objectFit: 'contain',
                  }}
                />
              </div>
            </div>

            {/* 10k+ Engineers Card */}
            <div
              style={{
                flex: '1 1 35%',
                minWidth: 280,
                backgroundColor: '#a91d22',
                borderRadius: 16,
                padding: '40px 36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontSize: 64,
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                10k+
              </p>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#f5b5b5',
                  letterSpacing: 2,
                  marginBottom: 24,
                }}
              >
                ENGINEERS TRAINED
              </p>
              <p
                style={{
                  fontSize: 15,
                  color: '#e5a5a5',
                  lineHeight: 1.6,
                }}
              >
                Empowering the next generation of software
                <br />
                architects across the globe.
              </p>
            </div>
          </div>

          {/* Bottom Row */}
          <div
            style={{
              display: 'flex',
              gap: 20,
              flexWrap: 'wrap',
            }}
          >
            {/* Technical Lead Card */}
            <div
              style={{
                flex: '1 1 35%',
                minWidth: 280,
                backgroundColor: '#fff',
                borderRadius: 16,
                padding: '28px 32px',
                border: '1px solid #e5e7eb',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#1a1a1a',
                    marginBottom: 12,
                  }}
                >
                  Technical Lead
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: '#6b7280',
                    lineHeight: 1.7,
                  }}
                >
                  Expertise in complex distributed systems
                  <br />
                  and enterprise Java.
                </p>
              </div>
              {/* Compass/drawing tool icon */}
              <img
              src="/srinivas/icons/technical-icon.png"
              alt="Technical lead icon"
                style={{
                  width: 30,
                  height: 30,
                  objectFit: 'contain',
                }}
              />
            </div>

            {/* Bridging the Gap Card */}
            <div
              style={{
                flex: '1 1 60%',
                minWidth: 300,
                backgroundColor: '#fff',
                borderRadius: 16,
                padding: '28px 32px',
                border: '1px solid #e5e7eb',
              }}
            >
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: 12,
                }}
              >
                Bridging the Gap to AI
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: '#6b7280',
                  lineHeight: 1.7,
                }}
              >
                Today, he integrates 20 years of systems experience with cutting-edge LLMs and MLOps, teaching
                engineers not just how to code AI, but how to architect it for production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
