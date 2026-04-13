'use client'

import { useState, useRef } from 'react'

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
          { title: 'Functions in Python: Part 1', duration: '01:05:04', active: true },
          { title: 'Functions in Python: Part 2', duration: '01:05:04', active: false },
          { title: 'Functions in Python: Part 3', duration: '01:05:04', active: false },
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
          { title: 'Lists in Python: Part 1', duration: '01:12:17', active: false },
          { title: 'Lists in Python: Part 2', duration: '01:25:07', active: false },
          { title: 'Lists in Python: Part 3', duration: '01:12:18', active: false },
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
          { title: 'Pandas Fundamentals: Part 1', duration: '01:07:49', active: false },
          { title: 'Pandas Fundamentals: Part 2', duration: '01:14:37', active: false },
          { title: 'Pandas Fundamentals: Part 3', duration: '01:19:56', active: false },
        ],
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
          { title: 'Pandas Assignment: Part 1', duration: '01:41:58', active: false },
          { title: 'Pandas Assignment: Part 2', duration: '01:00:36', active: false },
          { title: 'Pandas Assignment: Part 3', duration: '01:19:50', active: false },
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
          { title: 'CAP Theorem Explained', duration: '01:24:43', active: false },
          { title: 'PACELC Theorem for System De', duration: '01:16:06', active: false },
          { title: 'Consistency Models Explained', duration: '01:21:07', active: false },
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
          { title: 'AVL Trees Explained', duration: '01:01:24', active: false },
          { title: 'AVL Tree Rotations Explained', duration: '00:53:49', active: false },
          { title: 'Red-Black Trees Explained', duration: '01:28:55', active: false },
        ],
      },
    ],
  },
]

export default function VideoContentSection() {
  const [activeTab, setActiveTab] = useState('python')
  const sectionRefs = useRef({})

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId)
    if (sectionRefs.current[sectionId]) {
      sectionRefs.current[sectionId].scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section style={{ padding: '60px 20px 80px' }}>
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
                        <PlayIcon filled={video.active} />
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
    </section>
  )
}
