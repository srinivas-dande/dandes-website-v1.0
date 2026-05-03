"use client"

import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { PopupFormModal } from "../dandes/popup-form-modal"

const audienceData = {
  professionals: {
    headline: "Mid To Senior Engineers",
    headlineSuffix: "Who Want A Clear Upgrade Path",
    description: "If you have work experience in software development and want to move into stronger roles, these programs fit real schedules with live classes, recordings, and structured practice.",
    benefits: [
      "Upskill without quitting your job.",
      "Break stagnation with skills that show in interviews and real work.",
      "Follow one roadmap instead of scattered resources.",
      "Build confidence through guided practice and feedback."
    ],
    recommendations: [
      "AI and Machine Learning for career transitions and future-proof skills.",
      "System Design for senior interviews and architecture clarity.",
      "DSA for coding rounds and problem-solving speed."
    ]
  },
  students: {
    headline: "Students And Fresh Graduates",
    headlineSuffix: "Who Want To Land Strong Roles",
    description: "If you are preparing for placements or want to build job-ready skills early, these programs give you structure, practice, and interview preparation to stand out.",
    benefits: [
      "Build strong foundations before entering the job market.",
      "Get placement-ready with structured interview prep.",
      "Learn with guidance instead of random tutorials.",
      "Gain confidence through real projects and practice."
    ],
    recommendations: [
      "DSA for cracking coding interviews and placement rounds.",
      "AI and Machine Learning for cutting-edge skills employers want.",
      "System Design basics for senior-level thinking early on."
    ]
  }
}

export function CourseAudienceSection() {
  const [showPopup, setShowPopup] = useState(false)

  const [activeTab, setActiveTab] = useState('professionals')
  const data = audienceData[activeTab]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-[70px]">
        {/* Main Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          <span className="text-[#d12027]">Built For Working</span>{' '}
          <span className="text-[#1a1a1a]">Professionals And Career-Focused Learners</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-12">
          Dandes Academy programs are built for people who want a clear learning path, consistent support, and practical
          preparation for interviews. Whether you are upgrading your skills while working, switching roles, or preparing for
          placements, the structure helps you stay consistent and build confidence.
        </p>

        {/* Tabs */}
        <div className="bg-slate-50 rounded-lg p-1 mb-12">
          <div className="flex">
            <button
              onClick={() => setActiveTab('professionals')}
              className={`flex-1 py-4 px-6 text-sm font-medium transition-all relative cursor-pointer ${
                activeTab === 'professionals' ? 'text-[#1a1a1a] bg-white rounded-lg' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              For working professionals
              {activeTab === 'professionals' && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-[#d12027]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('students')}
              className={`flex-1 py-4 px-6 text-sm font-medium transition-all relative cursor-pointer ${
                activeTab === 'students' ? 'text-[#1a1a1a] bg-white rounded-lg' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              For students and job seekers
              {activeTab === 'students' && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-[#d12027]" />
              )}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="text-[#1a1a1a]">For </span>
              <span className="text-[#d12027]">{data.headline}</span>
              <span className="text-[#1a1a1a]"> {data.headlineSuffix}</span>
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {data.description}
            </p>

            <p className="text-gray-700 mb-4">Not sure which course fits your goal.</p>

            <button 
              onClick={() => setShowPopup(true)}
              className="bg-[#d12027] text-white py-3 px-6 rounded font-medium flex items-center gap-2 hover:bg-[#b81c22] transition-colors cursor-pointer"
            >
              Register for free webinar
              <ArrowRight className="w-4 h-4" />
            </button>

            <PopupFormModal
              showPopup={showPopup}
              setShowPopup={setShowPopup}
            />

          </div>

          {/* Right Cards */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Best if you want to Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-[#1a1a1a] mb-4">Best if you want to:</h4>
              <ul className="space-y-3">
                {data.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended flow Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-[#1a1a1a] mb-4">Recommended flow:</h4>
              <ul className="space-y-4">
                {data.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-2" />
                    <span className="text-gray-700 text-sm">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
