"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PerformanceMonitor from './PerformanceMonitor';

export default function Hero() {
  const audiences = ["businesses", "professional-service firms", "individuals"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const currentWord = audiences[currentIndex];

    if (!isDeleting && displayedText === currentWord) {
      // Wait before starting to delete
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText === "") {
      // Move to next word
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % audiences.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setDisplayedText((prev) => {
          if (isDeleting) {
            return currentWord.substring(0, prev.length - 1);
          } else {
            return currentWord.substring(0, prev.length + 1);
          }
        });
      },
      isDeleting ? 50 : 100 // Faster backspace, slower typing
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentIndex, audiences]);

  return (
    <section className="px-6 py-20 md:px-16 md:py-32 lg:px-24">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-center">
        {/* Left: Headline & CTAs */}
        <div>
          <h1 className="text-[2.2rem] leading-[1.05] md:text-5xl md:leading-[1.06] lg:text-6xl lg:leading-[1.03] font-bold text-black tracking-tight mb-6">
            Software development for{' '}
            <span className="terminal-hero">
              <span className="font-mono">{displayedText}</span>
              <span className="caret" />
            </span>
          </h1>

          <p className="text-lg leading-relaxed md:text-xl md:leading-relaxed lg:text-2xl text-gray-800 font-medium mb-8 max-w-2xl">
            We build software. Clean code, no shortcuts, no technical debt.
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
            <PerformanceMonitor />
          </div>
        </div>
      </div>
    </section>
  );
}
