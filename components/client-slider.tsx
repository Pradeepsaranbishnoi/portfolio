"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const clients = [
  {
    id: 1,
    name: "Reelax",
    logo: "https://getreelax.com/wp-content/uploads/2024/11/landing-page-logo.svg",
    link: "https://getreelax.com",
  },
  {
    id: 2,
    name: "Educase India",
    logo: "https://educase.io/wp-content/uploads/2021/10/educase-2.webp",
    link: "http://educase.io",
  },
  {
    id: 3,
    name: "Aerowheel Surface Finishing",
    logo: "https://aerowheel.co/wp-content/uploads/2021/11/1573127761Aerowheel-copy.webp",
    link: "https://aerowheel.co",
  },
  {
    id: 4,
    name: "Neomatrix",
    logo: "https://neomatrixxinc.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-03-01-at-3.47.16-PM-q33nkkauzjd3njky5jl75o71l609iz38ctbvhreo00.webp",
    link: "https://neomatrixxinc.com",
  },
  {
    id: 5,
    name: "Jambh Bhakti",
    logo: "https://jambhbhakti.com/wp-content/uploads/2022/02/Untitled-design.webp",
    link: "https://jambhbhakti.com",
  },
  {
    id: 6,
    name: "Desert",
    logo: "/image/water-tank.webp",
    link: "#",
  },
  {
    id: 7,
    name: "Aeyy Aenn Media",
    logo: "https://aeyyaennmedia.in/wp-content/uploads/2024/10/Aeyy-Aenn-Media-Logo-copy.png",
    link: "https://aeyyaennmedia.in",
  },
  {
    id: 8,
    name: "Healthified Zone",
    logo: "https://healthifiedzone.com/wp-content/uploads/2024/07/LOGO_2-removebg-preview.png",
    link: "https://healthifiedzone.com",
  },
  {
    id: 9,
    name: "The Tech Folk",
    logo: "https://thetechfolk.com/wp-content/uploads/2023/07/ttf-logo.png",
    link: "https://thetechfolk.com",
  },
]

export function ClientSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + clients.length) % clients.length)
  }

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (isAutoPlaying) {
      intervalId = setInterval(nextSlide, 3000)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isAutoPlaying, nextSlide]) // Added nextSlide to dependencies

  return (
    <section className="py-20 px-5">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[56px] font-bold text-center mb-16">
          <span className="text-[#333333]">C</span>lients <span className="text-yellow">Worked With</span>
        </h2>

        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(false)}
        >
          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {clients.map((client) => (
                <div
                  key={client.id}
                  className="w-full flex-shrink-0 px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
                >
                  {Array.from({ length: 5 }).map((_, index) => {
                    const clientIndex = (index + currentIndex) % clients.length
                    const client = clients[clientIndex]
                    return (
                      <a
                        key={`${client.id}-${index}`}
                        href={client.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-card rounded-[32px] p-8 flex items-center justify-center transition-transform hover:scale-105"
                      >
                        <div className="absolute inset-0 bg-yellow/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity rounded-[32px]" />
                        <div className="relative z-10">
                          <img
                            src={client.logo || "/placeholder.svg"}
                            alt={client.name}
                            className="w-32 h-12 object-contain invert"
                          />
                        </div>
                      </a>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-yellow/10 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-yellow/10 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  currentIndex === index ? "bg-yellow" : "bg-white/10",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

