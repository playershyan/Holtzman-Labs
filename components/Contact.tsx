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
      <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          <p className="tag">Let&apos;s build something</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Tell me about your project</h2>
          <p className="text-lg text-slate-700">
            I respond within one business day. Please include your business type and ideal timeline.
          </p>
          <div className="space-y-2 text-sm text-slate-700">
            <p>Email: shyan@holtzmanlabs.lk</p>
            <p>LinkedIn: <a className="text-blue-700 font-semibold" href="https://www.linkedin.com" target="_blank" rel="noreferrer">View profile</a></p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card p-6 space-y-4">
          <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
              Name
              <input
                required
                name="name"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-slate-400 focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
              Email
              <input
                required
                type="email"
                name="email"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-slate-400 focus:outline-none"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
            Business / Project Type
            <input
              required
              name="projectType"
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-slate-400 focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
            Message
            <textarea
              required
              name="message"
              rows={4}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-slate-400 focus:outline-none"
            />
          </label>
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold gradient-cta shadow-md transition hover:brightness-110 disabled:opacity-70"
          >
            {status === "loading" ? "Sending..." : "Submit"}
          </button>
          {status === "success" && (
            <p className="text-sm font-medium text-green-700">Thanks! I&apos;ll reply within one business day.</p>
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-red-700">Could not send: {error}</p>
          )}
        </form>
      </div>
    </Section>
  );
}

