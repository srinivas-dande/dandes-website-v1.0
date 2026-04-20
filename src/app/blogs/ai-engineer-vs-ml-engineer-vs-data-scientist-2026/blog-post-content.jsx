'use client'

import { useState, useEffect } from 'react'
import { PopupFormModal } from "@/components/dandes/popup-form-modal"

const faqItems = [
  {
    question: 'Is an AI Engineer A Better Career Than a Data Scientist In 2026?',
    answer: 'Not better, different. Data science remains essential for insights and decision-making, while AI engineering is expanding to ship AI-powered products such as RAG apps and agents. Your best choice depends on whether you enjoy insights or building product features.'
  },
  {
    question: 'Can A Data Scientist Become An ML Engineer?',
    answer: 'Yes, many data scientists transition to ML engineering by building stronger software engineering skills, learning MLOps practices, and gaining experience with production deployment and monitoring systems.'
  },
  {
    question: 'Is An ML Engineer The Same As An AI Engineer?',
    answer: 'No. ML Engineers focus on building and deploying traditional machine learning systems and pipelines, while AI Engineers specialize in integrating AI capabilities (especially LLMs) into applications and products.'
  },
  {
    question: 'What Should I Learn First If I Am A Fresher Or From A Non IT Background?',
    answer: 'Start with Python programming fundamentals, then learn data manipulation with pandas and SQL. Build small projects to apply your knowledge before moving to more specialized topics in your chosen track.'
  },
  {
    question: 'What Projects Help Most In Interviews?',
    answer: 'Projects that demonstrate end-to-end problem solving, real-world data handling, and clear communication of results. Focus on projects relevant to your target role rather than generic tutorials.'
  },
  {
    question: 'Do I Need A Degree To Get Into These Roles?',
    answer: 'Not necessarily. While degrees can help, many companies value practical skills and portfolio projects. Focus on building demonstrable skills through projects, certifications, and continuous learning.'
  },
]

function FAQSection() {

  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="questions" style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>
        Questions to ask before joining an AI and ML course
      </h2>
      <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 32 }}>
        Quick answers to common queries about batches, recordings, and career support.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {faqItems.map((item, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: 12,
              overflow: 'hidden',
            }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                padding: '20px 24px',
                backgroundColor: '#fff',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span style={{ fontSize: 16, fontWeight: 600, color: '#1a1a1a', paddingRight: 16 }}>
                {index + 1}. {item.question}
              </span>
              <span style={{
                fontSize: 24,
                color: openIndex === index ? '#1a1a1a' : '#d12027',
                fontWeight: 300,
                lineHeight: 1,
                flexShrink: 0,
              }}>
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div style={{ padding: '0 24px 20px', backgroundColor: '#fff' }}>
                <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.7 }}>
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

const recentBlogs = [
  { id: 1, slug: 'top-10-aiml-projects-that-impress-recruiters', image: '/blogs/recent-1.png', tags: ['Live classes', 'Structured curriculum'], author: 'Srinivas Dandes', date: '24 Jan 2026', title: 'AI Engineer Vs ML Engineer Vs Data Scientist (2026)', description: 'Compare AI Engineer, ML Engineer, and Data Scientist roles in 2026, with skills, tools, projects, and step-by-step roadmaps to choose your path.' },
  { id: 2, slug: 'genai-starter-pack-building-llm-apps', image: '/blogs/recent-2.png', tags: ['Live classes', 'Structured curriculum'], author: 'Srinivas Dandes', date: '24 Jan 2026', title: 'AI Engineer Vs ML Engineer Vs Data Scientist (2026)', description: 'Compare AI Engineer, ML Engineer, and Data Scientist roles in 2026, with skills, tools, projects, and step-by-step roadmaps to choose your path.' },
  { id: 3, slug: 'ml-interview-prep-30-must-know-questions', image: '/blogs/recent-3.png', tags: ['Live classes', 'Structured curriculum'], author: 'Srinivas Dandes', date: '24 Jan 2026', title: 'AI Engineer Vs ML Engineer Vs Data Scientist (2026)', description: 'Compare AI Engineer, ML Engineer, and Data Scientist roles in 2026, with skills, tools, projects, and step-by-step roadmaps to choose your path.' },
]

