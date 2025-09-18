'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    RiHome9Line,
    RiToolsFill,
    RiSearchLine,
    RiMenu3Line,
    RiArrowRightSLine,
    RiCloseLine,
    RiInformationLine,
} from 'react-icons/ri';
import clsx from 'clsx';
import { menuData } from './menuData';
import { infoMenuData } from './infoMenuData';

interface LinkItem {
    name: string;
    href: string;
}

const staticLinks = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
];

const MobileNav = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const [activeCategory, setActiveCategory] = useState<'Generators' | 'Info'>('Generators');
    const [activeTab, setActiveTab] = useState<string>('Brand');
    const [, setPrevTab] = useState<string>('');

    const getLinks = (): LinkItem[] => {
        if (activeCategory === 'Generators') {
            const categoryTabs = menuData[activeCategory];
            return categoryTabs[activeTab] ?? [];
        }
        return [];
    };

    const handleSearchSubmit = () => {
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setSearchOpen(false);
            setSearchQuery('');
        }
    };

    const navItems = [
        { href: '/', label: 'Home', icon: <RiHome9Line className="text-2xl" /> },
        { href: '/generators', label: 'Generators', icon: <RiToolsFill className="text-2xl" /> },
        {
            href: '#search',
            label: 'Search',
            icon: <RiSearchLine className="text-2xl" />,
            action: () => {
                setSearchOpen((prev) => !prev);
                setTimeout(() => inputRef.current?.focus(), 100);
            },
        },
        {
            href: '#menu',
            label: 'Menu',
            icon: <RiMenu3Line className="text-2xl" />,
            action: () => setDrawerOpen(true),
        },
    ];

    return (
        <>
            {searchOpen && (
                <div className="fixed inset-0 z-40" onClick={() => setSearchOpen(false)} />
            )}

            <nav className="lg:hidden fixed bottom-0 left-0 right-0 w-full z-50">
                <ul className="flex justify-between items-center bg-white text-gray-400 shadow-md py-4 px-8">
                    {navItems.map(({ href, label, icon, action }) => {
                        const isActive = pathname === href;
                        return (
                            <li key={label}>
                                <Link
                                    href={href}
                                    onClick={(e) => {
                                        if (action) {
                                            e.preventDefault();
                                            action();
                                        }
                                    }}
                                    className={`flex flex-col items-center transition-colors ${isActive ? 'text-gray-700' : 'text-[var(--foreground)] hover:text-gray-400'}`}
                                >
                                    {icon}
                                    <span className="text-xs mt-1">{label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                {searchOpen && (
                    <div className="absolute bottom-full left-0 right-0 z-50 bg-white px-6 py-4 shadow-[0_-2px_6px_rgba(0,0,0,0.08)] animate-slide-up">
                        <form onSubmit={(e) => { e.preventDefault(); handleSearchSubmit(); }} className="w-full max-w-[400px] mx-auto flex items-center border-b border-black pb-1">
                            <input
                                ref={inputRef}
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSearchSubmit();
                                    }
                                }}
                                placeholder="Search for generators or components..."
                                className="w-full bg-transparent text-base px-2 py-3 focus:outline-none focus:ring-0"
                            />
                            <button
                                type="submit"
                                className="text-black hover:text-gray-700 px-2 transition-colors shine-effect"
                                aria-label="Submit search"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </form>
                    </div>
                )}

            </nav>

            {drawerOpen && (
                <>
                    <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300" onClick={() => setDrawerOpen(false)} />
                    <div className="fixed left-0 right-0 bottom-0 z-50 bg-white rounded-t-md pt-10 px-5 pb-6 h-[80vh] overflow-y-auto shadow-2xl animate-slide-up space-y-5">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-[var(--foreground)]">Menu</h2>
                            <button onClick={() => setDrawerOpen(false)} className="text-3xl text-black hover:text-gray-700">
                                <RiCloseLine />
                            </button>
                        </div>

                        <div className="space-y-3">
                            {staticLinks.map(({ label, href }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    onClick={() => setDrawerOpen(false)}
                                    className="block bg-gray-50 hover:bg-gray-100 rounded-md px-4 py-3 text-base font-medium text-[var(--foreground)] shadow-sm transition"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>

                        {/* Category Selector */}
                        <div className="flex gap-2 mb-4">
                            <button
                                onClick={() => setActiveCategory('Generators')}
                                className={clsx(
                                    'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                                    activeCategory === 'Generators'
                                        ? 'bg-[var(--foreground)] text-white'
                                        : 'bg-gray-100 text-[var(--foreground)]'
                                )}
                            >
                                Generators
                            </button>
                            <button
                                onClick={() => setActiveCategory('Info')}
                                className={clsx(
                                    'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                                    activeCategory === 'Info'
                                        ? 'bg-[var(--foreground)] text-white'
                                        : 'bg-gray-100 text-[var(--foreground)]'
                                )}
                            >
                                Info
                            </button>
                        </div>

                        {activeCategory === 'Generators' && (
                            <div className="bg-gray-50 rounded-md p-4 shadow">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-lg font-semibold text-[var(--foreground)]">Generators</h3>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {Object.keys(menuData.Generators).map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => {
                                                setActiveTab(tab);
                                            }}
                                            className={clsx(
                                                'px-3 py-1 rounded-md text-sm font-medium transition-colors',
                                                activeTab === tab
                                                    ? 'bg-[var(--foreground)] text-white'
                                                    : 'bg-white text-[var(--foreground)] border border-gray-300'
                                            )}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>

                                <div className="relative overflow-hidden">
                                    <div
                                        key={activeTab}
                                        className="flex flex-col gap-2 transition-transform duration-300 ease-in-out animate-slide-tab"
                                    >
                                        {getLinks().length > 0 ? (
                                            getLinks().map(({ name, href }) => (
                                                <Link
                                                    key={href}
                                                    href={href}
                                                    onClick={() => setDrawerOpen(false)}
                                                    className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 shadow-sm transition"
                                                >
                                                    <RiArrowRightSLine className="text-lg text-gray-700" />
                                                    {name}
                                                </Link>
                                            ))
                                        ) : (
                                            <p className="text-sm text-gray-700 col-span-2">No links available.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeCategory === 'Info' && (
                            <div className="bg-gray-50 rounded-md p-4 shadow">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-lg font-semibold text-[var(--foreground)]">Company Information</h3>
                                </div>

                                <div className="grid grid-cols-1 gap-3">
                                    {infoMenuData.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            onClick={() => setDrawerOpen(false)}
                                            className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-3 text-sm text-gray-700 hover:bg-gray-100 shadow-sm transition"
                                        >
                                            <div className="text-lg text-[var(--foreground)] mt-0.5">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div className="font-medium">{item.title}</div>
                                                <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="mt-4">
                            <Link
                                href="/build-genset"
                                onClick={() => setDrawerOpen(false)}
                                className="block w-full text-center bg-[var(--foreground)] text-white rounded-md px-4 py-3 text-base font-medium shadow-sm transition hover:opacity-90"
                            >
                                Build Genset
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default MobileNav;