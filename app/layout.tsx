import "./globals.css";
import HeaderMobileNav from "./component/MobileNav";
import DesktopNav from "./component/DesktopNav";
import StickyNav from "./component/StickyNav";
import Footer from "./component/footer";
import localFont from "next/font/local";
import CallToAction from "./component/CallToAction";
import Script from "next/script";

const MillingDuplex1mm = localFont({ src: "./MillingDuplex1mm.woff2" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={MillingDuplex1mm.className}>
      <body>
        {/* Google Analytics */}
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


            <DesktopNav />
            <StickyNav />
            <HeaderMobileNav />
            <main className="bg-[var(--background)] mt-4">{children}</main>
            <CallToAction />
            <Footer />

      </body>
    </html>
  );
}
