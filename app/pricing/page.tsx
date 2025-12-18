import Link from "next/link";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Pricing() {
  const services = [
    {
      name: "Landing Page",
      price: "$2,500",
      delivery: "5 business days",
      features: [
        "Single high-converting page",
        "Mobile responsive design",
        "Contact form integration",
        "Basic SEO optimization",
        "Performance optimization",
        "Unlimited revisions",
        "30-day support included",
      ],
    },
    {
      name: "Static Website",
      price: "$5,000",
      delivery: "2 weeks",
      features: [
        "Up to 7 pages",
        "Mobile responsive design",
        "Contact form integration",
        "Full SEO optimization",
        "Performance optimization",
        "CMS setup (optional)",
        "Unlimited revisions",
        "60-day support included",
      ],
      highlighted: true,
    },
    {
      name: "Website Redesign",
      price: "$4,000",
      delivery: "10 business days",
      features: [
        "Complete visual refresh",
        "Mobile responsive design",
        "Improved user experience",
        "Full SEO optimization",
        "Performance optimization",
        "Content migration",
        "Unlimited revisions",
        "60-day support included",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Pricing Section */}
        <section className="px-6 py-12 md:px-16 md:py-24 lg:px-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl font-bold text-black tracking-tight mb-4 md:mb-6">
              Pricing
            </h1>
            <p className="text-lg leading-relaxed md:text-xl md:leading-relaxed lg:text-2xl text-gray-700 mb-12 md:mb-16 max-w-3xl">
              Fixed-price packages designed for small businesses. Fast delivery,
              unlimited revisions, no surprises.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.name}
                  className={`p-6 md:p-8 border-2 ${
                    service.highlighted
                      ? "border-[#8B5CF6] bg-purple-50"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <h2 className="text-xl leading-tight md:text-2xl font-bold text-black mb-2 md:mb-3">
                    {service.name}
                  </h2>
                  <div className="text-3xl md:text-4xl font-bold text-black mb-1 md:mb-2">
                    {service.price}
                  </div>
                  <div className="text-base md:text-base text-gray-600 mb-6 md:mb-8">
                    {service.delivery}
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-6 md:mb-8">
                    <div className="space-y-2.5 md:space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <Check
                            size={18}
                            className="text-[#8B5CF6] mt-0.5 flex-shrink-0 md:w-5 md:h-5"
                          />
                          <span className="text-sm md:text-base text-gray-700 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className={`block text-center px-8 py-4 font-semibold transition-colors ${
                      service.highlighted
                        ? "bg-[#8B5CF6] text-white hover:bg-[#7C3AED]"
                        : "border-2 border-black text-black hover:bg-gray-50"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="px-6 py-16 md:px-16 md:py-24 lg:px-24 bg-black text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl font-bold tracking-tight mb-12 md:mb-16">How it works</h2>
            <div className="space-y-6 md:space-y-8 text-base md:text-lg">
              <div>
                <span className="text-white font-bold text-lg md:text-xl">1. Discovery</span>
                <p className="text-gray-300 mt-1.5 md:mt-2 leading-relaxed text-base md:text-lg">
                  We discuss your business, goals, and requirements in a 30-minute call
                </p>
              </div>
              <div>
                <span className="text-white font-bold text-lg md:text-xl">2. Design</span>
                <p className="text-gray-300 mt-1.5 md:mt-2 leading-relaxed text-base md:text-lg">
                  We create initial designs based on your brand and preferences
                </p>
              </div>
              <div>
                <span className="text-white font-bold text-lg md:text-xl">3. Development</span>
                <p className="text-gray-300 mt-1.5 md:mt-2 leading-relaxed text-base md:text-lg">
                  We build your site with clean code and modern standards
                </p>
              </div>
              <div>
                <span className="text-white font-bold text-lg md:text-xl">4. Refinement</span>
                <p className="text-gray-300 mt-1.5 md:mt-2 leading-relaxed text-base md:text-lg">
                  Unlimited revisions until you're completely satisfied
                </p>
              </div>
              <div>
                <span className="text-white font-bold text-lg md:text-xl">5. Launch</span>
                <p className="text-gray-300 mt-1.5 md:mt-2 leading-relaxed text-base md:text-lg">
                  We deploy your site and provide training and documentation
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
