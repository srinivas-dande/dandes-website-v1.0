'use client'

export default function ExpectedOutcomesSection() {
  const outcomes = [
    {
      label: 'Freshers / Entry-level',
      title: 'Data Analyst, Data Scientist (entry), ML Engineer (junior)',
      description: 'Strong fundamentals + projects build the foundation for a credible AI/ML start.',
    },
    {
      label: '5–10 years of experience',
      title: 'Advanced ML Roles · System-level Thinking',
      description: 'Usually focus on advanced depth, real-world system thinking, and higher-responsibility ML roles.',
    },
    {
      label: '2–5 years of experience',
      title: 'Cleaner AI/ML Transition + Stronger Interview Readiness',
      description: 'Often aim for a cleaner AI/ML transition + stronger interview readiness and portfolio.',
    },
    {
      label: '10+ years of experience',
      title: 'Data Analyst, Data Scientist (entry), ML Engineer (junior)',
      description: 'Often align learning with architecture, leadership, and high-impact AI initiatives.',
    },
  ]

  return (
    <section
      style={{
        padding: '80px 24px',
        backgroundColor: '#F9FAFB',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: '#111',
            lineHeight: 1.2,
            marginBottom: 50,
            maxWidth: 600,
          }}
        >
          Expected Outcomes By Experience, Freshers to Working Professionals
        </h2>

        {/* 2x2 Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 24,
            marginBottom: 40,
          }}
          className="outcomes-grid"
        >
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                padding: '28px 32px',
                borderLeft: '4px solid #DC2626',
              }}
            >
              {/* Label */}
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#DC2626',
                  marginBottom: 8,
                  margin: 0,
                }}
              >
                {outcome.label}
              </p>

              {/* Title */}
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#111',
                  marginTop: 8,
                  marginBottom: 12,
                }}
              >
                {outcome.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 15,
                  color: '#6B7280',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {outcome.description}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p
          style={{
            fontSize: 15,
            color: '#6B7280',
            margin: 0,
          }}
        >
          Exact outcomes depend on skills, effort, project work, and interview performance.
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .outcomes-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
