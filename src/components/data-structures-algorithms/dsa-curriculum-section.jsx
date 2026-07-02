'use client'

const leftTopics = [
  { num: 1, text: 'Arrays' },
  { num: 2, text: 'Strings' },
  { num: 3, text: 'Linked Lists' },
  { num: 4, text: 'Stacks' },
  { num: 5, text: 'Queues' },
  { num: 6, text: 'Hashing' },
  { num: 7, text: 'Trees' },
  { num: 8, text: 'Binary Search Trees' },
  
]

const rightTopics = [
  { num: 9, text: 'Heaps & Priority Queues' },
  { num: 10, text: 'Graphs' },
  { num: 11, text: 'Searching Algorithms' },
  { num: 12, text: 'Sorting Algorithms' },
  { num: 13, text: 'Recursion & Backtracking' },
  { num: 14, text: 'Sliding Window & Two Pointers' },
  { num: 15, text: 'Greedy Algorithms' },
  { num: 16, text: 'Dynamic Programming' },
 
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

export function DsaCurriculumSection() {
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
            What You'll Learn in This{' '}
            <span style={{ color: '#d12027' }}>Data Structures & Algorithms</span>{' '}
            {' '}
            <span style={{ color: '#d12027' }}>Course</span>{' '}
            
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: '#6b7280',
              margin: 0,
              lineHeight: '1.6',
            }}
          >
            Build a strong foundation in Data Structures, Algorithms, and problem-solving techniques through structured learning,
            <br />
            coding practice, and interview-focused preparation.
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
          Core Topics Include
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
  {/* Title */}
  <h3
    style={{
      fontSize: '20px',
      fontWeight: '800',
      color: '#1a1a1a',
      margin: '0 0 12px',
      lineHeight: '1.3',
    }}
  >
    Build Strong Problem-Solving Skills {' '}
    <span style={{ color: '#d12027' }}>
      Through Structured Practice
    </span>
  </h3>

  {/* Description */}
  <p
    style={{
      fontSize: '14px',
      color: '#6b7280',
      margin: 0,
      lineHeight: '1.7',
    }}
  >
    Learn to solve coding problems with confidence by understanding problem-solving patterns, choosing the right approach, and writing optimized solutions through consistent practice and interview-focused exercises.
  </p>

  {/* Subheading */}
  <h4
    style={{
      marginTop: '20px',
      marginBottom: '12px',
      fontSize: '16px',
      fontWeight: '700',
      color: '#374151',
    }}
  >
    You'll Learn To:
  </h4>

  {/* List */}
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    {[
      'Analyze & Break Down Problems',
      'Identify Common Problem Patterns',
      'Choose the Right Data Structure & Algorithm',
      'Optimize Time & Space Complexity',
      'Write Clean & Efficient Code',
      'Solve Coding Interviews with Confidence',
      
    ].map((item, index) => (
      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Green check circle */}
        <div
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            border: '2px solid #22c55e',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#22c55e',
            fontSize: '12px',
            fontWeight: 'bold',
          }}
        >
          ✓
        </div>

        <span style={{ fontSize: '14px', color: '#374151' }}>{item}</span>
      </div>
    ))}
  </div>

  {/* Footer text */}
  <p
    style={{
      marginTop: '20px',
      fontSize: '14px',
      color: '#6b7280',
      lineHeight: '1.7',
    }}
  >
    This helps you solve independently instead of memorizing.

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
