export default function Services() {

  return (
    <section className="px-6 py-12 md:px-16 md:py-20 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Proof</h2>

        <div className="metric-grid mb-6">
          <div className="metric">
            <div className="value">5 days</div>
            <div className="label">Typical landing page delivery</div>
          </div>

          <div className="metric">
            <div className="value">+32%</div>
            <div className="label">Median conversion lift after launch</div>
          </div>

          <div className="metric">
            <div className="value">100%</div>
            <div className="label">On-time delivery rate</div>
          </div>
        </div>

        <div className="text-sm text-gray-600">Trusted by teams who ship fast and measure impact</div>
        <div className="mt-4">
          <ClientLogos />
        </div>

        <div className="mt-6 text-sm text-gray-600">
          Want this level of speed and clarity? <a href="/contact" className="text-[#8B5CF6] font-semibold">Start a scoped estimate</a>
        </div>
      </div>
    </section>
  );
}
