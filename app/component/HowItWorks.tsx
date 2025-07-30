"use client";

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

// Hook to track if element is in view with threshold
function useIsInView(ref: React.RefObject<Element | null>, threshold = 0.5) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return isInView;
}

export default function HowItWorks() {
  // Create refs once, on initial render
  const stepRefs = useRef(steps.map(() => React.createRef<HTMLDivElement>()));

  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(
    Array(steps.length).fill(false)
  );

  useEffect(() => {
    function checkVisibility() {
      const newVisibleSteps = stepRefs.current.map((ref) => {
        if (!ref.current) return false;
        const rect = ref.current.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
      });
      setVisibleSteps(newVisibleSteps);
    }

    checkVisibility();

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);
    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []); // Empty dependency array so this effect runs only once

  const lastVisibleIndex =
    visibleSteps.lastIndexOf(true) === -1 ? 0 : visibleSteps.lastIndexOf(true);

  const progressHeightPercent = ((lastVisibleIndex + 1) / steps.length) * 100;

  return (
    // ...same as before, but use stepRefs.current[i] instead of stepRefs[i]
    <section className="relative py-32 bg-white text-[var(--foreground)]">
      {/* ...header and other content unchanged */}

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Center line background */}
        <div className="absolute left-1/2 top-0 w-1 h-full -translate-x-1/2 bg-gray-300 z-0 rounded-full" />
        {/* Center line progress */}
        <div
          className="absolute left-1/2 top-0 w-1 -translate-x-1/2 bg-indigo-600 z-10 rounded-full transition-[height] duration-700 ease-out"
          style={{ height: `${progressHeightPercent}%` }}
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
                  className="w-12 h-12 bg-[var(--foreground)] text-[var(--background)] rounded-full flex items-center justify-center mx-auto shadow-lg font-semibold text-lg select-none
                    transition-colors duration-300 ease-in-out z-20
                    hover:bg-indigo-600 hover:text-white
                    focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:bg-indigo-600 focus:text-white
                  "
                >
                  {i + 1}
                </div>

                <div className="lg:w-1/2 p-4" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-40" />
    </section>
  );
}

