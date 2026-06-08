"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Insights", href: "/insights" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="relative w-full flex items-center justify-between px-10 py-5">

        {/* Logo */}
        <div className="text-xl font-bold text-[#0A2342] tracking-tight z-10">
          Sahihi Legal
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-[#0A2342] font-medium text-sm tracking-wide pb-1 group hover:text-blue-600 transition-colors duration-200"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#0A2342] transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block z-10">
          <a
            href="https://wa.me/254737776749"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0A2342] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0d2e56] transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={
              isOpen
                ? "block w-6 h-[2px] bg-[#0A2342] rotate-45 translate-y-[7px] transition-all duration-300"
                : "block w-6 h-[2px] bg-[#0A2342] transition-all duration-300"
            }
          />
          <span
            className={
              isOpen
                ? "block w-6 h-[2px] bg-[#0A2342] opacity-0 transition-all duration-300"
                : "block w-6 h-[2px] bg-[#0A2342] transition-all duration-300"
            }
          />
          <span
            className={
              isOpen
                ? "block w-6 h-[2px] bg-[#0A2342] -rotate-45 -translate-y-[7px] transition-all duration-300"
                : "block w-6 h-[2px] bg-[#0A2342] transition-all duration-300"
            }
          />
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={
          isOpen
            ? "md:hidden overflow-hidden max-h-96 border-t border-gray-100 transition-all duration-300 ease-in-out"
            : "md:hidden overflow-hidden max-h-0 transition-all duration-300 ease-in-out"
        }
      >
        <nav className="flex flex-col px-6 py-4 gap-4 bg-white">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[#0A2342] font-medium text-sm py-2 border-b border-gray-100 hover:text-blue-600 transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}

          <a
            href="https://wa.me/254737776749"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-[#0A2342] text-white text-sm font-semibold px-5 py-3 rounded-lg text-center"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}