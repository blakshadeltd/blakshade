'use client';

import { useState, useMemo, useEffect } from "react";
import { FaSlidersH } from "react-icons/fa";
import GeneratorsCard from "@/app/generators/GeneratorsCard";
import GeneratorsSidebar from "@/app/component/GeneratorsSidebar";
import { cummins } from "@/data/generators/cummins/cumminsProducts";
import { cats } from "@/data/generators/cat/catProducts";
import { useSearchParams } from "next/navigation";

interface SearchParams {
  frequency?: string;
  fuelType?: string;
  phase?: string;
  brand?: string;
  emission?: string;
  buildType?: string;
  kvaRating?: string;
  [key: string]: string | undefined;
}

interface GeneratorsClientProps {
  searchParams: SearchParams;
}

const GeneratorsClient: React.FC<GeneratorsClientProps> = ({ searchParams }) => {
  const searchParamsObj = useSearchParams();

  // Function to decode URL parameter values
  const decodeKvaRating = (rating: string): string => {
    const decoded = decodeURIComponent(rating);
    // Handle the special case for 1000+ kVA
    if (decoded.includes('1000+') || decoded.includes('1000%2B')) {
      return '1000+ kVA';
    }
    return decoded;
  };

  // Get current kvaRating from URL search params
  const currentKvaRating = searchParamsObj?.get('kvaRating');

  // Initialize states from URL params or defaults
  const [selectedBrand, setSelectedBrand] = useState<string>(searchParams.brand || "All");
  const [selectedEmission, setSelectedEmission] = useState<string>(searchParams.emission || "All");
  const [selectedFrequency, setSelectedFrequency] = useState<string>(searchParams.frequency || "All");
  const [selectedFuelType, setSelectedFuelType] = useState<string>(searchParams.fuelType || "Diesel");
  const [selectedPhase, setSelectedPhase] = useState<string>(
    searchParams.phase ? `${searchParams.phase} Phase` : "All"
  );
  const [selectedBuildType, setSelectedBuildType] = useState<string>(searchParams.buildType || "All");
  const [selectedKvaRating, setSelectedKvaRating] = useState<string>(
    currentKvaRating ? decodeKvaRating(currentKvaRating) : "All"
  );
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<string>("asc");

  // Update all states when URL parameters change
  useEffect(() => {
    // Reset kvaRating if not in URL
    if (!currentKvaRating) {
      setSelectedKvaRating("All");
    } else {
      setSelectedKvaRating(decodeKvaRating(currentKvaRating));
    }
    
    // Update other filters from URL
    setSelectedBrand(searchParams.brand || "All");
    setSelectedEmission(searchParams.emission || "All");
    setSelectedFrequency(searchParams.frequency || "All");
    setSelectedFuelType(searchParams.fuelType || "Diesel");
    setSelectedPhase(searchParams.phase ? `${searchParams.phase} Phase` : "All");
    setSelectedBuildType(searchParams.buildType || "All");
  }, [currentKvaRating, searchParams]);

  const allGenerators = useMemo(() => [...cummins, ...cats], []);

  const sortedProducts = useMemo(() => {
    return [...allGenerators].sort((a, b) =>
      sortOrder === "asc" ? a.size - b.size : b.size - a.size
    );
  }, [sortOrder, allGenerators]);

  const filteredAll = useMemo(() => {
    return sortedProducts.filter((product) => {
      const matchBrand = selectedBrand === "All" || product.brand === selectedBrand;
      const matchEmission = selectedEmission === "All" || product.emission === selectedEmission;
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
    selectedKvaRating,
  ]);

  // Function to check if we're on the base generators page (no filters)
  const isBaseGeneratorsPage = () => {
    return !currentKvaRating && 
           !searchParams.brand && 
           !searchParams.emission && 
           !searchParams.frequency && 
           (!searchParams.fuelType || searchParams.fuelType === "Diesel") && 
           !searchParams.phase && 
           !searchParams.buildType;
  };

  const totalItems = filteredAll.length;

  return (
    <section>
      <div
        className="bg-[var(--foreground)] h-[120px] md:h-[180px] rounded-[30px] mx-4 relative overflow-hidden"
        style={{ background: "linear-gradient(90deg, var(--foreground), var(--hover))" }}
      >
        <div className="container h-full flex items-end pb-4">
          <h1 className="text-[var(--background)] text-2xl md:text-4xl">
            {isBaseGeneratorsPage() ? 'Diesel Generators' : 
             selectedKvaRating !== "All" ? `${selectedKvaRating} Diesel Generators` : 'Diesel Generators'}
          </h1>
        </div>
      </div>

      <div className="flex justify-between items-center mx-4 mt-6 lg:hidden">
        <button
          onClick={() => setShowFilters(prev => !prev)}
          className="btn-third px-4 py-2 inline-flex items-center gap-2"
        >
          <FaSlidersH /> {showFilters ? "Hide Filters" : "Show Filters"}
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
          setSelectedKvaRating={setSelectedKvaRating}
          selectedKvaRating={selectedKvaRating}
        />

        <main className="w-full lg:w-3/4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
            <div className="text-gray-600">
              Showing all <span>{totalItems}</span> products
              {selectedKvaRating !== "All" && (
                <span> for <strong>{selectedKvaRating}</strong></span>
              )}
            </div>

            <div className="flex items-center gap-4">
              <label htmlFor="sortOrder">Sort by Size:</label>
              <select
                id="sortOrder"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border rounded px-2 py-1 cursor-pointer"
              >
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {filteredAll.map((product) => (
              <GeneratorsCard key={product.slug} product={product} />
            ))}
          </div>

          {filteredAll.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No products found matching your filters.</p>
            </div>
          )}
        </main>
      </div>
    </section>
  );
};

export default GeneratorsClient;