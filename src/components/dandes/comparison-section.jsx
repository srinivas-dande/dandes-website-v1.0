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

export function ComparisonSection() {
  return (
    <section className="py-9 md:py-12 bg-gradient-to-b from-sky-50/50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Dandes Academy <span className="text-[#d12027]">AI & Machine Learning Program</span> vs Typical AI Courses
          </h2>
          <p className="text-muted-foreground">The real difference</p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 mb-2">
            <div className="py-4 px-4">
              <h3 className="font-semibold text-foreground">What matters</h3>
            </div>
            <div className="py-4 px-4">
              <h3 className="font-semibold text-foreground">Dandes Academy AI Program</h3>
            </div>
            <div className="py-4 px-4">
              <h3 className="font-semibold text-foreground">Typical AI Courses</h3>
            </div>
          </div>

          {/* Table Body */}
          <div className="space-y-0">
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 border-b border-gray-100 last:border-b-0"
              >
                {/* Criteria */}
                <div className="py-5 px-4">
                  <span className="font-semibold text-foreground">{row.criteria}</span>
                </div>

                {/* Dandes Academy */}
                <div className="py-5 px-4 bg-white border-l border-r border-gray-100">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-violet-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{row.dandes}</span>
                  </div>
                </div>

                {/* Typical Course */}
                <div className="py-5 px-4">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{row.typical}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom border for Dandes column */}
          <div className="grid grid-cols-3 gap-4">
            <div></div>
            <div className="bg-white border-l border-r border-b border-gray-100 rounded-b-lg h-4"></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
