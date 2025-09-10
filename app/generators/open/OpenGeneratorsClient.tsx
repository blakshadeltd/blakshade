// OpenGeneratorsClient.tsx
"use client";

import { useState, useMemo, useEffect } from "react";
import { FaSlidersH } from "react-icons/fa";
import GeneratorsCard from "@/app/generators/GeneratorsCard";
import GeneratorsSidebar from "@/app/component/GeneratorsSidebar";
import { cummins } from "@/data/generators/cummins/cumminsProducts";
import { cats } from "@/data/generators/cat/catProducts";

interface SearchParams {
  frequency?: string;
  fuelType?: string;
  phase?: string;
  [key: string]: string | undefined;
}

interface OpenGeneratorsClientProps {
  searchParams: SearchParams;
}

const SilentGeneratorsClient: React.FC<OpenGeneratorsClientProps> = ({ searchParams }) => {
  // Initialize states from URL params with "Open" as default build type
  const [selectedBrand, setSelectedBrand] = useState<string>("All");
  const [selectedEmission, setSelectedEmission] = useState<string>("All");
  const [selectedFrequency, setSelectedFrequency] = useState<string>(
    searchParams.frequency || "All"
  );
  const [selectedFuelType, setSelectedFuelType] = useState<string>(
    searchParams.fuelType || "Diesel"
  );
  const [selectedPhase, setSelectedPhase] = useState<string>(
    searchParams.phase ? `${searchParams.phase} Phase` : "All"
  );
  const [selectedBuildType, setSelectedBuildType] = useState<string>("Open");
  
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [itemsPerPage, setItemsPerPage] = useState<number>(16);
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const allGenerators = useMemo(() => {
    return [...cummins, ...cats];
  }, []);

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

      return (
        matchBrand &&
        matchEmission &&
        matchFrequency &&
        matchFuelType &&
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

  return (
    <section>
      <div
        className="bg-[var(--foreground)] h-[120px] md:h-[180px] rounded-[30px] mx-4 relative overflow-hidden"
        style={{ background: "linear-gradient(90deg, var(--foreground), var(--hover))" }}
      >
        <div className="container h-full flex items-end pb-4">
          <h1 className="text-[var(--background)] text-2xl md:text-4xl">
            Open Generators
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
        <GeneratorsSidebar
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          selectedEmission={selectedEmission}
          setSelectedEmission={setSelectedEmission}
          selectedFrequency={selectedFrequency}
          setSelectedFrequency={setSelectedFrequency}
          selectedFuelType={selectedFuelType}
          setSelectedFuelType={setSelectedFuelType}
          selectedPhase={selectedPhase}
          setSelectedPhase={setSelectedPhase}
          selectedBuildType={selectedBuildType}
          setSelectedBuildType={setSelectedBuildType}
          showFilters={showFilters}
        />

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
                onChange={(e) => setSortOrder(e.target.value)}
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
  );
};

export default SilentGeneratorsClient;