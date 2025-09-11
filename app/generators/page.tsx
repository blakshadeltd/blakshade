// app/generators/silent/page.tsx
import { Metadata } from "next";
import GeneratorsClient from "./GeneratorsClient";

export const metadata: Metadata = {
  title: "Diesel Generators - BlakShade Ltd",
  description: "BlakShade Ltd engineers energy resilience with cleaner power solutions for individuals, businesses and communities. Customizable generators for disaster relief and remote industries.",
  keywords: "generators, energy resilience, power solutions, diesel generators, disaster relief, remote power",
  authors: [{ name: "BlakShade Ltd" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Diesel Generators - BlakShade Ltd",
    description: "Engineering energy resilience with cleaner power solutions for individuals, businesses and communities.",
    type: "website",
    locale: "en_UK",
    siteName: "BlakShade Ltd",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BlakShade_Ltd",
    creator: "@BlakShade_Ltd",
  }
};

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
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://blakshade.com/"
      },
      headline: "BlakShade Ltd",
      description: "Bespoke Diesel Generators Solutions to meet your specific power needs. Wherever you need it.",
      author: {
        "@type": "Organization",
        name: "BlakShade Ltd"
      },
      publisher: {
        "@type": "Organization",
        name: "BlakShade Ltd",
        logo: {
          "@type": "ImageObject",
          url: "https://cdn.blakshade.com/assets/img/logo/ade-logo-dark-square.png"
        }
      },
      datePublished: "2021-10-11",
      dateModified: "2025-09-12"
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
          item: "https://blakshade.com/generators/",
        },
      ],
    },
  ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <GeneratorsClient searchParams={resolvedSearchParams} />
    </>
  );
}