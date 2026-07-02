'use client'

import { useState, useEffect } from 'react'

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
    question: 'Do I need prior experience in AI or Machine Learning?',
    answer: 'No. The program is structured to start with foundations and build up step by step. Basic coding familiarity helps, but you do not need prior AI experience.'
  },
  {
    question: 'Is this course suitable for working professionals?',
    answer: 'Yes. The course is designed with flexible schedules, recorded sessions, and weekend live classes to accommodate working professionals.'
  },
  {
    question: 'How long is the AI and ML course?',
    answer: 'The program runs for approximately 12 months, covering foundational to advanced topics with hands-on projects throughout.'
  },
  {
    question: 'Will I get projects and a capstone?',
    answer: 'Yes. You will work on multiple mini-projects and one comprehensive capstone project that you can showcase in your portfolio.'
  },
  {
    question: 'What topics are covered in the program?',
    answer: 'Topics include Python, SQL, Math for ML, Machine Learning, Deep Learning, NLP, Computer Vision, Generative AI, LLMs, Agentic AI, and MLOps.'
  },
  {
    question: 'Is the course fully recorded or live?',
    answer: 'The course includes live instructor-led sessions with recordings available on the LMS for revision and catch-up.'
  },
  {
    question: 'Do I need strong math to start?',
    answer: 'No. Math concepts are taught in a practical, applied manner as part of the curriculum. You do not need an advanced math background.'
  },
  {
    question: 'Do you provide placement support or guarantee placement?',
    answer: 'We provide placement support including resume building, interview preparation, and job referrals. We do not guarantee placement.'
  },
  {
    question: 'Can I switch batches if my schedule changes?',
    answer: 'Yes. You can request a batch switch if your schedule changes, subject to availability.'
  },
  {
    question: 'What is the course fee, and are EMIs available?',
    answer: 'Please contact our team for current pricing. Yes, EMI options are available to make the program more accessible.'
  },
  {
    question: 'Is there a refund policy?',
    answer: 'Yes. We have a refund policy. Please review our terms or contact support for specific details.'
  },
  {
    question: 'What is the best first step before enrolling?',
    answer: 'Book a counseling call to understand the program structure and see if it fits your goals.'
  }
] 
    
  },
  systemDesign: {
    title: 'System Design Course',
    questions: [
  {
    question: 'Do I need prior System Design experience?',
    answer: 'No. The course starts with the fundamentals and gradually progresses to advanced System Design concepts. Basic programming knowledge is recommended, but prior System Design experience is not required.'
  },
  {
    question: 'Is this course suitable for working professionals?',
    answer: 'Yes. The course is designed for working professionals with weekday evening and weekend live classes. All sessions are recorded and available on the LMS for flexible learning.'
  },
  {
    question: 'Will this help me prepare for System Design interviews?',
    answer: 'Yes. The course includes High-Level Design (HLD), Low-Level Design (LLD), real-world case studies, architecture discussions, and interview-focused practice to help you perform confidently in System Design interviews.'
  },
  {
    question: 'How long is the course?',
    answer: 'The System Design Course is a 6-month structured program covering High-Level Design, Low-Level Design, real-world case studies, and interview preparation.'
  },
  {
    question: 'Will I work on real-world System Design problems?',
    answer: "Yes. Throughout the course, you'll design systems such as BookMyShow, Amazon, Swiggy, Uber, WhatsApp, Netflix, URL Shortener, Parking Lot, and more to gain practical experience."
  },
  {
    question: 'Are the classes live or recorded?',
    answer: 'All classes are live, instructor-led sessions. Every session is recorded and uploaded to the LMS, allowing you to revisit concepts or catch up on missed classes.'
  },
  {
    question: 'Can I switch to another batch if needed?',
    answer: 'Yes. If your schedule changes, you can request a batch transfer, subject to the availability of seats in upcoming batches.'
  },
  {
    question: 'Do you provide interview preparation support?',
    answer: 'Yes. The course includes System Design interview preparation, mock interviews, resume guidance, and career support to help you prepare for senior software engineering roles.'
  },
  {
    question: 'What is the course fee?',
    answer: 'Please contact our team or submit the inquiry form to receive the latest fee structure, available offers, and EMI options.'
  },
  {
    question: 'Is there a free demo before enrolling?',
    answer: 'Yes. You can attend our free live demo to understand the course structure, teaching methodology, curriculum, and ask questions before enrolling.'
  }
] 
  },
  dsa: {
    title: 'DSA Course',
    questions: [
  {
    question: 'Do I need prior coding experience?',
    answer: 'Basic programming knowledge is helpful, but the course starts from the fundamentals and gradually progresses to advanced Data Structures & Algorithms concepts.'
  },
  {
    question: 'How long is the course?',
    answer: 'The Data Structures & Algorithms Course is a 6-month structured program covering core data structures, algorithms, problem-solving techniques, and coding interview preparation.'
  },
  {
    question: 'Will this help me prepare for coding interviews?',
    answer: 'Yes. The course focuses on coding interview preparation through structured learning, problem-solving patterns, coding practice, and interview-focused discussions.'
  },
  {
    question: 'Are the classes live or recorded?',
    answer: 'All classes are live, instructor-led sessions. Every session is recorded and uploaded to the LMS, allowing you to revisit concepts or catch up on missed classes.'
  },
  {
    question: 'Can I switch to another batch if needed?',
    answer: 'Yes. If your schedule changes, you can request a batch transfer, subject to the availability of seats in upcoming batches.'
  },
  {
    question: 'What is the course fee?',
    answer: 'Please contact our team or submit the inquiry form to receive the latest fee structure, available offers, and EMI options.'
  },
  {
    question: 'Do you provide interview preparation support?',
    answer: 'Yes. The course includes coding interview preparation, resume guidance, mock interview support, and career guidance to help you prepare for technical interviews.'
  },
  {
    question: 'Is there a free demo before enrolling?',
    answer: 'Yes. You can attend our free live demo to understand the course structure, teaching methodology, curriculum, and ask your questions before enrolling.'
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = categories
        .map((category) => document.getElementById(category.id))
        .filter(Boolean)

      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveCategory(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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
            gap: 20px !important;
          }

          /* ❌ Hide sidebar completely */
          .faq-sidebar {
            display: none !important;
          }
        }
      `}</style>
      
    </section>
  )
}
