"use client"

import { NAVBAR_CONTENT } from "@/data"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  // Check if we are on the homepage
  const isHomePage = pathname === "/"

  return (
    <header
      className={`top-0 left-0 w-full z-20 transition-all duration-300 
        ${isHomePage ? "absolute bg-transparent" : "sticky bg-black"}`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between text-white py-4">
          {/* Logo */}
          <div className="relative w-28 h-16 sm:w-36 sm:h-20 lg:w-40 lg:h-24">
            <Image
              src="/assets/images/logo.png"
              alt="FlexieTrips Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 font-semibold text-lg lg:text-xl">
            {NAVBAR_CONTENT.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="hover:text-[#00ADB5] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/90 rounded-lg py-4 px-6 mt-2 space-y-4 font-semibold text-lg">
            {NAVBAR_CONTENT.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="block hover:text-[#00ADB5] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
