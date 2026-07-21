"use client"

import { useState } from "react"
import { ArrowRight, X } from "lucide-react"
import { SdPopupFormModal } from "@/components/system-design-course/sd-popup-form-modal"

export function SdCTASection() {

  const scrollToCourses = () => {
  const courseSection = document.getElementById("courses")
    if (courseSection) {
      courseSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      }) 
    }
  }
 

  const [showPopup, setShowPopup] = useState(false)

  return (
    <section className="py-16 md:py-24 bg-[#FAEDFF] relative overflow-hidden">
      {/* Decorative triangles */}
      <svg
        className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-48 text-purple-300 opacity-60"
        viewBox="0 0 100 200"
        fill="currentColor"
      >
        <polygon points="0,0 100,100 0,200" />
      </svg>
      <svg
        className="absolute right-0 top-1/3 w-32 h-64 text-purple-300 opacity-60"
        viewBox="0 0 100 200"
        fill="currentColor"
      >
        <polygon points="100,0 0,100 100,200" />
      </svg>
      <svg
        className="absolute right-20 bottom-10 w-16 h-32 text-purple-200 opacity-40"
        viewBox="0 0 100 200"
        fill="currentColor"
      >
        <polygon points="100,0 0,100 100,200" />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Master System Design?
          </h2>

          <p className="text-gray-600 mb-8">
            Take the next step toward becoming a stronger software engineer. Learn High-Level Design (HLD), Low-Level Design (LLD), and real-world system design through live instructor-led classes, practical case studies, and interview-focused learning.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <button 
               
              onClick={scrollToCourses}
              className="bg-[#d12027] text-white px-8 py-3 rounded font-medium hover:bg-[#b81c22] transition-colors cursor-pointer"
            >
              Get System Design Course Details
            </button>

            <button 
              onClick={() => setShowPopup(true)}             
              className="flex items-center gap-3 border border-gray-300 bg-white px-6 py-3 rounded font-medium hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Register For Live Demo
              <span className="w-8 h-8 bg-[#d12027] rounded-full flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </button>

          </div>

          

          <p className="text-sm text-gray-500">
            Live instructor-led classes • LMS recordings • Interview preparation • Career support
          </p>
        </div>


      </div>
        <SdPopupFormModal
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />

    </section>
  )
}
