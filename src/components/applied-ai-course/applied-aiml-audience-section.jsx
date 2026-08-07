'use client'

import { useState } from 'react'

const tabs = [
  { id: 'professionals', label: 'For working professionals' },
  { id: 'students', label: 'For students and job seekers' },
]

const professionalsContent = {
  heading: 'Applied AI Engineering For Working Professionals',
  description:
    'If you are already in tech and need to move into GenAI, LLM or Agentic AI roles quickly — whether by choice or because of a layoff — this course is built for real urgency, not a leisurely 12-month pace. You learn on weekends, with recordings if you miss a session, and a focused roadmap built to get you interview-ready fast.',
  cardTitle: 'You will benefit most if you want to:',
  benefits: [
    'Move into GenAI/LLM/Agentic AI roles in 5 months, not a year Skip classical ML and Computer Vision you dont need for these roles',
    'Learn on weekends — Sat/Sun, without quitting your job or pausing your search',
    'Build deployed projects you can confidently walk through in interviews',
    
  ],
  
}

const studentsContent = {
  heading: 'Applied AI Engineering For Job Seekers',
  description:
    'If you are actively job-hunting and need a strong, specific AI portfolio — not a generic one — this program gives you deployed, real-world GenAI and Agentic AI projects that speak directly to what companies are hiring for right now.',
  cardTitle: 'You will benefit most if you want to:',
  benefits: [
    'Build a portfolio of real GenAI, LLM and Agentic AI projects, not classroom exercises',
    'Learn the exact tools companies are hiring for today — LangChain, LangGraph, CrewAI, RAG, MCP',
    'Finish with one Enterprise AI Capstone — deployed, monitored, interview-ready',
    'Get mentorship, resume review, and mock interviews focused on AI Engineering roles specifically',
  ],
  
}

export function AppliedAimlAudienceSection() {
  const [activeTab, setActiveTab] = useState('professionals')
  const content = activeTab === 'professionals' ? professionalsContent : studentsContent

  return (
    <section style={{ backgroundColor: '#fff', padding: '72px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#1a1a2e', lineHeight: '1.25', marginBottom: '20px' }}>
            Who Should Join This Applied{' '}
            <span style={{ color: '#c0392b' }}>AI</span>
            {' '}Engineering{' '}
           
            {' '}Course
          </h2>
          <p style={{ color: '#555', fontSize: '1rem', maxWidth: '660px', margin: '0 auto', lineHeight: '1.7' }}>
            This program is built for people who need to move fast into GenAI, LLM and Agentic AI roles — without spending a year on classical ML they won't use. Whether you're switching roles, re-entering the job market, or sharpening your profile for AI-specific interviews, the structure keeps you focused on exactly what these roles need.
          </p>
        </div>

        {/* Tabs */}
        <div
          style={{
            backgroundColor: '#f7f8fa',
            borderRadius: '0',
            marginLeft: '-24px',
            marginRight: '-24px',
            padding: '0 24px',
            marginBottom: '56px',
          }}
        >
          <div style={{ display: 'flex', maxWidth: '1100px', margin: '0 auto' }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  flex: 1,
                  padding: '20px 24px',
                  fontWeight: '700',
                  fontSize: '1rem',
                  color: '#1a1a2e',
                  backgroundColor: activeTab === tab.id ? '#fff' : 'transparent',
                  border: 'none',
                  borderBottom: activeTab === tab.id ? '3px solid #c0392b' : '3px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  textAlign: 'center',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#1a1a2e', marginBottom: '20px' }}>
            {content.heading}
          </h3>
          <p style={{ color: '#555', fontSize: '1rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.7' }}>
            {content.description}
          </p>
        </div>

        {/* Benefits card */}
        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto 40px',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            padding: '28px 32px',
            backgroundColor: '#fff',
          }}
        >
          <p style={{ fontWeight: '700', fontSize: '1rem', color: '#1a1a2e', marginBottom: '20px' }}>
            {content.cardTitle}
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {content.benefits.map((benefit, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                {/* Green circle check icon */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ flexShrink: 0, marginTop: '1px' }}
                >
                  <circle cx="11" cy="11" r="10" stroke="#22c55e" strokeWidth="1.5" fill="none" />
                  <path
                    d="M7 11.5l2.5 2.5 5-5"
                    stroke="#22c55e"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span style={{ fontSize: '0.95rem', color: '#374151', lineHeight: '1.6' }}>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footnote */}
        <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7' }}>
          {content.footnote}
        </p>
      </div>
    </section>
  )
}
