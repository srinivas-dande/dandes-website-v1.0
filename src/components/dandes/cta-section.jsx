"use client"

import { useState } from "react"
import { ArrowRight, X } from "lucide-react"
import { RegistrationForm } from "./registration-form"
import Link from "next/link"

export function CTASection() {

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
            Ready to Take the Next Step?
          </h2>

          <p className="text-gray-600 mb-8">
            Choose Your Program and Get the Complete Details
          </p>

          <p className="text-gray-600 mb-8">
            Tell us which program you're interested in, and we'll share the complete curriculum, course fee, upcoming batch schedule, and learning roadmap. If you're unsure which program is right for you, our team will help you choose based on your background and career goals.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link 
              href="/courses"
              className="bg-[#d12027] text-white px-8 py-3 rounded font-medium hover:bg-[#b81c22] transition-colors"
            >
              Get course details
            </Link>

            <button 
              onClick={() => setShowPopup(true)}
              className="flex items-center gap-3 border border-gray-300 bg-white px-6 py-3 rounded font-medium hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Register for the Free Live Demo
              <span className="w-8 h-8 bg-[#d12027] rounded-full flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </button>

          </div>

          

          <p className="text-sm text-gray-500">
            Live Instructor-Led Classes • 5-Year LMS Access • No Spam — We'll only contact you regarding your enquiry.
          </p>
        </div>


      </div>
        {showPopup && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
            onClick={() => setShowPopup(false)}
          >
            <div
              className="relative max-h-[90vh] overflow-y-auto rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow"
              >
                <X className="w-4 h-4" />
              </button>

              <RegistrationForm />
            </div>
          </div>
        )}
    </section>
  )
}
