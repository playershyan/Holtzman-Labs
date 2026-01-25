'use client';

import Link from 'next/link';
// DISABLED: Technical Debt Calculator
// import TechnicalDebtCalculator from './TechnicalDebtCalculator';

export default function EngineeringPhilosophy() {
  return (
    <section className="px-6 py-16 md:px-16 md:py-24 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* DISABLED: Changed from grid md:grid-cols-2 to single column */}
        <div className="max-w-3xl">
          {/* Left Column: Philosophy & Principles */}
          <div>
            <div className="mb-10">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight mb-3">
                A website is not a luxury or a branding exercise.
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight mb-3">
                It is proof of existence.
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight mb-3">
                It is credibility.
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight mb-8">
                It is defence against competitors who look more established than they actually are.
              </p>
            </div>

            <div className="mb-8 border-l-4 border-[#7C3AED] pl-6">
              <p className="text-xl md:text-2xl text-gray-800 font-semibold leading-relaxed mb-2">
                We build simple, functional websites that do one thing only:
              </p>
              <p className="text-xl md:text-2xl text-gray-800 font-semibold leading-relaxed">
                make your business look legitimate and reachable when it matters.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center text-[#7C3AED] hover:text-[#5B21B6] font-semibold transition-colors group"
            >
              Read our full philosophy
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* DISABLED: Right Column - Technical Debt Calculator */}
          {/* <div>
            <TechnicalDebtCalculator />
          </div> */}
        </div>
      </div>
    </section>
  );
}
