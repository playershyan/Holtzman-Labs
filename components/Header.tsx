"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5 md:py-4 text-neutral-900">
        <Link href="/" className="flex items-center gap-2 text-lg md:text-xl font-bold text-black">
          <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L22 22H2L12 2Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="miter" strokeLinecap="butt" />
          </svg>
          <span>Holtzman Labs</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm md:text-base text-neutral-600 sm:flex">
          <Link href="/" className="hover:text-[#8B5CF6] transition-colors">
            Home
          </Link>

          <Link href="/playground" className="hover:text-[#8B5CF6] transition-colors">
            Playground
          </Link>
          <Link href="/pricing" className="hover:text-[#8B5CF6] transition-colors">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-[#8B5CF6] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <span className="block h-0.5 w-5 bg-neutral-900" />
          <span className="mt-1 block h-0.5 w-5 bg-neutral-900" />
          <span className="mt-1 block h-0.5 w-5 bg-neutral-900" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="sm:hidden border-t border-neutral-200 bg-white">
          <div className="mx-auto flex max-w-5xl flex-col px-6 py-4 text-base text-neutral-700 space-y-3">
            <Link href="/" className="hover:text-[#8B5CF6] transition-colors">
              Home
            </Link>

            <Link href="/playground" className="hover:text-[#8B5CF6] transition-colors">
              Playground
            </Link>
            <Link href="/pricing" className="hover:text-[#8B5CF6] transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="hover:text-[#8B5CF6] transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      )}  
    </header>
  );
}

