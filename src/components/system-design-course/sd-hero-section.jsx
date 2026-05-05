"use client"
import { CheckCircle2, Star } from "lucide-react"
import { AimlRegistrationForm } from "./sd-registration-form"


const features = [
  "Real-world system design case studies and breakdowns",
  "Live classes with LMS recordings and doubt support",
  "Step-by-step approach from fundamentals to advanced thinking",
  "Interview-focused system design preparation",
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
    <section className="relative min-h-[calc(100vh-140px)] overflow-hidden">
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
              Learn System Design with Live Online Classes
            </h1>

            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
              A structured program to help you move from writing code to designing scalable systems. Learn how real-world architectures work, how to break down complex systems, and how to approach system design interviews with clarity.
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
                Get course details
              </button>

            </div>

            {/* Industry Tag */}
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <Star className="size-5 text-amber-400 fill-amber-400 shrink-0" />
              <p>
                5-year LMS access, batch switching, and a 30-day refund policy, as per terms.
              </p>
            </div>
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
