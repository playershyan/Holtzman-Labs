import Image from 'next/image'

export default function Impact() {
  return (
    <section className="px-6 py-16 md:px-16 md:py-24 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Impact</h2>
          <a href="/contact" className="text-sm text-gray-600 hover:text-gray-900">Start a scoped estimate</a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <div className="text-lg font-bold">Speed</div>
            <div className="text-sm text-gray-600 mt-1">Launch landing pages in 5 business days</div>
          </div>

          <div className="text-center">
            <div className="text-lg font-bold">Clarity</div>
            <div className="text-sm text-gray-600 mt-1">Fixed price, clear scope, no surprises</div>
          </div>

          <div className="text-center">
            <div className="text-lg font-bold">Results</div>
            <div className="text-sm text-gray-600 mt-1">Designs and code optimized for conversion</div>
          </div>
        </div>

        <div className="case-card grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <div className="meta">Case spotlight</div>
            <h3 className="text-2xl font-bold">Landing flow launched in 7 days — 45% lift</h3>
            <p className="text-sm text-gray-700 mt-2">We scoped and shipped a narrow landing flow in one week; the initial cohort showed a 45% increase in trial signups and faster time-to-first-pay.</p>

            <div className="mt-4 flex gap-3 items-center">
              <div className="px-3 py-1 rounded-full bg-[#eef2ff] text-[#4f46e5] font-semibold">+45% signups</div>
              <div className="px-3 py-1 rounded-full bg-[#f0fdf4] text-[#059669] font-semibold">7-day launch</div>
              <div className="px-3 py-1 rounded-full bg-[#fff7ed] text-[#d97706] font-semibold">A/B tested</div>
            </div>

            <div className="quote mt-4">“They shipped a focused solution in days, not months — we saw conversion gains immediately.”</div>
          </div>

          <div className="md:col-span-1">
            <div className="w-full h-40 relative overflow-hidden rounded-md">
              <Image src="/templates/aurium-one.jpg" alt="Case snapshot" fill className="object-cover" />
            </div>

            <div className="mt-4 flex gap-3">
              <a href="/playground" className="inline-flex items-center px-4 py-2 gradient-cta text-sm font-semibold">See a live demo</a>
              <a href="/contact" className="text-sm text-gray-600">Request case brief</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
