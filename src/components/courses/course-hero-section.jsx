'use client'

import { CheckCircle2, ArrowRight } from 'lucide-react'
import { TechStackDiagram } from './tech-stack-diagram'

export function CourseHeroSection() {
  const features = [
    'Live online classes with LMS recordings.',
    'Structured roadmaps, not random videos.',
    'Projects and practice for real interviews.',
    'Built for working professionals and students.',
  ]

  return (
    <section className="py-9 md:py-14 bg-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 lg:px-[70px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight mb-6">
                Build Skills You Can Prove, AI/ML, System Design, and DSA Courses
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Choose your learning path with live instructor-led classes, structured practice, and interview preparation. Get the syllabus, fees, and next batch schedule in one inquiry.
              </p>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-[#d12027] text-white px-8 py-3 rounded font-medium hover:bg-[#b81c22] transition-colors">
                Get course details
              </button>
              <button className="flex items-center gap-2 text-gray-800 font-medium hover:text-[#d12027] transition-colors">
                Register for the free webinar
                <span className="bg-[#d12027] text-white rounded-full p-1.5">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>

          {/* Right - Tech Stack Diagram */}
          <div className="flex justify-center items-center">
            <TechStackDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}
