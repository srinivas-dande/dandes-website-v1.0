'use client'

import { useState } from 'react'
import { useRouter } from "next/navigation"
import { isValidPhoneNumber } from "libphonenumber-js"

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
 
export default function ShareExperienceSection() {
  const router = useRouter()
  const [formData, setFormData] = useState({
  batch: "",
  full_name: "",
  email: "",
  phone_number: "",
  current_job_role: "",
  current_company: "",
  company_location: "",
  career_goal: "",
  linkedin_profile: "",
  testimonial: "",
  photo_url: "",
  video_testimonial: false,
  consent: false,
});

const [errors, setErrors] = useState({});
const [countryCode, setCountryCode] = useState("+91");


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const validateForm = () => {
  const newErrors = {};

  if (!formData.batch) {
    newErrors.batch = "Please select your batch.";
  }

  if (!formData.full_name.trim()) {
    newErrors.full_name = "Please enter your name.";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Please enter your email.";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
  ) {
    newErrors.email = "Please enter a valid email.";
  }

  const fullPhone = `${countryCode}${formData.phone_number}`;

if (!formData.phone_number.trim()) {
  newErrors.phone_number = "Please enter your phone number.";
} else if (!isValidPhoneNumber(fullPhone)) {
  newErrors.phone_number = "Please enter a valid phone number.";
}

  

if (!formData.current_job_role.trim()) {
  newErrors.current_job_role =
    "Please enter your current job role.";
}

if (!formData.current_company.trim()) {
  newErrors.current_company =
    "Please enter your current company.";
}

if (!formData.company_location.trim()) {
  newErrors.company_location =
    "Please enter your company location.";
}

if (!formData.career_goal.trim()) {
  newErrors.career_goal =
    "Please enter your career goal.";
}


  if (!formData.testimonial.trim()) {
    newErrors.testimonial = "Please share your experience.";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

  

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return;
    }

    try {

    const payload = {
      ...formData,
      phone_number: `${countryCode}${formData.phone_number}`,
    };

  const response = await fetch('/api/testimonials', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const data = await response.json()

  if (data.success) {
    router.push('/thank-you')
  }
} catch (error) {
  console.error(error)
}
  }

  return (
    <section
      style={{
        padding: '80px 24px',
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: '#111',
              lineHeight: 1.3,
              marginBottom: 16,
            }}
          >
            Are You A <span style={{ color: '#DC2626' }}>Dandes Academy Learner?</span>
            <br />
            Share Your Experience
          </h2>
         
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          <div style={{ marginBottom: 20 }}>
  <label
    style={{
      display: 'block',
      fontSize: 14,
      fontWeight: 500,
      color: '#374151',
      marginBottom: 8,
    }}
  >
    Batch
  </label>

  <select
  name="batch"
  value={formData.batch}
  onChange={handleInputChange}
  style={{
    width: '100%',
    padding: '14px 16px',
    border: '1px solid #E5E7EB',
    borderRadius: 8,
    fontSize: 15,
    color: '#111',
    backgroundColor: '#F9FAFB',
    outline: 'none',
  }}
>
  <option value="">Select Batch</option>
  <option value="AI-ML-B1">AI-ML-B1</option>
  <option value="AI-ML-B2">AI-ML-B2</option>
  <option value="AI-ML-B3">AI-ML-B3</option>
 
</select>
{errors.batch && (
  <p style={{ color: '#DC2626', fontSize: 13, marginTop: 6 }}>
    {errors.batch}
  </p>
)}
</div>

{/* Name and LinkedIn Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 20,
              marginBottom: 20,
            }}
            className="form-row"
          >
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#374151',
                  marginBottom: 8,
                }}
              >
                Name
              </label>
              <input
                type="text"
                name="full_name"
                placeholder="First name"
                value={formData.full_name}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '1px solid #E5E7EB',
                  borderRadius: 8,
                  fontSize: 15,
                  color: '#111',
                  backgroundColor: '#F9FAFB',
                  outline: 'none',
                }}
              />
              {errors.full_name && (
                <p style={{ color: '#DC2626', fontSize: 13, marginTop: 6 }}>
                  {errors.full_name}
                </p>
              )}
            </div>
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#374151',
                  marginBottom: 8,
                }}
              >
                LinkedIn URL 
              </label>
              <input
                type="text"
                name="linkedin_profile"
                placeholder="LinkedIn URL"
                value={formData.linkedin_profile}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '1px solid #E5E7EB',
                  borderRadius: 8,
                  fontSize: 15,
                  color: '#111',
                  backgroundColor: '#F9FAFB',
                  outline: 'none',
                }}
              />
              
            </div>
          </div>
 
<div
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 20,
    marginBottom: 20,
  }}
  className="form-row"
>
  <div>
    <label>Email</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      style={{
        width: '100%',
        padding: '14px 16px',
        border: '1px solid #E5E7EB',
        borderRadius: 8,
        backgroundColor: '#F9FAFB',
      }}
    />
    {errors.email && (
  <p style={{ color: '#DC2626', fontSize: 13, marginTop: 6 }}>
    {errors.email}
  </p>
)}
  </div>

  <div>
    <div style={{ display: 'flex', gap: 10 }}>
  <select
    value={countryCode}
    onChange={(e) => setCountryCode(e.target.value)}
    style={{
      width: '110px',
      padding: '14px 8px',
      border: '1px solid #E5E7EB',
      borderRadius: 8,
      backgroundColor: '#F9FAFB',
    }}
  >
    {countries.map((country) => (
      <option key={country.code} value={country.dial}>
        {country.code} {country.dial}
      </option>
    ))}
  </select>

  <input
    type="tel"
    name="phone_number"
    placeholder="Phone Number"
    value={formData.phone_number}
    onChange={handleInputChange}
    style={{
      flex: 1,
      padding: '14px 16px',
      border: '1px solid #E5E7EB',
      borderRadius: 8,
      backgroundColor: '#F9FAFB',
    }}
  />
</div>
    {errors.phone_number && (
  <p style={{ color: '#DC2626', fontSize: 13, marginTop: 6 }}>
    {errors.phone_number}
  </p>
)}
  </div>
</div>
          

          {/* Current Role and Company Row */}
<div
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 20,
    marginBottom: 20,
  }}
  className="form-row"
>
  <div>
    <label
      style={{
        display: 'block',
        fontSize: 14,
        fontWeight: 500,
        color: '#374151',
        marginBottom: 8,
      }}
    >
      Current Job Role
    </label>

    <input
      type="text"
      name="current_job_role"
      placeholder="Senior Software Engineer"
      value={formData.current_job_role}
      onChange={handleInputChange}
      style={{
        width: '100%',
        padding: '14px 16px',
        border: '1px solid #E5E7EB',
        borderRadius: 8,
        fontSize: 15,
        color: '#111',
        backgroundColor: '#F9FAFB',
        outline: 'none',
      }}
    />
    {errors.current_job_role && (
  <p style={{ color: '#DC2626', fontSize: 13, marginTop: 6 }}>
    {errors.current_job_role}
  </p>
)}
  </div>

  <div>
    <label
      style={{
        display: 'block',
        fontSize: 14,
        fontWeight: 500,
        color: '#374151',
        marginBottom: 8,
      }}
    >
      Current Company
    </label>

    <input
      type="text"
      name="current_company"
      value={formData.current_company}
      onChange={handleInputChange}
      style={{
        width: '100%',
        padding: '14px 16px',
        border: '1px solid #E5E7EB',
        borderRadius: 8,
        fontSize: 15,
        color: '#111',
        backgroundColor: '#F9FAFB',
        outline: 'none',
      }}
    />
    {errors.current_company && (
  <p style={{ color: '#DC2626', fontSize: 13, marginTop: 6 }}>
    {errors.current_company}
  </p>
)}
  </div>
</div>

{/* Company Location and Career Goal Row */}
<div
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 20,
    marginBottom: 20,
  }}
  className="form-row"
