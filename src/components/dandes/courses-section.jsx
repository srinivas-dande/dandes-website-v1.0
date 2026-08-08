"use client"
import { useState } from "react"
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
      "Master AI & Machine Learning from fundamentals to advanced topics, including Deep Learning, Generative AI, Agentic AI, and MLOps through live classes, real projects, and interview-focused learning.",
    highlights: ["Live Instructor-Led Classes", "Structured Roadmap", "Real Industry Projects", "Interview Preparation"],
    highlightColor: "bg-cyan-50 text-cyan-700",
    ctaText: "View AI/ML course",
    url: "/courses/ai-machine-learning-course",
  },
  {
    id: 2,
    image: "/icons/ai-course.png",
    title: "Applied AI Engineering Course",
    description:
      "Master Applied AI Engineering from fundamentals to advanced topics, including Deep Learning, Generative AI, Agentic AI, and MLOps through live classes, real projects, and interview-focused learning.",
    highlights: ["Live Instructor-Led Classes", "Structured Roadmap", "Real Industry Projects", "Interview Preparation"],
    highlightColor: "bg-cyan-50 text-cyan-700",
    ctaText: "View Applied AI course",
    url: "/courses/applied-ai-engineering-course",
  },
  {
    id: 3,
    image: "/icons/system-design.png",
    title: "System Design Course",
    description:
      "Master scalable system design through real-world architectures, design patterns, trade-offs, and case studies used in technical interviews and modern software engineering.",
    highlights: ["High-Level Design", "Low-Level Design", "Scalable Systems", "System Design Problems"],
    highlightColor: "bg-red-50 text-red-600",
    ctaText: "View System Design course",
    url: "/courses/system-design-course",
  },
  {
    id: 4,
    image: "/icons/dsa.png",
    title: "DSA Course",
    description:
      "Strengthen your problem-solving skills through structured learning, coding practice, algorithms, and interview-focused preparation for top product companies.",
    highlights: ["Core DSA", "Advanced DSA", "Coding Practice", "Problem Solving"],
    highlightColor: "bg-emerald-50 text-emerald-700",
    ctaText: "View DSA course",
    url: "/courses/dsa-course",
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
  const [showPopup, setShowPopup] = useState(false)


  const handlePrev = () => {
  setCurrentIndex((prev) => {
    if (prev === 0) {
      return courses.length - 3
    }

    return prev - 1
  })
}

const handleNext = () => {
  setCurrentIndex((prev) => {
    const maxIndex = courses.length - 3

    if (prev >= maxIndex) {
      return 0
    }

    return prev + 1
  })
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
            Each Course follows a structured roadmap with live classes, hands-on projects, 
            and interview preparation to help you achieve your career goals.
          </p>
        </div>

        {/* Course Cards */}
        {/* Course Cards */}
<div
  className="overflow-hidden"
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
  onTouchStart={() => setIsPaused(true)}
  onTouchEnd={() => setIsPaused(false)}
>
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateX(-${
        currentIndex * (100 / 3)
      }%)`,
    }}
  >
    {courses.map((course) => (
      <div
        key={course.id}
        className="
          w-full
          flex-shrink-0
          px-2
          md:w-1/2
          lg:w-1/3
        "
      >
        <CourseCard course={course} />
      </div>
    ))}
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
            Register For Live Demo
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
