'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    RiHome9Line,
    RiToolsFill,
    RiSearchLine,
    RiMenu3Line,
    RiArrowRightSLine,
    RiCloseLine,
} from 'react-icons/ri';
import clsx from 'clsx';
import { menuData } from './menuData';

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
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const [activeCategory, setActiveCategory] = useState<'Generators' | 'Components'>('Generators');
    const [activeTab, setActiveTab] = useState<string>('Brand');
    const [prevTab, setPrevTab] = useState<string>('');

    const getLinks = (): LinkItem[] => {
        const categoryTabs = menuData[activeCategory];
        return categoryTabs[activeTab] ?? [];
    };

    const navItems = [
        { href: '/', label: 'Home', icon: <RiHome9Line className="text-2xl" /> },
        { href: '/about', label: 'About', icon: <RiToolsFill className="text-2xl" /> },
        {
            href: '#search',
            label: 'Search',
            icon: <RiSearchLine className="text-2xl" />,
            action: () => setSearchOpen((prev) => !prev),

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
                        <div className="w-full max-w-[400px] mx-auto flex items-center border-b border-black pb-1">
                            <input
                                ref={inputRef}
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        console.log('Search for:', searchQuery);
                                        setSearchOpen(false);
                                    }
                                }}
                                placeholder="Search for generators or components..."
                                className="w-full bg-transparent text-base px-2 py-3 focus:outline-none focus:ring-0"
                            />
                            <button
                                className="text-black hover:text-gray-700 px-2 transition-colors shine-effect"
                                aria-label="Submit search"
                                onClick={() => {
                                    console.log('Search for:', searchQuery);
                                    setSearchOpen(false);
                                }}
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
                        </div>
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

                        {(['Generators', 'Components'] as const).map((category) => (
                            <div key={category} className="bg-gray-50 rounded-md p-4 shadow">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-lg font-semibold text-[var(--foreground)]">{category}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {Object.keys(menuData[category]).map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => {
                                                setPrevTab(activeTab);
                                                setActiveCategory(category);
                                                setActiveTab(tab);
                                            }}
                                            className={clsx(
                                                'px-3 py-1 rounded-md text-sm font-medium transition-colors',
                                                activeCategory === category && activeTab === tab
                                                    ? 'bg-[var(--foreground)] text-white'
                                                    : 'bg-white text-[var(--foreground)] border border-gray-300'
                                            )}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>

                                {activeCategory === category && (
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
                                )}
                            </div>
                        ))}
                    </div>

                    <style jsx>{`
            .animate-slide-up {
              animation: slideUp 0.3s ease-out forwards;
            }
            .animate-slide-tab {
              animation: slideTab 0.3s ease-out;
            }
            @keyframes slideUp {
              from {
                transform: translateY(100%);
              }
              to {
                transform: translateY(0);
              }
            }
            @keyframes slideTab {
              from {
                opacity: 0;
                transform: translateX(30px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
          `}</style>
                </>
            )}
        </>
    );
};

export default MobileNav;
