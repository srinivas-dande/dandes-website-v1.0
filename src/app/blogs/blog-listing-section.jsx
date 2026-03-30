'use client'

import { useState } from 'react'

const tags = [
  { label: 'Live classes', bg: '#dbeafe', color: '#1e40af' },
  { label: 'Structured curriculum', bg: '#fee2e2', color: '#dc2626' },
  { label: 'Hands-on projects', bg: '#ccfbf1', color: '#0d9488' },
  { label: 'Hands-on projects', bg: '#ccfbf1', color: '#0d9488' },
  { label: 'Live classes', bg: '#dbeafe', color: '#1e40af' },
  { label: 'Live classes', bg: '#dbeafe', color: '#1e40af' },
  { label: 'Interview preparation', bg: '#dcfce7', color: '#16a34a' },
  { label: 'Interview preparation', bg: '#dcfce7', color: '#16a34a' },
]

const topPosts = [
  'AI Engineer vs ML Engineer vs Data Scientist: Roles, Skills & Roadmaps (2026 Guide)',
  'Top 10 AI/ML Projects That Actually Impress Recruiters (With What to Include on GitHub)',
  'GenAI Starter Pack: What to Learn to Build LLM Apps (RAG, Vector DBs, Agents)',
  'ML Interview Prep: 30 Must-Know Questions (ML, Stats, Python, and Model Debugging)',
]

const allBlogPosts = [
  { id: 1, slug: 'ai-engineer-vs-ml-engineer-vs-data-scientist-2026', image: '/blog/post-1.png', tags: ['Live classes', 'Structured curriculum'], author: 'Srinivas Dandes', date: '24 Jan 2026', title: 'AI Engineer Vs ML Engineer Vs Data Scientist (2026)', description: 'Compare AI Engineer, ML Engineer, and Data Scientist roles in 2026, with skills, tools, projects, and step-by-step roadmaps to choose your path.' },
  { id: 2, slug: 'top-10-aiml-projects-that-impress-recruiters', image: '/blog/post-2.png', tags: ['Live classes', 'Structured curriculum'], author: 'Srinivas Dandes', date: '24 Jan 2026', title: 'Top 10 AI/ML Projects That Actually Impress Recruiters', description: 'Build portfolio projects that stand out to hiring managers and demonstrate real AI/ML skills.' },
  { id: 3, slug: 'genai-starter-pack-building-llm-apps', image: '/blog/post-3.png', tags: ['Live classes', 'Structured curriculum'], author: 'Srinivas Dandes', date: '24 Jan 2026', title: 'GenAI Starter Pack: Building LLM Apps', description: 'Learn to build production-ready LLM applications with RAG, Vector DBs, and AI Agents.' },
  { id: 4, slug: 'ml-interview-prep-30-must-know-questions', image: '/blog/post-4.png', tags: ['Live classes', 'Structured curriculum'], author: 'Srinivas Dandes', date: '24 Jan 2026', title: 'ML Interview Prep: 30 Must-Know Questions', description: 'Master the most common ML interview questions covering stats, Python, and model debugging.' },
  { id: 5, slug: 'deep-learning-fundamentals-for-beginners', image: '/blog/post-5.png', tags: ['Live classes', 'Structured curriculum'], author: 'Srinivas Dandes', date: '24 Jan 2026', title: 'Deep Learning Fundamentals for Beginners', description: 'Start your deep learning journey with neural networks, backpropagation, and PyTorch basics.' },
  { id: 6, slug: 'nlp-workflows-and-text-processing', image: '/blog/post-6.png', tags: ['Live classes', 'Structured curriculum'], author: 'Srinivas Dandes', date: '24 Jan 2026', title: 'NLP Workflows and Text Processing', description: 'Build real-world NLP applications with transformers, sentiment analysis, and text generation.' },
  { id: 7, slug: 'computer-vision-basics-and-applications', image: '/blog/post-7.png', tags: ['Live classes', 'Structured curriculum'], author: 'Srinivas Dandes', date: '24 Jan 2026', title: 'Computer Vision Basics and Applications', description: 'Learn image classification, object detection, and practical CV implementations.' },
  { id: 8, slug: 'mlops-fundamentals-and-deployment', image: '/blog/post-8.png', tags: ['Live classes', 'Structured curriculum'], author: 'Srinivas Dandes', date: '24 Jan 2026', title: 'MLOps Fundamentals and Deployment', description: 'Deploy ML models to production with Docker, Kubernetes, and CI/CD pipelines.' },
  { id: 9, slug: 'agentic-ai-workflows-for-modern-apps', image: '/blog/post-9.png', tags: ['Live classes', 'Structured curriculum'], author: 'Srinivas Dandes', date: '24 Jan 2026', title: 'Agentic AI Workflows for Modern Apps', description: 'Build autonomous AI agents that can reason, plan, and execute complex tasks.' },
]

