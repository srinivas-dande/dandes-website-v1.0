'use client'

import { useState, useRef, useEffect } from 'react'

function CategoryIcon({ src, bgColor, size = 40 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 8,
        backgroundColor: bgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <img
        src={src}
        alt="category icon"
        loading="lazy"
        style={{
          width: size * 12,
          height: size * 12,
          objectFit: 'contain',
        }}
      />
    </div>
  )
}

// Play button icon - matches exact design from images
function PlayIcon({ filled = false }) {
  if (filled) {
    // Active state: Red filled rounded square with white play triangle inside
    return (
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 10,
          backgroundColor: '#DC2626',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M8 5v14l11-7L8 5z" fill="white" />
        </svg>
      </div>
    )
  }

  // Inactive state: Light gray background square with outlined gray play triangle
  return (
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: 10,
        backgroundColor: '#F3F4F6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M8 5v14l11-7L8 5z" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

// Clock icon - outline circle with hands
function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6.5" stroke="#9CA3AF" strokeWidth="1.2" fill="none" />
      <path d="M8 4.5v3.5l2.5 1.5" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Checkmark icon
function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="#10B981" strokeWidth="1.5" fill="none" />
      <path d="M6 10l2.5 2.5L14 7.5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// All sections data with exact colors from design
const sections = [
  {
    id: 'python',
    name: 'Python foundations',
    tabName: 'Python foundations',
    bgColor: '#FFF4E5',
    accentColor: '#F48A25',
    icon: '/images/free-class-videos/python-icon.png',
    topics: [
      {
        title: 'Functions in Python',
        description: 'Learn how to write reusable logic with functions — an essential foundation for data workflows, automation, and interview problem-solving.',
        learnings: [
          'Parameters, return values, and scope',
          'Writing readable and reusable functions',
          'Common patterns used in real projects',
        ],
        videos: [
          {
            title: 'Functions in Python: Part 1',
            duration: '01:05:04',
            youtubeLink: 'https://www.youtube.com/watch?v=XIxDpAhsV7s&t=3s'
          },
          {
            title: 'Functions in Python: Part 2',
            duration: '01:24:12',
            youtubeLink: 'https://www.youtube.com/watch?v=gOCZMZ_S6V4&t=2s'
          },
          {
            title: 'Functions in Python: Part 3',
            duration: '01:22:28',
            youtubeLink: 'https://www.youtube.com/watch?v=Hm8zyBC1QtQ&t=1s'
          },
        ],
      },
      {
        title: 'Lists in Python',
        description: 'Lists are among the most widely used data structures in Python. These sessions cover core operations and practical examples.',
        learnings: [
          'Creating and updating lists',
          'Iteration patterns and common list methods',
          'Problem-solving using lists',
        ],
        
        videos: [
          {
            title: 'Lists in Python: Part 1',
            duration: '01:12:17',
            youtubeLink: 'https://www.youtube.com/watch?v=PV49QoN8clQ&t=2s'
          },
          {
            title: 'Lists in Python: Part 2',
            duration: '01:25:07',
            youtubeLink: 'https://www.youtube.com/watch?v=TZTcWIcn4Os&t=2s'
          },
          {
            title: 'Lists in Python: Part 3',
            duration: '01:12:18',
            youtubeLink: 'https://www.youtube.com/watch?v=faTinioXEr0&t=1s'
          },
        ],
      },
    ],
  },
  {
    id: 'pandas',
    name: 'Pandas Fundamentals',
    tabName: 'Pandas for data analysis',
    bgColor: '#EEF2FF',
    accentColor: '#4F46E5',
    icon: '/images/free-class-videos/pandas-icon.png',
    topics: [
      {
        title: 'Functions in Python',
        description: 'Build comfort with DataFrames and the operations used in most data analysis workflows.',
        learnings: [
          'Working with columns, rows, and indexes',
          'Filtering, selecting, and transforming data',
          'Common patterns for cleaning and analysis',
        ],
        
        videos: [
          {
            title: 'Pandas Fundamentals: Part 1',
            duration: '01:07:49',
            
            youtubeLink: 'https://www.youtube.com/watch?v=CAedba0swHc&t=2s'
          },
          {
            title: 'Pandas Fundamentals: Part 2',
            duration: '01:14:36',
            
            youtubeLink: 'https://www.youtube.com/watch?v=ACLf9h9NgrA&t=2s'
          },
          {
            title: 'Pandas Fundamentals: Part 3',
            duration: '01:19:56',
            
            youtubeLink: 'https://www.youtube.com/watch?v=Y0Q0vLwmOkw&t=1s'
          },
        ]
      },
      {
        title: 'Pandas Assignments (Hands-On Practice)',
        description: 'Practice is where Pandas starts to feel natural. Use these sessions to build speed and confidence.',
        learnings: [
          'Converting questions into DataFrame operations',
          'Approaching multi-step analysis problems',
          'Improving accuracy for interviews and projects',
        ],
        
        videos: [
          {
            title: 'Pandas Assignment: Part 1',
            duration: '01:41:58',
            youtubeLink: 'https://www.youtube.com/watch?v=8pgAsGkL7mI&t=14s'
          },
          {
            title: 'Pandas Assignment: Part 2',
            duration: '01:00:36',
            youtubeLink: 'https://www.youtube.com/watch?v=gCcGDktBST0&t=3s'
          },
          {
            title: 'Pandas Assignment: Part 3',
            duration: '01:19:50',
            youtubeLink: 'https://www.youtube.com/watch?v=G4Ww5lQUMWI&t=2s'
          },
        ],
      },
    ],
  },
  {
    id: 'system-design',
    name: 'System Design Interview Prep',
    tabName: 'System design interview prep',
    bgColor: '#FDF4FF',
    accentColor: '#A855F7',
    icon: '/images/free-class-videos/system-design-icon.png',
    topics: [
      {
        title: 'CAP, PACELC & Consistency Models',
        description: 'Understand the tradeoffs behind distributed systems and learn how to explain them clearly in interviews.',
        learnings: [],

        videos: [
          {
            title: 'CAP Theorem Explained',
            duration: '01:24:43',
            
            youtubeLink: 'https://www.youtube.com/watch?v=Oa1k50OKmaM&t=5s'
          },
          {
            title: 'PACELC Theorem for System De',
            duration: '01:16:07',
           
            youtubeLink: 'https://www.youtube.com/watch?v=2PvjrkfPOTE&t=4s'
          },
          {
            title: 'Consistency Models Explained',
            duration: '01:21:07',
            
            youtubeLink: 'https://www.youtube.com/watch?v=T6UwxVdZRHo&t=3s'
          },
        ],
      },
    ],
  },
  {
    id: 'dsa',
    name: 'DSA Deep Dives',
    tabName: 'DSA deep dives',
    bgColor: '#ECFDF5',
    accentColor: '#10B981',
    icon: '/images/free-class-videos/dsa-icon.png',
    topics: [
      {
        title: 'Self-Balancing BSTs (AVL & Red-Black Trees)',
        description: 'Strengthen your core CS fundamentals with rotations, balancing logic, and how these trees maintain performance guarantees.',
        learnings: [],
        
        videos: [
          {
            title: 'AVL Trees Explained',
            duration: '01:28:54',
            
            youtubeLink: 'https://www.youtube.com/watch?v=pHqwhMhyJv8&t=2s'
          },
          {
            title: 'AVL Tree Rotations Explained',
            duration: '00:53:50',
            
            youtubeLink: 'https://www.youtube.com/watch?v=Gmo4vF6DHIY&t=3s'
          },
          {
            title: 'Red-Black Trees Explained',
            duration: '01:01:24',
            
            youtubeLink: 'https://www.youtube.com/watch?v=4lyS4-dqAmo&t=4s'
          },
        ],
      },
    ],
  },
]

export default function VideoContentSection() {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [lastPlayedVideo, setLastPlayedVideo] = useState(null)
  const [activeTab, setActiveTab] = useState('python')
  const sectionRefs = useRef({})


  useEffect(() => {
    const handleOpenFirstVideo = () => {
      const firstVideo =
        sections[0]?.topics[0]?.videos[0]?.youtubeLink

      if (firstVideo) {
        const section = document.getElementById("video-content-section")

        if (section) {
          section.scrollIntoView({ behavior: "smooth" })
        }

        setTimeout(() => {
          setSelectedVideo(firstVideo)
        }, 700)
      }
    }

    window.addEventListener("openFirstVideo", handleOpenFirstVideo)

    return () => {
      window.removeEventListener("openFirstVideo", handleOpenFirstVideo)
   }
  }, [])

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId)
    if (sectionRefs.current[sectionId]) {
      sectionRefs.current[sectionId].scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section 
      id="video-content-section"
      style={{ padding: '60px 20px 80px' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            gap: 12,
            marginBottom: 60,
            flexWrap: 'wrap',
          }}
          className="video-tabs"
        >
          {sections.map((section) => {

            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                style={{
                  flex: 1,
                  justifyContent: 'flex-start',
                  minWidth: 260,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '10px 16px',
                  borderRadius: 8,
                  border: '1px solid #E5E7EB',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#111',
                  transition: 'all 0.2s ease',
                }}
              > 
                <CategoryIcon
                  src={section.icon}
                  bgColor={section.bgColor}
                  size={36}
                />
                {section.tabName}
              </button>
            )
          })}
        </div>

        {/* All Sections */}
        {sections.map((section, sectionIndex) => {
          const IconComp = section.IconComponent
          return (
            <div
              key={section.id}
              ref={(el) => (sectionRefs.current[section.id] = el)}
              style={{ marginBottom: 80 }}
            >
              {/* Divider before section (except first) */}
              {sectionIndex > 0 && (
                <hr
                  style={{
                    border: 'none',
                    borderTop: '1px solid #E5E7EB',
                    margin: '0 0 60px 0',
                  }}
                />
              )}

              {/* Section Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 40,
                }}
              >
                <CategoryIcon
                  src={section.icon}
                  bgColor={section.bgColor}
                  size={44}
                />
                <h2
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#111',
                    margin: 0,
                  }}
                >
                  {section.name}
                </h2>
              </div>

              {/* Topics */}
              {section.topics.map((topic, topicIndex) => (
                <div
                  key={topicIndex}
                  style={{
                    marginBottom: 50,
                    paddingLeft: 16,
                    borderLeft: `3px solid ${section.accentColor}`,
                  }}
                >
                  {/* Topic Title */}
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: '#111',
                      marginBottom: 10,
                      marginTop: 0,
                    }}
                  >
                    {topic.title}
                  </h3>

                  {/* Topic Description */}
                  <p
                    style={{
                      fontSize: 14,
                      color: '#6B7280',
                      lineHeight: 1.6,
                      marginBottom: 20,
                      maxWidth: 550,
                    }}
                  >
                    {topic.description}
                  </p>

                  {/* What you will learn card - only show if learnings exist */}
                  {topic.learnings && topic.learnings.length > 0 && (
                    <div
                      style={{
                        backgroundColor: '#F9FAFB',
                        borderRadius: 8,
                        padding: '20px 24px',
                        marginBottom: 20,
                        borderBottom: `3px solid ${section.accentColor}`,
                      }}
                    >
                      <h4
                        style={{
                          fontSize: 15,
                          fontWeight: 600,
                          color: '#374151',
                          marginBottom: 14,
                          marginTop: 0,
                        }}
                      >
                        What you will learn
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {topic.learnings.map((learning, learningIndex) => (
                          <li
                            key={learningIndex}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 10,
                              marginBottom: 10,
                              fontSize: 14,
                              color: '#4B5563',
                            }}
                          >
                            <CheckIcon />
                            {learning}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Video Cards */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: 16,
                    }}
                    className="video-grid"
                  >
                    {topic.videos.map((video, videoIndex) => (
                      <div
                        key={videoIndex}
                        onClick={() => {
                          setSelectedVideo(video.youtubeLink)
                          setLastPlayedVideo(video.youtubeLink)
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 16,
                          padding: '16px 20px',
                          backgroundColor: 'white',
                          borderRadius: 14,
                          border: '1px solid #E8E8E8',
                          boxShadow: video.active ? '0 4px 12px rgba(0,0,0,0.06)' : 'none',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <PlayIcon filled={lastPlayedVideo === video.youtubeLink} />
                        <div style={{ minWidth: 0 }}>
                          <p
                            style={{
                              fontSize: 16,
                              fontWeight: 600,
                              color: '#111',
                              margin: 0,
                              marginBottom: 6,
                            }}
                          >
                            {video.title}
                          </p>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 6,
                              fontSize: 14,
                              color: '#9CA3AF',
                            }}
                          >
                            <ClockIcon />
                            {video.duration}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )
        })}

        {/* Responsive Styles */}
        <style jsx>{`
          @media (max-width: 900px) {
            .video-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 640px) {
            .video-tabs {
              flex-direction: column !important;
            }
            .video-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
      {selectedVideo && (
        <div
          onClick={() => setSelectedVideo(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: 20,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "90%",
              maxWidth: 900,
              background: "#fff",
              borderRadius: 12,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              style={{
                position: "absolute",
                top: 10,
                right: 15,
                background: "none",
                border: "none",
                fontSize: 28,
                cursor: "pointer",
                zIndex: 2,
              }}
            >
              ×
            </button>

            <iframe
              width="100%"
              height="500"
              src={
                selectedVideo
                  .replace("watch?v=", "embed/")
                  .split("&")[0] + "?autoplay=1"
              }
              
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
