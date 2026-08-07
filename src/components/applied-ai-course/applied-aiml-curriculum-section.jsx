'use client'

const leftTopics = [
  { num: 1, text: 'AI Foundations — ML, DL and NLP concepts you actually need' },
  { num: 2, text: 'Generative AI — VAEs, GANs, Diffusion Models, Image Prompting' },
  { num: 3, text: 'Large Language Models — Prompting, Fine-Tuning, RAG, Alignment' },
  { num: 4, text: 'Agentic AI — Autonomous Agents, Memory, Planning, Multi-Agent Systems' },
  
]

const rightTopics = [
  { num: 5, text: 'AI Engineering & Deployment — FastAPI, Docker, Kubernetes, CI/CD' },
  { num: 6, text: 'Production AI Systems — MLOps, Monitoring, Model Management, AWS' },
  { num: 7, text: 'Enterprise AI Capstone — Production-Grade AI System, End to End' },
  
]

function TopicCard({ num, text }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '16px',
        backgroundColor: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '10px',
        padding: '18px 20px',
      }}
    >
      <span
        style={{
          minWidth: '32px',
          height: '32px',
          backgroundColor: '#f3f4f6',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '13px',
          fontWeight: '600',
          color: '#6b7280',
          flexShrink: 0,
        }}
      >
        {num}
      </span>
      <p
        style={{
          margin: 0,
          fontSize: '15px',
          fontWeight: '700',
          color: '#1a1a1a',
          lineHeight: '1.5',
        }}
      >
        {text}
      </p>
    </div>
  )
}

export function AimlCurriculumSection() {
  return (
    <section
      id="courses"
      style={{
        backgroundColor: '#f7f8fa',
        padding: '72px 0 80px',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2
            style={{
              fontSize: '36px',
              fontWeight: '800',
              color: '#1a1a1a',
              margin: '0 0 16px',
              lineHeight: '1.2',
            }}
          >
            What You Learn In This Applied{' '}
            <span style={{ color: '#d12027' }}>AI</span>{' '}
            Engineering{' '}
            
            Course
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: '#6b7280',
              margin: 0,
              lineHeight: '1.6',
            }}
          >
            You cover the complete build-to-deploy path companies
            <br />
            expect for GenAI, LLM and Agentic AI roles.
          </p>
        </div>

        {/* Core topics label */}
        <p
          style={{
            fontSize: '15px',
            fontWeight: '700',
            color: '#1a1a1a',
            marginBottom: '20px',
          }}
        >
          Core topics include
        </p>

        {/* 2-column grid of topic cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px',
            marginBottom: '20px',
          }}
          className="aiml-grid"
        >
          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {leftTopics.map(t => (
              <TopicCard key={t.num} num={t.num} text={t.text} />
            ))}
          </div>
          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {rightTopics.map(t => (
              <TopicCard key={t.num} num={t.num} text={t.text} />
            ))}
          </div>
        </div>

        {/* Built Around Projects card */}
        <div
          style={{
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            padding: '32px 28px',
            marginTop: '8px',
          }}
        >
          <h3
            style={{
              fontSize: '20px',
              fontWeight: '800',
              color: '#1a1a1a',
              margin: '0 0 12px',
              lineHeight: '1.3',
            }}
          >
            Built Around Projects,{' '}
            <span style={{ color: '#d12027' }}>So You Have Proof Of Work</span>
          </h3>
          <p
            style={{
              fontSize: '14px',
              color: '#6b7280',
              margin: 0,
              lineHeight: '1.7',
              maxWidth: '860px',
            }}
          >
            Throughout the course, you work on assignments and mini projects across GenAI, LLMs and Agentic AI, and finish with an Enterprise AI Capstone — a real system with LLM/RAG/Agent integration, built with FastAPI, containerized with Docker, and deployed on AWS. This becomes the centerpiece of your portfolio and your strongest interview talking point.
          </p>
        </div>
      </div>

      {/* Responsive override */}
      <style>{`
        @media (max-width: 768px) {
          .aiml-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
