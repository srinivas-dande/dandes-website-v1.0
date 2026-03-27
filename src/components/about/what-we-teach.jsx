'use client'

const topics = [
  'Python fundamentals, and Python for ML and DS',
  'Deep Learning, Computer Vision, and NLP.',
  'SQL, advanced SQL, and data modeling.',
  'Generative AI, LLMs and fine-tuning, Agentic AI.',
  'Mathematics, statistics, and EDA.',
  'MLOps, deployment mindset, and an end-to-end AI and ML project.',
  'Machine Learning, advanced Machine Learning.',
]

function DocumentIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <rect x="4" y="2" width="16" height="20" rx="2" stroke="#d12027" strokeWidth="1.5" fill="none" />
      <path d="M8 7h8M8 11h8M8 15h5" stroke="#d12027" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function WhatWeTeach() {
  return (
    <section style={{ padding: '40px 24px 80px', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontSize: 36, fontWeight: 700, color: '#1a1a1a', textAlign: 'center', marginBottom: 20 }}>
          What We Teach
        </h2>
        
        <p style={{ fontSize: 16, color: '#6b7280', textAlign: 'center', maxWidth: 700, margin: '0 auto 48px', lineHeight: 1.6 }}>
          The curriculum is designed to progress from fundamentals to advanced concepts, and then into production-focused thinking.
        </p>
        
        <h3 style={{ fontSize: 20, fontWeight: 600, color: '#1a1a1a', marginBottom: 24 }}>
          It includes:
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {topics.map((topic, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '20px 24px',
                backgroundColor: '#fff',
                borderRadius: 12,
                border: '1px solid #e5e7eb',
              }}
            >
              <DocumentIcon />
              <span style={{ fontSize: 15, fontWeight: 600, color: '#1a1a1a' }}>
                {topic}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
