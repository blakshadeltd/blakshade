// app/generators/Home/page.tsx
import { Metadata, Viewport } from "next";
import HomeGeneratorsClient from "./HomeGeneratorsClient";

export let metadata: Metadata = {
  title: "Home Diesel Generators | BlakShade Ltd",
  description: "Reliable home diesel generators for backup power. Keep your household running during outages with BlakShade's quiet, efficient solutions.",
  keywords: "home diesel generators, residential diesel generators, house generators, backup power for homes, home standby generators",
  authors: [{ name: "BlakShade Ltd" }],

  robots: "index, follow",
  openGraph: {
    title: "Home Diesel Generators | BlakShade Ltd",
    description: "Reliable home diesel generators for backup power. Keep your household running during outages with BlakShade's quiet, efficient solutions.",
    type: "website",
    locale: "en_UK",
    siteName: "BlakShade Ltd",
    url: "https://blakshade.com/generators/home",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BlakShade_Ltd",
    creator: "@BlakShade_Ltd",
    title: "Home Diesel Generators | BlakShade Ltd",
    description: "Reliable home diesel generators for backup power. Keep your household running during outages with BlakShade's quiet, efficient solutions.",
  },
  alternates: {
    canonical: "https://blakshade.com/generators/home",
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
        "@id": "https://blakshade.com/generators/home"
      },
      name: "Home Diesel Generators",
      description: "Reliable home diesel generators for backup power. Keep your household running during outages with BlakShade's quiet, efficient solutions.",
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
          name: "Home Generators",
          item: "https://blakshade.com/generators/home",
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

export default async function HomeGeneratorsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolvedSearchParams = await searchParams;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <HomeGeneratorsClient searchParams={resolvedSearchParams} />
    </>
  );
}