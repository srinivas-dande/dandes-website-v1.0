'use client'

import { useState, useEffect } from 'react'

export default function PrivacyContent() {
  const [activeSection, setActiveSection] = useState('who-we-are')

  const navItems = [
    { id: 'who-we-are', label: 'Who We Are' },
    { id: 'what-information', label: 'What Information We Collect' },
    { id: 'how-we-use', label: 'How We Use Your Information' },
    { id: 'how-we-share', label: 'How We Share Your Information' },
    { id: 'cookies', label: 'Cookies' },
    { id: 'data-retention', label: 'Data Retention' },
    { id: 'your-rights', label: 'Your Rights' },
    { id: 'contact-data', label: 'How to Contact Us About Your Data' },
    { id: 'changes', label: 'Changes to This Policy' },
    { id: 'childrens-privacy', label: "Children's Privacy" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.offsetTop - offset
      window.scrollTo({ top: elementPosition, behavior: 'smooth' })
    }
  }

  return (
    <section style={{ padding: '60px 0 100px' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          gap: 60,
        }}
      >
        {/* Left Sidebar Navigation */}
        <nav
          style={{
            width: 280,
            flexShrink: 0,
            position: 'sticky',
            top: 100,
            height: 'fit-content',
            borderLeft: '3px solid #c81e1e',
            paddingLeft: 20,
          }}
        >
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {navItems.map((item) => (
              <li key={item.id} style={{ marginBottom: 12 }}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    fontSize: 14,
                    color: activeSection === item.id ? '#1f2937' : '#6b7280',
                    fontWeight: activeSection === item.id ? 600 : 400,
                    textAlign: 'left',
                    transition: 'color 0.2s',
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Content */}
        <div style={{ flex: 1, maxWidth: 720 }}>
          {/* Who We Are */}
          <section id="who-we-are" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#1f2937',
                marginBottom: 16,
              }}
            >
              Who We Are
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: '#4b5563',
                marginBottom: 16,
              }}
            >
              Dandes Academy, also known as Dande&apos;s Course and previously as JLC, the Java Learning Center, is an
              online training platform for engineers and students. We&apos;re based in Bangalore, India.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#4b5563' }}>
              If you have questions about your data, contact us at:{' '}
              <a href="mailto:hello@dandesacademy.com" style={{ color: '#1f2937' }}>
                hello@dandesacademy.com
              </a>
            </p>
          </section>

          {/* What Information We Collect */}
          <section id="what-information" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#1f2937',
                marginBottom: 20,
              }}
            >
              What Information We Collect
            </h2>

            <h3
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: '#1f2937',
                marginBottom: 12,
              }}
            >
              Information you give us directly
            </h3>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: '#4b5563',
                marginBottom: 12,
              }}
            >
              When you fill in an inquiry form, register for a webinar, download a brochure, or contact us, you may share:
            </p>
            <ul
              style={{
                listStyle: 'disc',
                paddingLeft: 24,
                marginBottom: 24,
                color: '#4b5563',
                fontSize: 15,
                lineHeight: 2,
              }}
            >
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number or WhatsApp number</li>
              <li>City</li>
              <li>Professional background (years of experience, current role)</li>
              <li>Course interests and goals</li>
            </ul>

            <h3
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: '#1f2937',
                marginBottom: 12,
                paddingTop: 16,
                borderTop: '1px solid #e5e7eb',
              }}
            >
              Information collected automatically
            </h3>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: '#4b5563',
                marginBottom: 12,
              }}
            >
              When you visit our website, we may automatically collect:
            </p>
            <ul
              style={{
                listStyle: 'disc',
                paddingLeft: 24,
                marginBottom: 16,
                color: '#4b5563',
                fontSize: 15,
                lineHeight: 2,
              }}
            >
              <li>IP address</li>
              <li>Browser type and device information</li>
              <li>Pages visited and time spent on the website</li>
              <li>Referring URL (how you found us)</li>
            </ul>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#4b5563' }}>
              This is collected through standard analytics tools (such as Google Analytics) and cookies.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section id="how-we-use" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#1f2937',
                marginBottom: 16,
              }}
            >
              How We Use Your Information
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: '#4b5563',
                marginBottom: 12,
              }}
            >
              We use the information you share to:
            </p>
            <ul
              style={{
                listStyle: 'disc',
                paddingLeft: 24,
                marginBottom: 16,
                color: '#4b5563',
                fontSize: 15,
                lineHeight: 2,
              }}
            >
              <li>Respond to your inquiry about courses, fees, and batches</li>
              <li>Send you webinar access links and follow-up resources</li>
              <li>Contact you via WhatsApp, email, or phone to help you make an informed enrollment decision</li>
              <li>Share course updates, new batch announcements, and relevant program information</li>
              <li>Improve our website and understand how people find and use it</li>
            </ul>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: '#4b5563',
                padding: '16px',
                backgroundColor: '#f9fafb',
                borderRadius: 8,
              }}
            >
              We do not use your information for unrelated advertising. We do not sell it to third parties.
            </p>
          </section>

          {/* How We Share Your Information */}
          <section id="how-we-share" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#1f2937',
                marginBottom: 16,
              }}
            >
              How We Share Your Information
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: '#4b5563',
                marginBottom: 12,
              }}
            >
              We do not sell or rent your personal data. We may share it with:
            </p>
            <ul
              style={{
                listStyle: 'disc',
                paddingLeft: 24,
                marginBottom: 16,
                color: '#4b5563',
                fontSize: 15,
                lineHeight: 2,
              }}
            >
              <li>
                Our CRM and communication tools (such as Zoho Bigin and WhatsApp Business) to manage inquiries and send
                follow-ups
              </li>
              <li>
                Google Analytics and advertising platforms (such as Google Ads) for website analytics and campaign
                measurement, in aggregate and anonymised form
              </li>
              <li>Legal authorities if required by law</li>
            </ul>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#4b5563' }}>
              All third-party tools we use are required to handle your data securely and in compliance with applicable
              laws.
            </p>
          </section>

          {/* Cookies */}
          <section id="cookies" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#1f2937',
                marginBottom: 16,
              }}
            >
              Cookies
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: '#4b5563',
                marginBottom: 12,
              }}
            >
              We use cookies to:
            </p>
            <ul
              style={{
                listStyle: 'disc',
                paddingLeft: 24,
                marginBottom: 16,
                color: '#4b5563',
                fontSize: 15,
                lineHeight: 2,
              }}
            >
              <li>Remember your preferences on the website</li>
              <li>Understand how visitors use our pages (analytics)</li>
              <li>Measure the performance of our ads (conversion tracking)</li>
            </ul>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#4b5563' }}>
              You can control cookies through your browser settings. Disabling cookies may affect some website features.
            </p>
          </section>

          {/* Data Retention */}
          <section id="data-retention" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#1f2937',
                marginBottom: 16,
              }}
            >
              Data Retention
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#4b5563' }}>
              We keep your data for as long as it&apos;s needed to serve you or comply with legal obligations. If you ask us
              to delete your data, we&apos;ll do so promptly. See Section 8 for how to contact us.
            </p>
          </section>

          {/* Your Rights */}
          <section id="your-rights" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#1f2937',
                marginBottom: 16,
              }}
            >
              Your Rights
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: '#4b5563',
                marginBottom: 12,
              }}
            >
              You have the right to:
            </p>
            <ul
              style={{
                listStyle: 'disc',
                paddingLeft: 24,
                marginBottom: 16,
                color: '#4b5563',
                fontSize: 15,
                lineHeight: 2,
              }}
            >
              <li>Ask what data we hold about you</li>
              <li>Request corrections to your data</li>
              <li>Ask us to delete your data</li>
              <li>Opt out of marketing communications at any time. Just reply &quot;stop&quot; to any message or email us.</li>
            </ul>
          </section>

          {/* How to Contact Us About Your Data */}
          <section id="contact-data" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#1f2937',
                marginBottom: 16,
              }}
            >
              How to Contact Us About Your Data
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#4b5563', marginBottom: 8 }}>
              <span style={{ fontWeight: 600 }}>Email:</span>{' '}
              <a href="mailto:hello@dandesacademy.com" style={{ color: '#1f2937' }}>
                hello@dandesacademy.com
              </a>{' '}
              <span style={{ fontWeight: 600, marginLeft: 8 }}>WhatsApp:</span> +91 7090366699
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#4b5563' }}>
              We&apos;ll respond within 5 business days.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section id="changes" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#1f2937',
                marginBottom: 16,
              }}
            >
              Changes to This Policy
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#4b5563' }}>
              If we update this policy, we&apos;ll change the date at the top of this page. If the changes are significant,
              we&apos;ll let you know via email or WhatsApp.
            </p>
          </section>

          {/* Children's Privacy */}
          <section id="childrens-privacy" style={{ marginBottom: 0 }}>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#1f2937',
                marginBottom: 16,
              }}
            >
              Children&apos;s Privacy
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#4b5563' }}>
              Our programs are designed for adults (18+). We do not knowingly collect personal data from anyone under 18.
              If we discover we&apos;ve collected data from a minor, we&apos;ll delete it promptly.
            </p>
          </section>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 900px) {
          nav {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
