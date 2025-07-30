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
    rating?: number;
    details: {
        rpm: string;
        frequency: string;
        fuel: string;
        emissions: string;
        cylinders: number;
    };
}

export default function EngineCard({ product }: { product: Product }) {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleAddToBuild = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation(); // Prevents bubbling to Link
        e.preventDefault(); // Prevents the link default action just in case

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
        <Link href={`/engine/${product.slug}`} className="block">
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

                {/* Power Ratings */}
                <div className="bg-[var(--foreground)] text-[var(--background)] text-center py-3 text-md">
                    {product.title}
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
                        <span className="text-gray-600">RPM:</span>
                        <span className="text-[var(--foreground)]">{product.details.rpm}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Frequency:</span>
                        <span className="text-[var(--foreground)]">{product.details.frequency}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Fuel:</span>
                        <span className="font-bold text-green-700">{product.details.fuel}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Emissions:</span>
                        <span className="text-[var(--foreground)]">{product.details.emissions}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Cylinders:</span>
                        <span className="text-[var(--foreground)]">{product.details.cylinders}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
