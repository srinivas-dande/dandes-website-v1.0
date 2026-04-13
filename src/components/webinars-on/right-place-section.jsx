"use client"

const criteria = [
  "You have 5 to 20 years in tech. Backend, full stack, system design, DevOps, QA, support, any domain.",
  "You're watching AI change your industry and feeling like you need to catch up",
  "You've tried learning AI on your own but can't sustain it without structure",
  "You're not sure whether to target ML Engineer, AI Engineer, or Data Scientist, and you want an honest answer for your background",
  "You want to transition without quitting your job or doing a full-time bootcamp"
]

export default function RightPlaceSection() {
  return (
    <section
      style={{
        padding: '80px 0',
        backgroundColor: '#f8f9fa',
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: '#111',
            textAlign: 'center',
            marginBottom: 50,
          }}
        >
          You&apos;re In The <span style={{ color: '#d12027' }}>Right Place</span> If:
        </h2>

        {/* Criteria Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {criteria.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                borderRadius: 12,
                padding: '24px 28px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 20,
              }}
            >
              {/* Red Checkmark */}
              <div
                style={{
                  flexShrink: 0,
                  width: 28,
                  height: 28,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#d12027"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Text */}
              <p
                style={{
                  fontSize: 16,
                  color: '#333',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Who This Is NOT For */}
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: 12,
            padding: '28px 32px',
            marginTop: 24,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 20,
            }}
          >
            {/* Red X Icon */}
            <div
              style={{
                flexShrink: 0,
                width: 28,
                height: 28,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M15 5L5 15M5 5L15 15"
                  stroke="#d12027"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div>
              <h3
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: '#111',
                  marginBottom: 16,
                  marginTop: 0,
                }}
              >
                Who This Is <span style={{ color: '#d12027' }}>NOT</span> For
              </h3>

              <p
                style={{
                  fontSize: 16,
                  color: '#666',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                If you&apos;re looking for a shortcut to an AI job in three weeks without consistent effort, this isn&apos;t that. If you want honesty about what it actually takes, you&apos;re in the right place.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 640px) {
          h2 {
            font-size: 28px !important;
          }
          h3 {
            font-size: 20px !important;
          }
        }
      `}</style>
    </section>
  )
}
