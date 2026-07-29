"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import { ArrowRight } from "lucide-react";
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
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    
  })

  const [successMsg, setSuccessMsg] = useState("")
  const [loading, setLoading] = useState(false)
  const [countryCode, setCountryCode] = useState("+91")
  const router = useRouter()


  const handleSubmit = async (e) => {
  e.preventDefault()
  if (loading || successMsg) return

  const newErrors = {}

if (!formData.fullName.trim()) {
  newErrors.fullName = "Please enter your name";
} else if (!/^[A-Za-z ]+$/.test(formData.fullName.trim())) {
  newErrors.fullName = "Full name can contain only alphabets and spaces";
}

if (!formData.email.trim()) {
  newErrors.email = "Please enter your email";
}

const fullPhone = `${countryCode}${formData.phone}`;

if (!formData.phone.trim()) {
  newErrors.phone = "Please enter your phone number";
} else if (!isValidPhoneNumber(fullPhone)) {
  newErrors.phone = "Please enter a valid phone number";
}

if (Object.keys(newErrors).length > 0) {
  setErrors(newErrors);
  return;
}

  setLoading(true)

  const { leadSource, leadSubSource } = getLeadSource();


  const payload = {
  fullName: formData.fullName,
  email: formData.email,
  phone: `${countryCode}${formData.phone}`,
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

    const data = await res.json();

if (!res.ok) {
  alert(data.message || "Something went wrong");
  return;
}

router.replace("/thank-you");
return;
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

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Step 1: */}
          
            <div>
              <label className="block text-sm font-medium text-[var(--dandes-dark)] mb-2">
                Full Name
              </label>
              <input
                required
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => {
  const value = e.target.value.replace(/[^A-Za-z ]/g, "");
  setFormData({
    ...formData,
    fullName: value,
  });

  setErrors((prev) => ({
    ...prev,
    fullName: "",
  }));
}}
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
  type="submit"
  disabled={loading}
  className="bg-[var(--dandes-red)] text-white py-3 px-6 rounded font-medium flex items-center justify-center gap-2 hover:bg-[#b81c22] transition-colors mt-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
>
  {loading ? "Submitting..." : "Get Course Details"}
  <ArrowRight className="size-4" />
</button>

            {/* Disclaimer */}
            <p className="text-xs text-gray-500">
              *By submitting, you agree to be contacted via Email, WhatsApp, or Phone.
            </p>
            <p className="text-xs text-gray-400 text-center">
              We keep your details private, and we do not spam.
            </p>
        
      </form>
      {loading && (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/20 backdrop-blur-sm">
    <div className="bg-white rounded-xl px-8 py-6 shadow-xl flex flex-col items-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-[var(--dandes-red)]"></div>

      <h3 className="mt-5 text-lg font-semibold text-gray-900">
        Processing your registration...
      </h3>

      <p className="mt-2 text-sm text-gray-600 text-center">
        Please wait a moment. Do not refresh or close this page.
      </p>
    </div>
  </div>
)}
    </div>
  )
}
