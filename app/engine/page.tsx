// app/engine/page.tsx

"use client";

import { useState, useMemo } from "react";
import { engines } from "@/data/engine/engineProducts";
import ProductCardDetailed from "@/app/engine/EngineCard";

export default function EnginePage() {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedProducts = useMemo(() => {
    const sorted = [...engines].sort((a, b) =>
      sortOrder === "asc" ? a.size - b.size : b.size - a.size
    );
    return sorted;
  }, [sortOrder]);

  const totalItems = sortedProducts.length;
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
      {/* Hero Section */}
      <div className="bg-[var(--foreground)] h-[120px] md:h-[180px] rounded-[30px] mx-4 relative overflow-hidden">
        <div className="container absolute inset-0 flex items-end justify-start">
          <h1 className="font-normal italic text-[var(--background)] mb-4 text-2xl">
            Engine
          </h1>
        </div>
      </div>

      <div className="py-12 flex flex-col lg:flex-row gap-10 mx-4">
        {/* Sidebar */}
        <aside className="w-full lg:w-[20%] border rounded-xl p-4 overflow-hidden border-gray-200 bg-white shadow-sm">
          <h2 className="text-lg mb-4 text-[var(--foreground)]">Filters</h2>
          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <label className="block font-normal mb-1">Brand</label>
              <select className="w-full border rounded px-2 py-1">
                <option>All</option>
                <option>Perkins</option>
                <option>Cummins</option>
              </select>
            </div>
            <div>
              <label className="block font-normal mb-1">Power</label>
              <select className="w-full border rounded px-2 py-1">
                <option>All</option>
                <option>Up to 20 kVA</option>
                <option>20–50 kVA</option>
                <option>50+ kVA</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-3/4">
          {/* Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
            <div className="text-sm text-gray-600">
              Showing {startIdx + 1} – {endIdx} of {totalItems}
            </div>

            <div className="flex items-center gap-4">
              <label className="text-sm">Sort by Size:</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
                className="border rounded px-2 py-1 text-sm"
              >
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>

              <label className="text-sm ml-4">Items per page:</label>
              <select
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
                className="border rounded px-2 py-1 text-sm"
              >
                <option value={4}>4</option>
                <option value={8}>8</option>
                <option value={12}>12</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {paginatedProducts.map((product) => (
              <ProductCardDetailed key={product.slug} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }, (_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`px-3 py-1 border rounded ${
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
