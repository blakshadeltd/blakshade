"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { setComponent } from "@/store/gensetSlice";
import Link from "next/link";

interface AlternatorProduct {
  title: string;
  slug: string;
  category: string;
  brand: string; 
  size: number;
  image: string;
  ratedPower: string;
  voltage: string; 
  frequency: string;
  phase: string;
  model: string;
  description?: string;
}

export default function AlternatorCard({ product }: { product: AlternatorProduct }) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleAddToBuild = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();

    dispatch(
      setComponent({
        category: "alternator",
        product: {
          id: product.slug,
          name: product.title,
        },
      })
    );

    router.push("/build-genset");
  };

  return (
    <Link href={`/alternator/${product.slug}`}       className="group block rounded-2xl overflow-hidden border bg-white hover:shadow-xl transition"
        >
          <div className="p-4 flex flex-col h-full">
            {/* Image */}
            <div className="relative w-full h-40 mb-4">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
    
            {/* Title */}
            <h3 className="text-xl font-md text-center text-[var(--foreground)] mb-6">
              {product.title}
            </h3>
    
        {/* Key Specs grid */}
        <div className="grid grid-cols-2 gap-2 text-sm mb-6">
          <div className="bg-gray-100 rounded-lg p-2 text-center">
            <div className="text-[var(--foreground)]">{product.ratedPower}</div>
            <div className="text-xs text-gray-600">Rated Power</div>
          </div>
          <div className="bg-gray-100 rounded-lg p-2 text-center">
            <div className="text-[var(--foreground)]">{product.voltage}</div>
            <div className="text-xs text-gray-600">Voltage</div>
          </div>
        </div>

        {/* Additional Specs */}
        <div className="text-sm text-gray-700 space-y-2 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">Frequency:</span>
            <span className="text-[var(--foreground)]">{product.frequency}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Phase:</span>
            <span className="text-[var(--foreground)]">{product.phase}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Brand:</span>
            <span className="text-[var(--foreground)]">{product.brand}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Model:</span>
            <span className="text-[var(--foreground)]">{product.model}</span>
          </div>
        </div>
        {/* Add to Build Button */}
        <button
          onClick={handleAddToBuild}
          className="w-full py-2 btn-primary shine-effect"
        >
          Add to Build
        </button>
      </div>
    </Link>
  );
}
