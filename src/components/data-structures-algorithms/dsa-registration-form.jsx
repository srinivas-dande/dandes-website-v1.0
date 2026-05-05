"use client"

import { useState } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"

export function DsaRegistrationForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "Working professional",
    currentJobRole: "",
    experience: "0 to 3",
    city: "",
    batch: "Weekend",
    goal: "Career transition to AI",
  })

  const [successMsg, setSuccessMsg] = useState("")
  const [loading, setLoading] = useState(false)

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleSubmit = async (e) => {
  e.preventDefault()
  if (loading || successMsg) return

  if (!formData.fullName || !formData.email || !formData.phone) {
    alert("Name, Email and Phone are required")
    return
  }

  if (formData.phone.length !== 10) {
    alert("Enter valid 10 digit phone number")
    return
  }
  setLoading(true)

  const params = new URLSearchParams(window.location.search)

  const payload = {
    fullName: formData.fullName,
    email: formData.email,
    phone: formData.phone,

    profileType: formData.role,
    currentJobRole: formData.currentJobRole,
    experience: formData.experience,

    goal: formData.goal,
    preferredBatch: formData.batch,
    city: formData.city,

    leadSource: "AI ML Course Landing Page",

    sourcePage : "ai_ml_course_page",
    leadType : "getCourseDetails",

    utmSource: params.get("utm_source") || "",
    utmMedium: params.get("utm_medium") || "",
    utmCampaign: params.get("utm_campaign") || "",
    utmTerm: params.get("utm_term") || "",
    utmContent: params.get("utm_content") || "",
    gclid: params.get("gclid") || "",
  }

  try {
    const res = await fetch("/api/website-leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    const data = await res.json()

    if (data.success) {
      setSuccessMsg("You are registered successfully for the webinar!")
      
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        role: "Working professional",
        currentJobRole: "",
        experience: "0 to 3",
        city: "",
        batch: "Weekend",
        goal: "Career transition to AI",
      })
    } else {
      alert(data.message || "Something went wrong")
    }
  } catch (error) {
    console.error(error)
    alert("Something went wrong. Please try again.")
  } finally {
    setLoading(false)
  }
}

  return (
    <div 
      className="bg-white p-6 lg:p-8 w-full max-w-[510px] min-h-[594px] border border-[#D8D8D8]"
      style={{
        borderRadius: '13.24px',
        boxShadow: '0 0 28.42px 0 rgba(0, 149, 255, 0.17)',
      }}
    >
      <h2 className="text-xl font-bold text-[var(--dandes-dark)] mb-2">
        Get course fee, syllabus, and next batch details
      </h2>
      <p className="text-gray-600 text-sm mb-4">
        Fill this once, and we will share course details on WhatsApp, email, or call you back.
      </p>

      {/* Progress Indicator */}
      <div className="flex gap-2 mb-6">
        <div className={`h-1 w-16 rounded-full ${step >= 1 ? "bg-[var(--dandes-red)]" : "bg-gray-200"}`} />
        <div className={`h-1 w-16 rounded-full ${step >= 2 ? "bg-[var(--dandes-red)]" : "bg-gray-200"}`} />
        <div className={`h-1 w-16 rounded-full ${step >= 3 ? "bg-[var(--dandes-red)]" : "bg-gray-200"}`} />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Step 1: */}
        {step === 1 && (
          <>

            {/* I am a - Dropdown */}
            <div>
              <label className="block text-sm font-medium text-[var(--dandes-dark)] mb-2">
                I am a
              </label>
              <div className="relative">
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-700 appearance-none focus:outline-none focus:border-[var(--dandes-red)] focus:ring-1 focus:ring-[var(--dandes-red)] bg-white"
                >
                  <option value="Working professional">Working Professional</option>
                  <option value="Student">College Student</option>
                  <option value="Job seeker">Job Seeker</option>
                  <option value="Freelancer">Freelancer</option>
                  <option value="Entrepreneur">Entrepreneur / Business Owner</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Current Job Role Field */}
            <div>
              <label className="block text-sm font-medium text-[var(--dandes-dark)] mb-2">
                Current Job Role
              </label>
              <input
                type="text"
                placeholder="Enter your current job role"
                value={formData.currentJobRole}
                onChange={(e) =>
                  setFormData({ ...formData, currentJobRole: e.target.value })
                }
                className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[var(--dandes-red)] focus:ring-1 focus:ring-[var(--dandes-red)]"
              />
            </div>

            {/* Years of experience - Pills */}
            <div>
              <label className="block text-sm font-medium text-[var(--dandes-dark)] mb-2">
                Years of experience
              </label>
              <div className="flex gap-2">
                {["0 to 3", "3 to 6", "6 to 10", "10+"].map((exp) => (
                  <button
                    key={exp}
                    type="button"
                    onClick={() => setFormData({ ...formData, experience: exp })}
                    className={`px-4 py-2 rounded border text-sm font-medium transition-colors ${
                      formData.experience === exp
                        ? "border-[var(--dandes-red)] text-[var(--dandes-red)] bg-red-50"
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                    }`}
                  >
                    {exp}
                  </button>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="bg-[var(--dandes-red)] text-white py-3 px-6 rounded font-medium flex items-center justify-center gap-2 hover:bg-[#b81c22] transition-colors mt-2 cursor-pointer"
            >
              Register for FREE AI/ML Webinar
              <ArrowRight className="size-4" />
            </button>
          </>
        )}

        {/* Step 2: */}
        {step === 2 && (
          <>


            {/* Your goal - Dropdown */}
            <div>
              <label className="block text-sm font-medium text-[var(--dandes-dark)] mb-2">
                Your goal
              </label>
              <div className="relative">
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-700 appearance-none focus:outline-none focus:border-[var(--dandes-red)] focus:ring-1 focus:ring-[var(--dandes-red)] bg-white"
                >
                  <option value="Career transition to AI">Career Transition to AI/ML</option>
                  <option value="Upskill in current role">Upskill in Current Role</option>
                  <option value="Interview preparation">Interview Preparation</option>
                  <option value="Learn for placements">Explore AI/ML</option>
                  <option value="Learn for placements">Build AI/ML Projects</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
              </div>
            </div>


            {/* Preferred batch - Pills */}
            <div>
              <label className="block text-sm font-medium text-[var(--dandes-dark)] mb-2">
                Preferred batch
              </label>
              <div className="flex gap-2">
                {["Weekend", "Weekday Morning", "Weekday Evening"].map((batch) => (
                  <button
                    key={batch}
                    type="button"
                    onClick={() => setFormData({ ...formData, batch })}
                    className={`px-4 py-2 rounded border text-sm font-medium transition-colors ${
                      formData.batch === batch
                        ? "border-[var(--dandes-red)] text-[var(--dandes-red)] bg-red-50"
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                    }`}
                  >
                    {batch}
                  </button>
                ))}
              </div>
            </div>


            <div>
              <label className="block text-sm font-medium text-[var(--dandes-dark)] mb-2">
                City
              </label>
              <input
                type="text"
                placeholder="Enter your current City"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[var(--dandes-red)] focus:ring-1 focus:ring-[var(--dandes-red)]"
              />
            </div>
            
            
            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="bg-[var(--dandes-red)] text-white py-3 px-6 rounded font-medium flex items-center justify-center gap-2 hover:bg-[#b81c22] transition-colors mt-2"
            >
              Register for FREE AI/ML Webinar
              <ArrowRight className="size-4" />
            </button>
          </>
        )}

        {/* Step 3: */}
        {step === 3 && (
          <>
          
            <div>
              <label className="block text-sm font-medium text-[var(--dandes-dark)] mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[var(--dandes-red)] focus:ring-1 focus:ring-[var(--dandes-red)]"
              />
            </div>

            
            <div>
              <label className="block text-sm font-medium text-[var(--dandes-dark)] mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[var(--dandes-red)] focus:ring-1 focus:ring-[var(--dandes-red)]"
              />
            </div>

            
            <div>
              <label className="block text-sm font-medium text-[var(--dandes-dark)] mb-2">
                WhatsApp no.
              </label>
              <input
                type="tel"
                placeholder="Enter 10 digit phone number"
                value={formData.phone}
                onChange={(e) => {
                  const onlyNums = e.target.value.replace(/\D/g, "")
                  if (onlyNums.length <= 10) {
                    setFormData({ ...formData, phone: onlyNums })
                  }
                }}
                className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[var(--dandes-red)] focus:ring-1 focus:ring-[var(--dandes-red)]"
              />
            </div>

            {successMsg && (
              <div
                className="mb-4 p-4 rounded-lg border border-green-300 bg-green-50 text-sm font-semibold text-center"
                style={{ color: "#16813d" }}
              >
                ✓ {successMsg}
              </div>
            )}


            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !!successMsg}
              className={`bg-[var(--dandes-red)] text-white py-3 px-6 rounded font-medium flex items-center justify-center gap-2 hover:bg-[#b81c22] transition-colors mt-2
              ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
            >
              {loading ? "Submitting..." : "Send me details"}
              <ArrowRight className="size-4" />
            </button>

            {/* Disclaimer */}
            <p className="text-xs text-gray-500">
              *By submitting, you agree to be contacted via Email, WhatsApp, or Phone.
            </p>
            <p className="text-xs text-gray-400 text-center">
              We keep your details private, and we do not spam.
            </p>
          </>
        )}
      </form>
    </div>
  )
}
