'use client'

const flexibilityItems = [
  {
    icon: 'calendar',
    title: '12-Month Mastery',
    description: 'A structured pace that fits into a professional schedule.',
  },
  {
    icon: 'cloud',
    title: '5 Years LMS Access',
    description: 'Return to the material whenever you need a refresher.',
  },
  {
    icon: 'switch',
    title: 'Flex-Batch Switching',
    description: 'Switch batches if your schedule changes suddenly.',
  },
  {
    icon: 'refund',
    title: '30-Day Refund Policy',
    description: 'Not the right fit? We offer a no-questions-asked refund.',
  },
]

const careerItems = [
  'Resume guidance and interview preparation.',
  'Mock interviews.',
  'Placement assistance, based on learner readiness and performance.',
]

function CalendarIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="#d12027" strokeWidth="1.5" />
      <path d="M3 9h18M8 2v4M16 2v4" stroke="#d12027" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function CloudIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path d="M12 6a5 5 0 00-4.9 4 4 4 0 00.4 7.9h9a3.5 3.5 0 00.5-7A5 5 0 0012 6z" stroke="#d12027" strokeWidth="1.5" />
      <path d="M12 14v4M9 16l3 2 3-2" stroke="#d12027" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function SwitchIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path d="M7 16l-4-4 4-4M17 8l4 4-4 4M14 4l-4 16" stroke="#d12027" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function RefundIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#d12027" strokeWidth="1.5" />
      <path d="M12 7v5l3 3" stroke="#d12027" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="1.5" />
      <path d="M8 12l3 3 5-6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function getIcon(type) {
  switch (type) {
    case 'calendar':
      return <CalendarIcon />
    case 'cloud':
      return <CloudIcon />
    case 'switch':
      return <SwitchIcon />
    case 'refund':
      return <RefundIcon />
    default:
      return null
  }
}

export default function FlexibilitySupport() {
  return (
    <section style={{ padding: '32px 24px 64px', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontSize: 36, fontWeight: 700, color: '#1a1a1a', textAlign: 'center', marginBottom: 60 }}>
          Learn With Flexibility, Grow With Support
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
          {/* Flexibility Card */}
          <div
            style={{
              padding: '40px',
              backgroundColor: '#fafafa',
              borderRadius: 16,
              border: '1px solid #e5e7eb',
            }}
          >
            <h3 style={{ fontSize: 26, fontWeight: 700, color: '#1a1a1a', marginBottom: 16 }}>
              Flexibility and Long-Term Access
            </h3>
            <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.6, marginBottom: 32 }}>
              We know learners balance jobs, college, and personal schedules, so the program is built with flexibility.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {flexibilityItems.map((item, index) => (
                <div key={index} style={{ display: 'flex', gap: 16 }}>
                  <div style={{ flexShrink: 0 }}>
                    {getIcon(item.icon)}
                  </div>
                  <div>
                    <h4 style={{ fontSize: 17, fontWeight: 600, color: '#1a1a1a', marginBottom: 4 }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.5 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Support Card */}
          <div
            style={{
              padding: '40px',
              backgroundColor: '#8b0000',
              borderRadius: 16,
              color: '#fff',
            }}
          >
            <h3 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16 }}>
              Career Support
            </h3>
            <p style={{ fontSize: 15, opacity: 0.9, lineHeight: 1.6, marginBottom: 32 }}>
              We support learners with career readiness throughout the program, including:
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
              {careerItems.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <CheckIcon />
                  <span style={{ fontSize: 15 }}>{item}</span>
                </div>
              ))}
            </div>
            
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 32 }}>
              <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.9 }}>
                Career outcomes depend on skills, effort, project quality, interview performance, and market conditions. We do not guarantee job placement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
