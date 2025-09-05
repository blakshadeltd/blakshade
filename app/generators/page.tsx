"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { FaSlidersH } from "react-icons/fa";
import GeneratorsCard from "@/app/generators/GeneratorsCard";
import Script from "next/script";
import { cummins } from "@/data/generators/cummins/cumminsProducts";
import { cats } from "@/data/generators/cat/catProducts";
import { useSearchParams } from 'next/navigation';

export default function GeneratorsPage() {
  const searchParams = useSearchParams();
  
  // Initialize states from URL params
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedEmission, setSelectedEmisiion] = useState("All");
  const [selectedFrequency, setSelectedFrequency] = useState(
    searchParams.get('frequency') || "All"
  );
  const [selectedFuelType, setSelectedFuelType] = useState(
    searchParams.get('fuelType') || "Diesel"
  );
  const [selectedPhase, setSelectedPhase] = useState(
    searchParams.get('phase') ? 
      `${searchParams.get('phase')} Phase` : 
      "All"
  );
  const [selectedBuildType, setSelectedBuildType] = useState("All");
  
  // Get kVA range from URL
  const kvaParam = searchParams.get('kva');
  const [kvaMin, kvaMax] = kvaParam ? kvaParam.split('-').map(Number) : [0, 3000];
  
  const [showFilters, setShowFilters] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Double range slider states
  const minKva = 0;
  const maxKva = 3000;
  const [minRange, setMinRange] = useState(kvaMin || minKva);
  const [maxRange, setMaxRange] = useState(kvaMax || maxKva);
  const rangeRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const allGenerators = useMemo(() => {
    return [...cummins, ...cats];
  }, [cummins, cats]);

  const sortedProducts = useMemo(() => {
    return [...allGenerators].sort((a, b) =>
      sortOrder === "asc" ? a.size - b.size : b.size - a.size
    );
  }, [sortOrder, allGenerators]);

  const filteredall = useMemo(() => {
    return sortedProducts.filter((product) => {
      const matchBrand = selectedBrand === "All" || product.brand === selectedBrand;
      const matchEmission = selectedEmission === "All" || product.emission === selectedEmission;
      const matchFrequency = selectedFrequency === "All" || product.frequency === selectedFrequency;
      const matchFuelType = selectedFuelType === "All" || product.fuelType === selectedFuelType;
      const matchPhase = selectedPhase === "All" || product.phase === selectedPhase;
      const matchBuildType = selectedBuildType === "All" || product.buildType === selectedBuildType;
      const matchKvaRating = product.size >= minRange && product.size <= maxRange;

      return (
        matchBrand &&
        matchEmission &&
        matchFrequency &&
        matchFuelType &&
        matchKvaRating &&
        matchPhase &&
        matchBuildType
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
    maxRange
  ]);

  const totalItems = filteredall.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentPageClamped = Math.min(currentPage, totalPages);
  const startIdx = (currentPageClamped - 1) * itemsPerPage;
  const endIdx = Math.min(startIdx + itemsPerPage, totalItems);
  const paginatedProducts = filteredall.slice(startIdx, endIdx);

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };



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
            <h1 className="text-[var(--background)] text-2xl md:text-4xl">
              Diesel Generators
            </h1>
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
              <div className="space-y-6 text-[var(--foreground)] ">
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
                    setState: setSelectedEmisiion,
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
                            state === option
                              ? "bg-[var(--foreground)] text-white border-[var(--foreground)]"
                              : ""
                          }`}
                        >
                          <input
                            type="radio"
                            name={label}
                            checked={state === option}
                            onChange={() => setState(option)}
                            className="hidden"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                
              
                
                {/* Continue with other filters */}
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
                            onChange={() => setState(option)}
                            className="hidden"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          )}

          <main className="w-full lg:w-3/4">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
              <div className="text-gray-600">
                Showing{" "}
                <span>
                  {itemsPerPage === Infinity
                    ? 1
                    : (currentPageClamped - 1) * itemsPerPage + 1}
                </span>{" "}
                -{" "}
                <span>
                  {itemsPerPage === Infinity
                    ? totalItems
                    : Math.min(currentPageClamped * itemsPerPage, totalItems)}
                </span>{" "}
                of <span>{totalItems}</span>
              </div>

              <div className="flex items-center gap-4">
                <label>Sort by Size:</label>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
                  className="border rounded px-2 py-1 cursor-pointer"
                >
                  <option value="asc">Low to High</option>
                  <option value="desc">High to Low</option>
                </select>

                <label className="ml-4">Items per page:</label>
                <select
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
              {paginatedProducts.map((product) => (
                <GeneratorsCard key={product.slug} product={product} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center mt-8 gap-2">
                {Array.from({ length: totalPages }, (_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`px-3 py-1 border rounded cursor-pointer ${
                      currentPageClamped === idx + 1
                        ? "btn-primary shine-effect"
                        : "btn-third shine-effect"
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