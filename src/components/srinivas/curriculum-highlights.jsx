"use client"
export default function CurriculumHighlights() {
  const areas = [
    {
      title: "AI",
      description:
        "Comprehensive artificial intelligence fundamentals and core logic architectures.",
      icon: "/srinivas/icons/ai.png",
    },
    {
      title: "Machine Learning",
      description:
        "Deep dives into supervised, unsupervised, and reinforcement learning paradigms.",
      icon: "/srinivas/icons/ml.png",
    },
    {
      title: "System Design",
      description:
        "Architecting scalable, fault-tolerant enterprise systems for the modern web.",
      icon: "/srinivas/icons/technical-icon.png",
    },
    {
      title: "DSA",
      description:
        "Optimizing code through advanced data structures and algorithmic efficiency.",
      icon: "/srinivas/icons/dsa.png",
    },
    {
      title: "Generative AI",
      description:
        "Mastering GANs, Variational Autoencoders, and modern diffusion models.",
      icon: "/srinivas/icons/generative-ai.png",
    },
    {
      title: "LLMs & Fine-tuning",
      description:
        "Training and refining large language models for specialized domain tasks.",
      icon: "/srinivas/icons/llm.png",
    },
    {
      title: "Agentic AI",
      description:
        "Building autonomous agents capable of complex reasoning and tool usage.",
      icon: "/srinivas/icons/agentic-ai.png",
    },
    {
      title: "MLOps",
      description:
        "Streamlining the deployment and monitoring of ML models at scale.",
      icon: "/srinivas/icons/mlops.png",
    },
  ]

  return (
    <section
      style={{
        backgroundColor: '#f9fafb',
        padding: '80px 24px',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
        }}
      >
        {/* Section Label */}
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: '#b91c1c',
            letterSpacing: 2,
            marginBottom: 12,
          }}
        >
          CURRICULUM HIGHLIGHTS
        </p>

        {/* Section Heading */}
        <h2
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: '#7f1d1d',
            marginBottom: 48,
          }}
        >
          Areas of Training & Focus
        </h2>

        {/* Cards Grid */}
        <div
          className="curriculum-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
          }}
        >
          {areas.map((area, index) => (
            <article
              key={index}
              style={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: 12,
                padding: 28,
                minHeight: 200,
              }}
            >
              {/* Icon */}
              <div
                style={{
                  marginBottom: 24,
                }}
              >
                <img
                  src={area.icon}
                  alt={area.title}
                  style={{
                    width: 38,
                    height: 38,
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#1f2937',
                  marginBottom: 12,
                }}
              >
                {area.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 14,
                  color: '#6b7280',
                  lineHeight: 1.6,
                }}
              >
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .curriculum-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 640px) {
          section {
            padding: 60px 16px !important;
            overflow-x: hidden;
          }

          .curriculum-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }

          h2 {
            font-size: 28px !important;
            margin-bottom: 32px !important;
          }
        }
      `}</style>
    </section>
  )
}
