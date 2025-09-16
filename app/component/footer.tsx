// footer.tsx - Improved version
import Link from 'next/link';
import { menuData } from './menuData';

export default function Footer() {
    return (
        <footer className="relative spacer text-[var(--foreground)]">
            {/* Black section overlapping the top */}
            <div className="relative -top-[30px] h-[30px] bg-[var(--background)] rounded-b-[20px] shadow-xl" />
            
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold mb-4">BlakShade Ltd</h3>
                            <p className="text-[var(--foreground)] mb-4">
                                Engineering energy resilience with cleaner power solutions for individuals, 
                                businesses and communities worldwide.
                            </p>
                            <div className="flex space-x-4">
                                {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
                                    <a
                                        key={platform}
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center hover:bg-gray-200 transition-colors"
                                        aria-label={`Follow us on ${platform}`}
                                    >
                                        <span className="font-bold text-sm">
                                            {platform.charAt(0).toUpperCase()}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

{/* Generators Menu */}
                    <div>
                        <h4 className="text-lg mb-4 border-b border-gray-400 pb-2">Generators</h4>
                        <div className="space-y-4">
                            {Object.entries(menuData.Generators).map(([category, items]) => (
                                <div key={category} className="mb-4">
                                    <h5 className="font-medium text-[var(--foreground)] mb-2 text-sm uppercase tracking-wider">{category}</h5>
                                    <ul className="space-y-1">
                                        {items.slice(0, 3).map((item) => (
                                            <li key={item.name}>
                                                <Link 
                                                    href={item.href}
                                                    className="text-[var(--foreground)] hover:text-[var(--hover)] text-sm block py-1"
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[var(--foreground)] text-lg mb-4 border-b border-gray-400 pb-2">Quick Links</h4>
                        <ul className="space-y-2">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About Us', href: '/about' },
                                { name: 'Build Genset', href: '/build-genset' },
                                { name: 'Contact', href: '/contact' },
                                { name: 'Support', href: '/support' },
                                { name: 'Worldwide Voltage Frequency', href: '/worldwide-voltage-frequency' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        href={link.href} 
                                        className="text-[var(--foreground)] hover:text-[var(--hover)] transition-colors block py-1"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info & Newsletter */}
                    <div>
                        <h4 className="text-lg text-[var(--foreground)] mb-4 border-b border-gray-400 pb-2">Contact Us</h4>
                        <address className="not-italic space-y-3 text-[var(--foreground)] mb-6">
                            <div className="flex items-start">
                                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>
                                    123 Power Street<br />
                                    Energy City, EC1 1AA<br />
                                    United Kingdom
                                </span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+44 7380 491992</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>info@blakshade.com</span>
                            </div>
                        </address>
                        
                        <div className="mt-6">
                            <Link 
                                href="/contact" 
                                className="inline-flex items-center px-4 py-2 bg-[var(--foreground)] text-[var(--background)] rounded-[10px] hover:rounded-[15px] transition-all duration-300 shine-effect font-medium"
                            >
                                Get a Quote
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

            <div className="flex">
                <div className="w-full justify-center text-center flex items-end z-0 h-[50vh] lg:h-[40vh] mb-[25px]">
                    <h2 className="text-[50px] sm:text-[80px] font-normal leading-tight reveal-text">
                        WE DON&apos;T HAVE BOTTOM
                    </h2>
                </div>
            </div>
            </div>
        </footer>
    );
}