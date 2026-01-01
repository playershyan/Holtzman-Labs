export default function Services() {

  return (
    <section className="px-6 py-12 md:px-16 md:py-20 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Proof</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="max-w-xs">
            <div className="text-lg font-bold">5-day landing pages</div>
            <div className="text-sm text-gray-600 mt-1">Launch fast, get measurable results</div>
          </div>

          <div className="max-w-xs">
            <div className="text-lg font-bold">Fixed price</div>
            <div className="text-sm text-gray-600 mt-1">Clear scope — no surprises</div>
          </div>

          <div className="max-w-xs">
            <div className="text-lg font-bold">Proven</div>
            <div className="text-sm text-gray-600 mt-1">Trusted across multiple successful launches</div>
          </div>
        </div>
      </div>
    </section>
  );
}
