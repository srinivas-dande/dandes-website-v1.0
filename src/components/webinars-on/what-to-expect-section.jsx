'use client'

export default function WhatToExpectSection() {
  const expectations = [
    {
      icon: "/images/webinars-on/confirmation.png",
      bgColor: "#fef3eb",
      title: "Confirmation",
      description: "You'll get the details on whatsapp",
    },
    {
      icon: "/images/webinars-on/join-live-session.png",
      bgColor: "#ededfc",
      title: "Join Live Session",
      description: "Show up at the scheduled time. It's live.",
    },
    {
      icon: "/images/webinars-on/learn-ask.png",
      bgColor: "#f5ebfc",
      title: "Learn & Ask",
      description: "Attend the session, take notes, participate in the Q&A",
    },
    {
      icon: "/images/webinars-on/after-webinar.png",
      bgColor: "#e6f9f1",
      title: "After the webinar",
      description:
        "you'll receive the recording, course details, and next steps if you want to explore further",
    },
  ]

  return (
    <section
      style={{
        backgroundColor: '#f8f9fa',
        padding: '80px 20px',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
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
          Here&apos;s What To Expect
        </h2>

        {/* Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24,
          }}
          className="expect-grid"
        >
          {expectations.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                borderRadius: 12,
                border: '1px solid #e5e7eb',
                padding: 28,
                display: 'flex',
                flexDirection: 'column',
                minHeight: 220,
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  backgroundColor: item.bgColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 40,
                }}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  style={{
                    width: 56,
                    height: 56,
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#111',
                  marginBottom: 12,
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 15,
                  color: '#666',
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .expect-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .expect-grid {
            grid-template-columns: 1fr !important;
          }
          h2 {
            font-size: 28px !important;
          }
        }
      `}</style>
    </section>
  )
}
