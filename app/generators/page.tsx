"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { FaSlidersH } from "react-icons/fa";
import GeneratorsCard from "@/app/generators/GeneratorsCard";
import Script from "next/script";
import { cummins } from "@/data/generators/cummins/cumminsProducts";
import { cats } from "@/data/generators/cat/catProducts";
import { useSearchParams } from "next/navigation";

/**
 * Improvements in this version:
 * - case-insensitive comparisons (normalize)
 * - sync initial filter values from URL and react to changes
 * - safe image fallback before rendering GeneratorsCard (prevents TS/runtime error)
 * - controlled itemsPerPage select
 */

export default function GeneratorsPage() {
  const searchParams = useSearchParams();

  // helper normalizer
  const norm = (v?: any) => (v === undefined || v === null ? "" : String(v).toLowerCase());

  // Read initial values from URL (safe)
  const initialBrand = searchParams.get("brand") ?? "All";
  const initialEmission = searchParams.get("emission") ?? "All";
  const initialFrequency = searchParams.get("frequency") ?? "All";
  const initialFuelType = searchParams.get("fuelType") ?? "Diesel";
  // If URL contains phase as "Single" or "Three" you may pass exact values; keep default as "All"
  const rawPhase = searchParams.get("phase");
  const initialPhase = rawPhase ? (rawPhase.includes("Phase") ? rawPhase : `${rawPhase} Phase`) : "All";
  const initialBuildType = searchParams.get("buildType") ?? "All";

  // kVA param might be like "100-500"
  const kvaParam = searchParams.get("kva");
  const [kvaMinFromUrl, kvaMaxFromUrl] = kvaParam ? kvaParam.split("-").map((s) => Number(s || 0)) : [0, 3000];

  // Filter states (kept controllable)
  const [selectedBrand, setSelectedBrand] = useState<string>(initialBrand);
  const [selectedEmission, setSelectedEmission] = useState<string>(initialEmission);
  const [selectedFrequency, setSelectedFrequency] = useState<string>(initialFrequency);
  const [selectedFuelType, setSelectedFuelType] = useState<string>(initialFuelType);
  const [selectedPhase, setSelectedPhase] = useState<string>(initialPhase);
  const [selectedBuildType, setSelectedBuildType] = useState<string>(initialBuildType);

  // Range slider states (min / max)
  const MIN_KVA = 0;
  const MAX_KVA = 3000;
  const [minRange, setMinRange] = useState<number>(Number.isFinite(kvaMinFromUrl) ? kvaMinFromUrl : MIN_KVA);
  const [maxRange, setMaxRange] = useState<number>(Number.isFinite(kvaMaxFromUrl) ? kvaMaxFromUrl : MAX_KVA);
  const rangeRef = useRef<HTMLDivElement | null>(null);

  // UI state
  const [showFilters, setShowFilters] = useState(false);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [itemsPerPage, setItemsPerPage] = useState<number>(16);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Keep local filter state in sync if URL params change externally (e.g. user bookmarked link)
  useEffect(() => {
    setSelectedBrand(searchParams.get("brand") ?? "All");
    setSelectedEmission(searchParams.get("emission") ?? "All");
    setSelectedFrequency(searchParams.get("frequency") ?? "All");
    setSelectedFuelType(searchParams.get("fuelType") ?? "Diesel");
    const p = searchParams.get("phase");
    setSelectedPhase(p ? (p.includes("Phase") ? p : `${p} Phase`) : "All");
    setSelectedBuildType(searchParams.get("buildType") ?? "All");

    const kva = searchParams.get("kva");
    if (kva) {
      const [a, b] = kva.split("-").map((s) => Number(s || 0));
      setMinRange(Number.isFinite(a) ? a : MIN_KVA);
      setMaxRange(Number.isFinite(b) ? b : MAX_KVA);
    }
    // reset pagination when URL changes
    setCurrentPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams?.toString()]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Combine static product datasets
  const allGenerators = useMemo(() => {
    return [...cummins, ...cats];
    // cummins/cats are static imports; no need to include them in deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sort by size numeric (coerce string to number safely)
  const sortedProducts = useMemo(() => {
    return [...allGenerators].sort((a, b) => {
      const aSize = typeof a.size === "string" ? parseFloat(a.size) || 0 : a.size ?? 0;
      const bSize = typeof b.size === "string" ? parseFloat(b.size) || 0 : b.size ?? 0;
      return sortOrder === "asc" ? aSize - bSize : bSize - aSize;
    });
  }, [sortOrder, allGenerators]);

  // Filtering (case-insensitive and robust)
  const filteredAll = useMemo(() => {
    return sortedProducts.filter((product) => {
      const matchBrand = selectedBrand === "All" || norm(product.brand) === norm(selectedBrand);
      const matchEmission = selectedEmission === "All" || norm(product.emission) === norm(selectedEmission);
      const matchFrequency = selectedFrequency === "All" || norm(product.frequency) === norm(selectedFrequency);
      const matchFuelType = selectedFuelType === "All" || norm(product.fuelType) === norm(selectedFuelType);
      const matchPhase = selectedPhase === "All" || norm(product.phase) === norm(selectedPhase);
      const matchBuildType = selectedBuildType === "All" || norm(product.buildType) === norm(selectedBuildType);

      // kVA numeric comparison (coerce)
      const size = typeof product.size === "string" ? parseFloat(product.size) || 0 : product.size ?? 0;
      const matchKvaRating = size >= minRange && size <= maxRange;

      return (
        matchBrand &&
        matchEmission &&
        matchFrequency &&
        matchFuelType &&
        matchPhase &&
        matchBuildType &&
        matchKvaRating
      );
    });
  }, [
    sortedProducts,
    selectedBrand,
    selectedEmission,
    selectedFrequency,
    selectedFuelType,
    selectedPhase,
    selectedBuildType,
    minRange,
    maxRange,
  ]);

  const totalItems = filteredAll.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const currentPageClamped = Math.min(Math.max(1, currentPage), totalPages);
  const startIdx = (currentPageClamped - 1) * itemsPerPage;
  const endIdx = Math.min(startIdx + itemsPerPage, totalItems);
  const paginatedProducts = filteredAll.slice(startIdx, endIdx);

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const v = Number(e.target.value);
    setItemsPerPage(v);
    setCurrentPage(1);
  };

  // Simple schema (unchanged)
  const orgSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "BlakShade Ltd",
        alternateName: "BlakShade",
        url: "https://blakshade.com/",
        logo: "(NOT Created YET)",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+447380491992",
            contactType: "customer service",
            availableLanguage: "en",
          },
        ],
        sameAs: [
          "https://www.facebook.com/blakshadeltd",
          "https://x.com/BlakShade_Ltd",
          "https://www.instagram.com/blakshadeltd/",
          "https://www.linkedin.com/company/blakshade-ltd/",
          "https://www.threads.net/@blakshadeltd",
        ],
      },
      {
        "@type": "WebSite",
        name: "BlakShade Ltd",
        url: "https://blakshade.com/",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://blakshade.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Generators",
            item: "https://blakshade.com/generators/",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        type="application/ld+json"
        id="org-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <section>
        <div
          className="bg-[var(--foreground)] h-[120px] md:h-[180px] rounded-[30px] mx-4 relative overflow-hidden"
          style={{ background: "linear-gradient(90deg, var(--foreground), var(--hover))" }}
        >
          <div className="container h-full flex items-end pb-4">
            <h1 className="text-[var(--background)] text-2xl md:text-4xl">Diesel Generators</h1>
          </div>
        </div>

        <div className="flex justify-between items-center mx-4 mt-6 lg:hidden">
          <button
            onClick={() => setShowFilters((prev) => !prev)}
            className="btn-third px-4 py-2 inline-flex items-center gap-2"
          >
            <FaSlidersH />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        <div className="container py-12 flex flex-col lg:flex-row gap-10">
          {(showFilters || (typeof window !== "undefined" && window.innerWidth >= 1024)) && (
            <aside className="w-full lg:w-[20%] border rounded-xl p-4 overflow-hidden border-gray-200 bg-white shadow-sm">
              <h2 className="text-lg mb-5 text-[var(--foreground)]">Filters</h2>

              <div className="space-y-6 text-[var(--foreground)]">
                {[
                  {
                    label: "Brand",
                    options: ["All", "Cummins", "CAT", "Perkins"],
                    state: selectedBrand,
                    setState: setSelectedBrand,
                  },
                  {
                    label: "Emission",
                    options: ["All", "Stage IIIA", "Stage V", "Unregulated"],
                    state: selectedEmission,
                    setState: setSelectedEmission,
                  },
                  {
                    label: "Frequency",
                    options: ["All", "50Hz", "60Hz"],
                    state: selectedFrequency,
                    setState: setSelectedFrequency,
                  },
                  {
                    label: "Fuel Type",
                    options: ["Diesel"],
                    state: selectedFuelType,
                    setState: setSelectedFuelType,
                  },
                ].map(({ label, options, state, setState }) => (
                  <div key={label}>
                    <label className="block mb-4 text-[var(--foreground)] ">{label}</label>
                    <div className="space-y-2">
                      {options.map((option) => (
                        <label
                          key={option}
                          className={`flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-[10px] hover:rounded-[15px] border transition-all duration-500 ease-in-out ${
                            state === option ? "bg-[var(--foreground)] text-white border-[var(--foreground)]" : ""
                          }`}
                        >
                          <input
                            type="radio"
                            name={label}
                            checked={state === option}
                            onChange={() => {
                              setState(option);
                              setCurrentPage(1);
                            }}
                            className="hidden"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Phase / Build Type */}
                {[
                  {
                    label: "Phase",
                    options: ["All", "Single Phase", "Three Phase"],
                    state: selectedPhase,
                    setState: setSelectedPhase,
                  },
                  {
                    label: "Build Type",
                    options: ["All", "Silent", "Open"],
                    state: selectedBuildType,
                    setState: setSelectedBuildType,
                  },
                ].map(({ label, options, state, setState }) => (
                  <div key={label}>
                    <label className="block mb-4 text-[var(--foreground)] ">{label}</label>
                    <div className="space-y-2">
                      {options.map((option) => (
                        <label
                          key={option}
                          className={`flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-[10px] hover:rounded-[15px] border transition-all duration-500 ease-in-out ${
                            state === option
                              ? "bg-[var(--foreground)] text-white border-[var(--foreground)]"
                              : "border-gray-300 text-[var(--foreground)]  hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
                          }`}
                        >
                          <input
                            type="radio"
                            name={label}
                            checked={state === option}
                            onChange={() => {
                              setState(option);
                              setCurrentPage(1);
                            }}
                            className="hidden"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                {/* kVA Range Filter */}
                <div>
                  <label className="block mb-4 text-[var(--foreground)]">kVA Range</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-1">Min (kVA)</label>
                      <input
                        type="number"
                        value={minRange}
                        onChange={(e) => {
                          const v = Number(e.target.value || 0);
                          setMinRange(Math.max(MIN_KVA, Math.min(v, MAX_KVA)));
                          setCurrentPage(1);
                        }}
                        className="w-full border rounded px-3 py-2"
                        min={MIN_KVA}
                        max={MAX_KVA}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Max (kVA)</label>
                      <input
                        type="number"
                        value={maxRange}
                        onChange={(e) => {
                          const v = Number(e.target.value || 0);
                          setMaxRange(Math.max(MIN_KVA, Math.min(v, MAX_KVA)));
                          setCurrentPage(1);
                        }}
                        className="w-full border rounded px-3 py-2"
                        min={MIN_KVA}
                        max={MAX_KVA}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          )}

          <main className="w-full lg:w-3/4">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
              <div className="text-gray-600">
                Showing{" "}
                <span>{itemsPerPage === Infinity ? 1 : (currentPageClamped - 1) * itemsPerPage + 1}</span>{" "}
                -{" "}
                <span>{itemsPerPage === Infinity ? totalItems : Math.min(currentPageClamped * itemsPerPage, totalItems)}</span>{" "}
                of <span>{totalItems}</span>
              </div>

              <div className="flex items-center gap-4">
                <label>Sort by Size:</label>
                <select
                  value={sortOrder}
                  onChange={(e) => {
                    setSortOrder(e.target.value as "asc" | "desc");
                    setCurrentPage(1);
                  }}
                  className="border rounded px-2 py-1 cursor-pointer"
                >
                  <option value="asc">Low to High</option>
                  <option value="desc">High to Low</option>
                </select>

                <label className="ml-4">Items per page:</label>
                <select
                  value={itemsPerPage}
                  onChange={handleItemsPerPageChange}
                  className="border rounded px-2 py-1 cursor-pointer"
                >
                  <option value={16}>16</option>
                  <option value={24}>24</option>
                  <option value={48}>48</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
              {paginatedProducts.map((product) => {
                // ensure `image` exists (GeneratorsCard expects it). Fallback to placeholder if missing.
                const productWithImage = {
                  ...product,
                  image: product.image ?? "/favicon.ico",
                };
                // cast to any to silence TS mismatch if your Product type is elsewhere;
                // better: import your Product type and use it instead of any.
                return <GeneratorsCard key={product.slug} product={productWithImage as any} />;
              })}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center mt-8 gap-2">
                {Array.from({ length: totalPages }, (_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`px-3 py-1 border rounded cursor-pointer ${
                      currentPageClamped === idx + 1 ? "btn-primary shine-effect" : "btn-third shine-effect"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            )}
          </main>
        </div>
      </section>
    </>
  );
}
