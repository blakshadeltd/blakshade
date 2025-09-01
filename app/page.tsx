import HowItWorks from "./component/HowItWorks";
import Head from "next/head";

export const metadata = {
  title: "BlakShade Ltd - Redefining Energy Resilience with Cleaner Solutions",
  description: "BlakShade Ltd engineers energy resilience with cleaner power solutions for individuals, businesses and communities. Customizable generators for disaster relief and remote industries.",
  keywords: "generators, energy resilience, power solutions, diesel generators, disaster relief, remote power",
  authors: [{ name: "BlakShade Ltd" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "BlakShade Ltd - Redefining The generator Industry",
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
      "@type": "WebSite",
      name: "BlakShade Ltd",
      url: "https://blakshade.com/",
    },
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.authors[0].name} />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="robots" content={metadata.robots} />
        
        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        
        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="twitter:title" content={metadata.openGraph.title} />
        <meta name="twitter:description" content={metadata.openGraph.description} />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </Head>
      <main className="relative">
        <header className="min-h-screen">
          <div className="bg-[url('/NEW_WebHero.avif')] h-[500px] bg-no-repeat bg-cover rounded-[30px] mx-4 relative overflow-hidden lg:h-screen">
            <div className="container absolute inset-0 flex items-center justify-start z-10">
              <div className="absolute top-[50%] transform -translate-y-1/4 md:max-w-[80%] lg:max-w-[75%]">
                <h1 className="font-normal text-[var(--background)] mb-4 text-[35px] sm:text-[50px] lg:text-[90px]">
                  BlakShade Ltd
                </h1>
                <p className="font-nornal text-[var(--background)] mb-8 sm:text-[20px] lg:text-[28px]">
                  We&apos;re redefining energy resilience with cleaner solutions for individuals, businesses and communities.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Section 3: About BlakShade */}
        <section className="bg-[var(--background)] text-[var(--foreground)] mx-4">
          <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-[30px] sm:text-[40px] font-normal leading-tight reveal-text">
                Powering the World
              </h2>
              <p className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed reveal-text">
                At BlakShade, we don&apos;t just sell generators — we engineer energy resilience.
                From disaster relief zones to remote industrial outposts, we deliver consistent
                and customizable power solutions that keep the world running.
              </p>
            </div>

            {/* Image Box */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="w-full h-[300px] sm:h-[600px] bg-[url('/H03.png')] bg-contain bg-no-repeat bg-center"></div>
            </div>
          </div>
        </section>
        <HowItWorks/>
        {/* Section 4: Generator Range */}
        <section className="py-24 bg-gray-300 text-[var(--foreground)] rounded-[30px] mx-4">
          <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-stretch gap-12 h-full">

            {/* Image Box */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="w-full h-[300px] sm:h-[400px] bg-[url('/controlpanel1.png')] bg-contain bg-no-repeat bg-center"></div>
            </div>
            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
              <h2 className="text-[24px] sm:text-[40px] font-normal leading-tight reveal-text">
                Powering the World <br /> with Unrivaled Reliability
              </h2>
              <p className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed reveal-text">
                At BlakShade, we don&apos;t just sell generators — we engineer energy resilience.
                From disaster relief to remote industries, our solutions ensure power flows uninterrupted,
                no matter the conditions. We&apos;re committed to delivering diesel generator systems that combine performance,
                efficiency, and uncompromising quality — globally.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
