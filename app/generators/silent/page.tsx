// app/generators/silent/page.tsx
import { Metadata } from "next";
import { Suspense } from "react";
import SilentGeneratorsClient from "./SilentGeneratorsClient";

export const metadata: Metadata = {
  title: "Silent Generator - BlakShade Ltd",
  description: "BlakShade Ltd engineers energy resilience with cleaner power solutions for individuals, businesses and communities. Customizable generators for disaster relief and remote industries.",
  keywords: "generators, energy resilience, power solutions, diesel generators, disaster relief, remote power",
  authors: [{ name: "BlakShade Ltd" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Silent Generator - BlakShade Ltd",
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
          name: "Silent Generators",
          item: "https://blakshade.com/generators/silent",
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

interface SilentGeneratorsPageProps {
  searchParams: SearchParams;
}

export default function SilentGeneratorsPage({ searchParams }: SilentGeneratorsPageProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <SilentGeneratorsClient searchParams={searchParams} />
      </Suspense>
    </>
  );
}