// app/generators/Cat/page.tsx
import { Metadata, Viewport } from "next";
import CatGeneratorsClient from "./CatGeneratorsClient";
import Script from "next/script";

export let metadata: Metadata = {
  title: "Cat Diesel Generators | BlakShade Ltd",
  description: "Durable Cat diesel generators from BlakShade Ltd. Industrial-grade power solutions from 20kVA to 4000kVA for construction & heavy industry.",
  keywords: "Cat diesel generators, Cat generator sets, Cat standby generators, Cat industrial generators",
  authors: [{ name: "BlakShade Ltd" }],
  
  robots: "index, follow",
  openGraph: {
    title: "Cat Diesel Generators | BlakShade Ltd",
    description: "Durable Cat diesel generators from BlakShade Ltd. Industrial-grade power solutions from 20kVA to 4000kVA for construction & heavy industry.",
    type: "website",
    locale: "en_UK",
    siteName: "BlakShade Ltd",
    url: "https://blakshade.com/generators/cat",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BlakShade_Ltd",
    creator: "@BlakShade_Ltd",
    title: "Cat Diesel Generators | BlakShade Ltd",
    description: "Durable Cat diesel generators from BlakShade Ltd. Industrial-grade power solutions from 20kVA to 4000kVA for construction & heavy industry.",
  },
  alternates: {
    canonical: "https://blakshade.com/generators/cat",
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
      logo: "https://blakshade.com/BlakShade-Ltd-logo-01.jpg",
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
      "@type": "CollectionPage",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://blakshade.com/generators/cat"
      },
      name: "Cat Diesel Generators",
      description: "Durable Cat diesel generators from BlakShade Ltd. Industrial-grade power solutions from 20kVA to 4000kVA for construction & heavy industry.",
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
      dateModified: new Date().toISOString().split('T')[0]
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
          name: "Cat Diesel Generators",
          item: "https://blakshade.com/generators/cat",
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

export default async function CatGenerators({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolvedSearchParams = await searchParams;

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <CatGeneratorsClient searchParams={resolvedSearchParams} />
    </>
  );
}