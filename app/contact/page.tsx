import { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
    title: "Contact Us",
    description: "BlakShade Ltd engineers energy resilience with cleaner power solutions for individuals, businesses and communities. Customizable generators for disaster relief and remote industries.",
    keywords: "generators, energy resilience, power solutions, diesel generators, disaster relief, remote power",
    authors: [{ name: "BlakShade Ltd" }],
    viewport: "width=device-width, initial-scale=1.0",
    robots: "index, follow",
    openGraph: {
        title: "Contact Us",
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
            "@type": "Website",
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://blakshade.com/"
            },

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
                    name: "Contact Us",
                    item: "https://blakshade.com/contact/",
                },
            ],
        },
    ],
};

export default function ContactPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} /><div className="min-h-screen">
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
                                    Head Office
                                </h3>
                                <p className="text-sm md:text-base">
                                    DieselGen Middle East<br />
                                    Warehouse Complex 45<br />
                                    Jebel Ali Free Zone<br />
                                    Dubai, UAE
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg md:text-xl mb-2 text-[var(--foreground)]">
                                    24/7 Support
                                </h3>
                                <p className="text-sm md:text-base">
                                    📞 +971 4 278 3400<br />
                                    📧 emergency@dieselgen.ae
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg md:text-xl mb-2 text-[var(--foreground)]">
                                    Business Hours
                                </h3>
                                <p className="text-sm md:text-base">
                                    Saturday - Thursday: 8AM - 6PM<br />
                                    Friday: Closed
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