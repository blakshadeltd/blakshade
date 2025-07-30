'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { menuData } from './menuData';
import { usePathname } from 'next/navigation';
import Image from 'next/image';



type MenuKey = 'Generators' | 'Components' | 'Search';

const DesktopNav = () => {
    const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
    const [popoverHeight, setPopoverHeight] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const menuRefs = useRef<Record<'Generators' | 'Components', HTMLDivElement | null>>({
        Generators: null,
        Components: null,
    });
    const hideTimeout = useRef<NodeJS.Timeout | null>(null);

    const clearHideTimeout = () => {
        if (hideTimeout.current) {
            clearTimeout(hideTimeout.current);
            hideTimeout.current = null;
        }
    };

    const handleMenuInteraction = (menu: MenuKey | null) => {
        clearHideTimeout();
        setActiveMenu(menu);
    };

    useEffect(() => {
        if (activeMenu && activeMenu !== 'Search' && menuRefs.current[activeMenu]) {
            setPopoverHeight(menuRefs.current[activeMenu]?.offsetHeight || 0);
        } else if (activeMenu === 'Search') {
            setPopoverHeight(100); // Fixed height for search panel
            setTimeout(() => inputRef.current?.focus(), 100);
        } else {
            setPopoverHeight(0);
        }
    }, [activeMenu]);

    return (
        <div className="relative">
            <nav
                className={clsx(
                    'absolute top-0 left-1/2 -translate-x-1/2 z-20 px-4 hidden lg:block py-6 rounded-b-[30px] duration-500 w-full',
                    activeMenu === 'Components' ? 'max-w-[50%]' : 'max-w-[40%]'
                )}
                style={{ backgroundColor: 'var(--background)' }}
                onMouseLeave={() => {
                    hideTimeout.current = setTimeout(() => {
                        handleMenuInteraction(null);
                    }, 300);
                }}
                onMouseEnter={clearHideTimeout}
            >
                <div className="flex items-center justify-between px-6">
                    <Image src="/favicon.ico" alt="Company Logo" className="h-8 w-auto" />

                    <div className="flex gap-5">
                        <Link
                            href="/"
                            className="text-base font-normal transition-colors text-[var(--foreground)] shine-effect hover:text-[var(--hover)]"
                            onMouseEnter={() => handleMenuInteraction(null)}
                        >
                            Home
                        </Link>

                        {(Object.keys(menuData) as MenuKey[]).map((menuKey) => (
                            <div
                                key={menuKey}
                                className="relative"
                                onMouseEnter={() => handleMenuInteraction(menuKey)}
                            >
                                <Link
                                    href={`/${menuKey.toLowerCase()}`}
                                    className={clsx(
                                        'flex items-center gap-1 text-base font-normal transition-colors text-[var(--foreground)] shine-effect hover:text-[var(--hover)]',
                                        activeMenu === menuKey ? 'text-[var(--foreground)]' : 'text-[var(--foreground)] hover:text-[var(--hover)]'
                                    )}
                                >
                                    {menuKey}
                                    <svg
                                        className={clsx('w-4 h-4 transition-transform duration-500', activeMenu === menuKey ? 'rotate-180' : '')}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </Link>
                            </div>
                        ))}

                        <Link
                            href="/contact"
                            className="text-base font-normal transition-colors text-[var(--foreground)] shine-effect hover:text-[var(--hover)]"
                            onMouseEnter={() => handleMenuInteraction(null)}
                        >
                            Contact
                        </Link>
                    </div>

                    <div className="flex items-center gap-6">
                        <button
                            onMouseEnter={() => handleMenuInteraction('Search')}
                            className="text-[var(--foreground)] hover:text-[var(--hover)] transition-colors shine-effect"
                            aria-label="Search"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <Link
                            href="/build-genset"
                            className="px-6 py-2 rounded-[10px] font-normal shadow-md transition-all duration-500 ease-in-out bg-[var(--foreground)] text-[var(--background)] shine-effect hover:rounded-[15px] hover:bg-[var(--hover)]"
                        >
                            Build Genset
                        </Link>
                    </div>
                </div>

                <div className="relative w-full transition-all duration-500 ease-out overflow-hidden" style={{ height: `${popoverHeight}px` }}>
                    {/* Generator / Component Menus */}
                    {(Object.keys(menuData) as ('Generators' | 'Components')[]).map((menuKey) => (
                        <div
                            key={menuKey}
                            ref={(el) => {
                                menuRefs.current[menuKey] = el;
                            }}
                            className={clsx(
                                'absolute top-0 left-0 w-full px-12 py-8 transition-all duration-500',
                                activeMenu === menuKey
                                    ? 'opacity-100 translate-x-0 pointer-events-auto'
                                    : 'opacity-0 pointer-events-none'
                            )}
                        >
                            <div className={clsx('grid gap-8 mx-auto', menuKey === 'Components' ? 'grid-cols-4 max-w-5xl' : 'grid-cols-3 max-w-5xl')}>
                                {Object.entries(menuData[menuKey]).map(([category, items], idx, arr) => (
                                    <div key={category} className={clsx('flex flex-col gap-2 pr-6', idx !== arr.length - 1 && 'border-r border-gray-200')}>
                                        <h3 className="font-normal text-[var(--foreground)] mb-2">{category}</h3>
                                        {items.map((item) => (
                                            <Link
                                                key={`${category}-${item.href}`}
                                                href={item.href}
                                                className="text-sm font-normal text-gray-600 hover:text-gray-500 transition-colors block w-full py-1 cursor-pointer shine-effect"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Search Panel */}
                    {activeMenu === 'Search' && (
                        <div className="absolute top-10 left-0 w-full h-full flex items-center justify-center transition-all duration-500 px-6">
                            <div className="w-full max-w-[400px] flex items-center border-b border-gray-300 pb-1">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Search for generators or components..."
                                    className="w-full bg-transparent text-base px-2 py-2 focus:outline-none focus:ring-0"
                                />
                                <button
                                    className="text-black hover:text-gray-700 px-2 transition-colors shine-effect"
                                    aria-label="Submit search"
                                >
                                    <svg
                                        className="w-6 h-6 cursor-pointer"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default DesktopNav;
