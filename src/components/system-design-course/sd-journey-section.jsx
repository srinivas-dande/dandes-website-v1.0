'use client'
import { useState, useEffect } from 'react'

const phases = [
  {
    label: 'Phase 1',
    title: 'Foundations',
    items: [
      'Core system design concepts.',
      'Scalability basics.',
      'Databases and caching.',
    ],
  },
  {
    label: 'Phase 2',
    title: 'Components and patterns',
    items: [
      'APIs and load balancing',
      'Microservices and architecture patterns',
      'Distributed systems basics',
    ],
  },
  {
    label: 'Phase 3',
    title: 'Case studies and interviews',
    items: [
      'Real system design problems.',
      'Trade-offs and decision-making.',
      'Interview-style discussions.',
    ],
  },
  
]

function CheckIcon({ active }) {
  const color = active ? '#22c55e' : '#d1d5db'
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx={10} cy={10} r={9} stroke={color} strokeWidth={1.5} fill="none" />
      <path d="M6 10.5l2.5 2.5 5-5" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SdJourneySection() {
  const [activePhase, setActivePhase] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const phaseElements = document.querySelectorAll(".phase-block")
      const scrollPosition = window.innerHeight / 2

      phaseElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect()

        if (
          rect.top <= scrollPosition &&
          rect.bottom >= scrollPosition
        ) {
          setActivePhase(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section style={{ backgroundColor: '#fff', padding: '80px 0 88px' }}>
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-10 md:gap-20 items-start">

        {/* LEFT */}
        <div>
          <h2 style={{ fontSize: 34, fontWeight: 800, color: '#1a1a1a', lineHeight: 1.25, margin: '0 0 28px' }}>
            From fundamentals to <span style={{ color: '#d12027' }}>Real</span>{' '}
            <span style={{ color: '#d12027' }}>System</span> Thinking
          </h2>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.75, margin: '0 0 24px' }}>
            This program follows a clear progression so you always know what to focus on next.
          </p>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.75, margin: 0 }}>
            
          </p>
        </div>

        {/* RIGHT — Timeline */}
        <div style={{ position: 'relative', paddingLeft: 36 }}>
          {/* vertical dashed line */}
          <div style={{
            position: 'absolute',
            left: 10,
            top: 12,
            bottom: 12,
            width: 2,
            borderLeft: '2px dashed #d1d5db',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {phases.map((phase, i) => {
              const isActive = i === activePhase
              return (
              <div
                key={i}
                className="phase-block"
                style={{ position: 'relative' }}
              >
                {/* dot - clickable */}
                <button
                  onClick={() => setActivePhase(i)}
                  style={{
                    position: 'absolute',
                    left: -36,
                    top: 4,
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    backgroundColor: isActive ? '#d12027' : '#e5e7eb',
                    border: isActive ? '3px solid #fca5a5' : '3px solid #f3f4f6',
                    boxSizing: 'border-box',
                    cursor: 'pointer',
                    padding: 0,
                    outline: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  aria-label={`Go to ${phase.label}`}
                />

                {/* phase label */}
                <p style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: isActive ? '#d12027' : '#9ca3af',
                  margin: '0 0 8px',
                  textTransform: 'none',
                  letterSpacing: 0,
                }}>
                  {phase.label}
                </p>

                {/* phase title */}
                <h3 style={{
                  fontSize: isActive ? 20 : 18,
                  fontWeight: 700,
                  color: isActive ? '#1a1a1a' : '#9ca3af',
                  margin: '0 0 16px',
                  lineHeight: 1.3,
                }}>
                  {phase.title}
                </h3>

                {/* items */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {phase.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <CheckIcon active={isActive} />
                      <span style={{
                        fontSize: 14,
                        color: isActive ? '#374151' : '#9ca3af',
                        lineHeight: 1.6,
                      }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
