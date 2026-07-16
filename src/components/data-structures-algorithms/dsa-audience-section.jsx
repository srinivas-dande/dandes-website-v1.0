'use client'





const professionalsContent = {
  
  
  cardTitle: 'You will benefit most if you want to:',
  benefits: [
    'Move beyond basic coding tasks.',
    'Crack system design interviews.',
    'Build real backend understanding.',
    'Grow into stronger engineering roles.',
  ],
  footnote:
    'If you are looking for quick shortcuts, this course may not be the right fit. If you want structured learning, consistent practice, and a strong foundation in Data Structures & Algorithms, this course is designed for you.',
}



export function DsaAudienceSection() {
  const content = professionalsContent
  return (
    <section style={{ backgroundColor: '#fff', padding: '72px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#1a1a2e', lineHeight: '1.25', marginBottom: '20px' }}>
            Who Should Join This  
            <span style={{ color: '#c0392b' }}> DSA</span>
            
            <span style={{ color: '#c0392b' }}> Course?</span>
            
          </h2>
          <p style={{ color: '#555', fontSize: '1rem', maxWidth: '660px', margin: '0 auto', lineHeight: '1.7' }}>
            This course is designed for students, graduates, and software engineers who want to build strong problem-solving skills, master Data Structures & Algorithms, and prepare confidently for coding interviews.
          </p>
        </div>

        {/* Benefits card */}
        <div
  style={{
    display: 'flex',
    gap: '24px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '40px',
  }}
>
  {/* Ideal For Card */}
  <div
    style={{
      flex: '1 1 450px',
      maxWidth: '500px',
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      padding: '28px 32px',
      backgroundColor: '#fff',
    }}
  >
    <h3
      style={{
        fontSize: '1.3rem',
        fontWeight: '800',
        color: '#d12027',
        marginBottom: '20px',
      }}
    >
      This Course Is Ideal For
    </h3>

    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
      }}
    >
      {[
        'Students preparing for placements',
        'Graduates looking to strengthen coding skills',
        'Software Engineers preparing for technical interviews',
        'Professionals who want to improve problem-solving abilities',
      ].map((item) => (
        <li key={item} style={{ display: 'flex', gap: '12px' }}>
          <span style={{ color: '#22c55e', fontWeight: 'bold' }}>✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Benefits Card */}
  <div
    style={{
      flex: '1 1 450px',
      maxWidth: '500px',
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      padding: '28px 32px',
      backgroundColor: '#fff',
    }}
  >
    <h3
      style={{
        fontSize: '1.3rem',
        fontWeight: '800',
        color: '#d12027',
        marginBottom: '20px',
      }}
    >
      You'll Benefit Most If You Want To
    </h3>

    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
      }}
    >
      {[
        'Master Data Structures & Algorithms from the fundamentals',
        'Build strong problem-solving and analytical thinking skills',
        'Crack coding interviews with confidence',
        'Write efficient and optimized code',
        'Advance your software engineering career',
      ].map((item) => (
        <li key={item} style={{ display: 'flex', gap: '12px' }}>
          <span style={{ color: '#22c55e', fontWeight: 'bold' }}>✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
</div>

        {/* Footnote */}
        <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7' }}>
          {content.footnote}
        </p>
      </div>
    </section>
  )
}
