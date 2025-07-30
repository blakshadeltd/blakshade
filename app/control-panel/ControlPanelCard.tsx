"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { setComponent } from "@/store/gensetSlice";
import Link from "next/link";

interface ControlPanelProduct {
  title: string;
  slug: string;
  image: string;
  type: string;
  brand: string;
  ratedVoltage: string;
  ratedCurrent: string;
  protectionClass: string;
  enclosureType: string;
  dimensions: string;
  weight: string;
}

export default function ControlPanelCard({ product }: { product: ControlPanelProduct }) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleAddToBuild = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();

    dispatch(
      setComponent({
        category: "control-panel",
        product: {
          id: product.slug,
          name: product.title,
        },
      })
    );
    router.push("/build-genset");
  };

  return (
    <Link href={`/control-panel/${product.slug}`} className="block">
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

        {/* Title and Brand */}
        <div className="bg-[var(--foreground)] text-[var(--background)] text-center py-3 text-md">
          {product.title}
        </div>

        {/* Key Specs */}
        <div className="text-sm text-gray-700 p-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Type:</span>
            <span className="text-[var(--foreground)]">{product.type}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Rated Voltage:</span>
            <span className="text-[var(--foreground)]">{product.ratedVoltage}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Rated Current:</span>
            <span className="text-[var(--foreground)]">{product.ratedCurrent}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Protection Class:</span>
            <span className="text-[var(--foreground)]">{product.protectionClass}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Enclosure Type:</span>
            <span className="text-[var(--foreground)]">{product.enclosureType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Dimensions:</span>
            <span className="text-[var(--foreground)]">{product.dimensions}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Weight:</span>
            <span className="text-[var(--foreground)]">{product.weight}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
