"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

const menuItems = [
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  // { name: "Buy Me a Coffee", href: "#buy-me-coffee" },
  { name: "Contact", href: "#contact" },
]

export function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="h-[46px] px-6 rounded-full bg-yellow text-dark font-medium text-base hover:bg-yellow/90 transition-colors"
      >
        Menu
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-dark/95 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="relative bg-card w-full max-w-md max-h-[80vh] overflow-y-auto rounded-[32px] p-8 animate-in fade-in zoom-in duration-200 menu-scroll">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <nav className="grid gap-3 pt-8">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleClick(item.href)}
                  className="w-full text-left px-6 py-4 rounded-2xl bg-white/5 text-lg font-medium text-white hover:bg-white/10 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

