"use client"

import { Check, X } from "lucide-react"

const comparisonData = [
  {
    criteria: "Learning Continuity",
    dandes: "One lead trainer throughout the entire program for a consistent teaching style, pace, and mentorship.",
    typical: "Different trainers across modules, resulting in varying teaching styles and learning experiences.",
  },
  {
    criteria: "Learning Format",
    dandes: "Live instructor-led classes with real-time interaction and doubt resolution.",
    typical: "Mostly recorded videos with limited live interaction.",
  },
  {
    criteria: "Learning Roadmap",
    dandes: "Structured roadmap from fundamentals to advanced AI topics.",
    typical: "Topic-based learning with less guided progression.",
  },
  {
    criteria: "Projects",
    dandes: "Real industry projects that build practical, job-ready skills.",
    typical: "Basic practice projects or guided demos.",
  },
  {
    criteria: "Mentor Support",
    dandes: "Live mentor guidance, doubt resolution, and continuous learning support.",
    typical: "Limited support, often through forums or delayed responses.",
  },
  {
    criteria: "Interview Preparation",
    dandes: "Resume review, LinkedIn guidance, mock interviews, and project discussions.",
    typical: "Limited interview preparation and career guidance.",
  },
  {
    criteria: "Career Focus",
    dandes: "Designed to prepare you for real AI/ML roles and technical interviews.",
    typical: "Primarily focused on course completion.",
  },
  {
    criteria: "Modern AI Coverage",
    dandes: "Covers Generative AI, LLMs, RAG, Agentic AI, and MLOps.",
    typical: "Coverage varies and often excludes newer AI topics.",
  },
  {
    criteria: "Learning Journey",
    dandes: "Structured 12-month program with clear milestones.",
    typical: "Usually self-paced with no fixed learning path.",
  },
  {
    criteria: "End Goal",
    dandes: "Build production-ready AI skills and a strong project portfolio.",
    typical: "Earn a course completion certificate.",
  },
  {
    criteria: "Trust and legacy",
    dandes: "Known as Dande's Course, with JLC legacy recall",
    typical: "Depends on platform or marketing",
  },
]

export function CourseComparisonSection() {
  return (
    <section className="py-9 md:py-12 bg-gradient-to-b from-sky-50/50 via-white to-sky-50/50">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-[70px]">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a1a1a] mb-16">
          What Makes Dandes Academy Different<br />
          From Other Online Courses
        </h2>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-6 px-4 w-1/4">
                  <span className="text-base font-semibold text-[#1a1a1a]">What you care about</span>
                </th>
                <th className="text-left py-6 px-4 w-[37.5%]">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#d12027] text-white font-bold text-lg px-2 py-1 rounded">
                      DA
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="font-bold text-[#1a1a1a]">Dandes</span>
                      <span className="text-[#d12027] text-sm font-medium">Academy</span>
                    </div>
                  </div>
                </th>
                <th className="text-left py-6 px-4 w-[37.5%]">
                  <span className="text-base font-semibold text-[#1a1a1a]">Typical online course</span>
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-5 px-4">
                    <span className="font-semibold text-[#1a1a1a] text-sm">{row.criteria}</span>
                  </td>
                  <td className="py-5 px-4">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{row.dandes}</span>
                    </div>
                  </td>
                  <td className="py-5 px-4">
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500 text-sm">{row.typical}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Trust Statement */}
        <p className="text-center text-gray-600 mt-16 text-sm">
          Trusted by working professionals and students through the long-running<br />
          JLC legacy and Dande&apos;s Course recall.
        </p>
      </div>
    </section>
  )
}
