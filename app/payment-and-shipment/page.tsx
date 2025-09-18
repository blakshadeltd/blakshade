import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Payment and Shipment | BlakShade Ltd",
  description: "Learn about BlakShade Ltd's payment methods, order process & shipment details for generators.",
  keywords: "payment and shipment for diesel generators",
  authors: [{ name: "BlakShade Ltd" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Payment and Shipment | BlakShade Ltd",
    description: "Learn about BlakShade Ltd's payment methods, order process & shipment details for generators.",
    type: "website",
    locale: "en_UK",
    siteName: "BlakShade Ltd",
    url: "https://blakshade.com/payment-and-shipment/", // Add specific URL
  },
  twitter: {
    card: "summary_large_image",
    site: "@BlakShade_Ltd",
    creator: "@BlakShade_Ltd",
    title: "Payment and Shipment - BlakShade Ltd", // More specific title
    description: "Learn about BlakShade Ltd's payment methods, order process & shipment details for generators.", // More specific description
  },
  // Add canonical URL
  alternates: {
    canonical: "https://blakshade.com/payment-and-shipment/",
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
        "@id": "https://blakshade.com/payment-and-shipment/"
      },
      name: "Payment and Shipment",
      description: "Learn about BlakShade Ltd's payment methods, order process & shipment details for generators.",
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
          item: "https://blakshade.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Payment and Shipment",
          item: "https://blakshade.com/payment-and-shipment/",
        },
      ],
    },
  ],
};

const PaymentsAndShipment = () => {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Section */}
      <div
        className="bg-[var(--foreground)] h-[120px] md:h-[180px] rounded-[30px] mx-4 relative overflow-hidden"
        style={{ background: "linear-gradient(90deg, var(--foreground), var(--hover))" }}
      >
        <div className="container h-full flex items-end pb-4">
          <h1 className="text-[var(--background)] text-2xl md:text-4xl">
            Payment and Shipment
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Accepted Payment Methods */}
            <div className="mb-16 animate-slide-up">
              <h2 className="text-xl md:text-2xl mb-6 energy-pulse">Accepted Payment Methods</h2>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <p className="text-base">
                  We currently accept bank transfers as our preferred payment method. We believe this is the most secure and efficient way to process your payment, ensuring prompt and reliable service. If you have specific circumstances that require a different payment method, please contact us, and we may consider other options on a case-by-case basis.
                </p>
              </div>
            </div>

            {/* Order Process */}
            <div className="mb-16 animate-slide-up">
              <h3 className="text-2xl md:text-2xl mb-6 energy-pulse">Order Process</h3>
              
              <div className="curved-grid mb-10">
                <div className="p-4 flex flex-col justify-center items-center text-center">
                  <div className="text-2xl mb-2">1</div>
                  <h3 className="mb-2">Proforma Invoice</h3>
                  <p className="text-sm">We send you a detailed invoice for your order</p>
                </div>
                
                <div className="p-4 flex flex-col justify-center items-center text-center">
                  <div className="text-2xl mb-2">2</div>
                  <h3 className="mb-2">25% Deposit</h3>
                  <p className="text-sm">Secure your order with a deposit within 48 hours</p>
                </div>
                
                <div className="p-4 flex flex-col justify-center items-center text-center">
                  <div className="text-2xl mb-2">3</div>
                  <h3 className="mb-2">Order Processing</h3>
                  <p className="text-sm">We prepare your generator and shipping</p>
                </div>
                
                <div className="p-4 flex flex-col justify-center items-center text-center">
                  <div className="text-2xl mb-2">4</div>
                  <h3 className="mb-2">Remaining Payment</h3>
                  <p className="text-sm">Pay the balance when your generator is ready</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="text-base">
                  <p><strong>Proforma Invoice:</strong> Once you've selected your desired generator, we will send you a proforma invoice that details the total amount due. This invoice serves as a formal request for payment.</p>
                  <p><strong>25% Deposit:</strong> A 25% deposit is required to initiate the order process. Please ensure the deposit is made within 48 hours of receiving the proforma invoice.</p>
                  <p><strong>Order Processing:</strong> Upon receipt of the deposit, we will commence processing your order. This includes product preparation and making the necessary shipping arrangements.</p>
                  <p><strong>Remaining Payment:</strong> Once the generator is ready for delivery, you will be required to pay the remaining 75% of the total amount.</p>
                  <p><strong>Shipment:</strong> Upon full payment receipt, we will release the generator to the courier for shipment.</p>
                </div>
              </div>
            </div>

            {/* Shipping And Delivery */}
            <div className="mb-16 animate-slide-up">
              <h2 className="text-xl md:text-2xl mb-6 energy-pulse">Shipping And Delivery</h2>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="text-base">
                  <p><strong>Shipping Costs:</strong> The shipping costs will be calculated based on your location and the generator's size and weight. An accurate shipping estimate will be provided to you when you contact us.</p>
                  <p><strong>Delivery Timeframes:</strong> Delivery times may vary depending on your location and the availability of the specific generator. We will provide you with an estimated delivery window upon order confirmation.</p>
                  <p><strong>Tracking:</strong> We will provide you with a tracking number once the generator has been shipped, allowing you to monitor its progress.</p>
                </div>
              </div>
            </div>

            {/* Please Note */}
            <div className="animate-slide-up">
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-xl mb-4 text-amber-800">Please Note</h3>
                <p className="text-amber-700">
                  These terms are subject to change. Please contact us for the most up-to-date information regarding our payment methods and order process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentsAndShipment;