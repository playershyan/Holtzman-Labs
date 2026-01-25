"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry. We will respond within 24 hours.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="px-6 py-12 md:px-16 md:py-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
            {/* Left Column - Info (condensed) */}
            <div>
              <h1 className="text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl font-bold text-black tracking-tight mb-4 md:mb-6">
                Start a scoped estimate
              </h1>

              <div className="space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">Email</h3>
                  <a
                    href="mailto:hello@holtzmanlabs.com"
                    className="text-[#8B5CF6] hover:text-[#7C3AED] transition-colors text-base md:text-lg"
                  >
                    hello@holtzmanlabs.com
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Phone</h3>
                  <p className="text-gray-800 text-base md:text-lg mb-2">+94 70 437 9967</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://wa.me/94704379967"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8B5CF6] hover:text-[#7C3AED] transition-colors text-base md:text-lg"
                    >
                      Chat on WhatsApp
                    </a>
                    <span className="text-gray-400">•</span>
                    <a
                      href="tel:+94704379967"
                      className="text-[#8B5CF6] hover:text-[#7C3AED] transition-colors text-base md:text-lg"
                    >
                      Call
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">
                    Typical Response Time
                  </h3>
                  <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                    Within 24 hours on business days
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-gray-50 p-6 md:p-8 lg:p-12 rounded-md">
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-1.5 md:mb-2 text-sm md:text-base text-gray-900 font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 text-base border-2 border-gray-300 focus:outline-none focus:border-[#8B5CF6] bg-white transition-colors rounded-md"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1.5 md:mb-2 text-sm md:text-base text-gray-900 font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 text-base border-2 border-gray-300 focus:outline-none focus:border-[#8B5CF6] bg-white transition-colors rounded-md"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block mb-1.5 md:mb-2 text-sm md:text-base text-gray-900 font-medium"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 text-base border-2 border-gray-300 focus:outline-none focus:border-[#8B5CF6] bg-white transition-colors rounded-md"
                  >
                    <option value="">Select a service</option>
                    <option value="landing">Landing Page</option>
                    <option value="website">Static Website</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1.5 md:mb-2 text-sm md:text-base text-gray-900 font-medium"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 text-base border-2 border-gray-300 focus:outline-none focus:border-[#8B5CF6] bg-white resize-none transition-colors rounded-md"
                    placeholder="Briefly: outcome, timeline, budget (optional)"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 md:px-8 md:py-4 text-base md:text-base bg-[var(--color-primary)] text-white font-semibold hover:brightness-105 transition-colors focus-visible:outline-none rounded-md"
                >
                  Request estimate
                </button> 
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
