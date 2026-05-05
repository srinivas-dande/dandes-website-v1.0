"use client"

import { useState } from "react"
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

const coursesData = {
  aiml: {
    title: "AI And ML Training Program",
    titleHighlight: "AI And ML Training Program",
    subtitle: "For Working Professionals And Students",
    description: "This program is built for learners who want a clear path into AI and ML with live teaching, hands-on projects, and interview preparation. You learn from foundations to modern AI workflows, so you can build real proof of skill and explain it confidently.",
    ctaText: "Get AI and ML course details",
    url : "/ai-machine-learning-course",
    highlights: [
      "11 to 12-month structured roadmap",
      "Live online classes with LMS recordings",
      "Projects, mini projects, and a capstone",
      "Interview preparation support"
    ]
  },
  systemDesign: {
    title: "System Design course",
    titleHighlight: "System Design course",
    subtitle: "for working professionals and students",
    description: "System Design interviews test how you think, communicate trade-offs, and build scalable solutions. This program helps you learn the core concepts, common architectures, and a clear approach to answering system design questions with confidence.",
    ctaText: "Get System Design course details",
    url : "/system-design-course",
    highlights: [
      "Live online classes with structured frameworks",
      "Real case studies and guided design practice",
      "Architecture thinking, trade-offs, and clarity",
      "Interview-focused preparation"
    ]
  },
  dsa: {
    title: "Data Structures and Algorithms Course",
    titleHighlight: "Data Structures and Algorithms Course",
    subtitle: "for working professionals and students",
    description: "If coding rounds feel inconsistent, the problem is usually structure and practice. This program helps you build strong DSA fundamentals, learn common patterns, and improve speed and accuracy through guided problem solving.",
    ctaText: "Get DSA course details", 
    url : "/data-structures-algorithms",
    highlights: [
      "Structured DSA roadmap and problem-solving patterns",
      "Practice focused learning, not just theory",
      "Placement and coding interview preparation",
      "Placement and coding interview preparation",
      "Guidance to improve speed and confidence"
    ]
  }
}

const tabs = [
  { id: "aiml", label: "AI and ML training program" },
  { id: "systemDesign", label: "System Design course" },
  { id: "dsa", label: "Data Structures and Algorithms" }
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
                
                {openAccordion === section.id && section.id === "highlights" && (
                  <div className="px-6 pb-5">
                    <ul className="space-y-3">
                      {currentCourse.highlights.map((item, index) => (
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

                {openAccordion === section.id && section.id !== "highlights" && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600">
                      Content for {section.title} will be displayed here.
                    </p>
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
