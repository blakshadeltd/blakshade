"use client";

import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
    const [state, handleSubmit] = useForm("your-formspree-id");

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="bg-gray-300 h-[100px] md:h-[180px] rounded-[30px] mx-4 relative overflow-hidden">
                <div className="container absolute inset-0 flex items-end justify-start">
                    <h1 className="text-[var(--foreground)] mb-4 text-2xl md:text-3xl lg:text-4xl">
                        Contact Us
                    </h1>
                </div>
            </div>

            {/* Content Container */}
            <div className="container mx-auto py-8">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 bg-[var(--background)] rounded-lg p-4 md:p-8">
                    {/* Contact Information */}
                    <div className="space-y-4 md:space-y-6 md:border-r md:border-gray-200 pb-6 md:pb-0 md:pr-8">
                        <div>
                            <h3 className="text-lg md:text-xl mb-3 md:mb-4 text-[var(--foreground)]">
                                Head Office
                            </h3>
                            <p className="text-sm md:text-base">
                                DieselGen Middle East<br />
                                Warehouse Complex 45<br />
                                Jebel Ali Free Zone<br />
                                Dubai, UAE
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg md:text-xl mb-2 text-[var(--foreground)]">
                                24/7 Support
                            </h3>
                            <p className="text-sm md:text-base">
                                📞 +971 4 278 3400<br />
                                📧 emergency@dieselgen.ae
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg md:text-xl mb-2 text-[var(--foreground)]">
                                Business Hours
                            </h3>
                            <p className="text-sm md:text-base">
                                Saturday - Thursday: 8AM - 6PM<br />
                                Friday: Closed
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
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
                                        className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm md:text-base"
                                        placeholder="Ahmed Al-Maktoum"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-[var(--foreground)] mb-2 text-sm md:text-base">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm md:text-base"
                                        placeholder="ahmed@company.ae"
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
                                        className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm md:text-base"
                                        placeholder="+971 50 123 4567"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[var(--foreground)] mb-2 text-sm md:text-base">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 h-32 text-sm md:text-base"
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
                                    className="w-full md:w-auto px-4 md:px-6 py-2 md:py-3 rounded-[10px] font-normal shadow-md transition-all duration-500 ease-in-out bg-[var(--foreground)] text-[var(--background)] text-sm md:text-base shine-effect hover:rounded-[15px] hover:bg-[var(--hover)] cursor-pointer"
                                >
                                    {state.submitting ? 'Submitting...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}