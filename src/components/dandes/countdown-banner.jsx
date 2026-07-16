"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const FALLBACK_DATE = new Date("2026-07-25T18:30:00+05:30")

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
        } else {
          // Static fallback
          setWebinarTime(FALLBACK_DATE)
        }
      } catch (err) {
        console.error("Failed to fetch webinar", err)
        // Static fallback
        setWebinarTime(FALLBACK_DATE)
      }
    }

    fetchWebinar()
  }, [])

  useEffect(() => {
    if (!webinarTime) return

    const updateCountdown = () => {
      const now = new Date()
      const difference = webinarTime - now

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          mins: 0,
          secs: 0,
        })
        return
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / (1000 * 60)) % 60),
        secs: Math.floor((difference / 1000) % 60),
      })
    }

    updateCountdown()

    const timer = setInterval(updateCountdown, 1000)

    return () => clearInterval(timer)
  }, [webinarTime])

  return (
    <div className="bg-[#002B41] py-4 px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 lg:gap-8">
        <p className="text-white text-sm font-medium text-center">
          NEXT DEMO:{" "}
          <span className="text-white text-sm font-medium text-center">
            {webinarTime
              ? webinarTime.toLocaleString("en-IN", {
                  timeZone: "Asia/Kolkata",
                  weekday: "long",
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "No Demo scheduled"}
          </span>
        </p>

        {webinarTime && (
          <div className="flex items-center gap-1.5">
            <CountdownUnit value={timeLeft.days} label="DAYS" />
            <CountdownUnit value={timeLeft.hours} label="HRS" />
            <CountdownUnit value={timeLeft.mins} label="MINS" />
            <CountdownUnit value={timeLeft.secs} label="SEC" />
          </div>
        )}

        <Link
          href="/courses/ai-machine-learning-course"
          className="flex items-center gap-3 bg-white text-[#002B41] px-5 py-2.5 rounded text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer"
        >
          Register For Live Demo
          <span className="bg-[var(--dandes-red)] rounded-full p-1">
            <ArrowRight className="size-3 text-white" />
          </span>
        </Link>


      

       
      </div>
    </div>
  )
} 