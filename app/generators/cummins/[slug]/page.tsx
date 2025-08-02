import {use } from "react";
import Image from "next/image";
import Link from "next/link";
import SpecItem from "@/app/component/SpecItem";
import { notFound } from "next/navigation";
import { CumminsProduct, cummins } from "@/data/generators/cummins/cumminsProducts";
import Script from "next/script";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product: CumminsProduct | undefined = cummins.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Product Not Found - BlakShade Ltd",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: product.keywords,
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: `https://blakshade.com/generators/${product.slug}`,
      siteName: "BlakShade Ltd",
      images: [
        {
          url: `https://blakshade.com${product.image}`,
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.metaTitle,
      description: product.metaDescription,
      images: [`https://blakshade.com${product.image}`],
    },
  };
}



export default function GeneratorSpecPage(props: { params: { slug: string } }) {
  const { slug } = props.params;
  const product = cummins.find(p => p.slug === slug);

  if (!product) return notFound();

    // Schema Data
    const orgSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                name: "BlakShade Ltd",
                alternateName: "BlakShade",
                url: "https://blakshade.com/",
                logo: "(NOT Created YET)",
                contactPoint: [
                    {
                        "@type": "ContactPoint",
                        telephone: "+447380491992",
                        contactType: "customer service",
                        availableLanguage: "en",
                    },
                ],
                sameAs: [
                    "https://www.facebook.com/blakshadeltd",
                    "https://x.com/BlakShade_Ltd",
                    "https://www.instagram.com/blakshadeltd/",
                    "https://www.linkedin.com/company/blakshade-ltd/",
                    "https://www.threads.net/@blakshadeltd",
                ],
            },
            {
                "@type": "WebSite",
                name: "BlakShade Ltd",
                url: "https://blakshade.com/",
            },
        ],
    };

    const productSchema = {
        "@context": "https://schema.org/",
        "@graph": [
            {
                "@type": "Product",
                name: product.metaTitle,
                image: `https://blakshade.com${product.image}`,
                description: product.metaDescription,
                brand: {
                    "@type": "Brand",
                    name: product.brand,
                },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: "https://blakshade.com/",
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "Generators",
                        item: "https://blakshade.com/generators/",
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: product.brand,
                        item: `https://blakshade.com/generators/${product.category}`,
                    },
                ],
            },
        ],
    };

    return (
        <>
            {/* Inject schema data */}
            <Script
                type="application/ld+json"
                id="org-schema"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />
            <Script
                type="application/ld+json"
                id="product-schema"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />

            {/* Main Page UI */}
            <section>
                {/* Hero Section */}
                <div className="bg-[var(--foreground)] h-[120px] md:h-[180px] rounded-[30px] mx-4 relative overflow-hidden">
                    <div className="container absolute inset-0 flex items-end justify-start">
                        <h1 className="font-normal italic text-[var(--background)] mb-4 text-2xl">
                            {product.metaTitle}
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
                                { label: "Voltage", value: product.voltage },
                                { label: "Prime", value: product.primePower },
                                { label: "Frequency", value: product.frequency },
                                { label: "Engine", value: product.engine },
                                { label: "Amps Per Phase", value: product.ampsperphase },
                                { label: "Alternator", value: product.alternator },
                                { label: "Control Panel", value: product.controlpanel },
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
                            <button
                                className="w-full lg:w-1/2 px-6 md:px-8 lg:px-10 py-3 text-left btn-primary shine-effect cursor-pointer"
                            >
                                Enquiry
                            </button>
                            <Link
                                href={product.fullspec}
                                className="w-full lg:w-1/2 px-6 md:px-8 lg:px-10 py-3 text-left btn-second shine-effect"
                            >
                                Full Specification
                            </Link>
                        </div>
                    </div>
                </div>

{/* Description + Specs */}
<div className="container mt-16 text-[var(--foreground)] max-w-4xl space-y-14">
  <div
    className="text-base leading-relaxed"
    dangerouslySetInnerHTML={{ __html: product.description }}
  />

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
        </>
    );
}
