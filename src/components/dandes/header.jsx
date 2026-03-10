"use client"

import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border border-[#CECECE] h-[90px]">
      <div className="h-full px-[70px] flex items-center justify-between max-w-[1440px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-[var(--dandes-red)] text-white font-bold text-xl px-2.5 py-1.5 rounded">
            DA
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-[var(--dandes-dark)]">Dandes</span>
            <span className="text-[var(--dandes-red)] text-sm font-medium">Academy</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <a href="#" className="text-[var(--dandes-dark)] font-medium hover:text-[var(--dandes-red)] transition-colors">
            Courses
          </a>
          <button className="flex items-center gap-1 text-[var(--dandes-dark)] font-medium hover:text-[var(--dandes-red)] transition-colors">
            Resources
            <ChevronDown className="size-4" />
          </button>
          <button className="flex items-center gap-1 text-[var(--dandes-dark)] font-medium hover:text-[var(--dandes-red)] transition-colors">
            Company
            <ChevronDown className="size-4" />
          </button>
        </nav>

        {/* Apply Now Button */}
        <button className="hidden md:block bg-[#F5F5F5] text-[var(--dandes-red)] px-8 py-3 rounded font-medium hover:bg-gray-200 transition-colors">
          Apply Now
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-[#CECECE] px-[70px] py-4 flex flex-col gap-4">
          <a href="#" className="text-[var(--dandes-dark)] font-medium py-2">
            Courses
          </a>
          <button className="flex items-center justify-between text-[var(--dandes-dark)] font-medium py-2">
            Resources
            <ChevronDown className="size-4" />
          </button>
          <button className="flex items-center justify-between text-[var(--dandes-dark)] font-medium py-2">
            Company
            <ChevronDown className="size-4" />
          </button>
          <button className="bg-[#F5F5F5] text-[var(--dandes-red)] px-6 py-2 rounded font-medium w-full">
            Apply Now
          </button>
        </nav>
      )}
    </header>
  )
}
