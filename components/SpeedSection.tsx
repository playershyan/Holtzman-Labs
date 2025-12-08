import { Section } from "./Section";

export function SpeedSection() {
  return (
    <Section>
      <div className="container grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
        <div className="space-y-4">
          <p className="tag">Why speed matters</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            Launch fast. Capture opportunity.
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Your competitors are online. Every week without a web presence is lost business. I ship
            quickly without compromising quality—combining technical expertise with an understanding
            of business needs.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { title: "Performance first", body: "Optimized images, fonts, and code paths for 95+ Lighthouse." },
            { title: "Built to convert", body: "Clear CTAs, SEO-ready metadata, and mobile-first layouts." },
            { title: "Clarity by design", body: "You get timelines, scope, and expectations documented upfront." },
            { title: "No fluff", body: "Lean stack, minimal JS, and fast hosting on Vercel." },
          ].map((item) => (
            <div key={item.title} className="card p-5">
              <p className="text-sm font-semibold text-slate-700">{item.title}</p>
              <p className="text-sm text-slate-600 mt-2">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

