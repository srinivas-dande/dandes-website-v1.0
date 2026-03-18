"use client"

import { ArrowRight } from "lucide-react"

export function CourseCtaSection() {
  return (
    <section className="py-5 md:py-9 px-4 relative">
      {/* Main container with mint background */}
      <div 
        className="max-w-[1200px] mx-auto rounded-2xl px-8 py-16 md:py-20 relative overflow-hidden"
        style={{ backgroundColor: '#e8f8f0' }}
      >
        {/* Decorative shape - left (chevron/parallelogram pointing right) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
          <svg width="80" height="160" viewBox="0 0 80 160" fill="none">
            <polygon points="0,30 60,80 0,130" fill="#6ee7b7" />
          </svg>
        </div>

        {/* Decorative triangle - bottom right */}
        <div className="absolute bottom-0 right-0">
          <svg width="140" height="120" viewBox="0 0 140 120" fill="none">
            <polygon points="140,120 30,120 140,20" fill="#6ee7b7" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get Syllabus, Fees, And Next Batch Details
          </h2>

          <p className="text-gray-600 mb-10 leading-relaxed">
            Choose the course you are interested in, AI/ML, System Design, or DSA, and share your goal. We will send you the syllabus, fee details, and next batch schedule on WhatsApp or email, and guide you to the right learning path.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button 
              className="bg-[#d12027] text-white px-8 py-4 rounded font-medium hover:bg-[#b81c22] transition-colors"
              style={{ minWidth: '200px' }}
            >
              Get course details
            </button>

            <button className="flex items-center gap-3 text-gray-800 font-medium hover:text-gray-600 transition-colors">
              Register for the free webinar
              <span className="bg-[#d12027] rounded-full p-2">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-sm text-gray-500 leading-relaxed">
            No spam. Your details are used only to share course information and contact you<br className="hidden sm:block" />
            about your inquiry.
          </p>
        </div>
      </div>
    </section>
  )
}
