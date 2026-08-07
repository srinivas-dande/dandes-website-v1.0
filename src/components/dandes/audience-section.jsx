"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

const tabContent = {
  professionals: {
    headline: "Working Professionals",
    subheadline: "Ready to Level Up Their Careers",
    description:
      "Designed for busy professionals, our flexible learning approach combines live classes, recordings, and structured roadmaps so you can upskill without leaving your job.",
    benefits: [
      "Upskill without leaving your job",
      "Build skills for real-world projects and interviews",
      "Follow one structured roadmap instead of scattered resources",
      "Learn consistently with mentor guidance and practice",
    ],
    tracks: [
      
      "Applied AI Engineering for a fast, focused path into GenAI, LLM and Agentic AI roles.",
       "AI and Machine Learning for a portfolio and modern specialization.",
      "DSA for placements and coding interviews.",
      "System Design for stronger interview discussions and role clarity.",
    ],
  },
  students: {
    headline: "students and fresh graduates",
    subheadline: "who want to Land Your First Tech Job with Confidence",
    description:
      "Build strong foundations, complete real projects, and prepare for placements through structured learning designed for students and fresh graduates.",
    benefits: [
      "Become placement-ready with structured preparation",
      "Build a portfolio through real-world projects",
      "Master DSA and coding interviews",
      "Gain confidence through mock interviews",
    ],
    tracks: [
      "Applied AI Engineering for a fast, focused path into GenAI, LLM and Agentic AI roles.",
      "AI and Machine Learning for a portfolio and modern specialization.",
      "DSA for placements and coding interviews.",
    ],
  },
}

export function AudienceSection() {
  const [activeTab, setActiveTab] = useState("professionals")
  const content = tabContent[activeTab]

  return (
    <section className="py-9 md:py-12 bg-gradient-to-b from-sky-50/50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Built for Working<span className="text-[#d12027]"> professionals,</span> and{" "}
            <span className="text-[#d12027]">Freshers &  Students</span>
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Whether you're starting your career or advancing to the next level, our structured programs combine live classes, practical projects, and continuous support to help you achieve your goals with confidence.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("professionals")}
              className={`px-8 py-4 text-sm font-medium transition-all relative ${
                activeTab === "professionals" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              For working professionals
              {activeTab === "professionals" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d12027]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("students")}
              className={`px-8 py-4 text-sm font-medium transition-all relative ${
                activeTab === "students" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              For students and job seekers
              {activeTab === "students" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d12027]" />
              )}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="text-center mb-10">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            For <span className="text-[#d12027] underline decoration-[#d12027]">{content.headline}</span>{" "}
            {content.subheadline}
          </h3>
          <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">{content.description}</p>
        </div>

        {/* Two Column Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Benefits Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
            <h4 className="text-lg font-bold text-foreground mb-6">You will benefit if you want to:</h4>
            <ul className="space-y-4">
              {content.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recommended Tracks Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
            <h4 className="text-lg font-bold text-foreground mb-6">Recommended Programs:</h4>
            <ul className="space-y-4">
              {content.tracks.map((track, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{track}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
