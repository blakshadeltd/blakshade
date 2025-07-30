"use client";

import { useState } from "react";
import ControlPanelCard from "./ControlPanelCard";
import { controlPanelProducts } from "@/data/control-panel/controlPanelProducts";

export default function ControlPanelPage() {
  const [selectedType, setSelectedType] = useState<string>("All");

  // Get unique panel types for filters
  const types = Array.from(
    new Set(controlPanelProducts.map((p) => p.type))
  ).sort();

  const filteredProducts =
    selectedType === "All"
      ? controlPanelProducts
      : controlPanelProducts.filter((p) => p.type === selectedType);

  return (
    <section>
      {/* Hero Section */}
      <div className="bg-[var(--foreground)] h-[120px] md:h-[180px] rounded-[30px] mx-4 relative overflow-hidden">
        <div className="container absolute inset-0 flex items-end justify-start">
          <h1 className="font-normal italic text-[var(--background)] mb-4 text-2xl">
            Control Panel
          </h1>
        </div>
      </div>

      <div className="py-12 flex flex-col lg:flex-row gap-10 mx-4">
        {/* Sidebar */}
        <aside className="w-full lg:w-[20%] border rounded-xl p-4 overflow-hidden border-gray-200 bg-white shadow-sm">
          <h2 className="text-lg mb-4 text-[var(--foreground)]">Filter by Type</h2>
          <div className="space-y-3 text-sm text-gray-700">
            <button
              onClick={() => setSelectedType("All")}
              className={`btn-second text-left ${
                selectedType === "All" ? "bg-[var(--foreground)] text-[var(--background)]" : ""
              }`}
            >
              All
            </button>
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`btn-second text-left ${
                  selectedType === type ? "bg-[var(--foreground)] text-[var(--background)]" : ""
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </aside>

        {/* Product Grid */}
        <main className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ControlPanelCard key={product.slug} product={product} />
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}
