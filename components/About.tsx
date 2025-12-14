import { Section } from "./Section";

export function About() {
  return (
    <Section id="about">
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Simple, yet effective Web Development for Your Business
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Hi, I&apos;m Shyan. I help businesses get online with professional websites that actually bring in customers.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            No confusing technical jargon. No endless delays. Just clear communication, fair pricing, and websites delivered in 1-2 weeks that you can be proud to share with your customers.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
            <p className="text-slate-800 font-medium mb-2">
              Why work with me?
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">
              I&apos;m also a law student, which means I understand the importance of clear agreements and keeping my word. When I give you a timeline and a price, you can count on it. No surprises, no hidden fees.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="card p-6 bg-white/90">
            <h3 className="text-lg font-bold text-slate-900 mb-4">How It Works</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">We Talk</p>
                  <p className="text-xs text-slate-600 mt-1">Tell me about your business and what you need</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">I Give You a Quote</p>
                  <p className="text-xs text-slate-600 mt-1">Clear pricing and timeline—no hidden costs</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">I Build Your Site</p>
                  <p className="text-xs text-slate-600 mt-1">Fast delivery in 1-2 weeks</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">You Get Customers</p>
                  <p className="text-xs text-slate-600 mt-1">Your professional website starts working for you</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-6 bg-gradient-to-br from-slate-50 to-white">
            <div className="text-center">
              <p className="text-sm font-semibold text-slate-700 mb-2">Working Remotely</p>
              <p className="text-lg font-bold text-slate-900 mb-3">Serving Businesses Worldwide</p>
              <p className="text-xs text-slate-600">
                Remote work means lower costs for you and flexible communication that fits your schedule, no matter where you are
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

