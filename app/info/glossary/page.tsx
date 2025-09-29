import { Metadata, Viewport } from "next";
import Glossary from "./glossary";


export const metadata: Metadata = {
    title: "Power Generation Glossary | BlakShade Ltd",
    description: "Comprehensive glossary of power generation industry terms and abbreviations. Learn technical definitions of generators, alternators, ATS, kVA, and more.",
    keywords: "generator glossary, power industry terms, diesel generator definitions",
    authors: [{ name: "BlakShade Ltd" }],
    
    robots: "index, follow",
    openGraph: {
        title: "Power Generation Glossary | BlakShade Ltd",
        description: "Comprehensive glossary of power generation industry terms and abbreviations. Learn technical definitions of generators, alternators, ATS, kVA, and more.",
        type: "website",
        locale: "en_UK",
        siteName: "BlakShade Ltd",
        url: "https://blakshade.com/info/glossary", // Add specific URL
    },
    twitter: {
        card: "summary_large_image",
        site: "@BlakShade_Ltd",
        creator: "@BlakShade_Ltd",
        title: "Power Generation Glossary", // More specific title
        description: "Comprehensive glossary of power generation industry terms and abbreviations. Learn technical definitions of generators, alternators, ATS, kVA, and more.", // More specific description
    },
    // Add canonical URL
    alternates: {
        canonical: "https://blakshade.com/info/glossary",
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
            "@type": "Article", // More appropriate than Article for a category page
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://blakshade.com/info/glossary"
            },
            name: "Power Generation Glossary",
            description: "Comprehensive glossary of power generation industry terms and abbreviations. Learn technical definitions of generators, alternators, ATS, kVA, and more.",
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
                    name: "Info",
                    item: "https://blakshade.com/info",
                },
                                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Power Generation Glossary",
                    item: "https://blakshade.com/info/glossary",
                },
            ],
        },
    ],
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function GlossaryPage() {
    return (
        <><script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
            <Glossary />
        </>

    );
}
