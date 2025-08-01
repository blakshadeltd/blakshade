import { notFound } from "next/navigation";
import { EngineProduct, engines } from "@/data/engine/engineProducts";
import Image from "next/image";
import SpecItem from "@/app/component/SpecItem";
import Link from "next/link";
import AddToBuildButton from "@/app/component/AddToBuildButton";
import { use } from "react";

export default function EngineSpecPage(props: { params: Promise<{ slug: string }> }) {
    const { slug } = use(props.params);
    const product: EngineProduct | undefined = engines.find((p) => p.slug === slug);

    if (!product) return notFound();

  return (
            <section>
                {/* Hero Section */}
                <div className="bg-[var(--foreground)] h-[120px] md:h-[180px] rounded-[30px] mx-4 relative overflow-hidden">
                    <div className="container absolute inset-0 flex items-end justify-start">
                        <h1 className="font-normal italic text-[var(--background)] mb-4 text-2xl">
                            {product.title}
                        </h1>
                    </div>
                </div>

                {/* Image + Info */}
                <div className="container py-12 flex flex-col md:flex-row mt-3 gap-6 items-start">
                    {/* Image */}
                    <div className="w-full md:w-[50%]">
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={800}
                            height={600}
                            className="rounded-xl shadow-md w-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="w-full space-y-6">
                        <h1 className="text-[var(--foreground)] text-xl md:text-2xl lg:text-4xl">
                            {product.title}
                        </h1>
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0 text-base text-[var(--foreground)] pb-4 max-w-4xl mx-auto"></dl>

                        {/* Short Specs */}
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-base text-[var(--foreground)] pb-4">
                            {[
                                { label: "Standby", value: product.standbyPower },
                                { label: "Fuel Consumption", value: product.fuelConsumption },
                                { label: "Prime", value: product.primePower },
                                { label: "RPM", value: product.rpm },
                                { label: "Frequency", value: product.frequency },
                                { label: "Fuel", value: product.fuel },
                                { label: "Emissions", value: product.emissions },
                                { label: "Cylinders", value: product.cylinders },
                            ].map((spec, i) => (
                                <div
                                    key={i}
                                    className="flex justify-between items-center border-b border-gray-200 last:border-0 pb-2">
                                    <dt>{spec.label}:</dt>
                                    <dd>{spec.value}</dd>
                                </div>
                            ))}
                        </dl>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
            <AddToBuildButton
              id={product.slug}
              name={product.title}
              category="engine"
            />
                            <Link
                                href="/get-started"
                                className="w-full lg:w-1/2 px-6 md:px-8 lg:px-10 py-3 text-left btn-second shine-effect"
                            >
                                Full Specification
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Description + Specs */}
                <div className="container mt-16 text-[var(--foreground)] max-w-4xl space-y-14">
                    <p className="text-lg leading-relaxed">{product.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {product.specs.map((section, i) => (
                            <section key={i}>
                                <h3 className="text-xl font-base text-[var(--foreground)] mb-4 border-b pb-2">
                                    {section.group}
                                </h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {section.items.map((item, idx) => (
                                        <SpecItem key={idx} label={item.label} value={item.value} />
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>

            </section>
  );
}
