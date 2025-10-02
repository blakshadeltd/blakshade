
import HowItWorks from "./component/HowItWorks";
import Link from "next/link";
import { Metadata, Viewport } from "next";


export const metadata: Metadata = {
  title: "Bespoke Diesel Generators Solutions | BlakShade Ltd",
  description: "BlakShade Ltd specializes in diesel generators and bespoke generators, offering custom power solutions tailored to your specific needs. Reliable energy anywhere.",
  keywords: "BlakShade Ltd, generators, power solutions, diesel generators",
  authors: [{ name: "BlakShade Ltd" }],
  robots: "index, follow",
  openGraph: {
    title: "Bespoke Diesel Generators Solutions | BlakShade Ltd",
    description: "BlakShade Ltd specializes in diesel generators and bespoke generators, offering custom power solutions tailored to your specific needs. Reliable energy anywhere.",
    type: "website",
    locale: "en_UK",
    siteName: "BlakShade Ltd",
    url: "https://blakshade.com/",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BlakShade_Ltd",
    creator: "@BlakShade_Ltd",
    title: "Bespoke Diesel Generators Solutions | BlakShade Ltd",
    description: "BlakShade Ltd specializes in diesel generators and bespoke generators, offering custom power solutions tailored to your specific needs. Reliable energy anywhere.",
  },
  // Add canonical URL
  alternates: {
    canonical: "https://blakshade.com/",
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
      "@type": "WebSite",
      name: "BlakShade Ltd",
      url: "https://blakshade.com/",
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
          url: "https://blakshade.com/BlakShade-Ltd-logo-01.jpg"
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
      ],
    },
  ],
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

// Stats data
const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "50+", label: "Countries Served" },
  { value: "99.7%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Support" }
];

