'use client'

import { useState, useEffect } from 'react'

export default function TermsContent() {
  const [activeSection, setActiveSection] = useState('about')

  const navItems = [
    { id: 'about', label: 'About Dandes Academy' },
    { id: 'enrollment', label: 'Enrollment and Payment' },
    { id: 'refund', label: 'Refund Policy' },
    { id: 'batch', label: 'Batch Switching' },
    { id: 'lms', label: 'LMS Access' },
    { id: 'intellectual', label: 'Intellectual Property' },
    { id: 'conduct', label: 'Student Conduct' },
    { id: 'career', label: 'Career Support and Placement Disclaimer' },
    { id: 'program', label: 'Program Changes' },
    { id: 'liability', label: 'Limitation of Liability' },
    { id: 'governing', label: 'Governing Law' },
    { id: 'contact', label: 'Contact for Terms Queries' },
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

  const listItemStyle = {
    fontSize: 15,
    color: '#4b5563',
    lineHeight: 1.7,
    marginBottom: 12,
    paddingLeft: 8,
  }

  return (
    <section
      style={{
        backgroundColor: '#fff',
        padding: '60px 24px 100px',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          gap: 60,
        }}
      >
        {/* Left Sidebar Navigation */}
        <nav
          style={{
            width: 240,
            flexShrink: 0,
            position: 'sticky',
            top: 100,
            height: 'fit-content',
           
            paddingLeft: 0,
          }}
          className="terms-nav"
        >
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '12px 16px',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    borderLeft:
                      activeSection === item.id
                        ? '3px solid #d12027'
                        : '3px solid transparent',
                    cursor: 'pointer',
                    fontSize: 14,
                    color: activeSection === item.id ? '#111' : '#666',
                    fontWeight: activeSection === item.id ? 500 : 400,
                    transition: 'all 0.2s ease',
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
          {/* About Dandes Academy */}
          <section id="about" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: '#111',
                marginBottom: 16,
              }}
            >
              About Dandes Academy
            </h2>
            <p
              style={{
                fontSize: 15,
                color: '#4b5563',
                lineHeight: 1.7,
              }}
            >
              Dandes Academy, also known as Dande&apos;s Course and previously as JLC, the Java Learning Center, is an
              online training platform offering programs in AI and Machine Learning, System Design, and Data
              Structures and Algorithms. By accessing our website or enrolling in any program, you agree to these
              terms.
            </p>
          </section>

          {/* Enrollment and Payment */}
          <section id="enrollment" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: '#111',
                marginBottom: 16,
              }}
            >
              Enrollment and Payment
            </h2>
            <ul style={{ listStyle: 'disc', paddingLeft: 20, margin: 0 }}>
              <li style={listItemStyle}>
                Enrollment is confirmed only upon receipt of the program fee.
              </li>
              <li style={listItemStyle}>
                The current fee for the AI/ML program in India is approximately Rs. 1 lakh. Exact fees, EMI options, and
                payment plans are communicated during the counselling call and may change across batches.
              </li>
              <li style={listItemStyle}>
                Fees must be paid as per the agreed schedule. Delayed payments may affect your ability to continue in
                the batch.
              </li>
              <li style={listItemStyle}>
                All payments are processed through the official payment links provided by Dandes Academy. Do not
                transfer money to personal accounts.
              </li>
            </ul>
          </section>

          {/* Refund Policy */}
          <section id="refund" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: '#111',
                marginBottom: 16,
              }}
            >
              Refund Policy
            </h2>
            <ul style={{ listStyle: 'disc', paddingLeft: 20, margin: 0 }}>
              <li style={listItemStyle}>
                A 30-day refund is available from the date of enrollment, subject to the following conditions.
              </li>
              <li style={listItemStyle}>
                The refund request must be made in writing to hello@dandesacademy.com within 30 days of
                enrollment.
              </li>
              <li style={listItemStyle}>
                Refunds are processed within 7 to 10 business days after the request is approved.
              </li>
              <li style={listItemStyle}>
                Refunds will not be processed after the 30-day window has passed.
              </li>
              <li style={listItemStyle}>
                Dandes Academy reserves the right to deny refunds in cases of misuse or policy violations.
              </li>
              <li style={listItemStyle}>
                Partial refunds are not provided for partially completed programs.
              </li>
            </ul>
          </section>

          {/* Batch Switching */}
          <section id="batch" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: '#111',
                marginBottom: 16,
              }}
            >
              Batch Switching
            </h2>
            <ul style={{ listStyle: 'disc', paddingLeft: 20, margin: 0 }}>
              <li style={listItemStyle}>
                Enrolled students may request a batch switch to a future batch within the same program.
              </li>
              <li style={listItemStyle}>
                Batch switching is subject to seat availability in the target batch.
              </li>
              <li style={listItemStyle}>
                Requests must be submitted in writing to hello@dandesacademy.com.
              </li>
              <li style={listItemStyle}>
                Batch switching may not be possible within an ongoing batch.
              </li>
              <li style={listItemStyle}>
                Dandes Academy reserves the right to approve or deny switch requests based on program terms.
              </li>
            </ul>
          </section>

          {/* LMS Access */}
          <section id="lms" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: '#111',
                marginBottom: 16,
              }}
            >
              LMS Access
            </h2>
            <ul style={{ listStyle: 'disc', paddingLeft: 20, margin: 0 }}>
              <li style={listItemStyle}>
                Enrolled students receive access to the LMS for five years from the date of enrollment.
              </li>
              <li style={listItemStyle}>
                LMS access is personal and non-transferable. Sharing login credentials is not permitted.
              </li>
              <li style={listItemStyle}>
                Dandes Academy reserves the right to revoke LMS access in cases of misuse or policy violations.
              </li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section id="intellectual" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: '#111',
                marginBottom: 16,
              }}
            >
              Intellectual Property
            </h2>
            <ul style={{ listStyle: 'disc', paddingLeft: 20, margin: 0 }}>
              <li style={listItemStyle}>
                All course content, including recordings, slides, assignments, project templates, and written materials,
                is the intellectual property of Dandes Academy.
              </li>
              <li style={listItemStyle}>
                Enrolled students may use course materials for personal learning only.
              </li>
              <li style={listItemStyle}>
                Reproducing, distributing, selling, or sharing course content in whole or in part without written
                permission is strictly prohibited.
              </li>
              <li style={listItemStyle}>
                Recording live sessions without prior consent from Dandes Academy is not permitted.
              </li>
            </ul>
          </section>

          {/* Student Conduct */}
          <section id="conduct" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: '#111',
                marginBottom: 16,
              }}
            >
              Student Conduct
            </h2>
            <ul style={{ listStyle: 'disc', paddingLeft: 20, margin: 0 }}>
              <li style={listItemStyle}>
                Students are expected to engage respectfully in all live sessions, communication channels, and
                support forums.
              </li>
              <li style={listItemStyle}>
                Disruptive behaviour during live classes may result in removal from the session.
              </li>
              <li style={listItemStyle}>
                Repeated violations of conduct guidelines may result in suspension or termination of enrollment without
                refund.
              </li>
              <li style={listItemStyle}>
                Students must not use Dandes Academy resources, materials, or name to create competing products
                or services.
              </li>
            </ul>
          </section>

          {/* Career Support and Placement Disclaimer */}
          <section id="career" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: '#111',
                marginBottom: 16,
              }}
            >
              Career Support and Placement Disclaimer
            </h2>
            <ul style={{ listStyle: 'disc', paddingLeft: 20, margin: 0 }}>
              <li style={listItemStyle}>
                Dandes Academy provides career support including resume guidance, LinkedIn optimisation, mock
                interviews, and interview preparation as part of enrolled programs.
              </li>
              <li style={listItemStyle}>
                <strong style={{ color: '#b91c1c' }}>Important disclaimer:</strong> Placement and job outcomes are not guaranteed. Career outcomes depend on
                the learner&apos;s prior experience, consistency, quality of project work, interview performance, and
                prevailing market conditions. Dandes Academy does not guarantee employment, a specific salary, or a
                specific role.
              </li>
              <li style={listItemStyle}>
                Any salary outcomes or career stories shared on the website represent individual results and should
                not be taken as a guarantee or expectation of similar outcomes.
              </li>
            </ul>
          </section>

          {/* Program Changes */}
          <section id="program" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: '#111',
                marginBottom: 16,
              }}
            >
              Program Changes
            </h2>
            <ul style={{ listStyle: 'disc', paddingLeft: 20, margin: 0 }}>
              <li style={listItemStyle}>
                Dandes Academy reserves the right to update curriculum content, tools, and program structure to
                reflect industry changes. Core learning outcomes will not be materially affected.
              </li>
              <li style={listItemStyle}>
                In the event of significant program changes, enrolled students will be notified in advance.
              </li>
              <li style={listItemStyle}>
                Batch schedules, session timings, and instructor availability may vary and are communicated via official
                channels.
              </li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section id="liability" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: '#111',
                marginBottom: 16,
              }}
            >
              Limitation of Liability
            </h2>
            <p
              style={{
                fontSize: 15,
                color: '#4b5563',
                lineHeight: 1.7,
              }}
            >
              To the maximum extent permitted by law, Dandes Academy is not liable for indirect, incidental, or
              consequential damages arising from your use of the website, enrollment in a program, or reliance on any
              information shared. Our liability in any matter shall not exceed the fees paid by you for the program.
            </p>
          </section>

          {/* Governing Law */}
          <section id="governing" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: '#111',
                marginBottom: 16,
              }}
            >
              Governing Law
            </h2>
            <p
              style={{
                fontSize: 15,
                color: '#4b5563',
                lineHeight: 1.7,
              }}
            >
              These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction
              of courts in Bangalore, Karnataka.
            </p>
          </section>

          {/* Contact for Terms Queries */}
          <section id="contact" style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: '#111',
                marginBottom: 16,
              }}
            >
              Contact for Terms Queries
            </h2>
            <p
              style={{
                fontSize: 15,
                color: '#4b5563',
                lineHeight: 1.7,
                marginBottom: 12,
              }}
            >
              <strong style={{ color: '#111' }}>Email:</strong> hello@dandesacademy.com{' '}
              <strong style={{ color: '#111' }}>WhatsApp:</strong> +91 7090366699
            </p>
            <p
              style={{
                fontSize: 15,
                color: '#4b5563',
                lineHeight: 1.7,
              }}
            >
              We&apos;ll get back to you within 5 business days.
            </p>
          </section>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .terms-nav {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
