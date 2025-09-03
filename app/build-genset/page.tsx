"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setInitialConfig } from "@/store/gensetSlice";

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
          ? "border-blue-500 bg-blue-50" 
          : "border-gray-200 bg-white hover:border-blue-300"
        }
      `}
    >
      <div className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center
        ${checked ? "bg-blue-500 border-blue-500" : "border-gray-400"}
      `}>
        {checked && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span className={`font-medium ${checked ? "text-blue-700" : "text-gray-700"}`}>
        {children}
      </span>
    </div>
  );
}

export default function GeneratorQuotationPage() {
  const dispatch = useDispatch();
  const [duty, setDuty] = useState<string>("Standby");
  const [phase, setPhase] = useState<string>("Single Phase");
  const [frequency, setFrequency] = useState<string>("50Hz");
  const [applicationType, setApplicationType] = useState<string>("Stationary Power");
  const [weather, setWeather] = useState<string>("Normal");
  const [engineBrand, setEngineBrand] = useState<string>("");
  const [alternatorBrand, setAlternatorBrand] = useState<string>("");
  const [exactPower, setExactPower] = useState<string>("");
  const [hasATS, setHasATS] = useState<boolean>(false);
  const [hasExtraFuelTank, setHasExtraFuelTank] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", {
      ...formData,
      configuration: { 
        duty, 
        phase, 
        frequency, 
        applicationType, 
        weather, 
        engineBrand, 
        alternatorBrand,
        exactPower,
        hasATS,
        hasExtraFuelTank
      }
    });
    
    // Close modal and reset form
    setShowModal(false);
    setFormData({ name: "", company: "", email: "", message: "" });
    
    // Show success message
    alert("Thank you for your enquiry! We'll contact you shortly.");
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
    <div className="min-h-screen bg-gradient-to-br from-[var(--background)] to-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Specifications */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl text-[var(--foreground)]">Technical Specifications</h2>
              <div className="w-12 h-12 rounded-full bg-[var(--background)] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

            <div className="space-y-8">
              {/* Duty Section */}
              <div>
                <h3 className="text-lg text-[var(--foreground)] mb-4">Generator Set Duty</h3>
                <div className="flex gap-4">
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
                <h3 className="text-lg text-[var(--foreground)] mb-4">Phase</h3>
                <div className="flex gap-4">
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
                <h3 className="text-lg text-[var(--foreground)] mb-4">Frequency (Hz)</h3>
                <div className="flex gap-4">
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
                <h3 className="text-lg text-[var(--foreground)] mb-4">Environment</h3>
                <div className="flex gap-4">
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
              {/* Additional Options */}
              <div>
                <h3 className="text-lg text-[var(--foreground)] mb-4">Additional Options</h3>
                <div className="space-y-3">
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
            </div>
          </div>

          {/* Right Column - Configuration */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl text-[var(--foreground)]">Configuration</h2>
              <div className="w-12 h-12 rounded-full bg-[var(--background)] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>

            <div className="space-y-8">
              {/* Application Type */}
              <div>
                <h3 className="text-lg text-[var(--foreground)] mb-4">Application Type</h3>
                <div className="flex gap-4">
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

              {/* Engine Brand */}
              <div>
                <h3 className="text-lg text-[var(--foreground)] mb-4">Engine Brand Preference</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Cummins", "Perkins", "Volvo", "MTU", "Doosan", "No Preference"].map((brand) => (
                    <RadioBox
                      key={brand}
                      checked={engineBrand === brand}
                      onChange={() => setEngineBrand(brand)}
                    >
                      {brand}
                    </RadioBox>
                  ))}
                </div>
              </div>

              {/* Alternator Brand */}
              <div>
                <h3 className="text-lg text-[var(--foreground)] mb-4">Alternator Brand Preference</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Stamford", "Leroy Somer", "Mecc Alte", "Marathon", "No Preference"].map((brand) => (
                    <RadioBox
                      key={brand}
                      checked={alternatorBrand === brand}
                      onChange={() => setAlternatorBrand(brand)}
                    >
                      {brand}
                    </RadioBox>
                  ))}
                </div>
              </div>

              {/* Exact Power Requirement */}
              <div className="bg-[var(--background)] rounded-xl p-6 border border-[var(--foreground)]/10">
                <h3 className="text-lg text-[var(--foreground)] mb-3">Exact Power Requirement</h3>
                <p className="text-[var(--foreground)]/80 mb-4">
                  Know your exact power need? Enter it below:
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-[40%]">
                    <input
                      type="text"
                      inputMode="numeric"
                      value={exactPower}
                      onChange={(e) => {
                        const onlyNumbers = e.target.value.replace(/\D/g, "");
                        setExactPower(onlyNumbers);
                      }}
                      className="w-full bg-white rounded-lg p-3 pl-4 pr-12 border border-gray-300 
                                focus:ring-2 focus:ring-[var(--foreground)]/20 focus:border-[var(--foreground)] shadow-sm 
                                [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--foreground)]">
                      kVA
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                className="btn-primary shine-effect w-full px-8 py-4 rounded-xl text-[var(--background)] text-lg font-semibold"
              >
                Request Quotation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Customer Details */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl text-[var(--foreground)]">Contact Details</h2>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleModalSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--foreground)] focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--foreground)] focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--foreground)] focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--foreground)] focus:border-transparent"
                />
              </div>
              
              <button
                type="submit"
                className="btn-primary shine-effect w-full px-8 py-3 rounded-xl text-[var(--background)] mt-4"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
    </section>
  );
}