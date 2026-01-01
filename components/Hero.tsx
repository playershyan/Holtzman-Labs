"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import TerminalPlayground from './TerminalPlayground';

export default function Hero() {
  const audiences = ["small businesses", "solopreneurs", "freelancers"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % audiences.length);
        setIsTransitioning(false);
      }, 450);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 py-20 md:px-16 md:py-32 lg:px-24">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-center">
        {/* Left: Headline & CTAs */}
        <div>
          <h1 className="text-[2.2rem] leading-[1.05] md:text-5xl md:leading-[1.06] lg:text-6xl lg:leading-[1.03] font-bold text-black tracking-tight mb-6">
            Fast, professional websites for{' '}
            <span className={`terminal ${isTransitioning ? 'opacity-70' : 'opacity-100'} transition-opacity duration-300`}>
              <span className="font-mono">{audiences[currentIndex]}</span>
              <span className="caret" />
            </span>
          </h1>

          <p className="text-lg leading-relaxed md:text-xl md:leading-relaxed lg:text-2xl text-gray-800 font-medium mb-8 max-w-2xl">
            Fast, fixed-price websites — launched quickly and reliably.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/playground"
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

        {/* Right: Live terminal hero + decorative blobs */}
        <div className="relative h-96 md:h-96 flex items-center justify-center">
          <div className={`blob blob-1 ${mounted ? 'fade-up' : ''}`} style={{ animationDelay: '80ms' }}></div>
          <div className={`blob blob-2 ${mounted ? 'fade-up' : ''}`} style={{ animationDelay: '160ms' }}></div>

          <div className={`card-lift w-full max-w-md ${mounted ? 'fade-up' : ''}`} style={{ animationDelay: '220ms' }}>
            <TerminalPlayground autoRunCmd="status" />
          </div>
        </div>
      </div>
    </section>
  );
}
