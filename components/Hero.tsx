export function Hero() {
  return (
    <div className="container pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="pt-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 mb-6">
            Your Customers Are Searching Online.
            <span className="block text-accent mt-2">Are They Finding You?</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 max-w-2xl mb-6 leading-relaxed">
            In today&apos;s world, your website is your storefront. It&apos;s where customers decide whether to trust you—before they ever walk through your door.
          </p>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mb-8">
            I help law firms, dental practices, restaurants, and local businesses build the online presence they deserve. Professional, trustworthy websites that bring in more clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold gradient-cta shadow-lg transition hover:brightness-110 hover:shadow-xl"
            >
              Get Your Free Quote
            </a>
            <a
              href="#why-website"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-slate-900 ring-2 ring-slate-300 bg-white/80 backdrop-blur hover:-translate-y-0.5 transition"
            >
              Why You Need a Website
            </a>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="tag">✓ Fast Delivery (1-2 Weeks)</span>
            <span className="tag">✓ Works on All Devices</span>
            <span className="tag">✓ No Technical Knowledge Needed</span>
          </div>
        </div>
        <div className="relative pt-8">
          <div className="card p-6 sm:p-8 bg-gradient-to-br from-white to-slate-50">
            <p className="text-sm font-bold text-accent mb-4 uppercase tracking-wide">The Reality Check</p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="font-semibold text-slate-900">85% of customers</p>
                  <p className="text-sm text-slate-600">search online before choosing a business</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🔍</span>
                <div>
                  <p className="font-semibold text-slate-900">First impressions matter</p>
                  <p className="text-sm text-slate-600">A professional website builds instant credibility</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">⏰</span>
                <div>
                  <p className="font-semibold text-slate-900">24/7 marketing</p>
                  <p className="text-sm text-slate-600">Your website works while you sleep</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="font-semibold text-slate-900">Beat the competition</p>
                  <p className="text-sm text-slate-600">Many local businesses still don&apos;t have a proper website</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

