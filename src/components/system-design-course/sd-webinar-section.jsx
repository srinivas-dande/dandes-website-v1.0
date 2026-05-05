"use client"

import { useState } from "react"
import { CheckCircle2, ArrowRight} from "lucide-react"
import { PopupFormModal } from "../dandes/popup-form-modal"

const webinarPoints = [


  "What companies expect in system design interviews",
  "How to approach any system design problem",
  "Common mistakes engineers make",
  "A clear roadmap to improve",
]

export function SdWebinarSection() {

  const [showPopup, setShowPopup] = useState(false)

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-orange-100/80 to-orange-200/60" />
      
      {/* Honeycomb pattern overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMaxYMid slice">
          <defs>
            <pattern id="honeycomb" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
              <path 
                d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" 
                fill="none" 
                stroke="#f97316" 
                strokeWidth="1"
                strokeOpacity="0.3"
              />
              <path 
                d="M28 0L56 16L56 50L28 66L0 50L0 16L28 0" 
                fill="none" 
                stroke="#f97316" 
                strokeWidth="1"
                strokeOpacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#honeycomb)" />
        </svg>
      </div>

      {/* Diagonal accent line */}
      <div className="absolute right-0 top-0 w-1/3 h-full overflow-hidden">
        <div className="absolute -right-20 top-20 w-[600px] h-2 bg-gradient-to-r from-orange-300/50 to-orange-400/30 rotate-[30deg]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            <span className="text-[#d12027]">Free webinar</span> ,Understand System Design Before You Enroll
          </h2>

          <ul className="space-y-4 mb-10">
            {webinarPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d12027] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>

          <button 
            onClick={() => setShowPopup(true)}
            className="inline-flex items-center gap-2 bg-[#d12027] hover:bg-[#b91c22] text-white px-6 py-3 rounded-md font-medium transition-colors cursor-pointer"
          >
            Register for free webinar
            <ArrowRight className="w-4 h-4" />
          </button>

          <PopupFormModal
            showPopup={showPopup}
            setShowPopup={setShowPopup}
          />

          
        </div>
      </div>
    </section>
  )
}
