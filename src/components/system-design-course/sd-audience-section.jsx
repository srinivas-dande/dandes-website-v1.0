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
    'If you are looking for a quick shortcut, this course may not be the right fit. If you want structured learning, practical experience, and a strong foundation in System Design, this course is designed for you.',
}



export function SdAudienceSection() {
  const content = professionalsContent
  return (
    <section style={{ backgroundColor: '#fff', padding: '72px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#1a1a2e', lineHeight: '1.25', marginBottom: '20px' }}>
            Who Should Join This {' '}
            <span style={{ color: '#c0392b' }}>System Design</span>
            {' '}{' '}
            <span style={{ color: '#c0392b' }}>Course?</span>
            {' '}
          </h2>
          <p style={{ color: '#555', fontSize: '1rem', maxWidth: '660px', margin: '0 auto', lineHeight: '1.7' }}>
            This course is designed for aspiring and experienced software engineers who want to build strong system design skills, understand how scalable software systems are built, and prepare for technical interviews with confidence.
          </p>
        </div>

        {/* Tabs */}
        

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
        'Software Engineers preparing for senior engineering roles',
        'Students and graduates interested in backend engineering',
        'Developers preparing for System Design interviews',
        'Professionals who want to build scalable software systems',
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
        'Design scalable and reliable software systems',
        'Master High-Level Design (HLD) and Low-Level Design (LLD)',
        'Build strong software architecture fundamentals',
        'Prepare for System Design interviews with confidence',
        'Advance your career as a software engineer',
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
