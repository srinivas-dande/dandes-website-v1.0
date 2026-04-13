'use client'

import { useState } from 'react'

const faqData = {
  general: {
    title: 'General',
    questions: [
      {
        question: 'What is Dandes Academy?',
        answer: 'Dandes Academy is a live online training platform for engineers and students who want to build real skills in AI and Machine Learning, System Design, and Data Structures and Algorithms. Previously known as JLC, the Java Learning Center, the academy is led by Srinivas Dande, who has 20+ years of engineering and teaching experience.'
      },
      {
        question: 'Are classes live or recorded?',
        answer: 'All classes are conducted live with real-time interaction. Recordings are also provided for revision and in case you miss a session.'
      },
      {
        question: 'What programs does Dandes Academy offer?',
        answer: 'We offer comprehensive programs in AI/ML, System Design, and Data Structures & Algorithms, designed for working professionals and students.'
      },
      {
        question: 'Who is this for?',
        answer: 'Our programs are designed for working professionals looking to transition into AI/ML roles, students preparing for placements, and engineers wanting to strengthen their technical skills.'
      },
      {
        question: "I've heard of JLC / Dande's Course. Is this the same?",
        answer: 'Yes, Dandes Academy was previously known as JLC (Java Learning Center). We rebranded to better reflect our expanded curriculum covering AI/ML, System Design, and DSA.'
      }
    ]
  },
  aiml: {
    title: 'AI/ML Course',
    questions: [
      {
        question: 'How long is the AI/ML course?',
        answer: 'The program runs for 11 to 12 months, depending on the batch schedule. This includes live classes, assignments, projects, and a final capstone.'
      },
      {
        question: 'What topics are covered?',
        answer: 'The course covers Python, Machine Learning fundamentals, Deep Learning, NLP, Computer Vision, MLOps, and real-world project implementation.'
      },
      {
        question: 'Will I get projects and a capstone?',
        answer: 'Yes, you will work on multiple hands-on projects throughout the course and complete a capstone project that you can showcase in interviews.'
      },
      {
        question: 'Do I need prior AI/ML experience?',
        answer: 'No prior AI/ML experience is required. We start from fundamentals and progressively build up to advanced topics.'
      },
      {
        question: 'Do I need strong math?',
        answer: 'Basic math knowledge is helpful, but we cover the necessary mathematical concepts as part of the curriculum.'
      },
      {
        question: 'Can I take this while working full-time?',
        answer: 'Yes, the program is designed for working professionals with classes scheduled on weekends and late evenings on weekdays.'
      }
    ]
  },
  systemDesign: {
    title: 'System Design Course',
    questions: [
      {
        question: 'Who is the System Design course for?',
        answer: 'Working professionals. Tech Leads, Principal Architects, Engineering Managers, Senior Developers who want to prepare for senior engineering interviews or strengthen their architecture thinking.'
      },
      {
        question: 'What does the System Design course cover?',
        answer: 'The course covers distributed systems, scalability patterns, database design, caching strategies, load balancing, microservices architecture, and real-world system design case studies.'
      },
      {
        question: 'Is this suitable for students too?',
        answer: 'While primarily designed for experienced professionals, motivated students with strong fundamentals can also benefit from this course.'
      }
    ]
  },
  dsa: {
    title: 'DSA Course',
    questions: [
      {
        question: 'Who is the DSA course for?',
        answer: 'Students preparing for placements and coding interviews, and working professionals who want to strengthen their coding fundamentals and interview performance.'
      },
      {
        question: 'What does the DSA course cover?',
        answer: 'The course covers arrays, strings, linked lists, trees, graphs, dynamic programming, sorting, searching, and problem-solving patterns commonly asked in interviews.'
      },
      {
        question: 'Should I do DSA and AI/ML together?',
        answer: 'It depends on your goals. If you are targeting AI/ML roles, focusing on AI/ML first is recommended. DSA can be taken separately for interview preparation.'
      }
    ]
  },
  learningFormat: {
    title: 'Learning Format',
    questions: [
      {
        question: "What's the class schedule?",
        answer: 'The AI/ML program runs on weekends, with weekday late-evening batches available when open. Exact batch schedules are shared during the counselling call.'
      },
      {
        question: 'What if I miss a class?',
        answer: 'All sessions are recorded and made available on the LMS. You can watch the recording and catch up at your convenience.'
      },
      {
        question: 'How long do I have access to the LMS?',
        answer: 'You get lifetime access to the LMS, including all recordings, assignments, and course materials.'
      },
      {
        question: 'Can I switch batches?',
        answer: 'Yes, batch switching is possible based on availability. Contact the support team for assistance.'
      },
      {
        question: 'Is there doubt support?',
        answer: 'Yes, we have dedicated doubt support through discussion forums, live doubt sessions, and direct instructor access.'
      }
    ]
  },
  feesPayment: {
    title: 'Fees and Payment',
    questions: [
      {
        question: 'What is the course fee?',
        answer: 'The AI/ML program is priced at approximately Rs. 1 lakh for India. This is significantly lower than comparable programs from Scaler, UpGrad, or Great Learning, which typically range from Rs. 2.5 to 4 lakhs. Exact fees and payment options are shared during the counselling call.'
      },
      {
        question: 'Are EMIs or instalment plans available?',
        answer: 'Yes, we offer flexible EMI options and instalment plans to make the program accessible. Details are shared during the counselling call.'
      },
      {
        question: 'Is there a refund policy?',
        answer: 'Yes, we have a refund policy. Please contact our team for specific terms and conditions.'
      },
      {
        question: 'How do I get the exact fee and batch details?',
        answer: 'Register for a free webinar or schedule a counselling call to get detailed information about fees, batches, and payment options.'
      }
    ]
  },
  careerSupport: {
    title: 'Career Support',
    questions: [
      {
        question: 'What career support is included?',
        answer: 'Resume guidance, LinkedIn positioning, mock interviews, and help explaining your projects clearly in interviews. Career support is built into the program, not an add-on.'
      },
      {
        question: 'Do you guarantee placement?',
        answer: 'We do not guarantee placements, but we provide comprehensive career support to maximize your chances of landing your target role.'
      },
      {
        question: 'What outcomes can I realistically expect?',
        answer: 'Our learners have successfully transitioned to AI/ML roles at top companies. Outcomes depend on your effort, background, and market conditions.'
      },
      {
        question: 'What roles do learners typically target?',
        answer: 'Common target roles include ML Engineer, Data Scientist, AI Engineer, Applied Scientist, and MLOps Engineer.'
      }
    ]
  }
}

