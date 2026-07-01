"use client"

import { useState } from "react"
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

const coursesData = {
  aiml: {
    title: "AI & Machine Learning Course",
    titleHighlight: "AI & Machine Learning Course",
    subtitle: "For Working Professionals And Students",
    description: "Build a strong foundation in AI & Machine Learning through live instructor-led classes, hands-on projects, and industry-relevant tools. Follow a structured roadmap from Python and Machine Learning to Deep Learning, Generative AI, Agentic AI, and MLOps, while building a portfolio that prepares you for AI careers.",
    ctaText: "Get AI and ML course details",
    url : "/ai-machine-learning-course",
    highlights: [
      "12-Month Structured Learning Roadmap",
      "Live Instructor-Led Classes with Recordings",
      "6 Real-World AI Projects & Capstone",
      "Interview Preparation & Career Support"
    ],
    learn: [
      "Python Programming & Data Analysis",
      "Machine Learning & Deep Learning",
      "Generative AI, LLMs & Agentic AI",
      "MLOps, Deployment & Cloud"
    ],
    program: [
      "Live Online Classes",
      "Hands-on Assignments & Projects",
      "Weekly Mentor Support",
      "Recorded Sessions on LMS"
    ],
    takeaway: [
      "Production-Ready AI Portfolio",
      "Industry-Relevant Technical Skills",
      "Interview & Resume Preparation",
      "Confidence to Build Real AI Applications"
    ]
  },
  systemDesign: {
    title: "System Design course",
    titleHighlight: "System Design Course",
    subtitle: "For Software Engineers & Experienced Developers",
    description: "Master the concepts and practical skills required to design scalable, reliable, and high-performance software systems. Learn High-Level Design (HLD), Low-Level Design (LLD), microservices, distributed systems, and architecture patterns through live classes, case studies, and real-world design exercises.",
    ctaText: "Get System Design Course Details",
    url : "/system-design-course",
    highlights: [
      "Structured Roadmap from Fundamentals to Advanced",
      "Live Instructor-Led Classes with Recordings",
      "Real-World System Design Case Studies",
      "Interview Preparation for Senior Engineering Roles"
    ],
    learn: [
      "High-Level & Low-Level Design",
      "Distributed Systems & Microservices",
      "Scalability, Caching & Messaging",
      "Design Patterns & Architecture Principles"
    ],
    program: [
      "Live Online Classes",
      "Hands-on Design Exercises",
      "Weekly Mentor Support",
      "Recorded Sessions on LMS"
    ],
    takeaway: [
      "Strong System Design Fundamentals",
      "Confidence in HLD & LLD Interviews",
      "Real-World Design Thinking",
      "Skills for Senior Engineering Roles"
    ]
    
  },
  dsa: {
    title: "Data Structures and Algorithms Course",
    titleHighlight: "Data Structures & Algorithms Course",
    subtitle: "For Students & Software Engineers Preparing for Coding Interviews",
    description: "Build a strong foundation in Data Structures and Algorithms through structured learning, live coding sessions, and intensive problem-solving practice. Master coding interview techniques and improve your analytical thinking with industry-standard questions.",
    ctaText: "Get DSA Course Details", 
    url : "/data-structures-algorithms",
    highlights: [
      "Structured Learning Roadmap",
      "Live Instructor-Led Coding Sessions",
      "Extensive Coding Practice & Assignments",
      "Interview Preparation for Top Product Companies"
    ],
    learn: [
      "Arrays, Strings, Linked Lists & Trees",
      "Stacks, Queues, Graphs & Heaps",
      "Recursion, Backtracking & Dynamic Programming",
      "Problem-Solving & Interview Strategies"
    ],
    program: [
      "Live Online Classes",
      "Daily Coding Practice",
      "Weekly Problem-Solving Sessions",
      "Recorded Sessions on LMS"
    ],
    takeaway: [
      "Strong Problem-Solving Skills",
      "Confidence in Coding Interviews",
      "Improved Algorithmic Thinking",
      "Preparation for Product-Based Company Interviews"
    ]
  }
}

const tabs = [
  { id: "aiml", label: "AI and Machine Learning Course" },
  { id: "systemDesign", label: "System Design Course" },
  { id: "dsa", label: "DSA Course" }
]

const accordionSections = [
  { id: "highlights", title: "Course highlights", defaultOpen: true },
  { id: "learn", title: "What you will learn", defaultOpen: false },
  { id: "program", title: "How the program runs", defaultOpen: false },
  { id: "takeaway", title: "What you take away", defaultOpen: false }
]

export function CourseTabsSection() {
  const [activeTab, setActiveTab] = useState("aiml")
  const [openAccordion, setOpenAccordion] = useState("highlights")

  const currentCourse = coursesData[activeTab]

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  return (
    <section className="py-9 md:py-14 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-[70px]">
        {/* Tabs Navigation */}
        <div className="mb-8 md:mb-16 overflow-x-auto">
          <div className="flex w-max md:w-full md:justify-center border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                  setOpenAccordion("highlights")
                }}
                className={`px-4 md:px-8 py-3 md:py-4 text-base font-medium transition-all relative whitespace-nowrap ${
                  activeTab === tab.id 
                    ? "text-gray-900" 
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d12027]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-[#d12027]">{currentCourse.titleHighlight}</span>{" "}
              <span className="text-gray-900">{currentCourse.subtitle}</span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-10">
              {currentCourse.description}
            </p>

            <Link 
            href = {currentCourse.url}
            className="inline-flex w-fit bg-[#d12027] text-white px-6 py-3 rounded font-medium items-center gap-2 hover:bg-[#b81c22] transition-colors"
            >
              {currentCourse.ctaText}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Accordions */}
          <div className="flex-1 max-w-xl space-y-4">
            {accordionSections.map((section) => (
              <div 
                key={section.id}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(section.id)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {section.title}
                  </span>
                  {openAccordion === section.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                
                

                {openAccordion === section.id && (
  <div className="px-6 pb-5">
    <ul className="space-y-3">
      {currentCourse[section.id]?.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span
            className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"
          />
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
