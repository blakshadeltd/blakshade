"use client";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitting(true);
    setErrors([]);

    const formData = new FormData(e.currentTarget);

    // Honeypot check
    if (formData.get("website")) {
      setErrors(["Bot detected"]);
      setSubmitting(false);
      return;
    }

    if (!captchaToken) {
      setErrors(["Please complete the CAPTCHA"]);
      setSubmitting(false);
      return;
    }

    const data = Object.fromEntries(formData);
    data.turnstileToken = captchaToken;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.ok) {
        setSucceeded(true);
      } else {
        setErrors([result.error || "Failed to send message"]);
      }
    } catch {
      setErrors(["Network error. Please try again."]);
    } finally {
      setSubmitting(false);
    }
  };

  if (succeeded) {
    return (
      <div className="text-center p-4 md:p-8 rounded-lg bg-green-50">
        <h3 className="text-xl md:text-2xl text-green-600 mb-2">Message Received!</h3>
        <p className="text-green-600 text-sm md:text-base">
          Our technical team will respond within 1 business hour
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
      {/* Error messages */}
      {errors.length > 0 && (
        <div className="p-3 bg-red-50 text-red-700 rounded-lg">
          {errors.map((err, idx) => (
            <p key={idx}>{err}</p>
          ))}
        </div>
      )}

      {/* Honeypot field */}
      <input type="text" name="website" autoComplete="off" tabIndex={-1} className="hidden" />

      {/* Name */}
      <div>
        <label className="block text-[var(--foreground)] mb-2 text-sm md:text-base">Full Name *</label>
        <input
          type="text"
          name="name"
          className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 rounded-lg focus:rounded-[15px] transition-all duration-500 text-sm md:text-base"
          required
        />
      </div>

      {/* Company */}
      <div>
        <label className="block text-[var(--foreground)] mb-2 text-sm md:text-base">Company Name</label>
        <input
          type="text"
          name="company"
          className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 rounded-lg focus:rounded-[15px] transition-all duration-500 text-sm md:text-base"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-[var(--foreground)] mb-2 text-sm md:text-base">Email *</label>
        <input
          type="email"
          name="email"
          className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 rounded-lg focus:rounded-[15px] transition-all duration-500 text-sm md:text-base"
          required
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-[var(--foreground)] mb-2 text-sm md:text-base">Phone Number</label>
        <input
          type="tel"
          name="phone"
          className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 rounded-lg focus:rounded-[15px] transition-all duration-500 text-sm md:text-base"
        />
      </div>

      {/* Subject */}
      <div>
        <label className="block text-[var(--foreground)] mb-2 text-sm md:text-base">Subject</label>
        <input
          type="text"
          name="subject"
          className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 rounded-lg focus:rounded-[15px] transition-all duration-500 text-sm md:text-base"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-[var(--foreground)] mb-2 text-sm md:text-base">Message *</label>
        <textarea
          name="message"
          className="w-full px-3 md:px-4 py-2 h-32 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 rounded-lg focus:rounded-[15px] transition-all duration-500 text-sm md:text-base"
          placeholder="Describe your generator requirements..."
          required
        ></textarea>
      </div>

      {/* CAPTCHA + Submit */}
      <div className="flex flex-col md:flex-row md:items-center gap-3 mt-2">
        <button
          type="submit"
          disabled={submitting}
          className="px-6 py-2 md:py-3 btn-primary shine-effect"
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
        <div className="min-h-[70px]">
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY!}
            onSuccess={(token: string) => setCaptchaToken(token)}
            onExpire={() => setCaptchaToken(null)}
            onError={() => setCaptchaToken(null)}
          />
        </div>
      </div>
    </form>
  );
}
