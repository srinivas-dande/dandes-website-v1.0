'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ContactFormSection() {

  const router = useRouter()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'AI/ML Course',
    message: '',
    consent: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    router.push('/thank-you')
  }

  return (
    <section
      style={{
        padding: '80px 24px',
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          gap: 48,
          flexWrap: 'wrap',
        }}
      >
        {/* Left - Contact Form */}
        <div
          style={{
            flex: 1,
            minWidth: 320,
          }}
        >
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: 16,
            }}
          >
            Send Us A Message
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#6b7280',
              lineHeight: 1.6,
              marginBottom: 40,
              maxWidth: 500,
            }}
          >
            Tell us what you&apos;re looking for. Course details, batch timing, fee structure, or just a nudge in the right direction. We&apos;ll reply on WhatsApp or email.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Row 1: Full name & Email */}
            <div
              style={{
                display: 'flex',
                gap: 24,
                marginBottom: 24,
                flexWrap: 'wrap',
              }}
            >
              <div style={{ flex: 1, minWidth: 200 }}>
                <label
                  htmlFor="fullName"
                  style={{
                    display: 'block',
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#1a1a1a',
                    marginBottom: 8,
                  }}
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: 14,
                    border: '1px solid #e5e7eb',
                    borderRadius: 8,
                    backgroundColor: '#fff',
                    color: '#1a1a1a',
                    outline: 'none',
                  }}
                />
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#1a1a1a',
                    marginBottom: 8,
                  }}
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: 14,
                    border: '1px solid #e5e7eb',
                    borderRadius: 8,
                    backgroundColor: '#fff',
                    color: '#1a1a1a',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            {/* Row 2: Phone & Inquiry Type */}
            <div
              style={{
                display: 'flex',
                gap: 24,
                marginBottom: 24,
                flexWrap: 'wrap',
              }}
            >
              <div style={{ flex: 1, minWidth: 200 }}>
                <label
                  htmlFor="phone"
                  style={{
                    display: 'block',
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#1a1a1a',
                    marginBottom: 8,
                  }}
                >
                  Phone / WhatsApp number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91 00000 00000"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: 14,
                    border: '1px solid #e5e7eb',
                    borderRadius: 8,
                    backgroundColor: '#fff',
                    color: '#1a1a1a',
                    outline: 'none',
                  }}
                />
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <label
                  htmlFor="inquiryType"
                  style={{
                    display: 'block',
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#1a1a1a',
                    marginBottom: 8,
                  }}
                >
                  Inquiry Type
                </label>
                <div style={{ position: 'relative' }}>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      fontSize: 14,
                      border: '1px solid #e5e7eb',
                      borderRadius: 8,
                      backgroundColor: '#fff',
                      color: '#9ca3af',
                      outline: 'none',
                      appearance: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="AI/ML Course">AI/ML Course</option>
                    <option value="Data Science">Data Science</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                  <svg
                    style={{
                      position: 'absolute',
                      right: 16,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      pointerEvents: 'none',
                    }}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6b7280"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message Textarea */}
            <div style={{ marginBottom: 24 }}>
              <label
                htmlFor="message"
                style={{
                  display: 'block',
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#1a1a1a',
                  marginBottom: 8,
                }}
              >
                Your question or message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="How can we help you today?"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  fontSize: 14,
                  border: '1px solid #e5e7eb',
                  borderRadius: 8,
                  backgroundColor: '#fff',
                  color: '#1a1a1a',
                  outline: 'none',
                  resize: 'vertical',
                  minHeight: 150,
                }}
              />
            </div>

            {/* Consent Checkbox */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
                marginBottom: 32,
              }}
            >
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                style={{
                  width: 20,
                  height: 20,
                  marginTop: 2,
                  accentColor: '#d12027',
                  cursor: 'pointer',
                }}
              />
              <label
                htmlFor="consent"
                style={{
                  fontSize: 14,
                  color: '#4b5563',
                  lineHeight: 1.5,
                  cursor: 'pointer',
                }}
              >
                By submitting, you agree to be contacted via WhatsApp, email, or phone.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '16px 32px',
                backgroundColor: '#d12027',
                color: '#fff',
                fontSize: 16,
                fontWeight: 600,
                border: 'none',
                borderRadius: 8,
                cursor: 'pointer',
                marginBottom: 16,
              }}
            >
              Send message
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            <p
              style={{
                fontSize: 14,
                color: '#6b7280',
              }}
            >
              We keep your details private. No spam.
            </p>
          </form>
        </div>

        {/* Right - Contact Info Cards */}
        <div
          style={{
            width: 380,
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}
        >
          {/* Direct Contact Card */}
          <div
            style={{
              backgroundColor: '#fef7f7',
              borderRadius: 12,
              padding: 32,
            }}
          >
            <h3
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: 16,
              }}
            >
              Rather just reach out directly?
            </h3>
            <p
              style={{
                fontSize: 14,
                color: '#6b7280',
                lineHeight: 1.6,
                marginBottom: 24,
              }}
            >
              We&apos;re on WhatsApp most days. Send a message and someone from the team will get back to you, usually within a few hours, often faster.
            </p>

            {/* Contact Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {/* WhatsApp */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src="/contact/whatsapp.png"
                      alt="WhatsApp"
                      style={{
                      width: 64,
                      height: 64,
                      objectFit: 'contain',
                    }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: '#9ca3af',
                      letterSpacing: 0.5,
                      textTransform: 'uppercase',
                      marginBottom: 2,
                    }}
                  >
                    WhatsApp
                  </p>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: '#1a1a1a',
                    }}
                  >
                    +91 7090366699
                  </p>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src="/contact/email.png"
                    alt="Email"
                    style={{
                      width: 64,
                      height: 64,
                      objectFit: 'contain',
                    }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: '#9ca3af',
                      letterSpacing: 0.5,
                      textTransform: 'uppercase',
                      marginBottom: 2,
                    }}
                  >
                    Email
                  </p>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: '#1a1a1a',
                    }}
                  >
                    hello@dandesacademy.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src="/contact/location.png"
                    alt="Location"
                    style={{
                      width: 64,
                      height: 64,
                      objectFit: 'contain',
                    }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: '#9ca3af',
                      letterSpacing: 0.5,
                      textTransform: 'uppercase',
                      marginBottom: 2,
                    }}
                  >
                    Location
                  </p>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: '#1a1a1a',
                    }}
                  >
                    Bangalore, India
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time Note */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 10,
                marginTop: 24,
                padding: '16px 0 0',
                borderTop: '1px solid #fecaca',
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d12027"
                strokeWidth="2"
                style={{ flexShrink: 0, marginTop: 2 }}
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <p
                style={{
                  fontSize: 13,
                  color: '#4b5563',
                  lineHeight: 1.5,
                  fontWeight: 500,
                }}
              >
                We typically respond Monday to Saturday. If you write in over the weekend, expect a reply by Monday morning.
              </p>
            </div>
          </div>

          {/* FAQ Card */}
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: 12,
              padding: 32,
              border: '1px solid #e5e7eb',
            }}
          >
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: 16,
              }}
            >
              Not sure what to ask? Start here.
            </h3>
            <p
              style={{
                fontSize: 14,
                color: '#6b7280',
                marginBottom: 20,
              }}
            >
              Most people reach out about one of these:
            </p>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              {[
                'Which course fits their background and goal',
                'Fees, EMI options, and what the program includes',
                'Next batch dates and schedule',
                'Whether they can manage this alongside a full-time job or college',
                'What happens after they enroll',
              ].map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    fontSize: 14,
                    color: '#4b5563',
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      backgroundColor: '#d12027',
                      borderRadius: '50%',
                      flexShrink: 0,
                      marginTop: 7,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <p
              style={{
                fontSize: 14,
                color: '#6b7280',
                marginTop: 20,
                lineHeight: 1.5,
              }}
            >
              If none of those, just send us whatever&apos;s on your mind. We&apos;ll figure it out.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