const categories = [
  { id: 'general', label: 'General' },
  { id: 'aiml', label: 'AI/ML Course' },
  { id: 'systemDesign', label: 'System Design Course' },
  { id: 'dsa', label: 'DSA Course' },
  { id: 'learningFormat', label: 'Learning Format' },
  { id: 'feesPayment', label: 'Fees and Payment' },
  { id: 'careerSupport', label: 'Career Support' },
  { id: 'contact', label: 'Still have questions?' }
]

function FaqAccordion({ category, data }) {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div id={category} style={{ marginBottom: 60, scrollMarginTop: 100 }}>
      <h2
        style={{
          fontSize: 28,
          fontWeight: 600,
          color: '#111',
          marginBottom: 24,
        }}
      >
        {data.title}
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {data.questions.map((item, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: 12,
              overflow: 'hidden',
              backgroundColor: '#fff',
            }}
          >
            <button
              onClick={() => toggleQuestion(index)}
              style={{
                width: '100%',
                padding: '20px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#111',
                }}
              >
                {index + 1}. {item.question}
              </span>
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 300,
                  color: openIndex === index ? '#111' : '#d12027',
                  flexShrink: 0,
                  marginLeft: 16,
                }}
              >
                {openIndex === index ? '−' : '+'}
              </span>
            </button>

            {openIndex === index && (
              <div
                style={{
                  padding: '0 24px 20px 24px',
                }}
              >
                <p
                  style={{
                    fontSize: 14,
                    color: '#666',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function FaqContentSection() {
  const [activeCategory, setActiveCategory] = useState('general')

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId)
    if (categoryId === 'contact') {
      // Scroll to contact section or handle differently
      return
    }
    const element = document.getElementById(categoryId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      style={{
        padding: '60px 20px 80px',
        maxWidth: 1200,
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 60,
        }}
        className="faq-container"
      >
        {/* Left Sidebar Navigation */}
        <nav
          style={{
            width: 220,
            flexShrink: 0,
            position: 'sticky',
            top: 100,
            alignSelf: 'flex-start',
            height: 'fit-content',
          }}
          className="faq-sidebar"
        >
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => handleCategoryClick(category.id)}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '12px 16px',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    borderLeft: activeCategory === category.id ? '3px solid #d12027' : '3px solid transparent',
                    cursor: 'pointer',
                    fontSize: 14,
                    color: activeCategory === category.id ? '#111' : '#666',
                    fontWeight: activeCategory === category.id ? 500 : 400,
                    transition: 'all 0.2s ease',
                  }}
                >
                  {category.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Content */}
        <div style={{ flex: 1, minWidth: 0 }} className="faq-content">
          <FaqAccordion category="general" data={faqData.general} />
          <FaqAccordion category="aiml" data={faqData.aiml} />
          <FaqAccordion category="systemDesign" data={faqData.systemDesign} />
          <FaqAccordion category="dsa" data={faqData.dsa} />
          <FaqAccordion category="learningFormat" data={faqData.learningFormat} />
          <FaqAccordion category="feesPayment" data={faqData.feesPayment} />
          <FaqAccordion category="careerSupport" data={faqData.careerSupport} />

          {/* Still have questions section */}
          <div id="contact" style={{ marginTop: 60, scrollMarginTop: 100 }}>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: '#111',
                marginBottom: 16,
              }}
            >
              Still have questions?
            </h2>
            <p
              style={{
                fontSize: 16,
                color: '#666',
                marginBottom: 24,
                lineHeight: 1.6,
              }}
            >
              {"Can't find the answer you're looking for? Please reach out to our team."}
            </p>
            <button
              style={{
                backgroundColor: '#d12027',
                color: '#fff',
                padding: '14px 28px',
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .faq-container {
            flex-direction: column !important;
            gap: 30px !important;
          }
          .faq-sidebar {
            width: 100% !important;
            position: relative !important;
            top: 0 !important;
          }
          .faq-sidebar ul {
            display: flex !important;
            flex-wrap: wrap !important;
            gap: 8px !important;
          }
          .faq-sidebar li {
            flex: none !important;
          }
          .faq-sidebar button {
            padding: 8px 12px !important;
            border: 1px solid #e5e7eb !important;
            border-radius: 20px !important;
            border-left: 1px solid #e5e7eb !important;
            font-size: 13px !important;
          }
        }
      `}</style>
    </section>
  )
}