>
  <div>
    <label
      style={{
        display: 'block',
        fontSize: 14,
        fontWeight: 500,
        color: '#374151',
        marginBottom: 8,
      }}
    >
      Company Location
    </label>

    <input
      type="text"
      name="company_location"
      value={formData.company_location}
      onChange={handleInputChange}
      style={{
        width: '100%',
        padding: '14px 16px',
        border: '1px solid #E5E7EB',
        borderRadius: 8,
        backgroundColor: '#F9FAFB',
      }}
    />
    {errors.company_location && (
  <p style={{ color: '#DC2626', fontSize: 13, marginTop: 6 }}>
    {errors.company_location}
  </p>
)}
  </div>

  <div>
    <label
      style={{
        display: 'block',
        fontSize: 14,
        fontWeight: 500,
        color: '#374151',
        marginBottom: 8,
      }}
    >
      Career Goal
    </label>

    <input
      type="text"
      name="career_goal"
      value={formData.career_goal}
      onChange={handleInputChange}
      style={{
        width: '100%',
        padding: '14px 16px',
        border: '1px solid #E5E7EB',
        borderRadius: 8,
        backgroundColor: '#F9FAFB',
      }}
    />
    {errors.career_goal && (
  <p style={{ color: '#DC2626', fontSize: 13, marginTop: 6 }}>
    {errors.career_goal}
  </p>
)}
  </div>
