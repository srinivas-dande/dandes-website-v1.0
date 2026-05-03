"use client"

import { ChevronDown, Menu, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

const resourcesLinks = [
  { label: "Free Class videos", href: "/free-class-videos" },
  { label: "Webinars", href: "/webinars" },
  { label: "Blogs", href: "/blogs" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQs", href: "/faqs" },
]

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Srinivas", href: "/srinivas" },
  { label: "Contact Us", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false)

  const resourcesRef = useRef(null)
  const companyRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target)
      ) {
        setResourcesOpen(false)
      }

      if (
        companyRef.current &&
        !companyRef.current.contains(event.target)
      ) {
        setCompanyOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])


  return (
    <header className="relative bg-white border border-[#CECECE] h-[90px]">
      <div className="h-full px-4 md:px-[70px] flex items-center max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link href = "/" className="flex items-center">
          <img
            src="/images/DAlogo.png"
            alt="Dandes Academy Logo"
            className="h-[55px] w-auto object-contain cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12 ml-[280px]">
          <a href="/courses" className="text-[var(--dandes-dark)] font-medium hover:text-[var(--dandes-red)] transition-colors">
            Courses
          </a>
          <div className="relative" ref={resourcesRef}>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="flex items-center gap-1 text-[var(--dandes-dark)] font-medium hover:text-[var(--dandes-red)] transition-colors cursor-pointer"
            >
              Resources
              <ChevronDown className="size-4" />
            </button>

            {resourcesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[280px] z-50">
                {/* Triangle pointer */}
                <div 
                  style={{
                    position: 'absolute',
                    top: -8,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '10px solid transparent',
                    borderRight: '10px solid transparent',
                    borderBottom: '10px solid #fff',
                    filter: 'drop-shadow(0 -2px 2px rgba(0,0,0,0.05))',
                  }}
                />
                <div 
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 16,
                    boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
                    padding: '16px',
                    overflow: 'hidden',
                  }}
                >
                  {resourcesLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '14px 20px',
                        fontSize: 16,
                        fontWeight: 500,
                        color: '#1a1a1a',
                        textDecoration: 'none',
                        borderRadius: 8,
                        backgroundColor: index === 0 ? 'rgba(209, 32, 39, 0.08)' : 'transparent',
                        transition: 'background-color 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        if (index !== 0) e.target.style.backgroundColor = 'rgba(209, 32, 39, 0.05)'
                      }}
                      onMouseLeave={(e) => {
                        if (index !== 0) e.target.style.backgroundColor = 'transparent'
                      }}
                    >
                      {item.label}
                      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#d12027" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="relative" ref={companyRef}>
            <button
              onClick={() => setCompanyOpen(!companyOpen)}
              className="flex items-center gap-1 text-[var(--dandes-dark)] font-medium hover:text-[var(--dandes-red)] transition-colors cursor-pointer"
            >
              Company
              <ChevronDown className="size-4" />
            </button>

            {companyOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[280px] z-50">
                {/* Triangle pointer */}
                <div 
                  style={{
                    position: 'absolute',
                    top: -8,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '10px solid transparent',
                    borderRight: '10px solid transparent',
                    borderBottom: '10px solid #fff',
                    filter: 'drop-shadow(0 -2px 2px rgba(0,0,0,0.05))',
                  }}
                />
                <div 
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 16,
                    boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
                    padding: '16px',
                    overflow: 'hidden',
                  }}
                >
                  {companyLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '14px 20px',
                        fontSize: 16,
                        fontWeight: 500,
                        color: '#1a1a1a',
                        textDecoration: 'none',
                        borderRadius: 8,
                        backgroundColor: index === 0 ? 'rgba(209, 32, 39, 0.08)' : 'transparent',
                        transition: 'background-color 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        if (index !== 0) e.target.style.backgroundColor = 'rgba(209, 32, 39, 0.05)'
                      }}
                      onMouseLeave={(e) => {
                        if (index !== 0) e.target.style.backgroundColor = 'transparent'
                      }}
                    >
                      {item.label}
                      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#d12027" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
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
          <div>
            <button
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              className="flex items-center justify-between w-full text-[var(--dandes-dark)] font-medium py-2"
            >
              Resources
              <ChevronDown className="size-4" />
            </button>

            {mobileResourcesOpen && (
              <div className="pl-4 flex flex-col gap-2 mt-2">
                {resourcesLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-sm text-[var(--dandes-dark)] hover:text-[var(--dandes-red)] py-1"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
              className="flex items-center justify-between w-full text-[var(--dandes-dark)] font-medium py-2"
            >
              Company
              <ChevronDown className="size-4" />
            </button>

            {mobileCompanyOpen && (
              <div className="pl-4 flex flex-col gap-2 mt-2">
                {companyLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-sm text-[var(--dandes-dark)] hover:text-[var(--dandes-red)] py-1"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

        </nav>
      )}
    </header>
  )
}
