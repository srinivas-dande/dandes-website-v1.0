"use client"

const audienceCards = [
  {
    icon: "/images/webinars/working-professionals.png",
    iconBg: "#d1fae5",
    title: "For working professionals",
    description:
      "If you're a senior engineer wondering whether the AI/ML program is too basic or too fast for someone at your level, watch a Deep Learning or MLOps session. You'll see the depth pretty quickly.",
  },
  {
    icon: "/images/webinars/students.png",
    iconBg: "#ffedd5",
    title: "For students",
    description:
      "If you're trying to figure out whether this is the right program for placements, or whether the teaching style works for you, start with the Python or ML fundamentals session.",
  },
  {
    icon: "/images/webinars/undecided.png",
    iconBg: "#f3e8ff",
    title: "For the undecided",
    description:
      "If you just want to see what structured AI learning looks like before spending any money, this is exactly the right place to start.",
  },
]

export default function StartingPointSection() {
  return (
    <section
      style={{
        padding: '80px 0',
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 40px',
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
          A Good Starting Point For Almost Everyone
        </h2>

        {/* Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
        >
          {audienceCards.map((card, index) => (
            <div
              key={index}
              style={{
                padding: 28,
                borderRadius: 16,
                border: '1px dashed #e5e7eb',
                backgroundColor: '#fff',
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  backgroundColor: card.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 24,
                }}
              >
                <img
                  src={card.icon}
                  alt={card.title}
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
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#1f2937',
                  marginBottom: 12,
                }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: '#6b7280',
                  margin: 0,
                }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          div[style*="grid-template-columns"] {
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
