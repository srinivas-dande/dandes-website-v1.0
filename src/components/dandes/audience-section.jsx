"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

const tabContent = {
  professionals: {
    headline: "mid to senior engineers",
    subheadline: "who want a clear upgrade path",
    description:
      "If you are already working in tech and want to grow into stronger roles, these programs are built to fit real schedules and real career goals. You learn through live classes, recordings when you miss a session, and a paced roadmap that focuses on long-term mastery.",
    benefits: [
      "Upskill without quitting your job.",
      "Break stagnation with skills that matter in interviews and real work.",
      "Follow one structured roadmap, not scattered resources.",
      "Build confidence through guided practice and projects.",
    ],
    tracks: [
      "AI and Machine Learning for a portfolio and modern specialization.",
      "DSA for placements and coding interviews.",
      "System Design for stronger interview discussions and role clarity.",
    ],
  },
  students: {
    headline: "students and fresh graduates",
    subheadline: "who want to land their first tech job",
    description:
      "If you are preparing for placements, internships, or your first job in tech, these programs give you the structure and practice needed to stand out. You learn fundamentals properly, build projects, and prepare for real interviews.",
    benefits: [
      "Get placement-ready with structured preparation.",
      "Build a strong portfolio with real projects.",
      "Master DSA and coding interviews step by step.",
      "Gain confidence through mock interviews and feedback.",
    ],
    tracks: [
      "DSA for placements and coding interviews.",
      "AI and Machine Learning for modern tech roles.",
      "Full-stack development for versatile job opportunities.",
    ],
  },
}

export function AudienceSection() {
  const [activeTab, setActiveTab] = useState("professionals")
  const content = tabContent[activeTab]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50/50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Made for working <span className="text-[#d12027]">professionals</span> and{" "}
            <span className="text-[#d12027]">serious learners</span>
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Dandes Academy is designed for people who want a clear learning path, consistent support, and practical work
            that improves real outcomes. Whether you are aiming for an AI transition, preparing for senior engineering
            interviews, or building strong fundamentals for placements, the structure helps you stay consistent and
            confident.
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
            <h4 className="text-lg font-bold text-foreground mb-6">Recommended tracks:</h4>
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
