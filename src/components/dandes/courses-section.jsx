"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PopupFormModal } from "./popup-form-modal"

const courses = [
  {
    id: 1,
    image: "/icons/ai-course.png",
    title: "AI and Machine Learning Course",
    description:
      "A structured program to build strong foundations and real project skills in Machine Learning, Deep Learning, NLP, and modern GenAI workflows. Designed for learners who want clarity, depth, and interview readiness.",
    highlights: ["Live classes", "Structured curriculum", "Hands-on projects", "Interview preparation."],
    highlightColor: "bg-cyan-50 text-cyan-700",
    ctaText: "View AI/ML course",
    url: "/ai-machine-learning-course",
  },
  {
    id: 2,
    image: "/icons/system-design.png",
    title: "System Design Course",
    description:
      "Learn how to design scalable systems the way real teams build them. This course focuses on core concepts, practical architectures, trade-offs, and interview-ready system design thinking.",
    highlights: ["Foundations", "Real case studies", "Design patterns", "Interview practice"],
    highlightColor: "bg-red-50 text-red-600",
    ctaText: "View System Design course",
    url: "/courses/ai-ml",
  },
  {
    id: 3,
    image: "/icons/dsa.png",
    title: "Data Structure & Algorithm",
    description:
      "Build strong problem solving skills through structured learning, practice, and pattern recognition, strengthening your core computer science fundamentals.",
    highlights: ["Core DSA", "Pattern recognition", "Interview focused prep"],
    highlightColor: "bg-emerald-50 text-emerald-700",
    ctaText: "View DSA course",
    url: "/courses/ai-ml",
  },
]

function CourseCard({ course }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <Image
          src={course.image}
          alt={course.title}
          width={48}
          height={48}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-bold text-foreground">{course.title}</h3>

      {/* Description */}
      <p className="mb-4 flex-grow text-sm text-muted-foreground leading-relaxed">
        {course.description}
      </p>

      {/* Course Highlights */}
      <div className="mb-6">
        <p className="mb-3 text-sm font-semibold text-foreground">Course highlights</p>
        <div className="flex flex-wrap gap-2">
          {course.highlights.map((highlight) => (
            <span
              key={highlight}
              className={`rounded-md px-3 py-1 text-xs font-medium ${course.highlightColor}`}
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Link 
        href={course.url}
        className="inline-flex w-fit items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-gray-50"
      >
        {course.ctaText}
        <span className="flex h-6 w-6 items-center justify-center rounded bg-[#dc2626] text-white">
          <ChevronRight className="h-4 w-4" />
        </span>
      </Link>
    </article>
  )
}

export function CoursesSection() {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1)
      setIsTransitioning(true)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPaused])

  useEffect(() => {
    if (currentIndex === courses.length) {
      setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(0)
      }, 700)
    }
  }, [currentIndex])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? courses.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === courses.length - 1 ? 0 : prev + 1))
  }

  return (
    <section 
      id="courses-section"
      className="bg-white py-6 px-4 md:py-9"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Courses that build{" "}
            <span className="text-[#dc2626]">skills</span>,{" "}
            <span className="text-[#dc2626]">projects</span>, and{" "}
            <span className="text-[#dc2626]">interview readiness</span>{" "}
            not just completion
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Pick the program that matches your goal, career transition,
            interview preparation, or stronger fundamentals.
          </p>
        </div>

        {/* Course Cards */}
        <div className="relative">
          {/* Desktop View - Show all cards */}
          <div className="hidden gap-6 lg:grid lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* Mobile/Tablet View - Carousel */}
          <div className="lg:hidden">
            <div
              className="overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              <div
                className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {[...courses, courses[0]].map((course, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dc2626] text-white transition-colors hover:bg-[#b91c1c]"
            aria-label="Previous course"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dc2626] text-white transition-colors hover:bg-[#b91c1c]"
            aria-label="Next course"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <button 
            onClick={() => setShowPopup(true)}
            className="inline-flex items-center gap-2 rounded-md bg-[#dc2626] px-6 py-3 font-medium text-white transition-colors hover:bg-[#b91c1c] cursor-pointer"
          >
            Register for free webinar
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <PopupFormModal
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />

      </div>
    </section>
  )
}
