import { Section } from "./Section";

export function About() {
  return (
    <Section id="about">
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">A developer who keeps agreements clear.</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            I&apos;m a law student with a passion for building digital solutions. I understand both code and the language of agreements—uncommon for developers. This means I can translate business requirements into technical solutions while keeping expectations documented and clear.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            I collaborate with businesses to deliver modern web solutions that actually drive results.
          </p>
        </div>
        <div className="card p-6 space-y-4 bg-white/90">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-700">Based in</p>
              <p className="text-lg font-semibold text-slate-900">Remote</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-700">Typical delivery</p>
              <p className="text-lg font-semibold text-slate-900">1-2 weeks</p>
            </div>
          </div>
          <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-900 mb-2">What to expect</p>
            <ul className="space-y-2">
              <li>• Clear scope, milestones, and agreement up front.</li>
              <li>• Mobile-first design, optimized for 3G connections.</li>
              <li>• SEO metadata, structured data, and fast hosting on Vercel.</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

