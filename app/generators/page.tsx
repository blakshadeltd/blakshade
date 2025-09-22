// app/generators//page.tsx
import { Metadata, Viewport } from "next";
import GeneratorsClient from "./GeneratorsClient";
import Script from "next/script";
import Link from "next/link";
import { cummins } from "@/data/generators/cummins/cumminsProducts";
import { cats } from "@/data/generators/cat/catProducts";

export const metadata: Metadata = {
  title: "Diesel Generators | BlakShade Ltd",
  description: "Reliable diesel generators for businesses, disaster relief & remote industries. Customizable power solutions from BlakShade Ltd.",
  keywords: "diesel generators, backup generators, industrial generators, commercial generators",
  authors: [{ name: "BlakShade Ltd" }],
  
  robots: "index, follow",
  openGraph: {
    title: "Diesel Generators | BlakShade Ltd",
    description: "Reliable diesel generators for businesses, disaster relief & remote industries. Customizable power solutions from BlakShade Ltd.",
    type: "website",
    locale: "en_UK",
    siteName: "BlakShade Ltd",
    url: "https://blakshade.com/generators", // Add specific URL
  },
  twitter: {
    card: "summary_large_image",
    site: "@BlakShade_Ltd",
    creator: "@BlakShade_Ltd",
    title: "Diesel Generators - BlakShade Ltd", // More specific title
    description: "Reliable diesel generators for businesses, disaster relief & remote industries. Customizable power solutions from BlakShade Ltd.", // More specific description
  },
  // Add canonical URL
  alternates: {
    canonical: "https://blakshade.com/generators",
  }
};

// Improved Schema Data
const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "BlakShade Ltd",
      alternateName: "BlakShade",
      url: "https://blakshade.com/",
      logo: "https://blakshade.com/BlakShade-Ltd-logo-01.jpg", // Replace with actual logo URL
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+447380491992",
          contactType: "customer service",
          availableLanguage: "en",
          areaServed: "GB",
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
      "@type": "CollectionPage", // More appropriate than Article for a category page
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://blakshade.com/generators"
      },
      name: "Diesel Generators",
      description: "Reliable diesel generators for businesses, disaster relief & remote industries. Customizable power solutions from BlakShade Ltd.",
      author: {
        "@type": "Organization",
        name: "BlakShade Ltd"
      },
      publisher: {
        "@type": "Organization",
        name: "BlakShade Ltd",
        logo: {
          "@type": "ImageObject",
          url: "https://blakshade.com/BlakShade-Ltd-logo-01.jpg"
        }
      },
      datePublished: "2021-10-11",
      dateModified: new Date().toISOString().split('T')[0] // Dynamic date
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
      ],
    },
  ],
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};



interface SearchParams {
  frequency?: string;
  fuelType?: string;
  phase?: string;
  [key: string]: string | undefined;
}

export default async function GeneratorsPage({
  searchParams
}: {
  searchParams: Promise<SearchParams>
}) {
  const resolvedSearchParams = await searchParams;

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <GeneratorsClient searchParams={resolvedSearchParams} />
    </>
  );
}