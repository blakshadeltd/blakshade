import { use } from "react";
import SpecItem from "@/app/component/SpecItem";
import { notFound } from "next/navigation";
import { CumminsProduct, cummins } from "@/data/generators/cummins/cumminsProducts";
import type { Metadata } from "next";
import ProductPageClient from "./ProductPageClient";
import Link from "next/link";
import Head from "next/head";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const product = cummins.find((p) => p.slug === resolvedParams.slug);

    if (!product) return notFound();

    return {
        title: product.metaTitle,
        description: product.metaDescription,
        keywords: product.keywords,
        alternates: {
            canonical: `https://blakshade.com/generators/cummins/${product.slug}`,
        },
        openGraph: {
            title: product.metaTitle,
            description: product.metaDescription,
            url: `https://blakshade.com/generators/cummins/${product.slug}`,
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
    const product: CumminsProduct | undefined = cummins.find((p) => p.slug === slug);

    if (!product) return notFound();

    // Schema Data
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://blakshade.com/#organization",
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
                "@id": "https://blakshade.com/#website",
                url: "https://blakshade.com/",
                name: "BlakShade Ltd",
                publisher: { "@id": "https://blakshade.com/#organization" },
            },
            {
                "@type": "Product",
                "@id": `https://blakshade.com/generators/cummins/${product.slug}#product`,
                name: product.metaTitle,
                image: [`https://blakshade.com${product.image}`],
                description: product.metaDescription,
                brand: {
                    "@type": "Brand",
                    name: "Cummins",
                },
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "5",
                    bestRating: "5",
                    worstRating: "1",
                    ratingCount: "13",
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
                        name: "Cummins Generators",
                        item: "https://blakshade.com/generators/cummins/",
                    },
                    {
                        "@type": "ListItem",
                        position: 4,
                        name: product.title,
                        item: `https://blakshade.com/generators/cummins/${product.slug}`,
                    },
                ],
            },
        ],
    };

    return (
        <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>


            {/* Main Page UI */}
            <section>
                {/* Hero Section */}
                <div
                    className="bg-[var(--foreground)] h-[120px] md:h-[180px] rounded-[30px] mx-4 relative overflow-hidden"
                    style={{ background: "linear-gradient(90deg, var(--foreground), var(--hover))" }}
                >
                    <div className="container h-full flex items-end justify-between pb-4">
                        {/* Product Title - Left side */}
                        <h2 className="text-[var(--background,#f4f3f3)] text-2xl md:text-4xl">
                            {product.title}
                        </h2>

                        {/* Breadcrumbs - Right side */}
                        <nav className="text-sm text-[var(--background)]">
                            <Link href="/" className="hover:text-gray-500 transition-colors">Home</Link>
                            <span className="mx-2">/</span>
                            <Link href="/generators" className="hover:text-gray-500 transition-colors">Generators</Link>
                            <span className="mx-2">/</span>
                            <Link href="/generators/cummins" className="hover:text-gray-500 transition-colors">Cummins</Link>
                            <span className="mx-2">/</span>
                            <span className="text-[var(--background)] font-medium">{product.title}</span>
                        </nav>
                    </div>
                </div>

                {/* Image + Info */}
                <div className="container py-12 flex flex-col md:flex-row mt-3 gap-6 items-start">
                    <div className="w-full md:w-[50%]">
                        <a href={product.image} target="_blank" rel="noopener noreferrer">
                            <img
                                src={product.image}
                                alt={product.title}
                                width={800}
                                height={600}
                                className="rounded-xl shadow-md w-full object-cover"
                            />
                        </a>
                    </div>

                    {/* Content */}
                    <div className="w-full space-y-6">
                        <h1 className="text-[var(--foreground,#2b2926)] text-2xl md:text-3xl">
                            {product.metaTitle}
                        </h1>

                        {/* Short Specs */}
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-base text-[var(--foreground,#2b2926)] pb-4">
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
                                    className="flex justify-between items-center border-b border-gray-200 last:border-0 pb-2"
                                >
                                    <dt>{spec.label}:</dt>
                                    <dd>{spec.value}</dd>
                                </div>
                            ))}
                        </dl>

                        {/* Interactive client component */}
                        <ProductPageClient product={product} />
                    </div>
                </div>

                {/* Description + Specs */}
                <div className="container mt-16 text-[var(--foreground,#2b2926)] max-w-4xl space-y-14 mb-16">
                    <div
                        className="text-base leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: product.description }}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {product.specs.map((section, i) => (
                            <section key={i}>
                                <h2 className="text-xl font-base text-[var(--foreground,#2b2926)] mb-4 border-b pb-2">
                                    {section.group}
                                </h2>
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