export function BlogPostContent() {

  const [showPopup, setShowPopup] = useState(false)
  
  const [activeSection, setActiveSection] = useState('')

  const tableOfContents = [
    { id: 'quick-difference', label: 'The Quick Difference In One Minute' },
    { id: 'role-definitions', label: 'Role Definitions In Plain English' },
    { id: 'roles-compared', label: 'Roles Compared Side By Side' },
    { id: 'day-to-day', label: 'Day To Day Workflows' },
    { id: 'skills-tools', label: 'Skills And Tool Stacks For 2026' },
    { id: 'which-role', label: 'Which Role Should You Choose' },
    { id: 'roadmaps', label: 'Role-Based Roadmaps' },
    { id: 'portfolio', label: 'Portfolio Projects That Match Hiring' },
    { id: 'misconceptions', label: 'Common Misconceptions' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'conclusion', label: 'Conclusion' },
    { id: 'takeaway', label: 'Key Takeaway' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map(item => document.getElementById(item.id))
      const scrollPos = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(tableOfContents[i].id)
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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section style={{ padding: '60px 0 80px', backgroundColor: '#fff' }}>
      <div style={{ 
        maxWidth: 1200, 
        margin: '0 auto', 
        padding: '0 24px', 
        display: 'flex', 
        gap: 48,
        flexWrap: 'wrap'
      }}>
        
        {/* Main Content */}
        <article style={{ flex: 1, maxWidth: 760 }}>
          
          {/* Quick Difference Section */}
          <section id="quick-difference" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: '#1e3a5f', marginBottom: 28 }}>
              The Quick Difference In One Minute
            </h2>
            
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e3a5f', marginBottom: 8 }}>Data Scientist</h3>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: 16 }}>
                Finds patterns, measures impact, and turns messy data into decisions.
              </p>
            </div>

            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e3a5f', marginBottom: 8 }}>Machine Learning Engineer</h3>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: 16 }}>
                Turns models into reliable systems, focused on performance, scalability, monitoring, and deployment.
              </p>
            </div>

            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e3a5f', marginBottom: 8 }}>AI Engineer</h3>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: 16 }}>
                Builds AI-powered products and features, especially with modern LLM applications like chatbots, RAG systems, and agents, and ships them to production.
              </p>
            </div>
          </section>

          {/* Role Definitions Section */}
          <section id="role-definitions" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: '#1e3a5f', marginBottom: 28 }}>
              Role Definitions In Plain English
            </h2>
            
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e3a5f', marginBottom: 8 }}>Data Scientist</h3>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: 15, marginBottom: 12 }}>
                {"A Data Scientist helps teams make better decisions using data. The work usually includes cleaning data, exploring patterns, building predictive or statistical models, running experiments, and communicating results to stakeholders."}
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: 15 }}>
                {"You will do well here if you enjoy problem framing, statistics, and explaining \"what is happening and why\" in a way a business team can act on."}
              </p>
            </div>

            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e3a5f', marginBottom: 8 }}>Machine Learning Engineer</h3>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: 15, marginBottom: 12 }}>
                An ML Engineer focuses on building and operationalizing machine learning systems. You care about how a model trains, how it serves predictions, how it performs under load, and how it behaves over time in the real world.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: 15 }}>
                You will do well here if you enjoy engineering, building pipelines, writing production-grade code, and making systems reliable.
              </p>
            </div>

            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e3a5f', marginBottom: 8 }}>AI Engineer</h3>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: 15, marginBottom: 12 }}>
                AI Engineering is more product-focused. You build applications powered by AI models. In 2026, that often means LLM-based apps such as chatbots, RAG-based document search, agent workflows, and automation tools, plus the engineering needed to deploy and run them safely.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: 15 }}>
                You will do well here if you like shipping end-to-end shipping features and iterating fast based on user feedback.
              </p>
            </div>
          </section>

          {/* Day To Day Workflows Section */}
          <section id="day-to-day" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: '#1e3a5f', marginBottom: 28 }}>
              Day To Day Workflows
            </h2>
            
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e3a5f', marginBottom: 12 }}>A Typical Day For A Data Scientist</h3>
              <ul style={{ color: '#475569', lineHeight: 1.9, paddingLeft: 20, fontSize: 15 }}>
                <li style={{ marginBottom: 6 }}>Pull data using SQL, and validate quality.</li>
                <li style={{ marginBottom: 6 }}>Explore patterns, segment users, and analyze funnels.</li>
                <li style={{ marginBottom: 6 }}>Build models, run A/B tests, estimate impact.</li>
                <li style={{ marginBottom: 6 }}>Present findings clearly, recommend actions.</li>
              </ul>
            </div>

            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e3a5f', marginBottom: 12 }}>A Typical Day For An ML Engineer</h3>
              <ul style={{ color: '#475569', lineHeight: 1.9, paddingLeft: 20, fontSize: 15 }}>
                <li style={{ marginBottom: 6 }}>Improve training and inference pipelines.</li>
                <li style={{ marginBottom: 6 }}>Optimize performance and scalability.</li>
                <li style={{ marginBottom: 6 }}>Containerize, deploy, and monitor models.</li>
                <li style={{ marginBottom: 6 }}>Handle drift, retraining schedules, and reliability.</li>
              </ul>
            </div>

            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e3a5f', marginBottom: 12 }}>A Typical Day For An AI Engineer</h3>
              <ul style={{ color: '#475569', lineHeight: 1.9, paddingLeft: 20, fontSize: 15 }}>
                <li style={{ marginBottom: 6 }}>Build an AI feature using an LLM API or an open model.</li>
                <li style={{ marginBottom: 6 }}>Design prompts, context, and retrieval (RAG) flows.</li>
                <li style={{ marginBottom: 6 }}>Add guardrails, evaluation, logging, and monitoring.</li>
                <li style={{ marginBottom: 6 }}>Deploy and iterate based on user feedback.</li>
              </ul>
            </div>
          </section>

          {/* Skills And Tools Section */}
          <section id="skills-tools" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: '#1e3a5f', marginBottom: 28 }}>
              Skills And Tool Stacks For 2026
            </h2>
            
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e3a5f', marginBottom: 8 }}>Shared Foundations For All Three Roles</h3>
              <p style={{ color: '#475569', fontSize: 15, marginBottom: 12 }}>These are non-negotiable, whichever path you choose:</p>
              <ul style={{ color: '#475569', lineHeight: 1.9, paddingLeft: 20, fontSize: 15 }}>
                <li style={{ marginBottom: 6 }}>Python fundamentals, clean coding habits.</li>
                <li style={{ marginBottom: 6 }}>Data handling with Pandas and NumPy.</li>
                <li style={{ marginBottom: 6 }}>Core ML basics, model training, validation, metrics.</li>
                <li style={{ marginBottom: 6 }}>Basic cloud familiarity and how APIs work.</li>
              </ul>
            </div>
            
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e3a5f', marginBottom: 8 }}>Data Scientist Skill Stack (2026)</h3>
              <p style={{ color: '#475569', fontSize: 15, marginBottom: 8 }}>Focus areas:</p>
              <ul style={{ color: '#475569', lineHeight: 1.9, paddingLeft: 20, fontSize: 15, marginBottom: 12 }}>
                <li style={{ marginBottom: 6 }}>SQL mastery, joins, window functions, analytical querying.</li>
                <li style={{ marginBottom: 6 }}>Statistics, experimentation, and hypothesis testing.</li>
                <li style={{ marginBottom: 6 }}>EDA, feature engineering, and interpretable models.</li>
                <li style={{ marginBottom: 6 }}>Visualization and communication for stakeholders.</li>
              </ul>
              <p style={{ color: '#475569', fontSize: 15, marginBottom: 8 }}>Practical tools:</p>
              <ul style={{ color: '#475569', lineHeight: 1.9, paddingLeft: 20, fontSize: 15 }}>
                <li style={{ marginBottom: 6 }}>Python, SQL, Pandas, scikit-learn.</li>
                <li style={{ marginBottom: 6 }}>BI tools like Tableau or Power BI (optional but common).</li>
              </ul>
            </div>

            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e3a5f', marginBottom: 8 }}>ML Engineer Skill Stack (2026)</h3>
              <p style={{ color: '#475569', fontSize: 15, marginBottom: 8 }}>Focus areas:</p>
              <ul style={{ color: '#475569', lineHeight: 1.9, paddingLeft: 20, fontSize: 15, marginBottom: 12 }}>
                <li style={{ marginBottom: 6 }}>Software engineering practices, testing, packaging, APIs.</li>
                <li style={{ marginBottom: 6 }}>Training pipelines, data pipelines, and deployment workflows.</li>
                <li style={{ marginBottom: 6 }}>MLOps: versioning, reproducibility, monitoring, retraining.</li>
              </ul>
              <p style={{ color: '#475569', fontSize: 15, marginBottom: 8 }}>Practical tools:</p>
              <ul style={{ color: '#475569', lineHeight: 1.9, paddingLeft: 20, fontSize: 15 }}>
                <li style={{ marginBottom: 6 }}>Python, scikit-learn, PyTorch or TensorFlow.</li>
                <li style={{ marginBottom: 6 }}>Docker, basic Kubernetes concepts, MLflow or similar.</li>
                <li style={{ marginBottom: 6 }}>Cloud services for training and serving.</li>
              </ul>
            </div>

            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e3a5f', marginBottom: 8 }}>AI Engineer Skill Stack (2026)</h3>
              <p style={{ color: '#475569', fontSize: 15, marginBottom: 8 }}>Focus areas:</p>
              <ul style={{ color: '#475569', lineHeight: 1.9, paddingLeft: 20, fontSize: 15, marginBottom: 12 }}>
                <li style={{ marginBottom: 6 }}>Building AI applications, not just models.</li>
                <li style={{ marginBottom: 6 }}>LLM APIs, prompt and context design, and evaluation.</li>
                <li style={{ marginBottom: 6 }}>RAG systems for documents and knowledge bases.</li>
                <li style={{ marginBottom: 6 }}>Agents that call tools, plus guardrails and monitoring.</li>
              </ul>
              <p style={{ color: '#475569', fontSize: 15, marginBottom: 8 }}>Practical tools:</p>
              <ul style={{ color: '#475569', lineHeight: 1.9, paddingLeft: 20, fontSize: 15 }}>
                <li style={{ marginBottom: 6 }}>Python or TypeScript, REST APIs, and databases.</li>
                <li style={{ marginBottom: 6 }}>Vector databases and retrieval patterns (for RAG).</li>
                <li style={{ marginBottom: 6 }}>Observability, testing, and safety checks for AI outputs.</li>
              </ul>
            </div>
          </section>

          {/* Which Role Section */}
          <section id="which-role" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: '#1e3a5f', marginBottom: 28 }}>
              Which Role Should You Choose
            </h2>
            
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e3a5f', marginBottom: 12 }}>Choose Data Scientist If</h3>
              <ul style={{ color: '#475569', lineHeight: 1.9, paddingLeft: 20, fontSize: 15 }}>
                <li style={{ marginBottom: 6 }}>You enjoy statistics, experimentation, and explaining insights.</li>
                <li style={{ marginBottom: 6 }}>You like influencing decisions with data.</li>
                <li style={{ marginBottom: 6 }}>You are comfortable working close to business teams.</li>
              </ul>
            </div>

            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e3a5f', marginBottom: 12 }}>Choose ML Engineer If</h3>
              <ul style={{ color: '#475569', lineHeight: 1.9, paddingLeft: 20, fontSize: 15 }}>
                <li style={{ marginBottom: 6 }}>You prefer building systems that run in production.</li>
                <li style={{ marginBottom: 6 }}>You enjoy engineering challenges like scaling, latency, and reliability.</li>
                <li style={{ marginBottom: 6 }}>You want to work close to the backend and platform teams.</li>
              </ul>
            </div>

            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e3a5f', marginBottom: 12 }}>Choose AI Engineer If</h3>
              <ul style={{ color: '#475569', lineHeight: 1.9, paddingLeft: 20, fontSize: 15 }}>
                <li style={{ marginBottom: 6 }}>You want to ship AI features quickly, such as copilots, search, chat, and automation.</li>
                <li style={{ marginBottom: 6 }}>You like product thinking, plus strong engineering.</li>
                <li style={{ marginBottom: 6 }}>You are excited by LLM apps, RAG, and agent workflows.</li>
              </ul>
            </div>
          </section>

          {/* Roadmaps Section */}
          <section id="roadmaps" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: '#1e3a5f', marginBottom: 12 }}>
              Roadmaps: Step-by-Step Learning Paths
            </h2>
            <p style={{ color: '#475569', fontSize: 15, marginBottom: 28 }}>
              These roadmaps are designed to be practical. The order matters more than the speed.
            </p>
            
            {/* Data Scientist Roadmap */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e3a5f', marginBottom: 16 }}>Data Scientist Roadmap</h3>
              
              <p style={{ fontSize: 14, fontWeight: 600, color: '#1e3a5f', marginBottom: 6 }}>Step 1: Foundations</p>
              <ul style={{ color: '#475569', lineHeight: 1.8, paddingLeft: 20, fontSize: 14, marginBottom: 12 }}>
                <li>Python basics, Pandas, data cleaning</li>
                <li>SQL for analysis, queries, joins</li>
              </ul>
              
              <p style={{ fontSize: 14, fontWeight: 600, color: '#1e3a5f', marginBottom: 6 }}>Step 2: Analysis And Storytelling</p>
              <ul style={{ color: '#475569', lineHeight: 1.8, paddingLeft: 20, fontSize: 14, marginBottom: 12 }}>
                <li>EDA, visualization, dashboards</li>
                <li>Statistics, probability, hypothesis testing</li>
              </ul>
              
              <p style={{ fontSize: 14, fontWeight: 600, color: '#1e3a5f', marginBottom: 6 }}>Step 3: Modeling</p>
              <ul style={{ color: '#475569', lineHeight: 1.8, paddingLeft: 20, fontSize: 14, marginBottom: 12 }}>
                <li>Regression, classification, trees, ensembles</li>
                <li>Model evaluation, bias and variance, feature engineering</li>
              </ul>
              
              <p style={{ fontSize: 14, fontWeight: 600, color: '#1e3a5f', marginBottom: 6 }}>Step 4: Applied Projects</p>
              <ul style={{ color: '#475569', lineHeight: 1.8, paddingLeft: 20, fontSize: 14, marginBottom: 12 }}>
                <li>One business KPI project (churn, demand, fraud)</li>
                <li>One experimentation project (A/B test, uplift)</li>
              </ul>
              <p style={{ color: '#6b7280', fontSize: 13, fontStyle: 'italic' }}>Reference roadmap style for structured progression</p>
            </div>

            {/* ML Engineer Roadmap */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e3a5f', marginBottom: 16 }}>ML Engineer Roadmap</h3>
              
              <p style={{ fontSize: 14, fontWeight: 600, color: '#1e3a5f', marginBottom: 6 }}>Step 1: Strong ML Basics</p>
              <ul style={{ color: '#475569', lineHeight: 1.8, paddingLeft: 20, fontSize: 14, marginBottom: 12 }}>
                <li>Supervised learning, feature engineering, metrics</li>
                <li>PyTorch or TensorFlow basics</li>
              </ul>
              
              <p style={{ fontSize: 14, fontWeight: 600, color: '#1e3a5f', marginBottom: 6 }}>Step 2: Software Engineering For ML</p>
              <ul style={{ color: '#475569', lineHeight: 1.8, paddingLeft: 20, fontSize: 14, marginBottom: 12 }}>
                <li>APIs, services, testing, packaging</li>
                <li>Data pipelines and batch jobs</li>
              </ul>
              
              <p style={{ fontSize: 14, fontWeight: 600, color: '#1e3a5f', marginBottom: 6 }}>MLOps And Deployment</p>
              <ul style={{ color: '#475569', lineHeight: 1.8, paddingLeft: 20, fontSize: 14, marginBottom: 12 }}>
                <li>Docker, model serving, monitoring, retraining</li>
                <li>CI basics for ML workflows</li>
              </ul>
              
              <p style={{ fontSize: 14, fontWeight: 600, color: '#1e3a5f', marginBottom: 6 }}>Step 4: Production Projects</p>
              <ul style={{ color: '#475569', lineHeight: 1.8, paddingLeft: 20, fontSize: 14, marginBottom: 12 }}>
                <li>End-to-end pipeline project, train to deploy</li>
                <li>Monitoring and drift detection project</li>
              </ul>
              <p style={{ color: '#6b7280', fontSize: 13, fontStyle: 'italic' }}>ML engineering focuses on operationalizing learning systems</p>
            </div>

            {/* AI Engineer Roadmap */}
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e3a5f', marginBottom: 16 }}>AI Engineer Roadmap (LLM Era)</h3>
              
              <p style={{ fontSize: 14, fontWeight: 600, color: '#1e3a5f', marginBottom: 6 }}>Step 1: Engineering Core</p>
              <ul style={{ color: '#475569', lineHeight: 1.8, paddingLeft: 20, fontSize: 14, marginBottom: 12 }}>
                <li>Python or TypeScript, APIs, databases, and auth basics</li>
              </ul>
              
              <p style={{ fontSize: 14, fontWeight: 600, color: '#1e3a5f', marginBottom: 6 }}>Step 2: LLM Application Fundamentals</p>
              <ul style={{ color: '#475569', lineHeight: 1.8, paddingLeft: 20, fontSize: 14, marginBottom: 12 }}>
                <li>Prompting patterns, structured outputs, and tool calling</li>
                <li>Evaluation basics, logging, feedback loops</li>
              </ul>
              
              <p style={{ fontSize: 14, fontWeight: 600, color: '#1e3a5f', marginBottom: 6 }}>Step 3: RAG And Search</p>
              <ul style={{ color: '#475569', lineHeight: 1.8, paddingLeft: 20, fontSize: 14, marginBottom: 12 }}>
                <li>Chunking, retrieval, reranking, grounding</li>
                <li>Build a doc Q&A app that actually cites sources</li>
              </ul>
              
              <p style={{ fontSize: 14, fontWeight: 600, color: '#1e3a5f', marginBottom: 6 }}>Step 4: Agents And Automation</p>
              <ul style={{ color: '#475569', lineHeight: 1.8, paddingLeft: 20, fontSize: 14 }}>
                <li>Multi-step workflows, tool use, and safe execution</li>
                <li>Monitoring, guardrails, cost control</li>
              </ul>
            </div>
          </section>

          {/* Portfolio Section */}
          <section id="portfolio" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: '#1e3a5f', marginBottom: 28 }}>
              Portfolio Projects That Match Each Role
            </h2>
            
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e3a5f', marginBottom: 16 }}>Data Scientist Portfolio Projects</h3>
              
              <p style={{ fontSize: 14, fontWeight: 600, color: '#1e3a5f', marginBottom: 4 }}>1. Churn Prediction With Business Insights</p>
              <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.7, marginBottom: 12, paddingLeft: 16 }}>
                Include data cleaning, feature engineering, model comparison, and a simple explanation of what drives churn.
              </p>
              
              <p style={{ fontSize: 14, fontWeight: 600, color: '#1e3a5f', marginBottom: 4 }}>2. A/B Test Case Study</p>
              <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.7, marginBottom: 12, paddingLeft: 16 }}>
                Show hypothesis, metrics, significance, and a clear decision recommendation.
              </p>
              
              <p style={{ fontSize: 14, fontWeight: 600, color: '#1e3a5f', marginBottom: 4 }}>3. Analytics Dashboard Plus Narrative</p>
              <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.7, marginBottom: 12, paddingLeft: 16 }}>
                Even a simple dashboard becomes strong when paired with a short written story and actions.
              </p>
            </div>

            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e3a5f', marginBottom: 16 }}>ML Engineer Portfolio Projects</h3>
              
              <p style={{ fontSize: 14, fontWeight: 600, color: '#1e3a5f', marginBottom: 4 }}>1. Train To Deploy ML Service</p>
              <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.7, marginBottom: 12, paddingLeft: 16 }}>
                Build a model, package it, serve via API, add monitoring hooks.
              </p>
              
              <p style={{ fontSize: 14, fontWeight: 600, color: '#1e3a5f', marginBottom: 4 }}>2. Batch Pipeline With Retraining</p>
              <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.7, marginBottom: 12, paddingLeft: 16 }}>
                Automate data ingestion, training, evaluation, and scheduled refresh.
              </p>
              
              <p style={{ fontSize: 14, fontWeight: 600, color: '#1e3a5f', marginBottom: 4 }}>3. Model Performance And Latency Optimization</p>
              <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.7, marginBottom: 12, paddingLeft: 16 }}>
                Show before and after, plus how you measured it.
              </p>
            </div>

            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e3a5f', marginBottom: 16 }}>AI Engineer Portfolio Projects</h3>
              
              <p style={{ fontSize: 14, fontWeight: 600, color: '#1e3a5f', marginBottom: 4 }}>1. RAG Document Assistant For A Real Use Case</p>
              <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.7, marginBottom: 12, paddingLeft: 16 }}>
                Examples: course FAQ bot, internal policy search, customer support search. RAG and production deployment matter.
              </p>
              
              <p style={{ fontSize: 14, fontWeight: 600, color: '#1e3a5f', marginBottom: 4 }}>2. AI Agent That Uses Tools</p>
              <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.7, marginBottom: 12, paddingLeft: 16 }}>
                Example: an agent that reads a request, calls a database or API, and returns a structured result with safety checks.
              </p>
              
              <p style={{ fontSize: 14, fontWeight: 600, color: '#1e3a5f', marginBottom: 4 }}>3. LLM Evaluation Harness</p>
              <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.7, marginBottom: 12, paddingLeft: 16 }}>
                Create a small evaluation suite, track quality across prompt versions, and log failures.
              </p>
            </div>
          </section>

          {/* Common Misconceptions Section */}
          <section id="misconceptions" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: '#1e3a5f', marginBottom: 28 }}>
              Common Misconceptions
            </h2>
            
            <div style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 15, fontWeight: 600, color: '#1e3a5f', marginBottom: 6 }}>1. Misconception 1: AI Engineer And ML Engineer Are The Same</p>
              <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.7, paddingLeft: 16 }}>
                They overlap, but AI engineering is often more product and application-oriented, while ML engineering is centered on building and operating ML systems reliably.
              </p>
            </div>
            
            <div style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 15, fontWeight: 600, color: '#1e3a5f', marginBottom: 6 }}>2. Misconception 2: Data Scientists Only Make Dashboards</p>
              <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.7, paddingLeft: 16 }}>
                In many teams, data science includes experimentation, modeling, and decision support, not just reporting.
              </p>
            </div>
            
            <div style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 15, fontWeight: 600, color: '#1e3a5f', marginBottom: 6 }}>3. Misconception 3: You Must Pick Only One Forever</p>
              <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.7, paddingLeft: 16 }}>
                The foundations overlap, and many professionals move between roles as they gain skills and experience.
              </p>
            </div>
          </section>

          {/* How Dandes Academy Fits Section */}
          <section id="dandes-academy" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1e3a5f', marginBottom: 20 }}>
              How Dandes Academy Fits Into These Roadmaps
            </h2>
            <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
              If your goal is to become job-ready, the biggest accelerators are structure, projects, and interview preparation.
            </p>
            <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
              {"Dandes Academy's AI and ML program is designed as a step-by-step progression from fundamentals to advanced topics, and it explicitly includes hands-on projects, Generative AI and LLMs, Agentic AI, and MLOps, as well as interview and placement support."}
            </p>
            <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
              If you want a low-commitment start, you can join the free live webinars and see the learning roadmap and expectations before you invest deeply.
            </p>
            <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.8 }}>
              You can also learn from the free class videos to strengthen foundations like Python and Pandas. For outcomes and learner feedback, check the student testimonials.
            </p>
          </section>

          {/* Questions Section - FAQ Accordion */}
          <FAQSection />

          {/* Conclusion Section */}
          <section id="conclusion" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#1e3a5f', marginBottom: 20 }}>
              Conclusion
            </h2>
            <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: 20, fontSize: 16 }}>
              AI Engineer, ML Engineer, and Data Scientist are not interchangeable titles. In 2026, the cleanest way to choose is to match the role to the kind of work you want to do every week.
            </p>
            <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: 28, fontSize: 16 }}>
              {"If you want to start with clarity, begin with fundamentals, build projects, and get feedback early. You can use Dandes Academy's free webinars to understand the roadmap and the skill expectations, then move into structured learning when you are ready."}
            </p>
            
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1e3a5f', marginBottom: 16 }}>
              Key Takeaways:
            </h3>
            <ul style={{ color: '#475569', lineHeight: 1.9, paddingLeft: 24, fontSize: 16 }}>
              <li style={{ marginBottom: 12 }}>Data Scientists drive decisions with insights, experiments, and clear communication.</li>
              <li style={{ marginBottom: 12 }}>ML Engineers ensure models run reliably in production by focusing on pipelines, deployment, and monitoring.</li>
              <li style={{ marginBottom: 12 }}>AI Engineers build AI-powered product features, often using LLM apps, RAG, and agents.</li>
              <li style={{ marginBottom: 12 }}>{"Your portfolio should match the role's hiring signals, not generic projects."}</li>
              <li style={{ marginBottom: 12 }}>A structured roadmap, real projects, and interview preparation are the fastest path to job readiness.</li>
            </ul>
          </section>

        </article>

        {/* Sidebar */}
        <aside style={{ width: 300, flexShrink: 0 }}>
          
          <div style={{ position: 'sticky', top: 100 }}>
            {/* Table of Contents */}
            <div style={{
              backgroundColor: '#fef7f7',
              borderRadius: 12,
              padding: 24,
              marginBottom: 24,
            }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1a1a1a', marginBottom: 20 }}>
                Table of Contents
              </h3>
              <nav>
                {tableOfContents.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      textAlign: 'left',
                      padding: '14px 0',
                      fontSize: 14,
                      color: activeSection === item.id ? '#d12027' : '#1a1a1a',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: index < tableOfContents.length - 1 ? '1px solid #fce7e7' : 'none',
                      cursor: 'pointer',
                      fontWeight: 400,
                    }}
                  >
                    {item.label}
                    <svg width={16} height={16} fill="none" stroke="#d12027" strokeWidth={2}>
                      <path d="M4 6 L8 10 L12 6" />
                    </svg>
                  </button>
                ))}
              </nav>
            </div>

            {/* Free Webinar Card */}
            <div style={{
              backgroundColor: '#fef7f7',
              borderRadius: 16,
              padding: 24,
              marginBottom: 24,
            }}>
              <p style={{ fontSize: 18, fontWeight: 600, color: '#d12027', marginBottom: 4 }}>
                Free Webinar:
              </p>
              <h4 style={{ fontSize: 22, fontWeight: 800, color: '#1a1a1a', marginBottom: 16, lineHeight: 1.3 }}>
                Build Job-Ready AI/ML Skills
              </h4>
              <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 24, lineHeight: 1.6 }}>
                Get a clear learning path, project guidance, and interview tips from industry mentors.
              </p>
              
              <button 
                onClick={() => setShowPopup(true)}

                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '12px 18px',
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#1a1a1a',
                  cursor: 'pointer',
                }}
              >
                Register Free Now
                <span style={{
                  width: 24,
                  height: 24,
                  backgroundColor: '#d12027',
                  borderRadius: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width={10} height={10} fill="none" stroke="#fff" strokeWidth={2.5}>
                    <path d="M3 2 L7 5 L3 8" />
                  </svg>
                </span>
              </button>
              
            </div>

          </div>
        </aside>
      </div>

      {/* Recent Blogs Section - Full Width Below Content */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px 80px' }}>
        <h3 style={{ fontSize: 28, fontWeight: 700, color: '#1a1a1a', marginBottom: 40, textAlign: 'center' }}>
          Recent <span style={{ color: '#d12027' }}>Blogs</span>
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {recentBlogs.map((blog) => (
            <div
              key={blog.id}
              style={{
                backgroundColor: '#fff',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              }}
            >
              {/* Image */}
              <div style={{
                width: '100%',
                height: 200,
                backgroundColor: '#e5e7eb',
                overflow: 'hidden',
              }}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>
              
              {/* Content */}
              <div style={{ padding: 20 }}>
                {/* Tags */}
                <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                  {blog.tags.map((tag, j) => (
                    <span
                      key={j}
                      style={{
                        padding: '4px 12px',
                        fontSize: 12,
                        borderRadius: 4,
                        backgroundColor: j === 0 ? '#e0e7ff' : '#fee2e2',
                        color: j === 0 ? '#3730a3' : '#dc2626',
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Author & Date */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: '#d1d5db' }} />
                    <span style={{ fontSize: 13, color: '#6b7280' }}>{blog.author}</span>
                  </div>
                  <span style={{ fontSize: 13, color: '#9ca3af' }}>{blog.date}</span>
                </div>
                
                {/* Title */}
                <h4 style={{ fontSize: 18, fontWeight: 700, color: '#1a1a1a', marginBottom: 10, lineHeight: 1.4 }}>
                  {blog.title}
                </h4>
                
                {/* Description */}
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6, marginBottom: 20 }}>
                  {blog.description}
                </p>
                
                {/* Read More */}
                <a
                  href={`/blogs/${blog.slug}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '10px 16px',
                    border: '1px solid #e5e7eb',
                    borderRadius: 8,
                    fontSize: 14,
                    color: '#1a1a1a',
                    textDecoration: 'none',
                  }}
                >
                  Read More
                  <span style={{
                    width: 26,
                    height: 26,
                    backgroundColor: '#d12027',
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg width={12} height={12} fill="none" stroke="#fff" strokeWidth={2}>
                      <path d="M4 3 L8 6 L4 9" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <PopupFormModal
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />

    </section>
  )
}
