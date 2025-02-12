"use client"

import Link from "next/link"
import { Menu } from "./menu"

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="absolute inset-0 bg-dark/80 backdrop-blur-md" />
      <nav className="relative z-10 max-w-[1440px] mx-auto flex justify-between items-center p-5">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-[46px] h-[46px] rounded-full bg-white/10 flex items-center justify-center">
            <span className="text-[22px] font-semibold">PS</span>
          </div>
          <h3 className="text-[22px] font-semibold tracking-wide">PRADEEPSARAN</h3>
        </Link>

        <Menu />
      </nav>
    </header>
  )
}

