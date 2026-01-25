"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-6 py-20 md:px-16 md:py-32 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div>
          <h1 className="text-[2.2rem] leading-[1.05] md:text-5xl md:leading-[1.06] lg:text-6xl lg:leading-[1.03] font-bold text-black tracking-tight mb-6">
            Web development for
            <br />
            <span className="font-mono">businesses & professional services</span>
          </h1>

          <p className="text-lg leading-relaxed md:text-xl md:leading-relaxed lg:text-2xl text-gray-800 font-medium mb-8 max-w-2xl">
            Get a fixed-price estimate in 24 hours.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/siteStats"
              className="px-8 py-4 gradient-cta font-semibold inline-flex items-center justify-center shadow-sm"
            >
              See live demo
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-black font-semibold border-2 border-black hover:bg-gray-50 transition-colors rounded-md"
            >
              Start estimate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
