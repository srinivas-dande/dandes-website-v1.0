'use client'
import { useState } from "react"
import { CheckCircle2 } from 'lucide-react'
import { TechStackDiagram } from './tech-stack-diagram'
import { PopupFormModal } from "../dandes/popup-form-modal"


export function CourseHeroSection() {

  const [showPopup, setShowPopup] = useState(false)

  const features = [
    'Live online classes with LMS recordings.',
    'Structured roadmaps, not random videos.',
    'Projects and practice for real interviews.',
    'Built for working professionals and students.',
  ]

  return (
    <section className="py-9 md:py-14 relative overflow-hidden">
      <div className="block md:hidden">
    <img
      src="/images/courses/hero-bg-course-mobile.png"
      alt=""
      className="w-full h-auto object-cover"
    />
  </div>

  {/* ✅ Desktop Background Image */}
  <div className="hidden md:block absolute inset-0 z-0">
    <img
      src="/images/courses/hero-bg-course.png"
      alt=""
      className="w-full h-full object-cover object-center"
    />
  </div>


      <div className="max-w-7xl mx-auto px-4 lg:px-[70px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-4xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-6">
                Build Skills You Can Prove, AI/ML, System Design, and DSA Courses
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Choose your learning path with live instructor-led classes, structured practice, and interview preparation. Get the syllabus, fees, and next batch schedule in one inquiry.
              </p>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => setShowPopup(true)}
                className="bg-[#d12027] text-white px-8 py-3 rounded font-medium hover:bg-[#b81c22] transition-colors cursor-pointer"
              >
                Register for the free webinar
              </button>

            </div>
          </div>

          
        </div>
      </div>
      <PopupFormModal
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
    </section>
  )
}
