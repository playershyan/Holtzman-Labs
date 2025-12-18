"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const audiences = ["small businesses", "solopreneurs", "freelancers"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % audiences.length);
        setIsTransitioning(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 py-20 md:px-16 md:py-32 lg:px-24">
      <div className="max-w-4xl">
        <h1 className="text-[2.5rem] leading-[1.1] md:text-6xl md:leading-[1.1] lg:text-7xl lg:leading-[1.05] font-bold text-black tracking-tight mb-6">
          Fast, professional websites for{" "}
          <span
            className={`inline-block transition-opacity duration-500 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            {audiences[currentIndex]}
          </span>
        </h1>
        <p className="text-lg leading-relaxed md:text-xl md:leading-relaxed lg:text-2xl text-gray-700 font-medium mb-8 max-w-2xl">
          Landing pages and static websites delivered quickly with fixed pricing
          and unlimited revisions
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/templates"
            className="px-8 py-4 bg-[#8B5CF6] text-white font-semibold hover:bg-[#7C3AED] transition-colors"
          >
            View work
          </Link>
          <Link
            href="/pricing"
            className="px-8 py-4 bg-white text-black font-semibold border-2 border-black hover:bg-gray-50 transition-colors"
          >
            Get a site
          </Link>
        </div>
      </div>
    </section>
  );
}
