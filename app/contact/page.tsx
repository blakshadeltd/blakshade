import { Metadata, Viewport } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
    title: "Contact Us | BlakShade Ltd",
    description: "Get in touch with BlakShade Ltd for diesel generator solutions. Call +44 7380 491992 for sales, support, or emergency power needs.",
    keywords: "contact BlakShade, generator sales, power solution experts, diesel generator quotes",
    authors: [{ name: "BlakShade Ltd" }],
    
    robots: "index, follow",
  openGraph: {
    title: "Contact Us | BlakShade Ltd",
    description: "Get in touch with BlakShade Ltd for diesel generator solutions. Call +44 7380 491992 for sales, support, or emergency power needs.",
    type: "website",
    locale: "en_UK",
    siteName: "BlakShade Ltd",
    url: "https://blakshade.com/contact", // Add specific URL
  },
  twitter: {
    card: "summary_large_image",
    site: "@BlakShade_Ltd",
    creator: "@BlakShade_Ltd",
    title: "Contact Us", // More specific title
    description: "Get in touch with BlakShade Ltd for diesel generator solutions. Call +44 7380 491992 for sales, support, or emergency power needs.", // More specific description
  },
  // Add canonical URL
  alternates: {
    canonical: "https://blakshade.com/contact",
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
            logo: "https://blakshade.com/BlakShade-Ltd-logo-01.jpg",
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
            "@type": "ContactPage",
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://blakshade.com/contact"
            },
            name: "Contact Us",
            description: "Get in touch with BlakShade Ltd for diesel generator solutions. Call +44 7380 491992 for sales, support, or emergency power needs.",
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
                    name: "Contact Us",
                    item: "https://blakshade.com/contact",
                },
            ],
        }
    ],
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function ContactPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
                <div className="min-h-screen">
                {/* Hero Section */}
                <div
                    className="bg-[var(--foreground)] h-[120px] md:h-[180px] rounded-[30px] mx-4 relative overflow-hidden"
                    style={{ background: "linear-gradient(90deg, var(--foreground), var(--hover))" }}
                >
                    <div className="container h-full flex items-end pb-4">
                        <h1 className="text-[var(--background)] text-2xl md:text-4xl">
                            Contact Us
                        </h1>
                    </div>
                </div>

                {/* Content Container */}
                <div className="container mx-auto py-8">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 bg-[var(--background)] rounded-lg p-4 md:p-8">
                        {/* Contact Information */}
                        <div className="space-y-4 md:space-y-6 md:border-r md:border-gray-200 pb-6 md:pb-0 md:pr-8">
                            <div>
                                <h3 className="text-lg md:text-xl mb-3 md:mb-4 text-[var(--foreground)]">
                                    Office Location
                                </h3>
                                <p className="text-sm md:text-base">
                                    182 High St N,<br />
                                     London E6 2JA,<br />
                                     United Kingdom
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg md:text-xl mb-2 text-[var(--foreground)]">
                                    24/7 Support
                                </h3>
                                <p className="text-sm md:text-base">
                                    📞 +44 7380 491992<br />
                                    📧 info@blakshade.com
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg md:text-xl mb-2 text-[var(--foreground)]">
                                    Business Hours
                                </h3>
                                <p className="text-sm md:text-base">
                                    Thursday - Friday: 8AM - 5PM<br />
                                    Saturday- Sunday: Closed
                                </p>
                            </div>
                        </div>

                        {/* Contact Form - Client Component */}
                        <ContactForm />
                    </div>
                </div>
            </div></>
    );
}