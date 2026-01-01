export default function Impact() {
  return (
    <section className="px-6 py-16 md:px-16 md:py-24 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Impact</h2>
          <a href="/contact" className="text-sm text-gray-600 hover:text-gray-900">Start a scoped estimate</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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

        <div className="bg-gray-50 p-6 rounded-lg flex flex-col md:flex-row items-start gap-6">
          <div className="flex-1">
            <div className="text-sm font-semibold text-gray-700">Case spotlight</div>
            <h3 className="text-xl font-bold mt-2">Launch in 7 days — first-week adoption</h3>
            <p className="text-sm text-gray-700 mt-2">We scoped, built, and launched a focused landing flow in one week; the early cohort showed meaningful engagement and faster trial signups.</p>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <a href="/playground" className="mb-2 inline-flex items-center px-4 py-2 gradient-cta text-sm font-semibold">See a live demo</a>
            <a href="/contact" className="text-sm text-gray-600">Request the case brief</a>
          </div>
        </div>
      </div>
    </section>
  )
}
