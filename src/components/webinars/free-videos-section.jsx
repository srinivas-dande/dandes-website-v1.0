"use client"

const videoTopics = [
  {
    category: "PYTHON",
    categoryColor: "#d12027",
    title: "Python fundamentals for data work",
    description: "Essential syntax and libraries for data manipulation and automation."
  },
  {
    category: "ML",
    categoryColor: "#d12027",
    title: "Machine Learning core concepts",
    description: "Understanding supervised and unsupervised learning algorithms from the ground up."
  },
  {
    category: "GENAI",
    categoryColor: "#22c55e",
    title: "Deep Learning explained from scratch",
    description: "Neural networks, backpropagation, and activation functions simplified."
  },
  {
    category: "PYTHON",
    categoryColor: "#d12027",
    title: "Exploratory Data Analysis",
    description: "Techniques to uncover patterns, anomalies, and insights in complex datasets."
  },
  {
    category: "ML",
    categoryColor: "#d12027",
    title: "Generative AI and LLM concepts",
    description: "Understanding Large Language Models, Transformers, and prompt engineering."
  },
  {
    category: "GENAI",
    categoryColor: "#22c55e",
    title: "Real-world project walkthroughs",
    description: "Step-by-step implementation of production-grade AI solutions."
  },
  {
    category: "PYTHON",
    categoryColor: "#d12027",
    title: "Interview preparation and career guidance",
    description: "Strategies for technical interviews and navigating the AI job market."
  }
]

export default function FreeVideosSection() {
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
            marginBottom: 16,
          }}
        >
          {"What's Covered In The "}
          <span style={{ color: '#d12027' }}>Free Videos</span>
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 16,
            color: '#6b7280',
            marginBottom: 12,
            maxWidth: 600,
          }}
        >
          {"The free class videos span topics from across the AI/ML curriculum. You'll find sessions on:"}
        </p>

        {/* Red underline */}
        <div
          style={{
            width: 50,
            height: 4,
            backgroundColor: '#d12027',
            borderRadius: 2,
            marginBottom: 40,
          }}
        />

        {/* Video topics grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 30,
          }}
          className="video-grid"
        >
          {videoTopics.map((topic, index) => (
            <div key={index}>
              {/* Image placeholder with category tag */}
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#f3f4f6',
                  borderRadius: 12,
                  height: 180,
                  marginBottom: 16,
                }}
              >
                {/* Category tag */}
                <span
                  style={{
                    position: 'absolute',
                    bottom: 12,
                    left: 12,
                    backgroundColor: topic.categoryColor,
                    color: '#fff',
                    fontSize: 11,
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: 4,
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                  }}
                >
                  {topic.category}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#111',
                  marginBottom: 8,
                  lineHeight: 1.3,
                }}
              >
                {topic.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 14,
                  color: '#6b7280',
                  lineHeight: 1.5,
                }}
              >
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .video-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .video-grid {
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
