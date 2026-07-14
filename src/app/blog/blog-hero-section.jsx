'use client'

import { useState } from 'react'
import { useRouter } from "next/navigation"

export function BlogHeroSection() {
  const router = useRouter()
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Handle subscription logic
    console.log('Subscribing:', email)
    setEmail('')
    router.push('/thank-you')
  }

  return (
    <section
      style={{
        position: 'relative',
        padding: '100px 24px 120px',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Full Background Image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <img
          src="/images/blog/hero-bg-blog.png"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <h1
          style={{
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 800,
            color: '#1a1a1a',
            lineHeight: 1.2,
            margin: '0 0 24px',
          }}
        >
          AI & Machine Learning Insights for
          <br />
          Real-World Careers
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '1.05rem',
            color: '#6b7280',
            lineHeight: 1.7,
            margin: '0 0 40px',
            maxWidth: 640,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Practical guides, project walkthroughs, and interview-ready tips, built for
          professionals and serious learners.
        </p>

        {/* Email Subscription Form */}
        <form
          onSubmit={handleSubscribe}
          style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
            maxWidth: 520,
            margin: '0 auto',
          }}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              flex: '1 1 280px',
              minWidth: 200,
              padding: '16px 20px',
              fontSize: '1rem',
              backgroundColor: '#e5e7eb',
              border: 'none',
              borderRadius: 8,
              outline: 'none',
              color: '#374151',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '16px 40px',
              fontSize: '1rem',
              fontWeight: 600,
              color: '#fff',
              backgroundColor: '#c81e2b',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#a71823')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#c81e2b')}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
