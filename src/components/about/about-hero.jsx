'use client'

export default function AboutHero() {
  return (
    <section
      style={{
        padding: '80px 24px 100px',
        backgroundColor: '#f9fafb',
        backgroundImage: `
          linear-gradient(to right, #e5e7eb 1px, transparent 1px),
          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    >
      <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
        <h1
          style={{
            fontSize: 42,
            fontWeight: 700,
            color: '#1a1a1a',
            lineHeight: 1.2,
            marginBottom: 28,
          }}
        >
          About Dandes Academy, Practical Training
          <br />
          In AI And Machine Learning
        </h1>
        
        <p
          style={{
            fontSize: 18,
            color: '#4b5563',
            lineHeight: 1.7,
            maxWidth: 900,
            margin: '0 auto 40px',
          }}
        >
          Dandes Academy is an industry-focused training platform built to help learners master AI and Machine
          Learning with strong fundamentals, hands-on projects, and interview-ready preparation. We run live online
          classes, supported by recordings, doubt support, and a structured learning roadmap that takes you from
          beginner foundations to real-world AI and ML workflows.
        </p>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px 32px',
              backgroundColor: '#d12027',
              color: '#fff',
              fontSize: 16,
              fontWeight: 500,
              borderRadius: 8,
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
          >
            Get course details
          </a>
          
          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 16,
              fontWeight: 500,
              color: '#1a1a1a',
              textDecoration: 'none',
            }}
          >
            Register for the free webinar
            <span
              style={{
                width: 32,
                height: 32,
                backgroundColor: '#d12027',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width={14} height={14} fill="none" stroke="#fff" strokeWidth={2}>
                <path d="M5 3 L10 7 L5 11" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
