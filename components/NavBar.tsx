"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Profile Desa", href: "/profile" },
  { label: "UMKM", href: "/umkm" },
  { label: "Infografis", href: "/infografis" },
  { label: "Listing", href: "/listing" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 md:py-7">
      <nav
        className="container mx-auto px-4 flex flex-wrap items-center justify-between"
        aria-label="Global"
      >
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-x-2 text-xl font-semibold focus:outline-none focus:opacity-80"
            aria-label="Maduretno"
          >
            <div className="relative w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]">
              <Image
                src="https://cdn.digitaldesa.com/uploads/landing/logo-desa/kebumenkab.png"
                alt="maduretno"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 40px, (max-width: 1024px) 50px, 60px"
                priority
              />
            </div>
            <span className="text-sm md:text-base lg:text-lg">Maduretno</span>
          </Link>
        </div>

        <div className="flex items-center gap-x-2 md:order-3">
          <a
            href="https://maduretno.kec-buluspesantren.kebumenkab.go.id/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:block"
          >
            <button
              type="button"
              className="py-2 px-3 text-xs font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 transition"
            >
              Website Resmi
            </button>
          </a>
          <a
            href="https://maduretno.kec-buluspesantren.kebumenkab.go.id/index.php/layanan/masuk"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className="py-2 px-3 text-xs font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 transition focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
            >
              Layanan Mandiri
            </button>
          </a>

          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto md:order-2`}
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                    pathname === item.href
                      ? "text-black bg-lime-400 md:bg-transparent md:text-lime-500 underline underline-offset-4"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-500 hover:underline hover:underline-offset-4"
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

