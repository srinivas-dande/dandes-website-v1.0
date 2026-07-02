"use client"

const videoSections = [
  {
    heading: "Pandas Fundamentals",
    videos: [
      {
        category: "Pandas",
        categoryColor: "#d12027",
        title: "Python Functions Explained from Scratch",
        description:
          "Built-in & User-Defined Functions",
        videoId: "CAedba0swHc",
      },
      {
        category: "Pandas",
        categoryColor: "#d12027",
        title: "Creating DataFrames in Pandas",
        description:
          "Attributes & Descriptive Methods Explained",
        videoId: "ACLf9h9NgrA",
      },
      {
        category: "Pandas",
        categoryColor: "#d12027",
        title: "Pandas Indexing & DataFrame Operations",
        description:
          "iloc, loc, Modifying & Sorting Data",
        videoId: "Y0Q0vLwmOkw",
      },
    ],
  },
  {
    heading: "Functions in Python",
    videos: [
      {
        category: "Functions",
        categoryColor: "#d12027",
        title: "Python Functions Explained from Scratch",
        description:
          "Built-in & User-Defined Functions",
        videoId: "XIxDpAhsV7s",
      },
      {
        category: "Functions",
        categoryColor: "#d12027",
        title: "User-Defined Functions in Python",
        description:
          "Parameters, Arguments & Return Values",
        videoId: "gOCZMZ_S6V4",
      },
      {
        category: "Functions",
        categoryColor: "#d12027",
        title: "Variable Scope in Python",
        description:
          "global, local & nonlocal Keywords Explained",
        videoId: "Hm8zyBC1QtQ",
      },
    ],
  },
  {
    heading: "Lists in Python",
    videos: [
      {
        category: "Lists",
        categoryColor: "#22c55e",
        title: "Lists in Python Explained",
        description:
          "Indexing, Slicing, Operations & Loops",
        videoId: "PV49QoN8clQ",
      },
      {
        category: "Lists",
        categoryColor: "#22c55e",
        title: "Python List Functions & Methods",
        description:
          "append, extend, insert & Built-in Functions",
        videoId: "TZTcWIcn4Os",
      },
      {
        category: "Lists",
        categoryColor: "#22c55e",
        title: "Advanced List Methods in Python",
        description:
          "Nested Lists, sort vs sorted, reverse vs reversed",
        videoId: "faTinioXEr0",
      },
      
      
    ],
  },
  {
    heading: "System Design Interviews",
    videos: [
      {
        category: "SD",
        categoryColor: "#22c55e",
        title: "CAP Theorem Explained",
        description:
          "Consistency vs Availability vs Partition Tolerance",
        videoId: "Oa1k50OKmaM",
      },
      {
        category: "SD",
        categoryColor: "#22c55e",
        title: "PACELC Theorem",
        description:
          "System Design Interviews",
        videoId: "2PvjrkfPOTE",
      },
      {
        category: "SD",
        categoryColor: "#22c55e",
        title: "Consistency Models",
        description:
          "Linearizability vs Sequential vs Causal",
        videoId: "T6UwxVdZRHo",
      },
      
      
    ],
  },
  {
    heading: "Self-Balancing BST",
    videos: [
      {
        category: "BST",
        categoryColor: "#22c55e",
        title: "I BALANCED",
        description:
          "My AVL Trees in 2026 with This Simple BST Trick",
        videoId: "pHqwhMhyJv8",
      },
      {
        category: "BST",
        categoryColor: "#22c55e",
        title: "AVL Tree Rotations",
        description:
          "Building AVL Tree Step-by-Step",
        videoId: "Gmo4vF6DHIY",
      },
      {
        category: "BST",
        categoryColor: "#22c55e",
        title: "Red-Black Trees",
        description:
          "Properties, Rotations & Recoloring",
        videoId: "4lyS4-dqAmo",
      },
      
      
    ],
  },
]

export default function FreeVideosSection() {
  return (
    <section
      style={{
        padding: "80px 0",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: "#111",
            marginBottom: 16,
          }}
        >
          {"What's Covered In The "}
          <span style={{ color: "#d12027" }}>Free Videos</span>
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 16,
            color: "#6b7280",
            marginBottom: 12,
            maxWidth: 600,
          }}
        >
          {
            "The free class videos span topics from across the AI/ML curriculum. You'll find sessions on:"
          }
        </p>

        {/* Red underline */}
        <div
          style={{
            width: 50,
            height: 4,
            backgroundColor: "#d12027",
            borderRadius: 2,
            marginBottom: 50,
          }}
        />

        {/* Sections */}
        {videoSections.map((section, sectionIndex) => (
          <div key={sectionIndex} style={{ marginBottom: 60 }}>
            {/* Section Heading */}
            <h3
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#111",
                marginBottom: 30,
              }}
            >
              {section.heading}
            </h3>

            {/* Videos Grid */}
            <div
              className="video-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 30,
              }}
            >
              {section.videos.map((topic, index) => (
                <div key={index}>
                  {/* Video */}
                  <div
                    style={{
                      position: "relative",
                      borderRadius: 12,
                      overflow: "hidden",
                      aspectRatio: "16 / 9",
                      marginBottom: 16,
                    }}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${topic.videoId}`}
                      title={topic.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        border: "none",
                        borderRadius: 12,
                      }}
                    />

                    <span
                      style={{
                        position: "absolute",
                        bottom: 12,
                        left: 12,
                        backgroundColor: topic.categoryColor,
                        color: "#fff",
                        fontSize: 11,
                        fontWeight: 600,
                        padding: "4px 10px",
                        borderRadius: 4,
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                      }}
                    >
                      {topic.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h4
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: "#111",
                      marginBottom: 8,
                      lineHeight: 1.3,
                    }}
                  >
                    {topic.title}
                  </h4>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: 14,
                      color: "#6b7280",
                      lineHeight: 1.5,
                    }}
                  >
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Responsive */}
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