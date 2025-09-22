// app/generators/Cummins/page.tsx
import { Metadata, Viewport } from "next";
import CumminsGeneratorsClient from "./CumminsGeneratorsClient";
import Script from "next/script";
import { cummins } from "@/data/generators/cummins/cumminsProducts";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cummins Diesel Generators | BlakShade Ltd",
  description: "Cummins diesel generators from BlakShade. Reliable power solutions from 20kVA to 3000kVA for industrial & commercial applications.",
  keywords: "Cummins diesel generators, Cummins generator sets, Cummins standby generators, Cummins industrial generators",
  authors: [{ name: "BlakShade Ltd" }],
  
  robots: "index, follow",
  openGraph: {
    title: "Cummins Diesel Generators | BlakShade Ltd",
    description: "Cummins diesel generators from BlakShade. Reliable power solutions from 20kVA to 3000kVA for industrial & commercial applications.",
    type: "website",
    locale: "en_UK",
    siteName: "BlakShade Ltd",
    url: "https://blakshade.com/generators/cummins", // Add specific URL
  },
  twitter: {
    card: "summary_large_image",
    site: "@BlakShade_Ltd",
    creator: "@BlakShade_Ltd",
    title: "Cummins Diesel Generators | BlakShade Ltd", // More specific title
    description: "Cummins diesel generators from BlakShade. Reliable power solutions from 20kVA to 3000kVA for industrial & commercial applications.", // More specific description
  },
  // Add canonical URL
  alternates: {
    canonical: "https://blakshade.com/generators/cummins",
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
        "@id": "https://blakshade.com/generators/cummins"
      },
      name: "Cummins Diesel Generators",
      description: "Cummins diesel generators from BlakShade. Reliable power solutions from 20kVA to 3000kVA for industrial & commercial applications.",
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
          item: "https://blakshade.com/",
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
          name: "Cummins Diesel Generators",
          item: "https://blakshade.com/generators/cummins",
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

// Then in your return statement, add the component:
export default async function CumminsGeneratorsPage({
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
      
      {/* ADD THIS LINE - Hidden links for crawlers */}
      
      <CumminsGeneratorsClient searchParams={resolvedSearchParams} />
    </>
  );
}