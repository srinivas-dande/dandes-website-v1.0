"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "The program helped me move from understanding concepts in notebooks to confidently building real machine learning solutions. The structured teaching and hands-on projects made complex topics much easier to grasp.",
    name: "Rahul Mehta",
    role: "Senior Software Engineer",
  },
  {
    id: 2,
    quote: "What sets Dandes Academy apart is the focus on real interviews. The mock sessions and resume support were game-changers for my career transition into AI.",
    name: "Priya Sharma",
    role: "ML Engineer at Tech Corp",
  },
  {
    id: 3,
    quote: "The System Design course gave me clarity on how to approach complex architecture problems. I cleared interviews at multiple FAANG companies after completing the program.",
    name: "Amit Kumar",
    role: "Senior Engineer at Google",
  },
  {
    id: 4,
    quote: "As a working professional, the flexibility of recordings combined with live doubt sessions made it possible for me to upskill without affecting my job.",
    name: "Sneha Reddy",
    role: "Tech Lead at Startup",
  },
]

export function DsaTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="text-[#d12027]">thousands of learners</span>, here is what they share
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Choosing the right AI and Machine Learning course takes more than reading a curriculum. You want proof that learners understood the concepts, completed projects, remained consistent, and felt confident during interviews. Here are reviews from learners from diverse backgrounds, working professionals, and placement-focused students.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#d12027] text-white rounded flex items-center justify-center hover:bg-[#b81c22] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#d12027] text-white rounded flex items-center justify-center hover:bg-[#b81c22] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Card */}
          <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Quote */}
              <div className="flex-1">
                <blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                <div className="mb-6">
                  <p className="font-semibold text-foreground">~ {current.name}</p>
                  <p className="text-gray-500 text-sm">{current.role}</p>
                </div>

                {/* Pagination dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-1.5 rounded-full transition-all ${
                        index === currentIndex ? "w-8 bg-blue-600" : "w-4 bg-gray-300"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Video Placeholder */}
              <div className="w-full md:w-80 h-64 md:h-80 relative rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Video Placeholder</span>
                <button className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group">
                  <span className="flex items-center gap-2 bg-black/50 text-white px-4 py-2 rounded-lg">
                    <Play className="w-5 h-5" fill="white" />
                    Play
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
