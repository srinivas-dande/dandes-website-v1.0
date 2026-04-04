"use client"
export default function TrainerClarity() {
  return (
    <section
      style={{
        backgroundColor: '#f9fafb',
        padding: '80px 24px',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: 48,
          }}
        >
          <h2
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: '#1a1a1a',
              lineHeight: 1.3,
              marginBottom: 20,
            }}
          >
            A Trainer Who Focuses On Clarity,
            <br />
            Not Shortcuts.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#6b7280',
              lineHeight: 1.7,
              maxWidth: 700,
              margin: '0 auto',
            }}
          >
            {"The modern learning landscape is cluttered with \"get-skilled-fast\" promises. We reject the shallow path in favor of deep, first-principles understanding."}
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'flex',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          {/* The Problem Card */}
          <div
            style={{
              flex: 1,
              minWidth: 300,
              backgroundColor: '#fff',
              borderRadius: 16,
              border: '1px solid #e5e7eb',
              padding: '40px 32px',
            }}
          >
            {/* Icon */}
            <div style={{ marginBottom: 24 }}>
              <img
                src="/srinivas/icons/problem-icon.png"
                alt="Problem icon"
                style={{
                  width: 48,
                  height: 48,
                  objectFit: 'contain',
                }}
              />
            </div>

            <h3
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: 12,
              }}
            >
              The Problem
            </h3>
            <p
              style={{
                fontSize: 15,
                color: '#6b7280',
                lineHeight: 1.7,
              }}
            >
              {"Most courses focus on syntax and libraries without explaining the 'why'. This leaves engineers unable to solve complex, novel problems when they arise in production."}
            </p>
          </div>

          {/* Dandes Solution Card */}
          <div
            style={{
              flex: 1,
              minWidth: 300,
              backgroundColor: '#fff',
              borderRadius: 16,
              border: '1px solid #e5e7eb',
              padding: '40px 32px',
            }}
          >
            {/* Icon */}
            <div style={{ marginBottom: 24 }}>
            <img
              src="/srinivas/icons/solution-icon.png"
              alt="Solution icon"
                style={{
                  width: 48,
                  height: 48,
                  objectFit: 'contain',
                }}
              />
            </div>

            <h3
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: 12,
              }}
            >
              Dandes Solution
            </h3>
            <p
              style={{
                fontSize: 15,
                color: '#6b7280',
                lineHeight: 1.7,
              }}
            >
              We dismantle complex AI concepts into their atomic parts. By mastering the fundamentals, our students gain the agility to adapt to any technology shift in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
