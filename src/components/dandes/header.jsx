"use client"

import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative bg-white border border-[#CECECE] h-[90px]">
      <div className="h-full px-4 md:px-[70px] flex items-center max-w-[1440px] mx-auto">
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
        <nav className="hidden md:flex items-center gap-12 ml-[250px]">
          <a href="/courses" className="text-[var(--dandes-dark)] font-medium hover:text-[var(--dandes-red)] transition-colors">
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

        

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden absolute top-[90px] left-0 w-full bg-white border-t border-[#CECECE] px-4 py-4 flex flex-col gap-4 shadow-md z-50">
          <a href="/courses" className="text-[var(--dandes-dark)] font-medium py-2">
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
          
        </nav>
      )}
    </header>
  )
}
