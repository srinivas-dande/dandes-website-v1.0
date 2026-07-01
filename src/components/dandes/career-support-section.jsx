"use client"

import { CheckCircle2, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const supportItems = [
  "Resume Review & Optimization",
  "LinkedIn Profile Optimization",
  "Mock Interviews with Expert Feedback",
  "Project Presentation & Interview Guidance",
  "Career Guidance & Job Search Support",
]

export function CareerSupportSection() {
  return (
    <section className="py-9 md:py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/team-collaboration.jpg"
                alt="Team collaboration - professionals reviewing documents together"
                width={500}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Build Skills. Build Your Profile.{" "}
              <span className="text-[#d12027]">Crack Interviews</span>
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Learning is only part of the journey. We help you present your skills with a strong resume, optimized LinkedIn profile, mock interviews, and project guidance so you're better prepared for real hiring processes.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              You'll Receive Support With:
            </h3>

            <ul className="space-y-3 mb-8">
              {supportItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/courses" 
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Get course details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
