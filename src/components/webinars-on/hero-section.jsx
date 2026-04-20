"use client"

import Link from "next/link"
import { CheckCircle2, Star } from "lucide-react"
import { RegistrationForm } from "./registration-form"


const features = [
  "Hosted live by Srinivas Dande. 20+ years experience, ex-Sun Microsystems.",
  "Free to attend. No payment. No strings.",
  "Live Q&A. Ask your specific questions, get honest answers.",
  "Walk away with a clear roadmap you can start acting on the same week.",
]

export function WebinaronHeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-140px)] overflow-hidden">
      {/* Left side - Light background */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[55%] bg-gradient-to-b from-slate-50 to-white" />
      
      {/* Right side - Background Image */}
      <div 
        className="absolute inset-y-0 right-0 w-full lg:w-[50%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-background.jpg')`,
        }}
      />
      {/* Gradient overlay to blend the background */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[50%] bg-gradient-to-r from-white via-white/50 to-transparent" />

      <div className="max-w-[1300px] 
      mx-auto px-4 lg:px-[70px] py-12 lg:py-16 relative z-10 min-h-[609px]">
        <div className="flex flex-col lg:flex-row justify-between items-start h-full">
          {/* Left Content */}
          <div className="flex-1 max-w-[600px]">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dandes-dark)] leading-tight mb-6 text-balance">
              Free Webinar: How to Transition Into AI/ML Without Starting Over
            </h1>

            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
              A live session for working tech professionals who want to move into Al and Machine Learning. Without quitting their job. Without starting from scratch. Without wasting months on the wrong resources.
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
              <Link
                href = "/courses" 
                className="bg-[var(--dandes-red)] text-white px-6 py-3 rounded font-medium hover:bg-[#b81c22] transition-colors">
                Get course details
              </Link>
              
            </div>

            {/* Industry Tag */}
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <Star className="size-5 text-amber-400 fill-amber-400 shrink-0" />
              <p>
                Industry-focused training with live learning, practical assignments, and career support.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-auto lg:shrink-0 lg:ml-8">
            <RegistrationForm />
          </div>
          
        </div>
      </div>
    </section>
  )
}
