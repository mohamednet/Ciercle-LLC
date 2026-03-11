"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/apps", label: "Our Work" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Announcement Banner */}
      <div className="bg-gray-100 dark:bg-gray-900 py-2.5 px-4 flex justify-center items-center gap-2 border-b border-border-light dark:border-border-dark text-sm">
        <span className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-semibold px-2 py-0.5 rounded-full">
          New
        </span>
        <p className="font-medium text-gray-700 dark:text-gray-300">
          AI integration capabilities are now available.{" "}
          <Link
            href="/services?tab=ai"
            className="underline hover:text-black dark:hover:text-white transition-colors"
          >
            Learn more{" "}
            <span className="material-icons text-[14px] align-middle">
              arrow_forward
            </span>
          </Link>
        </p>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-transparent transition-all py-4 px-6 lg:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo/CiercleLogo.png"
            alt="Ciercle LLC"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="font-bold text-xl tracking-tight">Ciercle LLC</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-primary hover:bg-[#3b7de6] text-white px-5 py-2.5 rounded-full font-semibold transition-colors shadow-sm"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600"
          aria-label="Toggle menu"
        >
          <span className="material-icons text-2xl">
            {isOpen ? "close" : "menu"}
          </span>
        </button>

        {/* Mobile nav */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-background-dark border-b border-border-light dark:border-border-dark md:hidden p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-primary hover:bg-[#3b7de6] text-white px-5 py-2.5 rounded-full font-semibold transition-colors shadow-sm"
            >
              Get in Touch
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
