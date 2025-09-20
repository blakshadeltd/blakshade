// app/some-page/page.tsx
import { Metadata, Viewport } from "next";
import CountryVoltageList from "./CountryVoltageList";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Voltages and Frequencies by Country | BlakShade Ltd",
  description: "Complete reference for electrical standards for all countries. Voltage, frequency, wiring and plug types.",
  keywords: "voltage by country, electrical standards, frequency by country, plug type by country",
  authors: [{ name: "BlakShade Ltd" }],
  
  robots: "index, follow",
  openGraph: {
    title: "Voltages and Frequencies by Country | BlakShade Ltd",
    description: "Complete reference for electrical standards for all countries. Voltage, frequency, wiring and plug types.",
    type: "website",
    locale: "en_UK",
    siteName: "BlakShade Ltd",
    url: "https://blakshade.com/info/worldwide-voltage-frequency/",

  },
  twitter: {
    card: "summary_large_image",
    site: "@BlakShade_Ltd",
    creator: "@BlakShade_Ltd",
    title: "Voltages and Frequencies by Country | BlakShade Ltd",
    description: "Complete reference for electrical standards for all countries. Voltage, frequency, wiring and plug types.",
  },
  alternates: {
    canonical: "https://blakshade.com/info/worldwide-voltage-frequency",
  }
};


const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://blakshade.com/info/worldwide-voltage-frequency/"
      },
      name: "Voltages and Frequencies by Country",
      description: "Complete reference for electrical standards for all countries. Voltage, frequency, wiring and plug types.",
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
          name: "Info",
          item: "https://blakshade.com/info/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Voltages and Frequencies by Country",
          item: "https://blakshade.com/info/worldwide-voltage-frequency/",
        },
      ],
    },
  ]
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function Page() {
  return (
    <><Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <CountryVoltageList /></>

  );
}
