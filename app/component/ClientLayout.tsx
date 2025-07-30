// app/component/ClientLayout.tsx

'use client';

import { usePathname } from 'next/navigation';
import PageHeader from './PageHeader';
import DesktopNav from './DesktopNav';
import StickyNav from './StickyNav';
import HeaderMobileNav from './MobileNav';
import SmoothScroll from './SmoothScroll';
import Footer from './footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const pathTitle = pathname.replace('/', '').replace(/-/g, ' ') || 'Home';

    return (
        <>
            <DesktopNav />
            <StickyNav />
            <HeaderMobileNav />

            {!isHome && <PageHeader title={pathTitle} />}

            <main>
                <SmoothScroll>{children}</SmoothScroll>
            </main>

            <Footer />
        </>
    );
}
