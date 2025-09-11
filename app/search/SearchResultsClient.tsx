// app/component/SearchResultsClient.tsx
'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaSlidersH, FaSearch } from 'react-icons/fa';
import GeneratorsCard from '@/app/generators/GeneratorsCard';
import { cummins } from '@/data/generators/cummins/cumminsProducts';
import { cats } from '@/data/generators/cat/catProducts';

/**
 * Conservative Product shape covering CumminsProduct + other vendor fields used in search.
 * If you have a canonical Product type, replace this with that import.
 */
interface Product {
  slug: string;
  title?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  description?: string;
  alternatorbrand?: string;
  category?: string;
  emission?: string;
  frequency?: string;
  fuelType?: string;
  phase?: string;
  buildType?: string;
  voltage?: string;
  standbyPower?: string;
  primePower?: string;
  image?: string;
  fullspec?: string;
  brand?: string;
  size?: number | string; // kVA
  [k: string]: any;
}

interface SearchResultsClientProps {
  initialProducts?: Product[];
  initialQuery?: string;
  initialFilters?: {
    brand?: string;
    emission?: string;
    frequency?: string;
    fuelType?: string;
    phase?: string;
    buildType?: string;
    minKva?: string;
    maxKva?: string;
  };
}

const normalize = (v?: any) => (v === undefined || v === null ? '' : String(v).toLowerCase());

