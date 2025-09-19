import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: "About Us | BlakShade Ltd",
  description: "Learn about BlakShade Ltd. Discover our mission, products, and commitment to reliable power solutions for residential and industrial needs.",
  keywords: "about us, about blakshade ltd, blakshade ltd",
  authors: [{ name: "BlakShade Ltd" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "About Us | BlakShade Ltd",
    description: "Learn about BlakShade Ltd. Discover our mission, products, and commitment to reliable power solutions for residential and industrial needs.",
    type: "website",
    locale: "en_UK",
    siteName: "BlakShade Ltd",
    url: "https://blakshade.com/info/about-us/",

  },
  twitter: {
    card: "summary_large_image",
    site: "@BlakShade_Ltd",
    creator: "@BlakShade_Ltd",
    title: "About Us | BlakShade Ltd",
    description: "Learn about BlakShade Ltd. Discover our mission, products, and commitment to reliable power solutions for residential and industrial needs.",
  },
  alternates: {
    canonical: "https://blakshade.com/info/about-us",
  }
};


const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://blakshade.com/info/about-us/"
      },
      name: "About Us",
      description: "Learn about BlakShade Ltd. Discover our mission, products, and commitment to reliable power solutions for residential and industrial needs.",
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
          name: "About Us",
          item: "https://blakshade.com/info/about-us/",
        },
      ],
    },
  ]
};


const AboutPage = () => {
  return (
    <section>
          <><script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
            </>
      {/* Header Section */}
      <div
        className="bg-[var(--foreground)] h-[120px] md:h-[180px] rounded-[30px] mx-4 relative overflow-hidden"
        style={{ background: "linear-gradient(90deg, var(--foreground), var(--hover))" }}
      >
        <div className="container h-full flex items-end pb-4">
          <h1 className="text-[var(--background)] text-2xl md:text-4xl">
            About Us
          </h1>
        </div>
      </div>
      <div className="min-h-screen bg-background text-foreground font-normal">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Content Sections */}
            <div className="space-y-8 text-base">
              <section className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <p>
                  Welcome to BlakShade, your trusted destination for top of the line generators in the UK.
                  At BlakShade, we understand the significance of reliable power solutions, especially in times of need.
                  As a leading retailer of generators, we are committed to providing high quality products and
                  exceptional customer service to meet your power needs efficiently and effectively.
                </p>
              </section>

              <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-2xl mb-4 font-normal mt-10">Who We Are</h2>
                <p>
                  BlakShade Ltd is a renowned retailer, catering to a diverse clientele with a wide range of
                  power generation requirements. Established in the heart of the UK, we have earned a solid
                  reputation for delivering premium-grade generators backed by unrivaled expertise and a passion
                  for customer satisfaction.
                </p>
              </section>

              <section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-2xl mb-4 font-normal mt-10">About Our Mission</h2>
                <p>
                  Our mission at BlakShade Ltd is to empower our customers with dependable, cutting-edge generators
                  that ensure uninterrupted power supply in both residential and industrial settings. We strive to
                  offer the most efficient and innovative power solutions while maintaining a customer-centric
                  approach that emphasizes transparency, reliability, and integrity.
                </p>
              </section>

              <section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-2xl mb-4 font-normal mt-10">Our Products</h2>
                <p>
                  We take pride in curating a comprehensive collection of generators tailored to meet various
                  power demands. From portable generators suitable for outdoor activities to heavy-duty industrial
                  generators, we offers a diverse range of products that guarantee durability, efficiency, and
                  superior performance.
                </p>
              </section>

              <section className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <h2 className="text-2xl mb-4 font-normal mt-10">Our Commitment</h2>
                <p>
                  We are committed to fostering long-term relationships with our valued customers by providing
                  personalized guidance, technical support, and after sales assistance. Our team of dedicated
                  professionals is always ready to offer expert advice and ensure that you find the perfect
                  generator that aligns with your specific requirements.
                </p>
              </section>

              <section className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <h2 className="text-2xl mb-4 font-normal mt-10">Contact Us</h2>
                <p>
                  Explore our range of premium generators and experience the BlakShade difference. Contact us
                  today for all your power generation needs, and let us assist you in finding the ideal solution
                  for your home, business, or outdoor activities.
                </p>
              </section>

              {/* Company Info */}
              <div className="bg-gray-100 rounded-lg p-6 mt-10 animate-slide-up" style={{ animationDelay: '0.7s' }}>
                <p className="text-center mb-4">BLAKSHADE LTD | Company No: 14711588</p>
                <p className="text-center mb-6">For further inquiries or assistance, please reach out to us at:</p>

                <div className="space-y-3 max-w-md mx-auto">
                  <p className="text-center">
                    <span className="block">Address:</span>
                    Office 9565 182-184 High Street North East Ham London E6 2JA
                  </p>
                  <p className="text-center">Phone: +447380491992</p>
                  <p className="text-center">Email: info@blakshade.com</p>
                </div>
              </div>

              <div className="text-center mt-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                <p>Thank you for choosing BlakShade for all your generator needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;