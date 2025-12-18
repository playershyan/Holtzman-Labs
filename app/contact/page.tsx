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
            {/* Left Column - Info */}
            <div>
              <h1 className="text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl font-bold text-black tracking-tight mb-4 md:mb-6">
                Get in touch
              </h1>
              <p className="text-lg leading-relaxed md:text-xl md:leading-relaxed lg:text-2xl text-gray-700 mb-10 md:mb-12 max-w-xl">
                Ready to start your project? Fill out the form and we'll respond
                within 24 hours.
              </p>

              <div className="space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2">Email</h3>
                  <a
                    href="mailto:hello@holtzmanlabs.com"
                    className="text-[#8B5CF6] hover:text-[#7C3AED] transition-colors text-base md:text-lg"
                  >
                    hello@holtzmanlabs.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2">
                    Typical Response Time
                  </h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Within 24 hours on business days
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold text-black mb-3 md:mb-4">
                    What to expect
                  </h3>
                  <ul className="space-y-2.5 md:space-y-3 text-gray-700 text-base md:text-lg">
                    <li className="flex items-start">
                      <span className="text-[#8B5CF6] mr-2">•</span>
                      <span>Initial consultation call (30 minutes)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#8B5CF6] mr-2">•</span>
                      <span>Custom proposal based on your needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#8B5CF6] mr-2">•</span>
                      <span>Clear timeline and deliverables</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#8B5CF6] mr-2">•</span>
                      <span>Fixed pricing with no surprises</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-gray-50 p-6 md:p-8 lg:p-12">
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
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 text-base border-2 border-gray-300 focus:outline-none focus:border-[#8B5CF6] bg-white transition-colors"
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
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 text-base border-2 border-gray-300 focus:outline-none focus:border-[#8B5CF6] bg-white transition-colors"
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
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 text-base border-2 border-gray-300 focus:outline-none focus:border-[#8B5CF6] bg-white transition-colors"
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
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 text-base border-2 border-gray-300 focus:outline-none focus:border-[#8B5CF6] bg-white resize-none transition-colors"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 md:px-8 md:py-4 text-base md:text-base bg-[#8B5CF6] text-white font-semibold hover:bg-[#7C3AED] transition-colors"
                >
                  Send Message
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
