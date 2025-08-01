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
    <Link href={`/control-panel/${product.slug}`} className="group block rounded-2xl overflow-hidden border bg-white hover:shadow-xl transition"
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


        {/* Key Specs */}
        <div className="text-sm text-gray-700 space-y-2 mb-6">
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
