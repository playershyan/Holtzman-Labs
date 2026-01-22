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
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Built on Principle, Not Compromise
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We don't just write code—we architect solutions. When a requirement
              threatens stability, security, or scalability, we push back with
              superior alternatives. We're your technical partner, not a passive vendor.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] flex items-center justify-center text-white text-sm font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-black">Direct Expertise</h3>
                  <p className="text-sm text-gray-600">
                    Work with senior engineers, no middlemen
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] flex items-center justify-center text-white text-sm font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-black">Zero Bloat</h3>
                  <p className="text-sm text-gray-600">
                    Clean code that minimizes costs, maximizes speed
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] flex items-center justify-center text-white text-sm font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-black">Ownership</h3>
                  <p className="text-sm text-gray-600">
                    Your product's success is our performance metric
                  </p>
                </div>
              </div>
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
