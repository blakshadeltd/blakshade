import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import HeaderMobileNav from "./component/MobileNav";
import DesktopNav from "./component/DesktopNav";
import StickyNav from "./component/StickyNav";
import Footer from "./component/footer";
import localFont from 'next/font/local';
import { ReduxProvider } from "@/store/provider";
import PersistGateWrapper from "@/store/PersistGateWrapper";

const MillingDuplex1mm = localFont({ src: './MillingDuplex1mm.woff2' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={MillingDuplex1mm.className}>
      <body>
        <SpeedInsights/>
        <ReduxProvider>
          <PersistGateWrapper>
            <DesktopNav />
            <StickyNav />
            <HeaderMobileNav />
            <main className="bg-[var(--background)] mt-4">
              {children}
            </main>
            <Footer />
          </PersistGateWrapper>
        </ReduxProvider>
        <SpeedInsights/>
      </body>
    </html>
  );
}
