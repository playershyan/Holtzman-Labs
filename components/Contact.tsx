"use client";

import { useState, FormEvent } from "react";
import { Section } from "./Section";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unable to send message");
    }
  }

  return (
    <Section id="contact">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Ready to Get Your Business Online?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Let&apos;s talk about your business and how a website can help you grow. I&apos;ll get back to you within one business day with a free quote.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="card p-6 bg-gradient-to-br from-blue-50 to-white">
              <h3 className="font-bold text-slate-900 mb-4 text-lg">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="text-xs font-semibold text-slate-600 mb-1">Email</p>
                    <a href="mailto:info@holtzmanlabs.com" className="text-sm text-blue-700 hover:text-blue-900 font-medium">
                      shyan@holtzmanlabs.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="text-xs font-semibold text-slate-600 mb-1">Phone/WhatsApp</p>
                    <a href="tel:0704379967" className="text-sm text-blue-700 hover:text-blue-900 font-medium">
                      070 437 9967
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏱️</span>
                  <div>
                    <p className="text-xs font-semibold text-slate-600 mb-1">Response Time</p>
                    <p className="text-sm text-slate-700">Within 1 business day</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6 bg-gradient-to-br from-orange-50 to-white border-2 border-orange-100">
              <h3 className="font-bold text-slate-900 mb-3">What Happens Next?</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>I&apos;ll review your information</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>We&apos;ll discuss your needs (call or email)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>You&apos;ll get a clear quote with no hidden fees</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>If you&apos;re happy, we start building!</span>
                </li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card p-6 lg:p-8 space-y-5 bg-white shadow-lg">
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
                Your Name *
                <input
                  required
                  name="name"
                  placeholder="John Perera"
                  className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
                Email Address *
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
              Type of Business *
              <input
                required
                name="projectType"
                placeholder="e.g., Law Firm, Dental Clinic, Restaurant"
                className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
              Tell Me About Your Needs *
              <textarea
                required
                name="message"
                rows={5}
                placeholder="What do you want your website to do? Do you need any specific features like contact forms, photo galleries, online booking, etc.?"
                className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </label>

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-base font-bold gradient-cta shadow-lg transition hover:brightness-110 hover:shadow-xl disabled:opacity-70"
            >
              {status === "loading" ? "Sending..." : "Get My Free Quote →"}
            </button>

            {status === "success" && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm font-medium text-green-800">
                  ✓ Message sent! I&apos;ll get back to you within one business day with your quote.
                </p>
              </div>
            )}
            {status === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm font-medium text-red-800">
                  ✗ Could not send: {error}. Please try emailing me directly at playershyan@gmail.com
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
}

