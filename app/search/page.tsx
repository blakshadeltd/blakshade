// app/search/page.tsx
import { Metadata } from "next";
import SearchResultsClient from "@/app/component/SearchResultsClient";
import { cummins } from "@/data/generators/cummins/cumminsProducts";
import { cats } from "@/data/generators/cat/catProducts";

export const metadata: Metadata = {
  title: "Search Generators - BlakShade Ltd",
  description: "Search for diesel generators, silent generators, and power solutions from BlakShade Ltd.",
};

// Define the search params type
type SearchParamsType = {
  q?: string | string[];
  brand?: string;
  emission?: string;
  frequency?: string;
  fuelType?: string;
  phase?: string;
  buildType?: string;
  minKva?: string;
  maxKva?: string;
};

export default async function SearchPage({ 
  searchParams 
}: { 
  searchParams: Promise<SearchParamsType> 
}) {
  // Await the searchParams promise
  const resolvedSearchParams = await searchParams;
  
  const rawQ = Array.isArray(resolvedSearchParams.q) 
    ? resolvedSearchParams.q[0] 
    : (resolvedSearchParams.q ?? "");
  const q = rawQ.trim().toLowerCase();

  const allGenerators = [...cummins, ...cats];

  const initialProducts = q
    ? allGenerators.filter((product) => {
        const fields = [
          product.title,
          product.brand,
          product.description,
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
        ];

        return fields.some((f) => {
          if (f === undefined || f === null) return false;
          return String(f).toLowerCase().includes(q);
        });
      })
    : allGenerators;

  // Pass the pre-filtered list down to the client for interactivity
  return <SearchResultsClient initialProducts={initialProducts} initialQuery={rawQ} />;
}