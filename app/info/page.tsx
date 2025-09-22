import React from 'react';
import Link from 'next/link';
import { Metadata, Viewport } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: "Company Info | BlakShade Ltd",
    description: "Access all BlakShade company information including About Us. Your complete resource for generator knowledge.",
    keywords: "info about blakshade ltd, generator info",
    authors: [{ name: "BlakShade Ltd" }],
    
    robots: "index, follow",
    openGraph: {
        title: "Company Info | BlakShade Ltd",
        description: "Access all BlakShade company information including About Us. Your complete resource for generator knowledge.",
        type: "website",
        locale: "en_UK",
        siteName: "BlakShade Ltd",
        url: "https://blakshade.com/info",

    },
    twitter: {
        card: "summary_large_image",
        site: "@BlakShade_Ltd",
        creator: "@BlakShade_Ltd",
        title: "Company Info | BlakShade Ltd",
        description: "Access all BlakShade company information including About Us. Your complete resource for generator knowledge.",
    },
    alternates: {
        canonical: "https://blakshade.com/info",
    }
};


const orgSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://blakshade.com/info"
            },
            name: "Info",
            description: "Access all BlakShade company information including About Us. Your complete resource for generator knowledge.",
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
                    name: "Info",
                    item: "https://blakshade.com/info",
                },
            ],
        },
    ]
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

const InfoPage = () => {
    // Information pages data
    const infoPages = [
        {
            title: 'About Us',
            description: 'Learn about BlakShade and our mission to provide reliable power solutions',
            path: '/info/about-us',
            icon: (
                <svg className="w-10 h-10 mb-4 text-[var(--foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            )
        },
        {
            title: 'Power Generation Glossary',
            description: 'Understand key terms and concepts in power generation',
            path: '/info/glossary',
            icon: (
                <svg className="w-10 h-10 mb-4 text-[var(--foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
            )
        },
        {
            title: 'Payment and Shipment',
            description: 'Information about payment methods and delivery options',
            path: '/info/payment-and-shipment',
            icon: (
                <svg className="w-10 h-10 mb-4 text-[var(--foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
            )
        },
        {
            title: 'Voltages and Frequencies',
            description: 'Guide to electrical standards around the world',
            path: '/info/worldwide-voltage-frequency',
            icon: (
                <svg className="w-10 h-10 mb-4 text-[var(--foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
            )
        },
    ];

    return (
        <>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />
            

            {/* Header Section */}
            <div
                className="bg-[var(--foreground)] h-[120px] md:h-[180px] rounded-[30px] mx-4 relative overflow-hidden mb-12"
                style={{ background: "linear-gradient(90deg, var(--foreground), var(--hover))" }}
            >
                <div className="container h-full flex items-end pb-4">
                    <h1 className="text-[var(--background)] text-2xl md:text-4xl">
                        Company Info
                    </h1>
                </div>
            </div>
            
            <div className="bg-background text-foreground font-normal">
                <div className="container mx-auto px-4 pb-12">
                    {/* Information Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {infoPages.map((page, index) => (
                            <Link
                                href={page.path}
                                key={index}
                                className="block transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="h-full rounded-xl p-6 border border-gray-300 bg-white hover:bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300 energy-pulse flex flex-col items-center text-center">
                                    <div className="bg-gray-100 p-3 rounded-full mb-4">
                                        {page.icon}
                                    </div>
                                    <h3 className="text-xl mb-3 font-normal">{page.title}</h3>
                                    <p className="text-sm text-gray-600 mb-4 flex-grow">{page.description}</p>
                                    <div className="flex items-center justify-center text-sm text-[var(--foreground)] mt-2">
                                        <span className="mr-1">Learn more</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
};

export default InfoPage;

