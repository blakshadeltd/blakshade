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
    <Link href={`/alternator/${product.slug}`} className="block">
      <div className="cursor-pointer rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm transition group hover:shadow-lg font-normal">
        {/* Image with Overlay */}
        <div className="relative w-full h-48">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain bg-white p-4"
          />
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between">
            <button
              onClick={handleAddToBuild}
              className="m-4 px-6 py-2 rounded-[10px] shadow-md transition-all duration-500 ease-in-out bg-[var(--foreground)] text-[var(--background)] hover:rounded-[15px] hover:bg-[var(--hover)] cursor-pointer"
            >
              ADD TO BUILD
            </button>
          </div>
        </div>

        {/* Title */}
        <div className="bg-[var(--foreground)] text-[var(--background)] text-center py-3 text-md">
          {product.title}
        </div>

        {/* Key Specs grid */}
        <div className="grid grid-cols-2 text-center text-sm border-b border-gray-300">
          <div className="py-3 border-r border-gray-300">
            <div className="text-[var(--foreground)] text-base italic">{product.ratedPower}</div>
            <div className="text-xs text-gray-600">Rated Power</div>
          </div>
          <div className="py-3">
            <div className="text-[var(--foreground)] text-base italic">{product.voltage}</div>
            <div className="text-xs text-gray-600">Voltage</div>
          </div>
        </div>

        {/* Additional Specs */}
        <div className="text-sm text-gray-700 p-4 space-y-2">
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
      </div>
    </Link>
  );
}