export default function SearchResultsClient({
  initialProducts = [],
  initialQuery = '',
  initialFilters = {},
}: SearchResultsClientProps) {
  const params = useSearchParams();
  const urlQ = params?.get('q') ?? '';

  const [searchQuery, setSearchQuery] = useState<string>(initialQuery || urlQ || '');

  // Filters (init from initialFilters or URL)
  const [selectedBrand, setSelectedBrand] = useState<string>(
    initialFilters.brand ?? (params?.get('brand') ?? 'All')
  );
  const [selectedEmission, setSelectedEmission] = useState<string>(
    initialFilters.emission ?? (params?.get('emission') ?? 'All')
  );
  const [selectedFrequency, setSelectedFrequency] = useState<string>(
    initialFilters.frequency ?? (params?.get('frequency') ?? 'All')
  );
  const [selectedFuelType, setSelectedFuelType] = useState<string>(
    initialFilters.fuelType ?? (params?.get('fuelType') ?? 'Diesel')
  );
  const [selectedPhase, setSelectedPhase] = useState<string>(
    initialFilters.phase ?? (params?.get('phase') ?? 'All')
  );
  const [selectedBuildType, setSelectedBuildType] = useState<string>(
    initialFilters.buildType ?? (params?.get('buildType') ?? 'All')
  );

  // kVA range from initialFilters or URL
  const minKvaFromFilters = initialFilters.minKva ? Number(initialFilters.minKva) : undefined;
  const maxKvaFromFilters = initialFilters.maxKva ? Number(initialFilters.maxKva) : undefined;
  const kvaParam = params?.get('kva');
  const [minKva, setMinKva] = useState<number>(
    minKvaFromFilters ?? (kvaParam ? Number(kvaParam.split('-')[0] || 0) : 0)
  );
  const [maxKva, setMaxKva] = useState<number>(
    maxKvaFromFilters ?? (kvaParam ? Number(kvaParam.split('-')[1] || 3000) : 3000)
  );

  // UI state
  const [showFilters, setShowFilters] = useState(false);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [itemsPerPage, setItemsPerPage] = useState<number>(16);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // sync URL q into state
  useEffect(() => {
    if (urlQ !== searchQuery) {
      setSearchQuery(urlQ);
      setCurrentPage(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlQ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // baseline dataset
  const allGenerators = useMemo<Product[]>(() => {
    if (initialProducts && initialProducts.length > 0) return initialProducts;
    return [...cummins, ...cats] as Product[];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialProducts]);

  /**
   * Smart text + numeric search:
   * - full text search across many fields including slug, meta, keywords, image filename
   * - parse numeric kVA from query (e.g. "28kva", "28 kva", "28kw", "28") and match product.size
   * - also check for numbers present in standbyPower/primePower strings
   */
  const filteredGenerators = useMemo(() => {
    const rawQ = (searchQuery || '').trim();
    const q = normalize(rawQ);

    // parse numeral for KVA (e.g. "28kva", "28 kva", "28", "28kw")
    const kvaMatch = rawQ.match(/(\d{1,4})\s*(kva|kw)?/i);
    const kvaNumber = kvaMatch ? Number(kvaMatch[1]) : null;

    let results = allGenerators.slice();

    // Text search across broad set of fields
    if (q) {
      results = results.filter((product) => {
        // collect fields to search (strings)
        const fields: (string | undefined)[] = [
          product.title,
          product.metaTitle,
          product.metaDescription,
          ...(product.keywords ?? []),
          product.slug,
          product.description,
          product.brand,
          product.alternatorbrand,
          product.category,
          product.emission,
          product.frequency,
          product.fuelType,
          product.phase,
          product.buildType,
          product.voltage,
          product.standbyPower,
          product.primePower,
          product.fullspec,
          product.image, // image filename often contains kva ranges like "22kva-28kva"
        ];

        // If any field contains the query string => match
        const textMatch = fields.some((f) => normalize(f).includes(q));
        if (textMatch) return true;

        // If the query included a number (e.g. 28), check numeric matches:
        if (kvaNumber !== null && !Number.isNaN(kvaNumber)) {
          // 1) exact match to product.size (coerce)
          const size = typeof product.size === 'string' ? parseFloat(product.size) || 0 : (product.size ?? 0);
          if (size === kvaNumber) return true;

          // 2) check standby/prime power numeric content (extract number)
          const parseNumberFromString = (s?: string) => {
            if (!s) return null;
            const m = s.match(/(\d{1,4})/);
            return m ? Number(m[1]) : null;
          };
          const standbyNum = parseNumberFromString(product.standbyPower);
          const primeNum = parseNumberFromString(product.primePower);
          if ((standbyNum && standbyNum === kvaNumber) || (primeNum && primeNum === kvaNumber)) return true;

          // 3) check if image/slug/meta contains `${n}kva` or `${n}kw` (already covered by text fields above,
          // but keep numeric fallback: check digits presence)
          const combinedText = normalize(
            `${product.slug ?? ''} ${product.image ?? ''} ${product.metaTitle ?? ''} ${product.keywords?.join(' ') ?? ''}`
          );
          if (combinedText.includes(String(kvaNumber))) return true;
        }

        return false;
      });
    }

    // Now apply equality filters (case-insensitive)
    if (selectedBrand && selectedBrand !== 'All') {
      results = results.filter((p) => normalize(p.brand) === normalize(selectedBrand));
    }
    if (selectedEmission && selectedEmission !== 'All') {
      results = results.filter((p) => normalize(p.emission) === normalize(selectedEmission));
    }
    if (selectedFrequency && selectedFrequency !== 'All') {
      results = results.filter((p) => normalize(p.frequency) === normalize(selectedFrequency));
    }
    if (selectedFuelType && selectedFuelType !== 'All') {
      results = results.filter((p) => normalize(p.fuelType) === normalize(selectedFuelType));
    }
    if (selectedPhase && selectedPhase !== 'All') {
      const normalizedPhase = normalize(selectedPhase).replace(' phase', '');
      results = results.filter((p) => normalize(p.phase).includes(normalizedPhase));
    }
    if (selectedBuildType && selectedBuildType !== 'All') {
      results = results.filter((p) => normalize(p.buildType) === normalize(selectedBuildType));
    }

    // kVA range
    results = results.filter((p) => {
      const size = typeof p.size === 'string' ? parseFloat(p.size) || 0 : (p.size ?? 0);
      return size >= (minKva ?? 0) && size <= (maxKva ?? 3000);
    });

    return results;
  }, [
    allGenerators,
    searchQuery,
    selectedBrand,
    selectedEmission,
    selectedFrequency,
    selectedFuelType,
    selectedPhase,
    selectedBuildType,
    minKva,
    maxKva,
  ]);

  // Sorting
  const sortedProducts = useMemo(() => {
    return [...filteredGenerators].sort((a, b) => {
      const aSize = typeof a.size === 'string' ? parseFloat(a.size) || 0 : (a.size ?? 0);
      const bSize = typeof b.size === 'string' ? parseFloat(b.size) || 0 : (b.size ?? 0);
      return sortOrder === 'asc' ? aSize - bSize : bSize - aSize;
    });
  }, [filteredGenerators, sortOrder]);

  const totalItems = sortedProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const currentPageClamped = Math.min(Math.max(1, currentPage), totalPages);
  const startIdx = (currentPageClamped - 1) * itemsPerPage;
  const endIdx = Math.min(startIdx + itemsPerPage, totalItems);
  const paginatedProducts = sortedProducts.slice(startIdx, endIdx);

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const v = Number(e.target.value);
    setItemsPerPage(v);
    setCurrentPage(1);
  };

  return (
    <section>
      <div
        className="bg-[var(--foreground)] h-[120px] md:h-[180px] rounded-[30px] mx-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(90deg, var(--foreground), var(--hover))' }}
      >
        <div className="container h-full flex items-end pb-4">
          <div className="text-center">
            <h1 className="text-[var(--background)] text-2xl md:text-3xl mb-4">
              {searchQuery ? `Search Results for "${searchQuery}"` : 'Search Generators'}
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mx-4 mt-6 lg:hidden">
        <button
          onClick={() => setShowFilters((prev) => !prev)}
          className="btn-third px-4 py-2 inline-flex items-center gap-2"
        >
          <FaSlidersH />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      <div className="container py-12 flex flex-col lg:flex-row gap-10">
        {(showFilters || (typeof window !== 'undefined' && window.innerWidth >= 1024)) && (
          <aside className="w-full lg:w-[20%] border rounded-xl p-4 overflow-hidden border-gray-200 bg-white shadow-sm">
            <h2 className="text-lg mb-5 text-[var(--foreground)]">Filters</h2>
            <div className="space-y-6 text-[var(--foreground)]">
              {[
                {
                  label: 'Brand',
                  options: ['All', 'Cummins', 'CAT', 'Perkins'],
                  state: selectedBrand,
                  setState: setSelectedBrand,
                },
                {
                  label: 'Emission',
                  options: ['All', 'Stage IIIA', 'Stage V', 'Unregulated'],
                  state: selectedEmission,
                  setState: setSelectedEmission,
                },
                {
                  label: 'Frequency',
                  options: ['All', '50Hz', '60Hz'],
                  state: selectedFrequency,
                  setState: setSelectedFrequency,
                },
                {
                  label: 'Fuel Type',
                  options: ['Diesel'],
                  state: selectedFuelType,
                  setState: setSelectedFuelType,
                },
              ].map(({ label, options, state, setState }) => (
                <div key={label}>
                  <label className="block mb-4 text-[var(--foreground)]">{label}</label>
                  <div className="space-y-2">
                    {options.map((option) => (
                      <label
                        key={option}
                        className={`flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-[10px] hover:rounded-[15px] border transition-all duration-500 ease-in-out ${
                          state === option
                            ? 'bg-[var(--foreground)] text-white border-[var(--foreground)]'
                            : 'border-gray-300 text-[var(--foreground)] hover:border-[var(--foreground)] hover:text-[var(--foreground)]'
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

              {/* Phase / Build */}
              {[
                {
                  label: 'Phase',
                  options: ['All', 'Single Phase', 'Three Phase'],
                  state: selectedPhase,
                  setState: setSelectedPhase,
                },
                {
                  label: 'Build Type',
                  options: ['All', 'Silent', 'Open'],
                  state: selectedBuildType,
                  setState: setSelectedBuildType,
                },
              ].map(({ label, options, state, setState }) => (
                <div key={label}>
                  <label className="block mb-4 text-[var(--foreground)]">{label}</label>
                  <div className="space-y-2">
                    {options.map((option) => (
                      <label
                        key={option}
                        className={`flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-[10px] hover:rounded-[15px] border transition-all duration-500 ease-in-out ${
                          state === option
                            ? 'bg-[var(--foreground)] text-white border-[var(--foreground)]'
                            : 'border-gray-300 text-[var(--foreground)] hover:border-[var(--foreground)] hover:text-[var(--foreground)]'
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
                      value={minKva}
                      onChange={(e) => {
                        const v = Number(e.target.value || 0);
                        setMinKva(Math.max(0, Math.min(v, 3000)));
                        setCurrentPage(1);
                      }}
                      className="w-full border rounded px-3 py-2"
                      min={0}
                      max={3000}
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Max (kVA)</label>
                    <input
                      type="number"
                      value={maxKva}
                      onChange={(e) => {
                        const v = Number(e.target.value || 0);
                        setMaxKva(Math.max(0, Math.min(v, 3000)));
                        setCurrentPage(1);
                      }}
                      className="w-full border rounded px-3 py-2"
                      min={0}
                      max={3000}
                    />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        )}

        <main className="w-full lg:w-3/4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
            <p className="text-gray-600">
              {totalItems} result{totalItems !== 1 ? 's' : ''} found
            </p>

            <div className="flex items-center gap-4">
              <label>Sort by Size:</label>
              <select
                value={sortOrder}
                onChange={(e) => {
                  setSortOrder(e.target.value as 'asc' | 'desc');
                  setCurrentPage(1);
                }}
                className="border rounded px-2 py-1 cursor-pointer"
              >
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>

              <label className="ml-4">Items per page:</label>
              <select value={itemsPerPage} onChange={handleItemsPerPageChange} className="border rounded px-2 py-1 cursor-pointer">
                <option value={16}>16</option>
                <option value={24}>24</option>
                <option value={48}>48</option>
              </select>
            </div>
          </div>

          {paginatedProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                {paginatedProducts.map((product) => {
                  // Ensure we pass an image (GeneratorsCard expects it). Use fallback if missing.
                  const productWithImage: Product = {
                    ...product,
                    image: product.image ?? '/favicon.ico',
                  };
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
                        currentPageClamped === idx + 1 ? 'btn-primary shine-effect' : 'btn-third shine-effect'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <FaSearch className="text-4xl mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600">No generators found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </main>
      </div>
    </section>
  );
}
