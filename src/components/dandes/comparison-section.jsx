"use client"

import { Check, X } from "lucide-react"

const comparisonData = [
  {
    criteria: "Learning format",
    dandes: "Live online classes with instructor-led teaching",
    typical: "Mostly recorded content, limited live interaction",
  },
  {
    criteria: "Learning structure",
    dandes: "Clear roadmap from fundamentals to advanced",
    typical: "Topic-wise learning, often with less guided sequencing",
  },
  {
    criteria: "Practice approach",
    dandes: "Projects, case studies, and problem sets are built into the journey",
    typical: "Practice is optional or left to the learner",
  },
  {
    criteria: "Doubt support",
    dandes: "Doubt support and guidance to keep you moving",
    typical: "Support varies, often slower or less personal",
  },
  {
    criteria: "Interview readiness",
    dandes: "Interview-focused prep, resume, and mock interviews",
    typical: "Usually content-heavy, limited interview coaching",
  },
  {
    criteria: "Flexibility",
    dandes: "LMS access and recordings to catch up and revise",
    typical: "Recordings are available, but less accountability",
  },
  {
    criteria: "Fit for schedules",
    dandes: "Designed for working professionals and serious learners",
    typical: "Works for self-paced learners; consistency is on you",
  },
  {
    criteria: "Goal alignment",
    dandes: "AI/ML, System Design, and DSA paths built for real interviews",
    typical: "Often broad, less targeted to interview outcomes",
  },
]

export function ComparisonSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50/50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Live learning vs recorded learning
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
            <div className="py-4 px-4 bg-white rounded-t-lg border-t border-l border-r border-gray-100">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 bg-[#d12027] rounded">
                  <span className="text-white font-bold text-sm">DA</span>
                </div>
                <div>
                  <span className="font-bold text-foreground">Dandes</span>
                  <span className="text-[#d12027] font-bold text-sm block leading-none">Academy</span>
                </div>
              </div>
            </div>
            <div className="py-4 px-4">
              <h3 className="font-semibold text-foreground">Typical online course</h3>
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
