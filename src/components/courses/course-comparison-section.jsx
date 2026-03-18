"use client"

import { Check, X } from "lucide-react"

const comparisonData = [
  {
    criteria: "Learning format",
    dandes: "Live instructor-led classes",
    typical: "Mostly recorded videos",
  },
  {
    criteria: "Learning path",
    dandes: "Structured roadmap from basics to advanced",
    typical: "Often topic based, less guided sequencing",
  },
  {
    criteria: "Practice and accountability",
    dandes: "Assignments, projects, and guide practice built in",
    typical: "Practice is optional, consistency is on you",
  },
  {
    criteria: "Doubt resolution",
    dandes: "Support and doubt clearing to avoid getting stuck",
    typical: "Limited support, slower responses",
  },
  {
    criteria: "Revision support",
    dandes: "Resume, LinkedIn, and mock interview support",
    typical: "Recordings available, but less structure",
  },
  {
    criteria: "Interview readiness",
    dandes: "Designed for working professionals and serious learners",
    typical: "Often limited or not included",
  },
  {
    criteria: "Fit for busy schedules",
    dandes: "Designed for working professionals and serious learners",
    typical: "Works mainly for self paced learners",
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
