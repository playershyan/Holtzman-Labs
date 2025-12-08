export function Hero() {
  return (
    <div className="container pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="pt-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900 mb-6">
            Hi, I&apos;m Shyan Akarsha, founder of Holtzman Labs.
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 max-w-2xl mb-6">
            I build modern websites—fast. Most projects delivered in 1-2 weeks with clear
            communication and clear agreements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold gradient-cta shadow-md transition hover:brightness-110"
            >
              View work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-slate-900 ring-1 ring-slate-300 bg-white/80 backdrop-blur hover:-translate-y-0.5 transition"
            >
              Get quote
            </a>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="tag">1-2 week delivery</span>
            <span className="tag">Next.js + Tailwind</span>
          </div>
        </div>
        <div className="relative pt-8">
          <div className="card p-6 sm:p-8 bg-white/90">
            <p className="text-sm font-semibold text-slate-700 mb-4">Why clients choose speed</p>
            <p className="text-lg text-slate-800 leading-relaxed">
              Your competitors are online. Every week without a modern website is lost business. I
              ship quickly without compromising quality—combining technical expertise with an
              understanding of business needs and contracts.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-2xl font-semibold text-slate-900">95+</p>
                <p className="text-xs text-slate-600">Lighthouse target</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-2xl font-semibold text-slate-900">1-2 wks</p>
                <p className="text-xs text-slate-600">Typical delivery</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-2xl font-semibold text-slate-900">Sri Lanka</p>
                <p className="text-xs text-slate-600">Local focus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

