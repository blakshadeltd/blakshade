"use client";

import Image from "next/image";
import Link from "next/link";

interface Product {
    title: string;
    slug: string;
    image: string;
    brand: string;
    category: string;
    alternator: string;
    frequency: string;
    fuelType: string;
    phase: string;
    voltage: string;
    buildType: string;
    startType: string;
    size: number;
    standbyPower: string;
    primePower: string;
}

export default function GeneratorsCard({ product }: { product: Product }) {
    return (
        <Link href={`/generators/${product.category}/${product.slug}`} className="group block rounded-2xl overflow-hidden border bg-white hover:shadow-xl transition">

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

                {/* Key Features */}
                <div className="text-sm text-gray-700 space-y-2 mb-6">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Engine:</span>
                        <span className="text-[var(--foreground)]">{product.brand}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Alternator:</span>
                        <span className="text-[var(--foreground)]">{product.alternator}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Phase:</span>
                        <span className="text-[var(--foreground)]">{product.phase}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Voltage:</span>
                        <span className="text-[var(--foreground)]">{product.voltage}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Build:</span>
                        <span className="text-[var(--foreground)]">{product.buildType}</span>
                    </div>
                </div>

                {/* View Details Button */}
                <button className="w-full py-2 btn-primary shine-effect">
                View Details
                </button>
            </div>
        </Link>
    );
}
