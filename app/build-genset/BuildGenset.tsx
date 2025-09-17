"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setInitialConfig } from "@/store/gensetSlice";
import { Turnstile } from "@marsidev/react-turnstile";

function RadioBox({
  checked,
  onChange,
  children,
}: {
  checked: boolean;
  onChange: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      onClick={onChange}
      className={`cursor-pointer transition-all
        ${checked ? "btn-primary shine-effect" : "btn-third shine-effect"}
        px-4 py-3 text-center
      `}
    >
      {children}
    </div>
  );
}

function CheckboxOption({
  checked,
  onChange,
  children,
}: {
  checked: boolean;
  onChange: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      onClick={onChange}
      className={`cursor-pointer transition-all rounded-lg border-2 p-4 flex items-center space-x-3
        ${checked
          ? "border-gray-500 bg-gray-50"
          : "border-gray-200 bg-white hover:border-gray-300"
        }
      `}
    >
      <div className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center
        ${checked ? "bg-gray-500 border-gray-500" : "border-gray-400"}
      `}>
        {checked && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span className={`font-normal ${checked ? "text-gray-700" : "text-gray-700"}`}>
        {children}
      </span>
    </div>
  );
}

function BrandPreferenceSection({
  title,
  inputValue,
  onInputChange,
  noPreferenceChecked,
  onNoPreferenceChange,
  placeholder
}: {
  title: string;
  inputValue: string;
  onInputChange: (value: string) => void;
  noPreferenceChecked: boolean;
  onNoPreferenceChange: (checked: boolean) => void;
  placeholder: string;
}) {
  return (
    <div>
      <h3 className="text-lg text-[var(--foreground)] mb-4">{title}</h3>

      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            disabled={noPreferenceChecked}
            placeholder={placeholder}
            className="w-full bg-white rounded-lg p-3 pl-4 pr-4 border border-gray-300 
                      focus:ring-2 focus:ring-[var(--foreground)]/20 focus:border-[var(--foreground)] shadow-sm"
          />
        </div>
      </div>

      <div className="flex items-center">
        <div
          onClick={() => onNoPreferenceChange(!noPreferenceChecked)}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <div className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center
            ${noPreferenceChecked ? "bg-gray-500 border-gray-500" : "border-gray-400"}
          `}>
            {noPreferenceChecked && (
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <span className={`font-normal ${noPreferenceChecked ? "text-gray-700" : "text-gray-700"}`}>
            No Preference
          </span>
        </div>
      </div>
    </div>
  );
}

export default function BuildGenset() {
  const dispatch = useDispatch();
  const [duty, setDuty] = useState<string>("Standby");
  const [phase, setPhase] = useState<string>("Single Phase");
  const [frequency, setFrequency] = useState<string>("50Hz");
  const [applicationType, setApplicationType] = useState<string>("Stationary Power");
  const [weather, setWeather] = useState<string>("Normal");
  const [engineBrandInput, setEngineBrandInput] = useState<string>("");
  const [engineNoPreference, setEngineNoPreference] = useState<boolean>(true);
  const [alternatorBrandInput, setAlternatorBrandInput] = useState<string>("");
  const [alternatorNoPreference, setAlternatorNoPreference] = useState<boolean>(true);
  const [exactPower, setExactPower] = useState<string>("");
  const [hasATS, setHasATS] = useState<boolean>(false);
  const [hasExtraFuelTank, setHasExtraFuelTank] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitEnquiry = () => {
    // Save initial configuration to Redux
    dispatch(setInitialConfig({
      duty,
      phase,
      frequency,
      weather,
    }));

    // Show the modal form
    setShowModal(true);
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrors([]);

    // Honeypot check
    if ((e.target as HTMLFormElement).website?.value) {
      setErrors(["Bot detected"]);
      setSubmitting(false);
      return;
    }

    if (!captchaToken) {
      setErrors(["Please complete the CAPTCHA"]);
      setSubmitting(false);
      return;
    }

    const configurationData = {
      duty,
      phase,
      frequency,
      applicationType,
      weather,
      engineBrand: engineNoPreference ? "No Preference" : engineBrandInput,
      alternatorBrand: alternatorNoPreference ? "No Preference" : alternatorBrandInput,
      exactPower,
      hasATS,
      hasExtraFuelTank
    };

    try {
      const res = await fetch("/api/generator-quotation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          configuration: configurationData,
          turnstileToken: captchaToken
        }),
      });

      const result = await res.json();

      if (res.ok && result.ok) {
        setSucceeded(true);
        // Close modal after a short delay
        setTimeout(() => {
          setShowModal(false);
          setFormData({ name: "", company: "", email: "", phone: "", message: "" });
        }, 2000);
      } else {
        setErrors([result.error || "Failed to send enquiry"]);
      }
    } catch {
      setErrors(["Network error. Please try again."]);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section>
      <div
        className="bg-[var(--foreground)] h-[120px] md:h-[180px] rounded-[30px] mx-4 relative overflow-hidden"
        style={{ background: "linear-gradient(90deg, var(--foreground), var(--hover))" }}
      >
        <div className="container h-full flex items-end pb-4">
          <h1 className="text-white text-3xl md:text-4xl max-w-3xl">
            Build Your Custom Power Solution
          </h1>
        </div>
      </div>

      <div className="container mx-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Specifications */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-8">
              <div className="bg-[var(--background)] p-3 rounded-xl mr-4">
                <svg className="w-8 h-8 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-normal text-[var(--foreground)]">Technical Specifications</h2>
                <p className="text-gray-600">Define your power requirements</p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Duty Section */}
              <div>
                <h3 className="text-lg font-normal text-[var(--foreground)] mb-4">Generator Set Duty</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Standby", "Prime"].map((opt) => (
                    <RadioBox
                      key={opt}
                      checked={duty === opt}
                      onChange={() => setDuty(opt)}
                    >
                      {opt}
                    </RadioBox>
                  ))}
                </div>
              </div>

              {/* Phase Section */}
              <div>
                <h3 className="text-lg font-normal text-[var(--foreground)] mb-4">Phase</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Single Phase", "Three Phase"].map((opt) => (
                    <RadioBox
                      key={opt}
                      checked={phase === opt}
                      onChange={() => setPhase(opt)}
                    >
                      {opt}
                    </RadioBox>
                  ))}
                </div>
              </div>

              {/* Frequency Section */}
              <div>
                <h3 className="text-lg font-normal text-[var(--foreground)] mb-4">Frequency (Hz)</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["50Hz", "60Hz"].map((opt) => (
                    <RadioBox
                      key={opt}
                      checked={frequency === opt}
                      onChange={() => setFrequency(opt)}
                    >
                      {opt}
                    </RadioBox>
                  ))}
                </div>
              </div>

              {/* Weather Section */}
              <div>
                <h3 className="text-lg font-normal text-[var(--foreground)] mb-4">Environment</h3>
                <div className="grid grid-cols-3 gap-4">
                  {["Hot", "Cold", "Normal"].map((opt) => (
                    <RadioBox
                      key={opt}
                      checked={weather === opt}
                      onChange={() => setWeather(opt)}
                    >
                      {opt}
                    </RadioBox>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Hot: above 40°C, Cold: below 10°C, Normal: 10-40°C
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Configuration */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-8">
              <div className="bg-[var(--background)] p-3 rounded-xl mr-4">
                <svg className="w-8 h-8 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-normal text-[var(--foreground)]">Configuration</h2>
                <p className="text-gray-600">Customize your generator setup</p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Application Type */}
              <div>
                <h3 className="text-lg font-normal text-[var(--foreground)] mb-4">Application Type</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Stationary Power", "Mobile Power"].map((type) => (
                    <RadioBox
                      key={type}
                      checked={applicationType === type}
                      onChange={() => setApplicationType(type)}
                    >
                      {type}
                    </RadioBox>
                  ))}
                </div>
              </div>

              {/* Engine Brand Preference */}
              <BrandPreferenceSection
                title="Engine Brand Preference"
                inputValue={engineBrandInput}
                onInputChange={setEngineBrandInput}
                noPreferenceChecked={engineNoPreference}
                onNoPreferenceChange={(checked) => {
                  setEngineNoPreference(checked);
                  if (checked) setEngineBrandInput("");
                }}
                placeholder="e.g., Cummins, Perkins, Volvo, etc."
              />

              {/* Alternator Brand Preference */}
              <BrandPreferenceSection
                title="Alternator Brand Preference"
                inputValue={alternatorBrandInput}
                onInputChange={setAlternatorBrandInput}
                noPreferenceChecked={alternatorNoPreference}
                onNoPreferenceChange={(checked) => {
                  setAlternatorNoPreference(checked);
                  if (checked) setAlternatorBrandInput("");
                }}
                placeholder="e.g., Stamford, Leroy Somer, Mecc Alte, etc."
              />

              {/* Exact Power Requirement */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-normal text-[var(--foreground)] mb-3">Exact Power Requirement</h3>
                <p className="text-[var(--foreground)]/80 mb-4">
                  Know your exact power need? Enter it below:
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-full">
                    <input
                      type="text"
                      inputMode="numeric"
                      value={exactPower}
                      onChange={(e) => {
                        const onlyNumbers = e.target.value.replace(/\D/g, "");
                        setExactPower(onlyNumbers);
                      }}
                      className="w-full bg-white rounded-lg p-3 pl-4 pr-12 border border-gray-300 
                                focus:ring-2 focus:ring-gray-500 focus:border-transparent shadow-sm 
                                [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="Enter kVA"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--foreground)] font-normal">
                      kVA
                    </span>
                  </div>
                </div>
              </div>

              {/* Additional Options */}
              <div>
                <h3 className="text-lg font-normal text-[var(--foreground)] mb-4">Additional Options</h3>
                <div className="space-y-4">
                  <CheckboxOption
                    checked={hasATS}
                    onChange={() => setHasATS(!hasATS)}
                  >
                    Automatic Transfer Switch (ATS)
                  </CheckboxOption>
                  <CheckboxOption
                    checked={hasExtraFuelTank}
                    onChange={() => setHasExtraFuelTank(!hasExtraFuelTank)}
                  >
                    Extra Fuel Tank
                  </CheckboxOption>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmitEnquiry}
                className="btn-primary shine-effect w-full px-8 py-4 rounded-xl text-[var(--background)] text-lg font-normal mt-6"
              >
                Request Quotation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Customer Details */}
      {showModal && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setShowModal(false)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-8 max-w-md w-full mx-4 animate-slide-up">
              {succeeded ? (
                <div className="text-center p-4 md:p-8 rounded-lg bg-green-50">
                  <h3 className="text-xl md:text-2xl text-green-600 mb-2">Enquiry Received!</h3>
                  <p className="text-green-600 text-sm md:text-base">
                    Our technical team will respond within 1 business hour
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-normal text-[var(--foreground)]">Contact Details</h2>
                    <button
                      onClick={() => setShowModal(false)}
                      className="text-gray-500 hover:text-gray-700 cursor-pointer"
                    >
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <p className="text-gray-600 mb-6">Please provide your details so we can prepare your quotation</p>

                  {/* Error messages */}
                  {errors.length > 0 && (
                    <div className="p-3 bg-red-50 text-red-700 rounded-lg mb-4">
                      {errors.map((err, idx) => (
                        <p key={idx}>{err}</p>
                      ))}
                    </div>
                  )}

                  <form onSubmit={handleModalSubmit} className="space-y-4">
                    {/* Honeypot field */}
                    <input type="text" name="website" autoComplete="off" tabIndex={-1} className="hidden" />

                    <div>
                      <label htmlFor="name" className="block text-[var(--foreground)] mb-2 text-sm md:text-base">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-200 border border-gray-300 rounded-lg focus:rounded-[15px] transition-all duration-500 text-sm md:text-base"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-[var(--foreground)] mb-2 text-sm md:text-base">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-200 border border-gray-300 rounded-lg focus:rounded-[15px] transition-all duration-500 text-sm md:text-base"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[var(--foreground)] mb-2 text-sm md:text-base">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-200 border border-gray-300 rounded-lg focus:rounded-[15px] transition-all duration-500 text-sm md:text-base"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-[var(--foreground)] mb-2 text-sm md:text-base">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-200 border border-gray-300 rounded-lg focus:rounded-[15px] transition-all duration-500 text-sm md:text-base"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[var(--foreground)] mb-2 text-sm md:text-base">
                        Additional Requirements
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-200 border border-gray-300 rounded-lg focus:rounded-[15px] transition-all duration-500 text-sm md:text-base"
                        placeholder="Any special requirements or questions..."
                      />
                    </div>

                    {/* CAPTCHA */}
                    <div className="min-h-[70px]">
                      <Turnstile
                        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY!}
                        onSuccess={(token: string) => setCaptchaToken(token)}
                        onExpire={() => setCaptchaToken(null)}
                        onError={() => setCaptchaToken(null)}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary shine-effect w-full px-8 py-3 rounded-xl text-[var(--background)] mt-4 font-normal"
                    >
                      {submitting ? "Submitting..." : "Submit Enquiry"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
}