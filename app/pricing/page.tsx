"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Pricing() {
  const [currency, setCurrency] = useState<"USD" | "LKR">("USD");

  const services = [
    {
      name: "Landing Page",
      priceUSD: "$150 - $250",
      priceLKR: "50K - 75K",
      delivery: "5 days",
      features: [
        "High-converting single page",
        "Mobile-responsive & fast",
        "Contact form + analytics",
      ],
    },
    {
      name: "Static Website",
      priceUSD: "$250 - $500",
      priceLKR: "75K - 150K",
      delivery: "2 weeks",
      features: [
        "Up to 7 pages",
        "SEO & performance",
        "Mobile optimization",
        "Optional CMS",
      ],
      highlighted: true,
    },
    {
      name: "Website Redesign",
      priceUSD: "$300 - $350",
      priceLKR: "85K - 100K",
      delivery: "10 days",
      features: [
        "Design refresh",
        "Improved UX",
        "Mobile optimization",
        "Content migration",
      ],
    },
  ];


  const getPrice = (service: typeof services[0]) => {
    return currency === "USD" ? service.priceUSD : `${service.priceLKR} LKR`;
  };

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
            <p className="text-lg leading-relaxed md:text-xl md:leading-relaxed lg:text-2xl text-gray-800 mb-8 md:mb-12 max-w-3xl">
              Fixed-price packages built for speed and clarity — no surprises.
            </p>

            {/* Currency Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12 md:mb-16">
              <span className={`text-base md:text-lg font-medium ${currency === "USD" ? "text-black" : "text-gray-400"}`}>
                USD
              </span>
              <button
                onClick={() => setCurrency(currency === "USD" ? "LKR" : "USD")}
                className="relative w-14 h-7 md:w-16 md:h-8 bg-gray-200 rounded-full transition-colors duration-300"
              >
                <span
                  className={`absolute top-1 left-1 w-5 h-5 md:w-6 md:h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    currency === "LKR" ? "translate-x-7 md:translate-x-8" : "translate-x-0"
                  }`}
                />
              </button>
              <span className={`text-base md:text-lg font-medium ${currency === "LKR" ? "text-black" : "text-gray-400"}`}>
                LKR
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.name}
                  className={`p-6 md:p-8 border-2 rounded-md ${
                    service.highlighted
                      ? "border-[#8B5CF6] bg-purple-50"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <h2 className="text-xl leading-tight md:text-2xl font-bold text-black mb-2 md:mb-3">
                    {service.name}
                  </h2>
                  <div className="text-3xl md:text-4xl font-bold text-black mb-1 md:mb-2">
                    {getPrice(service)}
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
                          <span className="text-sm md:text-base text-gray-800 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className={`block text-center px-8 py-4 font-semibold transition-colors rounded-md ${
                      service.highlighted
                        ? "bg-[#8B5CF6] text-white hover:bg-[#7C3AED]"
                        : "border-2 border-black text-black hover:bg-gray-50"
                    }`}
                  >
                    Start estimate
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
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="font-bold">1. Discover</div>
                <div className="text-gray-300 mt-1">Quick scoping call — we clear deliverables and timeline</div>
              </div>
              <div>
                <div className="font-bold">2. Deliver</div>
                <div className="text-gray-300 mt-1">Design & build to the agreed scope</div>
              </div>
              <div>
                <div className="font-bold">3. Launch</div>
                <div className="text-gray-300 mt-1">We deploy and hand off with clear docs</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