</div>

          {/* Your Review */}
          <div style={{ marginBottom: 20 }}>
            <label
              style={{
                display: 'block',
                fontSize: 14,
                fontWeight: 500,
                color: '#374151',
                marginBottom: 8,
              }}
            >
              Your Review
            </label>
            <textarea
              name="testimonial"
              placeholder="100-400 words about your experience..."
              value={formData.testimonial}
              onChange={handleInputChange}
              rows={5}
              style={{
                width: '100%',
                padding: '14px 16px',
                border: '1px solid #E5E7EB',
                borderRadius: 8,
                fontSize: 15,
                color: '#111',
                backgroundColor: '#F9FAFB',
                outline: 'none',
                resize: 'vertical',
                fontFamily: 'inherit',
              }}
            />
            {errors.testimonial && (
  <p style={{ color: '#DC2626', fontSize: 13, marginTop: 6 }}>
    {errors.testimonial}
  </p>
)}
          </div>

          <div style={{ marginBottom: 20 }}>
  <label>Photo URL</label>

  <input
    type="text"
    name="photo_url"
    value={formData.photo_url}
    onChange={handleInputChange}
    style={{
      width: '100%',
      padding: '14px 16px',
      border: '1px solid #E5E7EB',
      borderRadius: 8,
      backgroundColor: '#F9FAFB',
    }}
  />
 
</div>

          {/* Video URL */}
          <div style={{ marginBottom: 24 }}>
  <label
    style={{
      display: 'block',
      fontSize: 14,
      fontWeight: 500,
      color: '#374151',
      marginBottom: 12,
    }}
  >
    Do you have a video testimonial?
  </label>

  <div style={{ display: 'flex', gap: 20 }}>
    <label>
      <input
        type="radio"
        checked={formData.video_testimonial === true}
        onChange={() =>
          setFormData((prev) => ({
            ...prev,
            video_testimonial: true,
          }))
        }
      />
      Yes
    </label>

    <label>
      <input
        type="radio"
        checked={formData.video_testimonial === false}
        onChange={() =>
          setFormData((prev) => ({
            ...prev,
            video_testimonial: false,
          }))
        }
      />
      No
    </label>
  </div>
</div>

          {/* Checkbox 
          <div style={{ marginBottom: 32 }}>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                cursor: 'pointer',
              }}
            >
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleInputChange}
                style={{
                  width: 20,
                  height: 20,
                  accentColor: '#DC2626',
                  cursor: 'pointer',
                }}
              />
              <span style={{ fontSize: 14, color: '#374151' }}>
                I allow Dandes Academy to publish this on the website.
              </span>
            </label>
          </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '16px 40px',
              backgroundColor: '#DC2626',
              color: '#fff',
              fontSize: 16,
              fontWeight: 600,
              borderRadius: 8,
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
          >
            Submit Review
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
          .package-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
