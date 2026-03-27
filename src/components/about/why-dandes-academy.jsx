'use client'

const features = [
  {
    title: 'Structured Clarity',
    description: 'Stop jumping between random tutorials. Our step-by-step program takes you from foundational Python to advanced LLM deployment without the guesswork.',
  },
  {
    title: 'Confidence Through Doing',
    description: "Build real intuition by breaking down algorithms from scratch. We don't just teach you how to use tools; we teach you how tools work.",
  },
  {
    title: 'Industry Alignment',
    description: 'Our curriculum is built by practitioners with 20+ years of experience, ensuring every module maps directly to high-demand industry skills.',
  },
]

export default function WhyDandesAcademy() {
  return (
    <section style={{ padding: '40px 24px 80px', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 80, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {/* Left Content */}
          <div style={{ flex: '1 1 400px', maxWidth: 480 }}>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: '#1a1a1a', marginBottom: 24 }}>
              Why <span style={{ color: '#d12027' }}>Dandes Academy</span>
            </h2>
            <p style={{ fontSize: 17, color: '#4b5563', lineHeight: 1.7 }}>
              {"Most learners drown in information but starve for confidence. We've redesigned the educational journey to focus on what actually moves the needle in a real-world career."}
            </p>
          </div>

          {/* Right Content - Feature Cards */}
          <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: 32 }}>
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  borderLeft: '3px solid #d12027',
                  paddingLeft: 24,
                }}
              >
                <h3 style={{ fontSize: 22, fontWeight: 700, color: '#1a1a1a', marginBottom: 12 }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.7 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
