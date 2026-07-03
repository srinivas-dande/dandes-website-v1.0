"use client"
import { CheckCircle2, Star } from "lucide-react"
import { AimlRegistrationForm } from "./sd-registration-form"


const features = [
  "Learn High-Level Design (HLD) & Low-Level Design (LLD)",
  "Solve Real-World System Design Case Studies",
  "Live Instructor-Led Classes with LMS Recordings",
  "Interview Preparation for Senior Engineering Roles",
]


export function SdHeroSection() {

  const scrollToCourses = () => {
    const courseSection = document.getElementById("courses")
    if (courseSection) {
      courseSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <section id="sd-courses" className="relative min-h-[calc(100vh-140px)] overflow-hidden">
      {/* Full Background Image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <img
          src="/images/aiml/hero-bg-aiml.png"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>

      <div className="max-w-[1300px] 
      mx-auto px-4 lg:px-[70px] py-12 lg:py-16 relative z-10 min-h-[609px]">
        <div className="flex flex-col lg:flex-row justify-between items-start h-full">
          {/* Left Content */}
          <div className="flex-1 max-w-[600px]">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dandes-dark)] leading-tight mb-6 text-balance">
              Master System Design for Modern Software Engineering Roles
            </h1>

            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
               Master the principles of scalable system design through live instructor-led classes, real-world architecture case studies, and interview-focused learning. Build the skills to design distributed systems with confidence and succeed in senior engineering interviews.
            </p>

            {/* Feature List */}
            <ul className="flex flex-col gap-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[var(--dandes-teal)] mt-0.5 shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={scrollToCourses}
                className="bg-[var(--dandes-red)] text-white px-6 py-3 rounded font-medium hover:bg-[#b81c22] transition-colors cursor-pointer"
              >
                Get System Design Course Details
              </button>

            </div>

            {/* Industry Tag */}
            
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-auto lg:shrink-0 lg:ml-8">
            <AimlRegistrationForm />
          </div>

        </div>
      </div>
    </section>
  )
}
