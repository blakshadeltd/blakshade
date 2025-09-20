// app/build-genset/page.tsx
import { Metadata, Viewport } from "next";
import BuildGenset from "./BuildGenset";

export const metadata: Metadata = {
  title: "Build Your Custom Generator | BlakShade Ltd",
  description: "Design your custom power solution with our generator builder tool. Select specifications, brand preferences, and additional options for a tailored quotation.",
  keywords: "custom generator, power solution, generator builder, diesel generator, backup power",
  authors: [{ name: "BlakShade Ltd" }],
  
  robots: "index, follow",
  openGraph: {
    title: "Build Your Custom Generator | BlakShade Ltd",
    description: "Design your custom power solution with our generator builder tool.",
    type: "website",
    locale: "en_UK",
    siteName: "BlakShade Ltd",
    url: "https://blakshade.com/build-genset",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BlakShade_Ltd",
    creator: "@BlakShade_Ltd",
    title: "Build Your Custom Generator - BlakShade Ltd",
    description: "Design your custom power solution with our generator builder tool.",
  }
};

// Schema Data for the Build Your Generator page
const buildGensetSchema = {
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
      "@type": "WebPage",
      name: "Build Your Custom Generator",
      description: "Design your custom power solution with our generator builder tool.",
      url: "https://blakshade.com/build-genset",
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
      datePublished: "2024-01-01",
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
          name: "Build Genset",
          item: "https://blakshade.com/build-genset",
        },
      ],
    },
  ],
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function BuildGensetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildGensetSchema) }}
      />
      <BuildGenset />
    </>
  );
}