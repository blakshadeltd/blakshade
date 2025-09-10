"use client";

import Link from "next/link";
import React from "react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Choose or Build",
    content:
      "Use our Build Genset Tool to configure a generator or browse our catalog for ready-made options.",
  },
  {
    title: "Request a Quotation",
    content:
      "Submit your selected build or product. Our team will quickly review and send you a detailed quotation.",
  },
  {
    title: "Confirm & Production",
    content:
      "Once approved, we begin building your generator using premium components — tested for performance and quality.",
  },
  {
    title: "Delivered Globally",
    content:
      "After final inspection, your generator is safely packaged and delivered straight to your location — worldwide.",
  },
];

export default function HowItWorks() {
  const stepRefs = useRef(steps.map(() => React.createRef<HTMLDivElement>()));
  const circleRefs = useRef(steps.map(() => React.createRef<HTMLDivElement>()));
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(
    Array(steps.length).fill(false)
  );
  const [progressHeight, setProgressHeight] = useState(0);
  const [progressTop, setProgressTop] = useState(0);

  useEffect(() => {
    function updateProgress() {
      if (!containerRef.current) return;
      
      // Get positions of the first and last circles
      const firstCircle = circleRefs.current[0].current;
      const lastCircle = circleRefs.current[steps.length - 1].current;
      
      if (!firstCircle || !lastCircle) return;
      
      const firstRect = firstCircle.getBoundingClientRect();
      const lastRect = lastCircle.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      
      // Calculate top position relative to container
      const top = firstRect.top + firstRect.height / 2 - containerRect.top;
      // Calculate height based on distance between first and last circles
      const height = lastRect.bottom - firstRect.top - firstRect.height / 2;
      
      setProgressTop(top);
      setProgressHeight(height);
    }

    function checkVisibility() {
      const newVisibleSteps = stepRefs.current.map((ref) => {
        if (!ref.current) return false;
        const rect = ref.current.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
      });
      setVisibleSteps(newVisibleSteps);
      updateProgress();
    }

    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);
    
    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);

  const lastVisibleIndex =
    visibleSteps.lastIndexOf(true) === -1 ? 0 : visibleSteps.lastIndexOf(true);
  
  // Calculate visible progress height based on last visible step
  const visibleProgressHeight = (() => {
    if (lastVisibleIndex === 0) return 0;
    
    const firstCircle = circleRefs.current[0].current;
    const lastVisibleCircle = circleRefs.current[lastVisibleIndex].current;
    
    if (!firstCircle || !lastVisibleCircle) return 0;
    
    const firstRect = firstCircle.getBoundingClientRect();
    const lastRect = lastVisibleCircle.getBoundingClientRect();
    
    return lastRect.top + lastRect.height / 2 - firstRect.top - firstRect.height / 2;
  })();

  return (
    <section className="relative py-32 bg-[var(--background)] text-[var(--foreground)]">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-4">How It Works</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Our simple four-step process to get your perfect generator
          </p>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4" ref={containerRef}>
        {/* Full background line */}
        <div 
          className="absolute left-1/2 top-0 w-1 h-full -translate-x-1/2 bg-gray-300 z-0 rounded-full"
          style={{ top: `${progressTop}px`, height: `${progressHeight}px` }}
        />
        
        {/* Progress line */}
        <div
          className="absolute left-1/2 w-1 -translate-x-1/2 bg-[var(--foreground)] z-10 rounded-full transition-all duration-700 ease-out"
          style={{ 
            top: `${progressTop}px`, 
            height: `${visibleProgressHeight}px` 
          }}
        />

        <div className="flex flex-col gap-24 relative z-20">
          {steps.map((step, i) => {
            const isRight = i % 2 === 1;
            const cardRef = stepRefs.current[i];
            const isVisible = visibleSteps[i];

            return (
              <div
                key={i}
                className={`flex flex-col lg:flex-row items-center ${
                  isRight ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`lg:w-1/2 p-4 ${
                    isRight ? "text-left pl-6" : "text-right pr-6"
                  }`}
                >
                  <div
                    tabIndex={0}
                    ref={cardRef}
                    className={`bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto
                      transform transition-all duration-700 ease-out
                      ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10"
                      }
                      hover:shadow-xl hover:scale-[1.02]
                    `}
                    style={{ willChange: "opacity, transform" }}
                  >
                    <h3
                      className="text-2xl mb-3 text-[var(--foreground)] leading-snug
                      transition-colors duration-300 ease-in-out"
                    >
                      {step.title}
                    </h3>
                    <p className="text-base text-[var(--foreground)] leading-relaxed tracking-wide transition-colors duration-300">
                      {step.content}
                    </p>
                  </div>
                </div>

                <div
                  tabIndex={0}
                  ref={circleRefs.current[i]}
                  className="w-12 h-12 bg-[var(--foreground)] text-[var(--background)] rounded-full flex items-center justify-center mx-auto shadow-lg text-lg select-none
                    transition-colors duration-300 ease-in-out z-20"
                >
                  {i + 1}
                </div>

                <div className="lg:w-1/2 p-4" />
              </div>
            );
          })}
        </div>
      </div>
{/* CTA Section */}
      <div className="container mx-auto mt-20 text-center">
        <div className="bg-gradient-to-r from-[var(--foreground)] to-[var(--hover)] text-white p-8 md:p-12 rounded-2xl mx-auto shadow-lg">
          <h3 className="text-2xl md:text-3xl mb-4">Ready to Get Started?</h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Begin your journey to reliable power solutions with our easy process.
          </p>
          <Link
            href="/build-genset"
            className="inline-flex items-center px-6 py-3 bg-white text-[var(--foreground)] rounded-[10px] hover:rounded-[15px] transition-all duration-300"
          >
            Design Your Generator
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-20" />
    </section>
  );
}