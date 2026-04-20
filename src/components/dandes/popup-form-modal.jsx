"use client"

import { X } from "lucide-react"
import { RegistrationForm } from "./registration-form"

export function PopupFormModal({ showPopup, setShowPopup }) {
  if (!showPopup) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={() => setShowPopup(false)}
    >
      <div
        className="relative max-h-[90vh] overflow-y-auto rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setShowPopup(false)}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow"
        >
          <X className="w-4 h-4" />
        </button>

        <RegistrationForm />
      </div>
    </div>
  )
}