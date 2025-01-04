'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from 'lucide-react'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Profile Desa", href: "/profile" },
  { label: "Infografis", href: "#" },
  { label: "Listing", href: "/listing" }
]

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7">
      <nav
        className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto"
        aria-label="Global"
      >
        <div className="md:col-span-3">
          <Link
            href="/"
            className="flex items-center gap-x-2 text-xl font-semibold focus:outline-none focus:opacity-80"
            aria-label="Maduretno"
          >
            <div className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]">
              <Image
                src="https://cdn.digitaldesa.com/uploads/landing/logo-desa/kebumenkab.png"
                alt="maduretno"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50px, (max-width: 1024px) 60px, 70px"
                priority
              />
            </div>
            <span className="hidden sm:inline">Maduretno</span>
          </Link>
        </div>

        <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
          <a 
            href="https://maduretno.kec-buluspesantren.kebumenkab.go.id/" 
            target="_blank" 
            rel="noreferrer"
            className="hidden sm:block"
          >
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            >
              Website Resmi
            </button>
          </a>
          <button
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-lime-500"
          >
            Contact Us
          </button>

          <button
            type="button"
            className="md:hidden inline-flex size-[38px] justify-center items-center rounded-xl border border-gray-200 text-black hover:bg-gray-100"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? (
              <X className="size-4" />
            ) : (
              <Menu className="size-4" />
            )}
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6`}
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  className="inline-block text-black hover:text-gray-600 hover:underline hover:underline-offset-4"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

