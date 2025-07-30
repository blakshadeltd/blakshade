import { notFound } from "next/navigation";
import { alternatorProducts } from "@/data/alternator/alternatorProducts";
import SpecItem from "@/app/component/SpecItem";
import Image from "next/image";
import Link from "next/link";
import AddToBuildButton from "@/app/component/AddToBuildButton";
import type { Metadata, ResolvingMetadata } from 'next';

// Define the proper type for params as a Promise
type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: ProductPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Await the params promise to resolve
  const resolvedParams = await params;
  const product = alternatorProducts.find((p) => p.slug === resolvedParams.slug);
  
  return {
    title: product?.title || "Alternator Details",
    description: product?.description || "Explore detailed alternator specs.",
  };
}

export default async function Page({ params }: ProductPageProps) {
  // Await the params promise to resolve
  const resolvedParams = await params;
  const product = alternatorProducts.find((p) => p.slug === resolvedParams.slug);

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
          <h1 className="text-[var(--foreground)] text-xl md:text-2xl lg:text-3xl">
            {product.title}
          </h1>

          {/* Short Specs */}
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-[var(--foreground)] pb-4">
            {product.shortSpecs.map((spec, i) => (
              <div key={i} className="flex gap-2">
                <dt className="font-normal">{spec.label}:</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 cursor-pointer">
            <AddToBuildButton
              id={product.slug}
              name={product.title}
              category="alternator"
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
      <div className="container mt-12 text-lg leading-relaxed text-gray-700 max-w-4xl space-y-10">
        <p>{product.description}</p>

        {product.specs.map((section, index) => (
          <section key={index}>
            <h3 className="text-xl text-[var(--foreground)] mb-4">{section.group}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {section.items.map((item, i) => (
                <SpecItem key={i} label={item.label} value={item.value} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}