"use client";

import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("your-formspree-id");

  return (
    <div className="relative">
      {state.succeeded ? (
        <div className="text-center p-4 md:p-8 rounded-lg bg-green-50">
          <h3 className="text-xl md:text-2xl text-green-600 mb-2">
            Message Received!
          </h3>
          <p className="text-green-600 text-sm md:text-base">
            Our technical team will respond within 1 business hour
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div>
            <label className="block text-[var(--foreground)] mb-2 text-sm md:text-base">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-200 border border-gray-300 rounded-lg focus:rounded-[15px] transition-all duration-500 text-sm md:text-base"
              required
            />
          </div>
          
          <div>
            <label className="block text-[var(--foreground)] mb-2 text-sm md:text-base">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-200 border border-gray-300 rounded-lg focus:rounded-[15px] transition-all duration-500 text-sm md:text-base"
            />
          </div>

          <div>
            <label className="block text-[var(--foreground)] mb-2 text-sm md:text-base">
              Email *
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-200 border border-gray-300 rounded-lg focus:rounded-[15px] transition-all duration-500 text-sm md:text-base"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <label className="block text-[var(--foreground)] mb-2 text-sm md:text-base">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-200 border border-gray-300 rounded-lg focus:rounded-[15px] transition-all duration-500 text-sm md:text-base"
            />
          </div>

          <div>
            <label className="block text-[var(--foreground)] mb-2 text-sm md:text-base">
              Message *
            </label>
            <textarea
              name="message"
              className="w-full px-3 md:px-4 py-2 h-50 md:py-3 bg-gray-200 border border-gray-300 rounded-lg focus:rounded-[15px] transition-all duration-500 text-sm md:text-base"
              placeholder="Describe your generator requirements..."
              required
            ></textarea>
          </div>

          <input
            type="hidden"
            name="_subject"
            value="New Generator Inquiry - DieselGen UAE"
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full md:w-auto px-4 md:px-12 py-2 md:py-3 btn-primary shine-effect"
          >
            {state.submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}
    </div>
  );
}