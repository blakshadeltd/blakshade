import {use } from "react";
import Image from "next/image";
import Link from "next/link";
import SpecItem from "@/app/component/SpecItem";
import { notFound } from "next/navigation";
import { CatProduct, cats } from "@/data/generators/cat/catProducts";
import Script from "next/script";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const product = cats.find((p) => p.slug === resolvedParams.slug);

  if (!product) return notFound();

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



export default function GeneratorSpecPage(props: { params: Promise<{ slug: string }> }) {
    const { slug } = use(props.params);
    const product: CatProduct | undefined = cats.find((p) => p.slug === slug);

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
                logo: "https://blakshade.com/BlakShade-Ltd-logo-01.jpg",
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
                url: "https://blakshade.com",
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
                        name: "CAT",
                    },
                    aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: "5",
                        bestRating: "5",
                        worstRating: "1",
                        ratingCount: "9"
                    }
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: "https://blakshade.com",
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "Diesel Generators",
                        item: "https://blakshade.com/generators",
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: "CAT Generators",
                        item: `https://blakshade.com/generators/cat`,
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
                <div
                    className="bg-[var(--foreground)] h-[120px] md:h-[180px] rounded-[30px] mx-4 relative overflow-hidden"
                    style={{ background: "linear-gradient(90deg, var(--foreground), var(--hover))" }}
                >
                    <div className="container h-full flex items-end pb-4">
                        <h2 className="text-[var(--background)] text-xl md:text-2xl">
                            {product.metaTitle}
                        </h2>
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
