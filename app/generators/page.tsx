// app/generators/page.tsx
import { Metadata, Viewport } from "next";
import GeneratorsClient from "./GeneratorsClient";
import Script from "next/script";

interface SearchParams {
  page?: string;
  frequency?: string;
  fuelType?: string;
  phase?: string;
  brand?: string;
  emission?: string;
  buildType?: string;
  kvaRating?: string;
  [key: string]: string | undefined;
}

// Function to build URL with parameters (excluding page)
function buildCanonicalUrl(searchParams: SearchParams): string {
  const baseUrl = "https://blakshade.com/generators";
  const params = new URLSearchParams();
  
  // Add all filter parameters except page
  if (searchParams.brand && searchParams.brand !== "All") params.set('brand', searchParams.brand);
  if (searchParams.emission && searchParams.emission !== "All") params.set('emission', searchParams.emission);
  if (searchParams.frequency && searchParams.frequency !== "All") params.set('frequency', searchParams.frequency);
  if (searchParams.fuelType && searchParams.fuelType !== "Diesel") params.set('fuelType', searchParams.fuelType);
  if (searchParams.phase && searchParams.phase !== "All") params.set('phase', searchParams.phase);
  if (searchParams.buildType && searchParams.buildType !== "All") params.set('buildType', searchParams.buildType);
  if (searchParams.kvaRating && searchParams.kvaRating !== "All") params.set('kvaRating', searchParams.kvaRating);
  
  const queryString = params.toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}

export async function generateMetadata({ searchParams }: { searchParams: Promise<SearchParams> }): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const currentPage = parseInt(resolvedSearchParams.page || "1", 10);
  const canonicalUrl = buildCanonicalUrl(resolvedSearchParams);
  
  // For paginated pages (page 2+), use noindex to prevent duplicate content
  const robots = currentPage > 1 ? "noindex, follow" : "index, follow";
  
  const title = currentPage > 1 
    ? `Diesel Generators - Page ${currentPage} | BlakShade Ltd`
    : "Diesel Generators | BlakShade Ltd";

  return {
    title,
    description: "Reliable diesel generators for businesses, disaster relief & remote industries. Customizable power solutions from BlakShade Ltd.",
    keywords: "diesel generators, backup generators, industrial generators, commercial generators",
    authors: [{ name: "BlakShade Ltd" }],
    robots,
    openGraph: {
      title,
      description: "Reliable diesel generators for businesses, disaster relief & remote industries. Customizable power solutions from BlakShade Ltd.",
      type: "website",
      locale: "en_UK",
      siteName: "BlakShade Ltd",
      url: canonicalUrl,
    },
    twitter: {
      card: "summary_large_image",
      site: "@BlakShade_Ltd",
      creator: "@BlakShade_Ltd",
      title,
      description: "Reliable diesel generators for businesses, disaster relief & remote industries. Customizable power solutions from BlakShade Ltd.",
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

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
        "@id": "https://blakshade.com/generators",
      },
      name: "Diesel Generators",
      description: "Reliable diesel generators for businesses, disaster relief & remote industries. Customizable power solutions from BlakShade Ltd.",
      author: {
        "@type": "Organization",
        name: "BlakShade Ltd",
      },
      publisher: {
        "@type": "Organization",
        name: "BlakShade Ltd",
        logo: {
          "@type": "ImageObject",
          url: "https://blakshade.com/BlakShade-Ltd-logo-01.jpg",
        },
      },
      datePublished: "2021-10-11",
      dateModified: new Date().toISOString().split("T")[0],
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


export default async function GeneratorsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolvedSearchParams = await searchParams;
  const currentPage = parseInt(resolvedSearchParams.page || "1", 10);

  // Note: We need to calculate total pages here, but this requires knowing the filtered products count
  // Since this is computed in the client component, we'll handle the prev/next links in GeneratorsClient
  // For now, we'll pass the current page to the client component

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <GeneratorsClient
        searchParams={{ ...resolvedSearchParams, page: String(currentPage) }}
      />
    </>
  );
}