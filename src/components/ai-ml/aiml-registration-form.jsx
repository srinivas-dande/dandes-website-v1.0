"use client"

import { useState } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useRouter } from 'next/navigation'
import { isValidPhoneNumber } from "libphonenumber-js"
import { getLeadSource } from "@/lib/lead-source";


const countries = [
  { code: "IN", dial: "+91" },
  { code: "US", dial: "+1" },
  { code: "CA", dial: "+1" },
  { code: "GB", dial: "+44" },
  { code: "AU", dial: "+61" },
  { code: "AE", dial: "+971" },
  { code: "SG", dial: "+65" },
  { code: "DE", dial: "+49" },
  { code: "FR", dial: "+33" },
  { code: "NL", dial: "+31" },
  { code: "IE", dial: "+353" },
  { code: "NZ", dial: "+64" },
  { code: "SA", dial: "+966" },
  { code: "QA", dial: "+974" },
  { code: "KW", dial: "+965" },
  { code: "OM", dial: "+968" },
  { code: "BH", dial: "+973" },
  { code: "ZA", dial: "+27" },
  { code: "MY", dial: "+60" },
  { code: "JP", dial: "+81" },
];


export function AimlRegistrationForm() {
  const [errors, setErrors] = useState({})
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    currentJobRole: "",
    experience: "",
    city: "",
    batch: "",
    goal: "",
  })

  const [successMsg, setSuccessMsg] = useState("")
  const [loading, setLoading] = useState(false)
  const [countryCode, setCountryCode] = useState("+91")
  const [phoneError, setPhoneError] = useState("")
  const router = useRouter()


  const handleNext = () => {
    const fullPhone = `${countryCode}${formData.phone}`

   if (step === 1) {
    const newErrors = {}

if (!formData.fullName.trim()) {
  newErrors.fullName = "Please enter your name"
}

if (!formData.email.trim()) {
  newErrors.email = "Please enter your email"
}

if (!formData.phone.trim()) {
  newErrors.phone = "Please enter your phone number"
} else if (!isValidPhoneNumber(fullPhone)) {
  newErrors.phone = "Please enter a valid phone number"
}

if (Object.keys(newErrors).length > 0) {
  setErrors(newErrors)
  return
}

setErrors({})
  }

  if (step === 2) {
  const newErrors = {}

  if (!formData.role) {
    newErrors.role = "Please select your profile"
  }

  if (!formData.currentJobRole.trim()) {
    newErrors.currentJobRole = isStudentOrJobSeeker
      ? "Please select qualification"
      : "Please enter current job role"
  }

  if (!formData.experience) {
    newErrors.experience = isStudentOrJobSeeker
      ? "Please select passout year"
      : "Please select years of experience"
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors)
    return
  }

  setErrors({})
}

  setStep((prev) => prev + 1)
}

  const handleSubmit = async (e) => {
  e.preventDefault()
  if (loading || successMsg) return

  const newErrors = {}

if (!formData.goal) {
  newErrors.goal = "Please select your goal"
}

if (!formData.batch) {
  newErrors.batch = "Please select your preferred batch"
}

if (!formData.city.trim()) {
  newErrors.city = "Please enter your city"
}

if (Object.keys(newErrors).length > 0) {
  setErrors((prev) => ({
    ...prev,
    ...newErrors,
  }))
  return
}
  

  if (!formData.fullName || !formData.email || !formData.phone) {
    alert("Name, Email and Phone are required")
    return
  }

  const fullPhone = `${countryCode}${formData.phone}`

if (!isValidPhoneNumber(fullPhone)) {
  alert("Enter a valid phone number")
  return
}
  setLoading(true)

  const params = new URLSearchParams(window.location.search)
  const { leadSource, leadSubSource } = getLeadSource();


  const payload = {
  fullName: formData.fullName,
  email: formData.email,
  phone: `${countryCode}${formData.phone}`,

  candidateType: formData.role,
  currentJobRole: formData.currentJobRole,
  experienceRange: formData.experience,

  qualification:
    isStudentOrJobSeeker
      ? formData.currentJobRole
      : null,

  yearOfPassout:
    isStudentOrJobSeeker
      ? formData.experience
      : null,

  careerGoal: formData.goal,
  preferredBatch: formData.batch,
  city: formData.city,

  leadSource,
  leadSubSource,

  pageUrl: window.location.href,
  courseInterested: "AI & Machine Learning Course",
};

  try {
    const res = await fetch("/api/da-demo-leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    const data = await res.json()

    if (data.success) {
      setSuccessMsg("You are registered successfully for the webinar!")
      setCountryCode("+91")
      
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        role: "Working professional",
        currentJobRole: "",
        experience: "0 to 3",
        city: "",
        batch: "",
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
  router.push('/thank-you')
}
  const isStudentOrJobSeeker =
  formData.role === "Student" || formData.role === "Job seeker"

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
          
            <div>
              <label className="block text-sm font-medium text-[var(--dandes-dark)] mb-2">
                Full Name
              </label>
              <input
                required
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[var(--dandes-red)] focus:ring-1 focus:ring-[var(--dandes-red)]"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.fullName}
                </p>
              )}
            </div>

            
            <div>
              <label className="block text-sm font-medium text-[var(--dandes-dark)] mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[var(--dandes-red)] focus:ring-1 focus:ring-[var(--dandes-red)]"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            
            <div>
              <label className="block text-sm font-medium text-[var(--dandes-dark)] mb-2">
                Phone No.
              </label>
              <div className="flex gap-2 w-full">
  <select
    value={countryCode}
    onChange={(e) => setCountryCode(e.target.value)}
    className="w-[110px] shrink-0 border border-gray-200 rounded px-2 py-2.5 bg-white text-sm"
  >
    {countries.map((country) => (
      <option key={country.code} value={country.dial}>
        {country.code} {country.dial}
      </option>
    ))}
  </select>

  <input
    type="tel"
    placeholder="Phone Number"
    value={formData.phone}
    onChange={(e) => {
      setPhoneError("")
      setFormData({
        ...formData,
        phone: e.target.value.replace(/\D/g, ""),
      })
    }}
    className="min-w-0 flex-1 border border-gray-200 rounded px-3 py-2.5 text-sm"
  />
  
</div>

{errors.phone && (
    <p className="text-red-500 text-xs mt-1">
      {errors.phone}
    </p>
  )}


            </div>

            


            {/* Submit Button */}
            <button
  type="button"
  onClick={handleNext}
  className="bg-[var(--dandes-red)] text-white py-3 px-6 rounded font-medium flex items-center justify-center gap-2 hover:bg-[#b81c22] transition-colors mt-2 cursor-pointer"
>
  Get Course Details
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
        
        

        {/* Step 2: */}

        {step === 2 && (
          <>

            {/* I am a - Dropdown */}
            <div>
              <label className="block text-sm font-medium text-[var(--dandes-dark)] mb-2">
                I am a
              </label>
              <div className="relative">
                <select
                  value={formData.role}
                  onChange={(e) => {
  setFormData({
    ...formData,
    role: e.target.value,
  })

  setErrors((prev) => ({
    ...prev,
    role: "",
  }))
}}
                  className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-700 appearance-none focus:outline-none focus:border-[var(--dandes-red)] focus:ring-1 focus:ring-[var(--dandes-red)] bg-white"
                >
                  <option value="">--- Select ---</option>
                  <option value="Working professional">Working Professional</option>
                  <option value="Student">College Student</option>
                  <option value="Job seeker">Job Seeker</option>
                  <option value="Freelancer">Freelancer</option>
                  <option value="Entrepreneur">Entrepreneur / Business Owner</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
            {errors.role && (
              <p className="text-red-500 text-xs mt-1">
                {errors.role}
              </p>
            )}

            {/* Current Job Role Field */}
            <div>
  <label className="block text-sm font-medium text-[var(--dandes-dark)] mb-2">
    {isStudentOrJobSeeker ? "Qualification" : "Current Job Role"}
  </label>

  {isStudentOrJobSeeker ? (
    <div className="relative">
      <select
        value={formData.currentJobRole}
        onChange={(e) => {
  setFormData({
    ...formData,
    currentJobRole: e.target.value,
  })

  setErrors((prev) => ({
    ...prev,
    currentJobRole: "",
  }))
}}
        className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-700 appearance-none bg-white"
      >
        <option value="">--- Select Qualification ---</option>
        <option value="B.Tech">B.Tech</option>
        <option value="BE">BE</option>
        <option value="BCA">BCA</option>
        <option value="MCA">MCA</option>
        <option value="BSc">B.Sc</option>
        <option value="MSc">M.Sc</option>
        <option value="B.Com">B.Com</option>
        <option value="M.Com">M.Com</option>
        <option value="BA">BA</option>
        <option value="MA">MA</option>
        <option value="Diploma">Diploma</option>
        <option value="ITI">ITI</option>
        <option value="MBA">MBA</option>
        <option value="Engineering">Engineering</option>
        <option value="Other">Other</option>
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
    </div>
  ) : (
    <input
      type="text"
      placeholder="Enter your current job role"
      value={formData.currentJobRole}
      onChange={(e) => {
  setFormData({
    ...formData,
    currentJobRole: e.target.value,
  })

  setErrors((prev) => ({
    ...prev,
    currentJobRole: "",
  }))
}}
      className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm"
    />
  )}
  {errors.currentJobRole && (
  <p className="text-red-500 text-xs mt-1">
    {errors.currentJobRole}
  </p>
)}
</div>

            {/* Years of experience - Pills */}
            
            <div>
  <label className="block text-sm font-medium text-[var(--dandes-dark)] mb-2">
    {isStudentOrJobSeeker ? "Year of Passed Out" : "Years of Experience"}
  </label>

  {isStudentOrJobSeeker ? (
    <div className="relative">
      <select
        value={formData.experience}
        onChange={(e) => {
  setFormData({
    ...formData,
    experience: e.target.value,
  })

  setErrors((prev) => ({
    ...prev,
    experience: "",
  }))
}}
        className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-700 appearance-none bg-white"
      >
        <option value="">--- Select Passout Year ---</option>
        <option value="2028">2028</option>
        <option value="2027">2027</option>
        <option value="2026">2026</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="Before 2021">Before 2021</option>
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
    </div>
  ) : (
    <div className="flex gap-2 flex-wrap">
      {["0 to 3", "3 to 6", "6 to 10", "10 to 15", "15+"].map((value) => (
        <button
          key={value}
          type="button"
          onClick={() => {
  setFormData({
    ...formData,
    experience: value,
  })

  setErrors((prev) => ({
    ...prev,
    experience: "",
  }))
}}
          className={`px-4 py-2 rounded border text-sm font-medium ${
            formData.experience === value
              ? "border-[var(--dandes-red)] text-[var(--dandes-red)] bg-red-50"
              : "border-gray-200 text-gray-600"
          }`}
        >
          {value}
        </button>
      ))}
    </div>
  )}
  {errors.experience && (
  <p className="text-red-500 text-xs mt-1">
    {errors.experience}
  </p>
)}
</div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="bg-[var(--dandes-red)] text-white py-3 px-6 rounded font-medium flex items-center justify-center gap-2 hover:bg-[#b81c22] transition-colors mt-2 cursor-pointer"
            >
              Continue
              <ArrowRight className="size-4" />
            </button>
          </>
        )}

        {/* Step 3: */}
        {step === 3 && (
          <>


            {/* Your goal - Dropdown */}
            <div>
              <label className="block text-sm font-medium text-[var(--dandes-dark)] mb-2">
                Your goal
              </label>
              <div className="relative">
                <select
                  value={formData.goal}
                  onChange={(e) => {
  setFormData({
    ...formData,
    goal: e.target.value,
  })

  setErrors((prev) => ({
    ...prev,
    goal: "",
  }))
}}
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
              {errors.goal && (
  <p className="text-red-500 text-xs mt-1">
    {errors.goal}
  </p>
)}
            </div>


            {/* Preferred batch - Pills */}
            <div>
              <label className="block text-sm font-medium text-[var(--dandes-dark)] mb-2">
                Preferred batch
              </label>
              <div className="grid grid-cols-2 flex gap-2">
                {["Weekday Morning", "Weekday Evening", "Weekend Morning", "Weekend Evening"].map((batch) => (
                  <button
                    key={batch}
                    type="button"
                    onClick={() => {
  setFormData({
    ...formData,
    batch,
  })

  setErrors((prev) => ({
    ...prev,
    batch: "",
  }))
}}
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
              {errors.batch && (
  <p className="text-red-500 text-xs mt-1">
    {errors.batch}
  </p>
)}
            </div>


            <div>
              <label className="block text-sm font-medium text-[var(--dandes-dark)] mb-2">
                City
              </label>
              <input
                type="text"
                placeholder="Enter your current City"
                value={formData.city}
                onChange={(e) => {
  setFormData({
    ...formData,
    city: e.target.value,
  })

  setErrors((prev) => ({
    ...prev,
    city: "",
  }))
}}
                className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[var(--dandes-red)] focus:ring-1 focus:ring-[var(--dandes-red)]"
              />
            </div>
            {errors.city && (
  <p className="text-red-500 text-xs mt-1">
    {errors.city}
  </p>
)}
            
            
            {/* Next Button */}
            <button
  type="submit"
  disabled={loading}
  className="bg-[var(--dandes-red)] text-white py-3 px-6 rounded font-medium flex items-center justify-center gap-2 hover:bg-[#b81c22] transition-colors mt-2 cursor-pointer"
>
  {loading ? "Submitting..." : "Send me details"}
  <ArrowRight className="size-4" />
</button>
          </>
        )}
        
      </form>
    </div>
  )
}
