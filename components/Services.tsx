import { Section } from "./Section";

const services = [
  {
    title: "Business Websites",
    bullets: ["Modern, mobile-optimized sites", "Timeline: 1-2 weeks", "Investment: 75,000-150,000 LKR"],
  },
  {
    title: "Custom Platforms",
    bullets: ["E-commerce, bookings, custom applications", "Timeline: 2-4 weeks", "Investment: 200,000-400,000 LKR"],
  },
  {
    title: "Rush Projects",
    bullets: ["Accelerated timelines available", "Scoped fast with clear milestones", "Let’s talk details"],
  },
];

export function Services() {
  return (
    <Section id="services">
      <div className="container space-y-8">
        <div className="flex flex-col gap-3">
          <p className="tag">What I build</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Services</h2>
          <p className="text-lg text-slate-700 max-w-3xl">
            From fast marketing sites to custom platforms. Every engagement includes responsive design,
            performance tuning, and clear contracts.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="card p-6 space-y-4">
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {service.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

