'use client'

import { useState } from "react"
import { PopupFormModal } from "@/components/dandes/popup-form-modal"


export function BlogPostHero({
  heroImage = '/blogs/hero-bg-blogs-page.png',
  tags = ['Live classes', 'Structured curriculum'],
  title = 'AI Engineer Vs ML Engineer Vs Data Scientist:',
  subtitle = 'Roles, Skills And Roadmaps (2026 Guide)',
  author = 'Srinivas Dandes',
  date = '24 Jan 2026',
}) {

  const [showPopup, setShowPopup] = useState(false)

  const socialLinks = [
    { name: 'WhatsApp', icon: '/icons/whatsapp.png' },
    { name: 'LinkedIn', icon: '/icons/linkedin.png' },
    { name: 'Facebook', icon: '/icons/facebook.png' },
    { name: 'Email', icon: '/icons/email.png' },
  ]

  const handleShare = (platform) => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    const shareTitle = `${title} ${subtitle}`

    const shareUrls = {
      WhatsApp: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + url)}`,
      LinkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      Facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      Email: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(url)}`,
    }

    if (typeof window !== 'undefined') {
      window.open(
        shareUrls[platform],
        '_blank',
        'noopener,noreferrer,width=600,height=400'
      )
    }
  }

  return (
    <section style={{ backgroundColor: '#fff' }}>
      {/* Hero Section with Background Image and Text Overlay */}
      <div style={{
        width: '100%',
        position: 'relative',
        minHeight: 460,
        overflow: 'hidden',
      }}>
        {/* Background Image */}
        <img
          src={heroImage}
          alt=""
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />

        {/* Text Content Overlay */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1200,
          margin: '0 auto',
          padding: '80px 24px 80px 24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: 460,
        }}>
          {/* Tags */}
          <div style={{
            display: 'flex',
            gap: 12,
            marginBottom: 24,
          }}>
            {tags.map((tag, index) => {
              const isFirstTag = index === 0

              return (
                <span
                  key={index}
                  style={{
                    padding: '5px 12px',
                    backgroundColor: isFirstTag ? '#DBDFFC' : '#FFEAEA',
                    color: isFirstTag ? '#4F46E5' : '#DC2626',
                    fontSize: 11,
                    fontWeight: 500,
                    borderRadius: 6,
                    border: 'none',
                  }}
                >
                  {tag}
                </span>
              )
            })}
          </div>

          {/* Main Title */}
          <h1 style={{
            fontSize: 42,
            fontWeight: 700,
            color: '#111',
            lineHeight: 1.2,
            marginBottom: 12,
            maxWidth: 700,
            margin: 0,
          }}>
            {title}
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 22,
            fontWeight: 400,
            color: '#535353',
            marginTop: 16,
            marginBottom: 48,
            maxWidth: 600,
          }}>
            {subtitle}
          </p>

          {/* Author Section */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}>
            <img
              src="/blogs/author-logo.png"
              alt="Author Logo"
              style={{
                width: 38,
                height: 30,
                borderRadius: 6,
                objectFit: 'cover',
              }}
            />

            {/* Author Name */}
            <span style={{
              fontSize: 15,
              fontWeight: 500,
              color: '#111',
            }}>
              {author}
            </span>

            {/* Separator */}
            <div style={{
              width: 1,
              height: 40,
              backgroundColor: '#CF20304D',
              
            }} />

            {/* Date */}
            <span style={{
              fontSize: 15,
              color: '#000000',
            }}>
              {date}
            </span>
          </div>
        </div>
      </div>

      {/* Share Bar */}
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '24px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 20,
        borderBottom: '1px solid #e5e7eb',
      }}>
        {/* Left Side - Share This */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{
            fontSize: 14,
            fontWeight: 600,
            color: '#1e3a5f',
            textDecoration: 'underline',
            textUnderlineOffset: 4,
          }}>
            Share This
          </span>
          <div style={{ display: 'flex', gap: 8 }}>
            {socialLinks.map((social) => (
              <button
                key={social.name}
                onClick={() => handleShare(social.name)}
                aria-label={`Share on ${social.name}`}
                style={{
                  width: 36,
                  height: 36,
                  backgroundColor: '#d12027',
                  border: 'none',
                  borderRadius: 8,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b91c22'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#d12027'}
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  style={{
                    width: 18,
                    height: 18,
                    objectFit: 'contain'
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Webinar CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <span style={{
            fontSize: 15,
            color: '#d12027',
            fontWeight: 500,
            cursor: 'pointer',
          }}>
            Join the Free Webinar
          </span>
          <button
            onClick={() => setShowPopup(true)}

            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '12px 28px',
              backgroundColor: '#d12027',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b91c22'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#d12027'}
          >
            Register Now
            <svg width={16} height={16} fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 3 L12 8 L5 13" />
            </svg>
          </button>
          <PopupFormModal
            showPopup={showPopup}
            setShowPopup={setShowPopup}
          />

        </div>
      </div>
    </section>
  )
}
