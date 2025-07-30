"use client";

import Image from "next/image";
import Link from "next/link";

interface Product {
    name: string;
    slug: string;
    image: string;
    brand: string;
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
        <Link href={`/generators/${product.brand}/${product.slug}`} className="block group">

            <div className="rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 group-hover:shadow-lg overflow-hidden flex flex-col h-full">
                {/* Image */}
                <div className="relative w-full h-48">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Power Rating */}
                <div className="bg-[var(--foreground)] text-[var(--background)] text-center py-3 text-md">
                    {product.name}
                </div>
                <div className="grid grid-cols-2 text-center text-sm border-b border-gray-300">
                    <div className="py-3 border-r border-gray-300">
                        <div className="text-[var(--foreground)] text-base italic">{product.standbyPower}</div>
                        <div className="text-xs text-gray-600">Standby</div>
                    </div>
                    <div className="py-3">
                        <div className="text-[var(--foreground)] text-base italic">{product.primePower}</div>
                        <div className="text-xs text-gray-600">Prime</div>
                    </div>
                </div>

                {/* Key Features */}
                <div className="text-sm text-gray-700 p-4 space-y-2">
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
            </div>
        </Link>
    );
}
