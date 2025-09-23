
import { Metadata, Viewport } from "next";
import OpenGeneratorsClient from "./OpenGeneratorsClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Open Diesel Generators | BlakShade Ltd",
  description: "Robust open diesel generators for industrial & construction use. High-power solutions from BlakShade built for demanding applications.",
  keywords: "open diesel generators, industrial generators, prime power generators, heavy duty generators",
  authors: [{ name: "BlakShade Ltd" }],
  robots: "index, follow",
  openGraph: {
    title: "Open Diesel Generators | BlakShade Ltd",
    description: "Robust open diesel generators for industrial & construction use. High-power solutions from BlakShade built for demanding applications.",
    type: "website",
    locale: "en_UK",
    siteName: "BlakShade Ltd",
    url: "https://blakshade.com/generators/open", // Add specific URL
  },
  twitter: {
    card: "summary_large_image",
    site: "@BlakShade_Ltd",
    creator: "@BlakShade_Ltd",
    title: "Open Diesel Generators | BlakShade Ltd", // More specific title
    description: "Robust open diesel generators for industrial & construction use. High-power solutions from BlakShade built for demanding applications.", // More specific description
  },
  // Add canonical URL
  alternates: {
    canonical: "https://blakshade.com/generators/open",
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
        "@id": "https://blakshade.com/generators/open"
      },
      name: "Open Diesel Generators",
      description: "Robust open diesel generators for industrial & construction use. High-power solutions from BlakShade built for demanding applications.",
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
        {
          "@type": "ListItem",
          position: 3,
          name: "Open Diesel Generators",
          item: "https://blakshade.com/generators/open",
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
  page?: string;
  frequency?: string;
  fuelType?: string;
  phase?: string;
  [key: string]: string | undefined;
}

export default async function OpenGeneratorsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolvedSearchParams = await searchParams;

  // Parse current page from searchParams, default to 1
  const currentPage = parseInt(resolvedSearchParams.page || "1", 10);

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <OpenGeneratorsClient         searchParams={{ ...resolvedSearchParams, page: String(currentPage) }}
      />
    </>
  );
}