'use client'
 
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { faqData } from "./faq-data";

const categories = [
  { id: 'general', label: 'General' },
  { id: 'aiml', label: 'AI/ML Course' },
  { id: 'systemDesign', label: 'System Design Course' },
  { id: 'dsa', label: 'DSA Course' },
  { id: 'learningFormat', label: 'Learning Format' },
  { id: 'feesPayment', label: 'Fees and Payment' },
  { id: 'careerSupport', label: 'Career Support' },
  { id: 'contact', label: 'Still have questions?' }
]

function FaqAccordion({ category, data }) {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div id={category} style={{ marginBottom: 60, scrollMarginTop: 100 }}>
      <h2
        style={{
          fontSize: 28,
          fontWeight: 600,
          color: '#111',
          marginBottom: 24,
        }}
      >
        {data.title}
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {data.questions.map((item, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: 12,
              overflow: 'hidden',
              backgroundColor: '#fff',
            }}
          >
            <button
              onClick={() => toggleQuestion(index)}
              style={{
                width: '100%',
                padding: '20px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#111',
                }}
              >
                {index + 1}. {item.question}
              </span>
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 300,
                  color: openIndex === index ? '#111' : '#d12027',
                  flexShrink: 0,
                  marginLeft: 16,
                }}
              >
                {openIndex === index ? '−' : '+'}
              </span>
            </button>

            {openIndex === index && (
              <div
                style={{
                  padding: '0 24px 20px 24px',
                }}
              >
                <p
                  style={{
                    fontSize: 14,
                    color: '#666',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function FaqContentSection() {
  
  const [activeCategory, setActiveCategory] = useState('general')

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId)
    if (categoryId === 'contact') {
      // Scroll to contact section or handle differently
      return
    }
    const element = document.getElementById(categoryId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = categories
        .map((category) => document.getElementById(category.id))
        .filter(Boolean)

      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveCategory(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section
      style={{
        padding: '60px 20px 80px',
        maxWidth: 1200,
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 60,
        }}
        className="faq-container"
      >
        {/* Left Sidebar Navigation */}
        <nav
          style={{
            width: 220,
            flexShrink: 0,
            position: 'sticky',
            top: 100,
            alignSelf: 'flex-start',
            height: 'fit-content',
          }}
          className="faq-sidebar"
        >
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => handleCategoryClick(category.id)}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '12px 16px',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    borderLeft: activeCategory === category.id ? '3px solid #d12027' : '3px solid transparent',
                    cursor: 'pointer',
                    fontSize: 14,
                    color: activeCategory === category.id ? '#111' : '#666',
                    fontWeight: activeCategory === category.id ? 500 : 400,
                    transition: 'all 0.2s ease',
                  }}
                >
                  {category.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Content */}
        <div style={{ flex: 1, minWidth: 0 }} className="faq-content">
          <FaqAccordion category="general" data={faqData.general} />
          <FaqAccordion category="aiml" data={faqData.aiml} />
          <FaqAccordion category="systemDesign" data={faqData.systemDesign} />
          <FaqAccordion category="dsa" data={faqData.dsa} />
          <FaqAccordion category="learningFormat" data={faqData.learningFormat} />
          <FaqAccordion category="feesPayment" data={faqData.feesPayment} />
          <FaqAccordion category="careerSupport" data={faqData.careerSupport} />

          {/* Still have questions section */}
          <div id="contact" style={{ marginTop: 60, scrollMarginTop: 100 }}>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: '#111',
                marginBottom: 16,
              }}
            >
              Still have questions?
            </h2>
            <p
              style={{
                fontSize: 16,
                color: '#666',
                marginBottom: 24,
                lineHeight: 1.6,
              }}
            >
              {"Can't find the answer you're looking for? Please reach out to our team."}
            </p>
            <Link
              href="/contact-us"
              style={{
                backgroundColor: '#d12027',
                color: '#fff',
                padding: '14px 28px',
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .faq-container {
            flex-direction: column !important;
            gap: 20px !important;
          }

          /* ❌ Hide sidebar completely */
          .faq-sidebar {
            display: none !important;
          }
        }
      `}</style>
      
    </section>
  )
}
