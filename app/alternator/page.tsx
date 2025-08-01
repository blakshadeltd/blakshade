// app/alternator/page.tsx

"use client";

import { useState } from "react";
import { alternators } from "@/data/alternator/alternatorProducts";
import AlternatorCard from "./AlternatorCard";

export default function AlternatorPage() {
    const [sortOrder, setSortOrder] = useState("asc");
    const [itemsPerPage, setItemsPerPage] = useState(16);
    const [currentPage, setCurrentPage] = useState(1);

    const sortedProducts = alternators
        .slice()
        .sort((a, b) =>
            sortOrder === "asc" ? a.size - b.size : b.size - a.size
        );

    const totalItems = sortedProducts.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const currentPageClamped = Math.min(currentPage, totalPages);
    const paginatedProducts = sortedProducts.slice(
        (currentPageClamped - 1) * itemsPerPage,
        currentPageClamped * itemsPerPage
    );

    const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(parseInt(e.target.value));
        setCurrentPage(1);
    };

    const handlePrev = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    return (
        <section>
            {/* Hero Section */}
            <div className="bg-[var(--foreground)] h-[120px] md:h-[180px] rounded-[30px] mx-4 relative overflow-hidden">
                <div className="container absolute inset-0 flex items-end justify-start">
                    <h1 className="font-normal italic text-[var(--background)] mb-4 text-2xl">
                        Alternators
                    </h1>
                </div>
            </div>

            <div className="container py-12 flex flex-col lg:flex-row gap-10 mx-4">
                {/* Sidebar */}
                <aside className="w-full lg:w-[20%] border rounded-xl p-4 overflow-hidden border-gray-200 bg-white shadow-sm">
                    <h2 className="text-lg mb-4 text-[var(--foreground)]">Filters</h2>
                    <div className="space-y-3 text-sm text-gray-700">
                        <div>
                            <label htmlFor="brand" className="block font-normal mb-1">
                                Brand
                            </label>
                            <select id="brand" className="w-full border rounded px-2 py-1">
                                <option>All</option>
                                <option>Perkins</option>
                                <option>Cummins</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="power" className="block font-normal mb-1">
                                Power
                            </label>
                            <select id="power" className="w-full border rounded px-2 py-1">
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
                    {/* Sorting and info */}
                    <div className="text-[var(--foreground)] flex justify-between items-center mb-4">
                        <div>
                            Showing{" "}
                            <span>
                                {(currentPageClamped - 1) * itemsPerPage + 1}
                            </span>{" "}
                            -{" "}
                            <span>
                                {Math.min(currentPageClamped * itemsPerPage, totalItems)}
                            </span>{" "}
                            of <span>{totalItems}</span>
                        </div>

                        <div className="flex items-center gap-4 text-base">
                            <label htmlFor="itemsPerPage">Items per page:</label>
                            <select
                                id="itemsPerPage"
                                value={itemsPerPage}
                                onChange={handleItemsPerPageChange}
                                className="border rounded-[10px] px-2 py-1"
                            >
                                {[8, 16, 24, 32].map((num) => (
                                    <option key={num} value={num}>
                                        {num}
                                    </option>
                                ))}
                            </select>

                            <select
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                                className="px-3 py-1 border rounded-[10px]"
                            >
                                <option value="asc">Sort by KVA: Low to High</option>
                                <option value="desc">Sort by KVA: High to Low</option>
                            </select>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                        {paginatedProducts.map((product) => (
                            <AlternatorCard key={product.slug} product={product} />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-8 flex justify-center gap-4">
                        <button
                            onClick={handlePrev}
                            disabled={currentPageClamped === 1}
                            className="px-4 py-2 border rounded-[10px] bg-white text-black disabled:opacity-50"
                        >
                            Prev
                        </button>
                                    <span className="px-3 py-1">
              Page {currentPageClamped} of {totalPages || 1}
            </span>
                        <button
                            onClick={handleNext}
                            disabled={currentPageClamped === totalPages}
                            className="px-4 py-2 border rounded-[10px] bg-white text-black disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </main>
            </div>
        </section>
    );
}