// Feature cards data
const features = [
  {
    title: "Custom Solutions",
    description: "Tailored generator systems designed for your specific requirements",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Global Delivery",
    description: "We ship our reliable power solutions anywhere in the world",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Expert Support",
    description: "Our team of engineers provides ongoing maintenance and support",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

export default function Home() {
  return (
    <>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />


      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <header className="min-h-screen relative">
          <div className="bg-[url('/NEW_WebHero.avif')] bg-no-repeat bg-cover rounded-[20px] md:rounded-[30px] mx-2 md:mx-4 relative overflow-hidden min-h-[60vh] md:min-h-screen">
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            <div className="container mx-auto px-4 absolute inset-0 flex items-center justify-start z-10">
              <div className="absolute top-[30%] md:top-[40%] transform -translate-y-1/4 w-full max-w-[90%] md:max-w-[80%] lg:max-w-[75%]">
                <div className="mb-4 md:mb-6">
                  <span className="px-3 py-1 md:px-4 md:py-2 bg-[var(--foreground)] text-[var(--background,#f4f3f3)] rounded-full text-xs md:text-sm">
                    Energy Resilience Redefined
                  </span>
                </div>
                <h1 className="text-[var(--background,#f4f3f3)] mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-[90px] leading-tight">
                  Bespoke Diesel Generators Solutions
                </h1>
                <p className="text-[var(--background,#f4f3f3)] mb-6 md:mb-8 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl">
                  BlakShade Ltd offers Bespoke Diesel Generators Solutions to meet your specific power needs.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mt-6 md:mt-10">
                  <Link
                    href="/build-genset"
                    className="px-6 py-2 md:px-8 md:py-3 btn-primary text-base md:text-lg shine-effect text-center"
                  >
                    Design Your Generator
                  </Link>
                  <Link
                    href="/generators"
                    className="px-6 py-2 md:px-8 md:py-3 btn-second text-base md:text-lg shine-effect text-center"
                  >
                    Explore Products
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="container mx-auto px-4 mt-4 md:-mt-16 relative z-20">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl md:text-2xl lg:text-3xl text-[var(--foreground,#2b2926)]">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-12 md:py-20 bg-[var(--background)]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-[var(--foreground,#2b2926)] mb-4">
                Engineering Excellence in Every Solution
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                We combine engineering excellence with sustainable practices to deliver power solutions that stand the test of time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[var(--background)] p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--foreground)] opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="text-[var(--foreground,#2b2926)] mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl text-[var(--foreground,#2b2926)] mb-2 relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--foreground,#2b2926)] text-sm md:text-base relative z-10">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About BlakShade Section */}
        <section className="py-12 md:py-20 bg-gray-50 rounded-[20px] md:rounded-[30px] mx-2 md:mx-4">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-[var(--foreground,#2b2926)] leading-tight">
                Redefining Energy Resilience Worldwide
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                At BlakShade, we don't just sell generators — we engineer energy resilience.
                From disaster relief zones to remote industrial outposts, we deliver consistent
                and customizable power solutions that keep the world running.
              </p>
              <ul className="space-y-2 md:space-y-3 mt-6 md:mt-8">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[var(--foreground)] rounded-full mr-3"></span>
                  <span className="text-sm md:text-base">Custom-built generator solutions</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[var(--foreground)] rounded-full mr-3"></span>
                  <span className="text-sm md:text-base">Global shipping and logistics</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[var(--foreground)] rounded-full mr-3"></span>
                  <span className="text-sm md:text-base">24/7 technical support</span>
                </li>
              </ul>
              <div className="mt-6 md:mt-8">
                <Link href="/info/about-us" className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-[var(--foreground)] text-[var(--background,#f4f3f3)] rounded-[8px] md:rounded-[10px] hover:rounded-[12px] md:hover:rounded-[15px] transition-all duration-300 shine-effect text-sm md:text-base">
                  Learn more about our mission
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Image Box */}
            <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-[url('/H03.avif')] bg-contain bg-no-repeat bg-center">
              </div>
            </div>
          </div>
        </section>

        <HowItWorks />

        {/* Generator Range Section */}
        <section className="py-12 md:py-20 bg-gray-50 text-[var(--foreground,#2b2926)] rounded-[20px] md:rounded-[30px] mx-2 md:mx-4">
          <div className="container mx-auto px-4 max-w-6xl flex flex-col lg:flex-row items-stretch gap-8 md:gap-12 h-full">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight">
                Powering the World with Unrivaled Reliability
              </h2>
              <p className="text-base md:text-lg leading-relaxed opacity-90">
                BlakShade Ltd provides diesel generators that deliver unmatched reliability
                across industries and environments. Our team engineers custom power solutions
                tailored to each project, ensuring consistent performance whether for emergency backup,
                industrial operations, or remote sites.
              </p>
              <p className="text-base md:text-lg leading-relaxed opacity-90">
                We take pride in offering bespoke generators designed with precision and
                innovation, combining durability with flexibility to meet your exact requirements.
                With BlakShade, you don’t just get power — you get resilience engineered for the future.
              </p>
              <div className="mt-4 md:mt-6">
                <Link
                  href="/generators"
                  className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-[var(--foreground)] text-[var(--background,#f4f3f3)] rounded-[8px] md:rounded-[10px] hover:rounded-[12px] md:hover:rounded-[15px] transition-all duration-300 shine-effect text-sm md:text-base"
                >
                  Explore Our Generator Range
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Image Box */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="w-full h-[300px] sm:h-[400px] bg-[url('/controlpanel.avif')] bg-contain bg-no-repeat bg-center"></div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 md:py-20 bg-[var(--background)]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-[var(--foreground,#2b2926)] mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Our clients rely on us for critical power solutions in the most demanding environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  quote: "BlakShade's generators kept our operations running during the hurricane season. Their reliability is unmatched.",
                  author: "John Smith",
                  company: "Offshore Drilling Inc."
                },
                {
                  quote: "The custom solution BlakShade designed for our remote mining operation exceeded all expectations.",
                  author: "Sarah Johnson",
                  company: "Global Mining Co."
                },
                {
                  quote: "24/7 support means we never have to worry about power disruptions in our emergency response centers.",
                  author: "Dr. Michael Chen",
                  company: "International Relief Org."
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-md border border-gray-100">
                  <div className="text-[var(--foreground,#2b2926)] mb-4">
                    <svg className="w-6 h-6 md:w-8 md:h-8 opacity-50 mb-3 md:mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="italic text-sm md:text-base">"{testimonial.quote}"</p>
                  </div>
                  <div className="mt-3 md:mt-4">
                    <p className="text-[var(--foreground,#2b2926)] text-base md:text-lg">{testimonial.author}</p>
                    <p className="text-xs md:text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}