export function BlogListingSection() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 9

  const toggleTag = (label) => {
    setSelectedTags(prev => 
      prev.includes(label) ? prev.filter(t => t !== label) : [...prev, label]
    )
  }

  // Filter posts based on search query and selected tags
  const filteredPosts = allBlogPosts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => post.tags.includes(tag))
    
    return matchesSearch && matchesTags
  })

  // Paginate filtered posts
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  )

  return (
    <section style={{ backgroundColor: '#fff', padding: '48px 0 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div
        
          style={{
            display: 'flex',
            gap: 40,
            flexWrap: 'wrap-reverse',
            alignItems: 'stretch',
            justifyContent: 'space-between',
          }}

        >
          
          {/* Left Sidebar */}
          <aside
            style={{
              flex: '1 1 280px',
              maxWidth: 280,
              
            }}
          >
            
            {/* Search - Working */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '12px 16px',
              border: '1px solid #e5e7eb',
              borderRadius: 8,
              marginBottom: 32,
              backgroundColor: '#fff',
            }}>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1)
                }}
                style={{
                  border: 'none',
                  outline: 'none',
                  fontSize: 14,
                  color: '#374151',
                  width: '100%',
                  backgroundColor: 'transparent',
                }}
              />
              <svg width={16} height={16} fill="none" stroke="#9ca3af" strokeWidth={2} style={{ flexShrink: 0 }}>
                <circle cx={7} cy={7} r={5} />
                <line x1={11} y1={11} x2={14} y2={14} />
              </svg>
            </div>

            {/* Tags */}
            <div style={{ 
              backgroundColor: '#fef7f7', 
              borderRadius: 12, 
              padding: 20,
              marginBottom: 32,
            }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#1a1a1a', marginBottom: 16 }}>Tags</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {tags.map((tag, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      toggleTag(tag.label)
                      setCurrentPage(1)
                    }}
                    style={{
                      padding: '6px 12px',
                      fontSize: 12,
                      borderRadius: 6,
                      border: selectedTags.includes(tag.label) ? '2px solid #d12027' : 'none',
                      backgroundColor: tag.bg,
                      color: tag.color,
                      cursor: 'pointer',
                      fontWeight: 500,
                    }}
                  >
                    {tag.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Top 5 Blog Posts */}
            <div style={{ 
              backgroundColor: '#fafafa', 
              borderRadius: 12, 
              padding: 20,
              marginBottom: 32,
            }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1a1a1a', marginBottom: 20 }}>Top 5 Blog Posts</h3>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {topPosts.map((post, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: 12,
                      textDecoration: 'none',
                      padding: '16px 0',
                      borderBottom: i < topPosts.length - 1 ? '1px solid #e5e7eb' : 'none',
                    }}
                  >
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.5 }}>
                      {i + 1}. {post}
                    </span>
                    <svg width={16} height={16} fill="none" stroke="#f87171" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2 }}>
                      <path d="M6 4 L10 8 L6 12" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Free Webinar Card */}
            <div style={{
              backgroundColor: '#fff',
              borderRadius: 16,
              padding: 24,
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              border: '1px solid #f3f4f6',
            }}>
              <p style={{ 
                fontSize: 18, 
                fontWeight: 600, 
                color: '#d12027', 
                marginBottom: 4,
                
              }}>
                Free Webinar:
              </p>
              <h4 style={{ 
                fontSize: 22, 
                fontWeight: 800, 
                color: '#1a1a1a', 
                marginBottom: 16, 
                lineHeight: 1.3 
              }}>
                Build Job-Ready AI/ML Skills
              </h4>
              <p style={{ 
                fontSize: 14, 
                color: '#6b7280', 
                marginBottom: 24, 
                lineHeight: 1.6 
              }}>
                Get a clear learning path, project guidance, and interview tips from industry mentors.
              </p>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 18px',
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                color: '#1a1a1a',
                cursor: 'pointer',
              }}>
                Register Free Now
                <span style={{
                  width: 24,
                  height: 24,
                  backgroundColor: '#d12027',
                  borderRadius: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width={10} height={10} fill="none" stroke="#fff" strokeWidth={2.5}>
                    <path d="M3 2 L7 5 L3 8" />
                  </svg>
                </span>
              </button>
            </div>
          </aside>

          {/* Right Content - Blog Grid */}
          <div style={{ flex: 1 }}>
            {/* Results info */}
            {(searchQuery || selectedTags.length > 0) && (
              <p style={{ marginBottom: 16, fontSize: 14, color: '#6b7280' }}>
                Showing {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''}
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            )}

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 24,
              rowGap: '35px',
            }}>
              {paginatedPosts.map((post) => (
                <article key={post.id} style={{ display: 'flex', flexDirection: 'column' }}>
                  {/* Image */}
                  <div style={{
                    width: '100%',
                    aspectRatio: '16/10',
                    backgroundColor: '#e5e7eb',
                    borderRadius: 8,
                    marginBottom: 12,
                    overflow: 'hidden',
                  }}>
                    {post.image && (
                      <img
                        src={post.image}
                        alt={post.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                    )}
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                    {post.tags.map((tag, j) => (
                      <span
                        key={j}
                        style={{
                          padding: '4px 10px',
                          fontSize: 11,
                          borderRadius: 4,
                          backgroundColor: j === 0 ? '#dbeafe' : '#fee2e2',
                          color: j === 0 ? '#1e40af' : '#dc2626',
                          fontWeight: 500,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author & Date */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <span style={{
                      width: 8,
                      height: 8,
                      backgroundColor: '#d1d5db',
                      borderRadius: '50%',
                    }} />
                    <span style={{ fontSize: 12, color: '#9ca3af' }}>{post.author}</span>
                    <span style={{ fontSize: 12, color: '#9ca3af', marginLeft: 'auto' }}>{post.date}</span>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: '#1a1a1a',
                    marginBottom: 8,
                    lineHeight: 1.4,
                  }}>
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: 13,
                    color: '#6b7280',
                    lineHeight: 1.6,
                    marginBottom: 16,
                    flex: 1,
                  }}>
                    {post.description}
                  </p>

                  {/* Read More */}
                  <a
                    href={`/blogs/${post.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '8px 14px',
                      border: '1px solid #e5e7eb',
                      borderRadius: 6,
                      fontSize: 13,
                      color: '#1a1a1a',
                      textDecoration: 'none',
                      width: 'fit-content',
                    }}
                  >
                    Read More
                    <span style={{
                      width: 22,
                      height: 22,
                      backgroundColor: '#d12027',
                      borderRadius: 4,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <svg width={10} height={10} fill="none" stroke="#fff" strokeWidth={2}>
                        <path d="M3 2 L7 5 L3 8" />
                      </svg>
                    </span>
                  </a>
                </article>
              ))}
            </div>

            {/* No results */}
            {paginatedPosts.length === 0 && (
              <div style={{ textAlign: 'center', padding: '60px 0', color: '#6b7280' }}>
                <p style={{ fontSize: 16 }}>No posts found matching your criteria.</p>
              </div>
            )}

            {/* Pagination - Left aligned */}
            {filteredPosts.length > 0 && (
              <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 8,
                marginTop: 48,
              }}>
                {Array.from({ length: Math.max(totalPages, 4) }, (_, i) => i + 1).slice(0, 4).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 6,
                      border: '1px solid #e5e7eb',
                      backgroundColor: '#fff',
                      color: '#1a1a1a',
                      fontSize: 14,
                      cursor: 'pointer',
                      fontWeight: currentPage === page ? 600 : 400,
                    }}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages || 1))}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 6,
                    border: 'none',
                    backgroundColor: '#d12027',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <svg width={12} height={12} fill="none" stroke="#fff" strokeWidth={2.5}>
                    <path d="M4 2 L9 6 L4 10" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
