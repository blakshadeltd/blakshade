"use client";

import { useState, useMemo, useEffect } from "react";
import { FaSlidersH } from "react-icons/fa";
import { products } from "@/data/generators/cummins/cumminsProducts";
import GeneratorsCard from "@/app/generators/GeneratorsCard";

export default function GeneratorsPage() {
  const [selectedBrand, setSelectedBrand] = useState("Cummins");
  const [selectedFrequency, setSelectedFrequency] = useState("All");
  const [selectedFuelType, setSelectedFuelType] = useState("Diesel");
  const [selectedKvaRating, setSelectedKvaRating] = useState("All");
  const [selectedPhase, setSelectedPhase] = useState("All");
  const [selectedBuildType, setSelectedBuildType] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
  window.scrollTo(0, 0);
  }, [currentPage]);
  window.scrollTo({
  top: 0,
  behavior: "smooth"});

  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) =>
      sortOrder === "asc" ? a.size - b.size : b.size - a.size
    );
  }, [sortOrder]);

  const filteredCummins = useMemo(() => {
    return sortedProducts.filter((product) => {
      const matchBrand = selectedBrand === "All" || product.brand === selectedBrand;
      const matchFrequency = selectedFrequency === "All" || product.frequency === selectedFrequency;
      const matchFuelType = selectedFuelType === "All" || product.fuelType === selectedFuelType;
      const matchPhase = selectedPhase === "All" || product.phase === selectedPhase;
      const matchBuildType = selectedBuildType === "All" || product.buildType === selectedBuildType;
      const matchKvaRating =
        selectedKvaRating === "All" ||
        (selectedKvaRating === "0 - 49 kVA" && product.size < 50) ||
        (selectedKvaRating === "50 - 99 kVA" && product.size >= 50 && product.size < 100) ||
        (selectedKvaRating === "100 - 499 kVA" && product.size >= 100 && product.size < 500) ||
        (selectedKvaRating === "500 - 999 kVA" && product.size >= 500 && product.size < 1000) ||
        (selectedKvaRating === "1000+ kVA" && product.size >= 1000);

      return (
        matchBrand &&
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
    selectedFrequency,
    selectedFuelType,
    selectedKvaRating,
    selectedPhase,
    selectedBuildType,
  ]);

  const totalItems = filteredCummins.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentPageClamped = Math.min(currentPage, totalPages);
  const startIdx = (currentPageClamped - 1) * itemsPerPage;
  const endIdx = Math.min(startIdx + itemsPerPage, totalItems);
  const paginatedProducts = sortedProducts.slice(startIdx, endIdx);

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page
  };

  return (
    <section>
      {/* Hero */}
      <div className="bg-[var(--foreground)] h-[120px] md:h-[180px] rounded-[30px] mx-4 relative overflow-hidden">
        <div className="container absolute inset-0 flex items-end justify-start">
          <h1 className="font-normal italic text-[var(--background)] mb-4 text-2xl">
            Cummins Diesel Generators
          </h1>
        </div>
      </div>

      {/* Mobile Filter Toggle & Sort */}
      <div className="flex justify-between items-center mx-4 mt-6 lg:hidden">
        <button
          onClick={() => setShowFilters((prev) => !prev)}
          className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 bg-white shadow-sm"
        >
          <FaSlidersH />
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="ml-4 px-3 py-2 border rounded-md text-sm"
        >
          <option value="asc">Size: Low to High</option>
          <option value="desc">Size: High to Low</option>
        </select>
      </div>

      <div className="py-12 flex flex-col lg:flex-row gap-10 mx-4">
        {/* Sidebar Filters */}
        {(showFilters || (typeof window !== "undefined" && window.innerWidth >= 1024)) && (
          <aside className="w-full lg:w-[20%] border rounded-xl p-4 overflow-hidden border-gray-200 bg-white shadow-sm">
            <h2 className="text-lg mb-4 text-[var(--foreground)]">Filters</h2>
            <div className="space-y-6 text-sm text-gray-700">
              {[
                {
                  label: "Brand",
                  options: ["All", "Cummins", "CAT", "Perkins"],
                  state: selectedBrand,
                  setState: setSelectedBrand,
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
                {
                  label: "kVA Rating",
                  options: [
                    "All",
                    "0 - 49 kVA",
                    "50 - 99 kVA",
                    "100 - 499 kVA",
                    "500 - 999 kVA",
                    "1000+ kVA",
                  ],
                  state: selectedKvaRating,
                  setState: setSelectedKvaRating,
                },
                {
                  label: "Phase",
                  options: ["All", "Single Phase", "Three Phase"],
                  state: selectedPhase,
                  setState: setSelectedPhase,
                },
                {
                  label: "Build Type",
                  options: ["All", "Silent/Canopied", "Open"],
                  state: selectedBuildType,
                  setState: setSelectedBuildType,
                },
              ].map(({ label, options, state, setState }) => (
                <div key={label}>
                  <label className="block mb-1 text-base text-gray-700">{label}</label>
                  <div className="space-y-2">
                    {options.map((option) => (
                      <label
                        key={option}
                        className={`flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-[10px] hover:rounded-[15px] border text-sm transition-all duration-500 ease-in-out ${
                          state === option
                            ? "bg-[var(--foreground)] text-white border-[var(--foreground)]"
                            : "border-gray-300 text-gray-700 hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
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
          {/* Sorting and info */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
            <div className="text-sm text-gray-600">
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
              <label className="text-sm">Sort by Size:</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
                className="border rounded px-2 py-1 text-sm cursor-pointer"
              >
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>

              <label className="text-sm ml-4">Items per page:</label>
              <select
                onChange={handleItemsPerPageChange}
                className="border rounded px-2 py-1 text-sm cursor-pointer"
              >
                <option value={16}>16</option>
                <option value={24}>24</option>
                <option value={48}>48</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {paginatedProducts.map((product) => (
              <GeneratorsCard key={product.slug} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }, (_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`px-3 py-1 border rounded cursor-pointer ${
                  currentPageClamped === idx + 1
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}
