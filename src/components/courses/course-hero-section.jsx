'use client'
import { useState } from "react"
import { CheckCircle2 } from 'lucide-react'
import { PopupFormModal } from "../dandes/popup-form-modal"


export function CourseHeroSection() {

  const [showPopup, setShowPopup] = useState(false)

  const features = [
    'Live Instructor-Led Classes with Expert Mentor Support',
    'Structured Learning Roadmaps from Fundamentals to Advanced',
    'Build Real-World Projects & Hands-on Assignments',
    'Interview Preparation & Career Support',
  ]

  return (
    <section id="course-hero" className="py-9 md:py-14 relative overflow-hidden">
      
      <div className="block md:hidden">
    <img
      src="/images/courses/hero-bg-course-mobile.png"
      alt="Mobile view Hero background"
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
                Become Job-Ready with Live AI/ML, System Design & DSA Programs
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're a student, software engineer, or career switcher, our live programs help you build real projects, prepare for interviews, and become job-ready.
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
                Register For Live Demo
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
