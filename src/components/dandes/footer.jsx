"use client"

const coursesLinks = [
  { label: "AI/ML", href: "/ai-machine-learning-course" },
  { label: "System Design", href: "#" },
  { label: "Data Structure & Algorithm", href: "#" },
]

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

export function Footer() {
  return (
    <footer className="bg-[#002B41] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Left Column - Logo & Newsletter */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center mb-6">
              <img
                src="/images/DAFooter.png"
                alt="Dandes Academy Logo"
                className="h-[55px] w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 mb-6">
              Stay informed on new courses and industry insights.
            </p>

            {/* Newsletter Form */}
            <div className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent border border-gray-600 rounded px-4 py-2.5 text-white placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
              />
              <button className="bg-[#d12027] text-white px-6 py-2.5 rounded font-medium hover:bg-[#b81c22] transition-colors">
                Subscribe
              </button>
            </div>

            <p className="text-xs text-gray-400 mb-6">
              By subscribing you agree to our Privacy Policy and consent to receive updates from Dandes Academy
            </p>
 
            {/* Social Links */}
            <div className="flex gap-3">

              <a href="https://www.facebook.com/DandesAcademy" aria-label="Facebook" className="relative w-6 h-6">
                <img 
                  src="/images/dandes/icons/facebook.png" 
                  alt="Facebook" 
                  style={{ width: 20, height: 20, position: "absolute", top: "2.24px", left: "2px" }}
                />
              </a>

              <a href="https://www.instagram.com/dandesacademy?igsh=cjRkZWpmbWJubjFl" aria-label="Instagram" className="relative w-6 h-6">
                <img 
                  src="/images/dandes/icons/instagram.png" 
                  alt="Instagram" 
                  style={{ width: 18, height: 18, position: "absolute", top: "3.24px", left: "3px" }} 
                />
              </a>

              <a href="#" aria-label="X" className="relative w-6 h-6">
                <img 
                  src="/images/dandes/icons/twitter.png" 
                  alt="Twitter" 
                  style={{ width: 18, height: 16, position: "absolute", top: "4.24px", left: "3px" }} 
                />
              </a>

              <a href="https://www.linkedin.com/in/srinivasdande/" aria-label="LinkedIn" className="relative w-6 h-6">
                <img 
                  src="/images/dandes/icons/linkedin.png" 
                  alt="LinkedIn" 
                  style={{ width: 18, height: 18, position: "absolute", top: "3.24px", left: "3px" }}
                />
              </a>

              <a href="https://www.youtube.com/@DandesAcademy" aria-label="YouTube" className="relative w-6 h-6">
                <img 
                  src="/images/dandes/icons/youtube.png" 
                  alt="YouTube" 
                  style={{ width: 20, height: 14, position: "absolute", top: "5px", left: "2px" }} 
                />
              </a>

            </div>
          </div>

          {/* Courses Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Courses</h3>
            <ul className="space-y-3">
              {coursesLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {resourcesLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Dandes Academy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="text-gray-400 text-sm hover:text-white transition-colors underline">
              Privacy policy
            </a>
            <a href="/terms-conditions" className="text-gray-400 text-sm hover:text-white transition-colors underline">
              Terms of service
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  )
}
