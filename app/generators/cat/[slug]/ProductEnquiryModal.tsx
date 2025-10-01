"use client";

import { useState } from "react";

interface ProductEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productTitle: string;
}

export default function ProductEnquiryModal({
  isOpen,
  onClose,
  productTitle,
}: ProductEnquiryModalProps) {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

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

    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.ok) {
        setSucceeded(true);
        setTimeout(() => {
          onClose();
          setSucceeded(false);
        }, 2000);
      } else {
        setErrors([result.error || "Failed to send message"]);
      }
    } catch {
      setErrors(["Network error. Please try again."]);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-8 max-w-md w-full mx-auto animate-slide-up relative">
          {succeeded ? (
            <div className="text-center p-4 md:p-8 rounded-lg bg-green-50">
              <h3 className="text-xl md:text-2xl text-green-600 mb-2">
                Enquiry Received!
              </h3>
              <p className="text-green-600 text-sm md:text-base">
                Our technical team will respond within 1 business hour
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-normal text-[var(--foreground)]">
                  Product Enquiry
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              {/* Error messages */}
              {errors.length > 0 && (
                <div className="p-3 bg-red-50 text-red-700 rounded-lg mb-4">
                  {errors.map((err, idx) => (
                    <p key={idx}>{err}</p>
                  ))}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field */}
                <input
                  type="text"
                  name="website"
                  autoComplete="off"
                  tabIndex={-1}
                  className="hidden"
                />

                {/* Hidden product field */}
                <input type="hidden" name="product" value={productTitle} />

                {/* Name */}
                <div>
                  <label className="block text-[var(--foreground)] mb-2 text-sm">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 rounded-lg focus:rounded-[15px] transition-all duration-500 text-sm md:text-base"
                    required
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-[var(--foreground)] mb-2 text-sm">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 rounded-lg focus:rounded-[15px] transition-all duration-500 text-sm md:text-base"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[var(--foreground)] mb-2 text-sm">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 rounded-lg focus:rounded-[15px] transition-all duration-500 text-sm md:text-base"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[var(--foreground)] mb-2 text-sm">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 rounded-lg focus:rounded-[15px] transition-all duration-500 text-sm md:text-base"
                  />
                </div>

                {/* Product Interest */}
                <div>
                  <label className="block text-[var(--foreground)] mb-2 text-sm">
                    Product Interest
                  </label>
                  <input
                    type="text"
                    name="product-interest"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 rounded-lg focus:rounded-[15px] transition-all duration-500 text-sm md:text-base"
                    value={productTitle}
                    readOnly
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[var(--foreground)] mb-2 text-sm">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    className="w-full px-4 py-3 h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 rounded-lg focus:rounded-[15px] transition-all duration-500 text-sm md:text-base"
                    placeholder="Describe your generator requirements..."
                    required
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-6 py-3 bg-[var(--foreground)] text-white rounded-lg hover:opacity-90 disabled:opacity-50 mt-4"
                >
                  {submitting ? "Submitting..." : "Submit Enquiry"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
