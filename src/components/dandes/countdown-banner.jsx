"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white border-2 border-[#002B41] rounded-md px-3 py-1 min-w-[60px]">
      <span className="text-xl font-bold text-[var(--dandes-red)] leading-tight">{value}</span>
      <span className="text-[10px] text-[var(--dandes-red)] font-medium uppercase tracking-wide">{label}</span>
    </div>
  )
}

export function CountdownBanner() {

  const [webinarTime, setWebinarTime] = useState(null)

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  })

  useEffect(() => {
    const fetchWebinar = async () => {
      try {
        const res = await fetch("/api/countdown-banner")
        const data = await res.json()

        if (data.ok && data.data) {
          setWebinarTime(new Date(data.data.dateTime))
        }
      } catch (err) {
        console.error("Failed to fetch webinar", err)
      }
    }

    fetchWebinar()
  }, [])

  useEffect(() => {
    if (!webinarTime) return

    const timer = setInterval(() => {
      const now = new Date()
      const difference = webinarTime - now

      if (difference <= 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const mins = Math.floor((difference / (1000 * 60)) % 60)
      const secs = Math.floor((difference / 1000) % 60)

      setTimeLeft({ days, hours, mins, secs })
    }, 1000)

    return () => clearInterval(timer)
  }, [webinarTime])

  const scrollToForm = () => {
  const formSection = document.getElementById("webinar-registration-form")
    if (formSection) {
      formSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
  }
    

  return (
    <div className="bg-[#002B41] py-4 px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 lg:gap-8">
        <p className="text-white text-sm font-medium text-center">
          NEXT WEBINAR: {" "}

          <span className="text-white text-sm font-medium text-center">
                {webinarTime
                  ? webinarTime.toLocaleString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      weekday: "long",
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "Loading..."}
              </span>
        </p>
        
        <div className="flex items-center gap-1.5">
          <CountdownUnit value={timeLeft.days} label="DAYS" />
          <CountdownUnit value={timeLeft.hours} label="HRS" />
          <CountdownUnit value={timeLeft.mins} label="MINS" />
          <CountdownUnit value={timeLeft.secs} label="SEC" />
        </div>

        <Link
          href = "/webinars-on"
          className="flex items-center gap-3 bg-white text-[#002B41] px-5 py-2.5 rounded text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer"
        >
          Register for FREE AI/ML Webinar
          <span className="bg-[var(--dandes-red)] rounded-full p-1">
            <ArrowRight className="size-3 text-white" />
          </span>
        </Link>
      </div>
    </div>
  )
}
