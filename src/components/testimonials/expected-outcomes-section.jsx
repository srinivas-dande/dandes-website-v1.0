'use client'

export default function ExpectedOutcomesSection() {
  const outcomes = [
    {
      label: 'ML Engineer · AI Engineer',
      title: 'Data Analyst, Data Scientist (entry), ML Engineer (junior)',
      description: 'Build strong AI/ML foundations through structured learning, hands-on projects, and interview preparation.',
    },
    {
      label: '2–5 Years Experience',
      title: 'ML Engineer · AI Engineer · Senior ML Engineer · Senior AI Engineer ·',
      description: 'Leverage your existing technical experience to transition into AI/ML roles with stronger project experience and interview readiness.',
    },
    {
      label: '5–10 Years Experience',
      title: 'Senior ML Engineer · Senior AI Engineer · Lead AI Engineer',
      description: 'Develop expertise in production-grade AI systems, model deployment, MLOps, LLMs, and real-world AI applications.',
    },
    {
      label: '10+ Years Experience',
      title: 'Lead AI Engineer · Principal ML Engineer · AI Solutions Architect · ML Architect · AI Product Manager',
      description: 'Drive AI initiatives, architect scalable AI systems, and lead high-impact AI transformation projects.',
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
          Expected Outcomes Based on Experience Freshers / Entry-Level

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
          Career outcomes depend on prior experience, technical background, project execution, learning commitment, and interview performance.
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
