import { Section } from "./Section";

const services = [
  {
    icon: "⚖️",
    title: "Law Firms",
    description: "Professional websites that build trust and attract clients",
    features: [
      "Practice areas & attorney profiles",
      "Client testimonials & case results",
      "Secure contact forms",
      "Mobile-friendly design"
    ],
    price: "Starting at $500"
  },
  {
    icon: "🦷",
    title: "Dental & Medical Practices",
    description: "Clean, welcoming sites that make booking easy",
    features: [
      "Services & treatment information",
      "Meet the team section",
      "Appointment request forms",
      "Before/after galleries"
    ],
    price: "Starting at $450"
  },
  {
    icon: "🍽️",
    title: "Restaurants & Cafes",
    description: "Appetizing websites that bring customers through the door",
    features: [
      "Menu & pricing display",
      "Photo gallery",
      "Hours & location map",
      "Online ordering (if needed)"
    ],
    price: "Starting at $400"
  },
  {
    icon: "🏪",
    title: "Retail & Local Shops",
    description: "Showcase your products and services beautifully",
    features: [
      "Product/service catalog",
      "Photo galleries",
      "Contact & directions",
      "Special offers section"
    ],
    price: "Starting at $425"
  },
  {
    icon: "🏋️",
    title: "Gyms & Fitness Centers",
    description: "Energetic sites that convert visitors into members",
    features: [
      "Class schedules & programs",
      "Trainer profiles",
      "Membership pricing",
      "Sign-up forms"
    ],
    price: "Starting at $475"
  },
  {
    icon: "✨",
    title: "Salons & Spas",
    description: "Beautiful, elegant websites that reflect your brand",
    features: [
      "Service menu & pricing",
      "Portfolio/gallery",
      "Booking information",
      "Staff introductions"
    ],
    price: "Starting at $425"
  },
];

export function Services() {
  return (
    <Section id="services">
      <div className="container space-y-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Who I Help</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            I specialize in building websites for local businesses. Here&apos;s what I can create for you:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="card p-6 space-y-4 hover:shadow-xl transition-all">
              <div className="text-5xl mb-2">{service.icon}</div>
              <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
              <p className="text-sm text-slate-600">{service.description}</p>
              <ul className="space-y-2 text-sm text-slate-700">
                {service.features.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-accent mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-slate-200">
                <p className="text-sm font-bold text-slate-900">{service.price}</p>
                <p className="text-xs text-slate-500 mt-1">Delivered in 1-2 weeks</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card p-8 bg-gradient-to-br from-orange-50 to-white border-2 border-orange-100">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Every Website Includes:
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center">
                <div className="text-3xl mb-2">📱</div>
                <p className="font-semibold text-sm">Works on All Devices</p>
                <p className="text-xs text-slate-600 mt-1">Phone, tablet & desktop</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <p className="font-semibold text-sm">Fast Loading</p>
                <p className="text-xs text-slate-600 mt-1">Quick even on slow connections</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔍</div>
                <p className="font-semibold text-sm">Google Ready</p>
                <p className="text-xs text-slate-600 mt-1">Set up to be found in searches</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🛠️</div>
                <p className="font-semibold text-sm">Easy Updates</p>
                <p className="text-xs text-slate-600 mt-1">I&apos;ll show you how to update content</p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold gradient-cta shadow-lg transition hover:brightness-110"
              >
                Get a Free Quote for Your Business
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

