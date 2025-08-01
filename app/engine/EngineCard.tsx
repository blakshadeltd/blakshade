"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { setComponent } from "@/store/gensetSlice";
import Link from "next/link";

interface Product {
  title: string;
  slug: string;
  image: string;
  standbyPower: string;
  primePower: string;
  rpm: string;
  frequency: string;
  fuel: string;
  emissions: string;
  cylinders: number;
}

export default function EngineCard({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleAddToBuild = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(
      setComponent({
        category: "engine",
        product: {
          id: product.slug,
          name: product.title,
        },
      })
    );
    router.push("/build-genset");
  };

  return (
    <Link
      href={`/engine/${product.slug}`}
      className="group block rounded-2xl overflow-hidden border bg-white hover:shadow-xl transition"
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
        <h3 className="text-xl text-center text-[var(--foreground)] mb-6">
          {product.title}
        </h3>

        {/* Power Ratings */}
        <div className="grid grid-cols-2 gap-2 text-sm mb-6">
          <div className="bg-gray-100 rounded-lg p-2 text-center">
            <div className="text-[var(--foreground)]">{product.standbyPower}</div>
            <div className="text-xs text-gray-500">Standby</div>
          </div>
          <div className="bg-gray-100 rounded-lg p-2 text-center">
            <div className="text-[var(--foreground)]">{product.primePower}</div>
            <div className="text-xs text-gray-500">Prime</div>
          </div>
        </div>

        {/* Specs */}
        <div className="text-sm text-gray-700 space-y-2 mb-6">
          <div className="flex justify-between"><span>RPM:</span><span>{product.rpm}</span></div>
          <div className="flex justify-between"><span>Frequency:</span><span>{product.frequency}</span></div>
          <div className="flex justify-between"><span>Fuel:</span><span className="font-medium text-green-700">{product.fuel}</span></div>
          <div className="flex justify-between"><span>Emissions:</span><span>{product.emissions}</span></div>
          <div className="flex justify-between"><span>Cylinders:</span><span>{product.cylinders}</span></div>
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
