
import "./globals.css";
import Script from "next/script";
import localFont from "next/font/local";

import DesktopNav from "./component/DesktopNav";
import HeaderMobileNav from "./component/MobileNav";
import StickyNav from "./component/StickyNav";
import CallToAction from "./component/CallToAction";
import Footer from "./component/footer";

// Local font with fallback swap
const MillingDuplex1mm = localFont({
  src: "./MillingDuplex1mm.woff2",
  display: "swap",
});

// Optional: Separate GA component for clarity
function GoogleAnalytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YDC3WE4X7C"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YDC3WE4X7C');
        `}
      </Script>
    </>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={MillingDuplex1mm.className}>
      <body className="bg-[var(--background)]">
        <GoogleAnalytics />

        {/* Header Section */}
        <header>
          <DesktopNav />
          <StickyNav />
          <HeaderMobileNav />
        </header>

        {/* Main Content */}
        <main className="mt-4">{children}</main>

        {/* Call to Action and Footer */}
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}