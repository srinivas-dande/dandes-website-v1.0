"use client"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link";

const credentials = [
  "20+ years teaching engineers.",
  "Clear from basics to advanced.",
  "Practical learning, no shortcuts.",
  "Links concepts to interviews and real work.",
  "Trusted legacy from JLC.",
]

export function InstructorSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, #d1d5db 1px, transparent 1px), linear-gradient(to bottom, #d1d5db 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left - Photo */}
          <div className="relative">
            {/* Decorative stars */}
            <svg className="absolute -top-8 left-12 w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg className="absolute top-20 -left-4 w-3 h-3 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg className="absolute -bottom-4 left-8 w-3 h-3 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg className="absolute top-4 right-0 w-3 h-3 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>

            
            <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-2 border-blue-400 border-dashed flex items-center justify-center">
              
              <div className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-[#d12027] p-2 flex items-center justify-center">
                
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/srinivas.png"
                    alt="Instructor"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex-1 max-w-xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-purple-700 rounded-sm" />
              Meet Your Instructor
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Srinivas Dande
            </h2>

            <p className="text-lg font-semibold text-foreground mb-4">
              Founder & Lead Instructor — <span className="text-[#d12027]">Dandes Academy</span>
            </p>

            <p className="text-gray-600 mb-6">
              Courses at Dandes Academy are led by Srinivas Dande, Founder and Instructor, known for clear explanations, strong fundamentals, and practical, interview-focused teaching.
            </p>

            <ul className="space-y-3 mb-8">
              {credentials.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-[#d12027] text-white px-6 py-3 rounded font-medium flex items-center gap-2 hover:bg-[#b81c22] transition-colors">
                Register for free webinar
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://www.youtube.com/@DandesAcademy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground font-medium hover:text-[#d12027] transition-colors"
              >
                <svg className="w-6 h-6 text-[#d12027]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
                </svg>
                  Watch On YouTube
              </a>

              {/* LinkedIn icon */}
              <a href="https://www.linkedin.com/in/srinivasdande/" className="w-10 h-10 border border-blue-600 rounded flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
