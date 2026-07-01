"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "This course gave me a complete roadmap. I am now confident about my transition into AI/ML. Dande Sir explains every concept with so much clarity and patience. This course gave me real confidence to move into AI/M",
    name: "Anek Kumar Singh",
    role: "Software Development Engineer III",
    company: "JPMorgan Chase, Bangalore",
    videoId: "0tRrs7UXPSE",


  },
  {
    id: 2,
    quote: "The biggest value for me was clarity. Instead of jumping between random resources, I had a step-by-step learning path and continuous mentor support.",
    name: "Sasi Kumar",
    role: "Principal Engineer",
    company: "Akshaya Inc, USA",
    videoId: "HByraJiYzcE",
  },
  {
    id: 3,
    quote: "What I liked most was the practical approach. The assignments, mini projects, and capstone project helped me gain real confidence in applying AI/ML concepts.",
    name: "Rupesh Kumar",
    role: "Solution Architect",
    company: "Worldline Global Services, Bangalore",
    videoId: "rZmuHjNfEFE",
  },
  {
    id: 4,
    quote: "Dande Sir has a unique way of simplifying complex topics. Even difficult concepts in Machine Learning and Deep Learning became easy to understand.",
    name: "Rajkeshwar Prasad",
    role: "Tech Lead",
    company: "HCL Tech, Germany",
    videoId: "M3xQPBnX5QI",
  },
]

export function TestimonialsSection() {
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
            Hear from <span className="text-[#d12027]">Learners Who Started Their AI</span> Journey with Dandes Academy
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Choosing the right AI & Machine Learning program takes more than reading a curriculum. You want to know if learners understand the concepts, build real projects, stay consistent, and enjoy the learning experience. Hear from engineers, working professionals, and students who have started their AI journey with Dandes Academy.
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
                  <p className="text-sm text-gray-500">{current.company}</p>
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

              {/* YouTube Video */}
              <div className="w-full md:w-80 h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${current.videoId}`}
                  title={current.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
