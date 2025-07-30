'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';

const imageItems = [
    { src: '/NEW_WebHero.jpg', link: '/projects/1', title: 'Project One' },
    { src: './NEW_WebHero.jpg', link: '/projects/2' },
    { src: './NEW_WebHero.jpg', link: '/projects/3' },
    { src: './NEW_WebHero.jpg', link: '/projects/4' },
    { src: './NEW_WebHero.jpg', link: '/projects/5' },
    { src: './NEW_WebHero.jpg', link: '/projects/6' },
    { src: './NEW_WebHero.jpg', link: '/projects/7' },
    { src: './NEW_WebHero.jpg', link: '/projects/8' },
    { src: './NEW_WebHero.jpg', link: '/projects/9' },
    { src: './NEW_WebHero.jpg', link: '/projects/10' },
    { src: './NEW_WebHero.jpg', link: '/projects/11' },
    { src: './NEW_WebHero.jpg', link: '/projects/12' },
    { src: './NEW_WebHero.jpg', link: '/projects/13' },
    { src: './NEW_WebHero.jpg', link: '/projects/14' },
    { src: './NEW_WebHero.jpg', link: '/projects/15' },
    { src: './NEW_WebHero.jpg', link: '/projects/16' },
];

const Casestudy = () => {
    useEffect(() => {
        if (!CSS.supports('animation-timeline: view()')) {
            const handleScroll = () => {
                document.body.style.setProperty(
                    '--scroll',
                    `${window.pageYOffset / (document.body.offsetHeight - window.innerHeight)}`
                );
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <section className="container text-center my-20 rounded-[30px]">
            <h2 className="text-[30px] sm:text-[40px] font-normal text-[var(--foreground)] leading-tight reveal-text">Case Studies</h2>
            <p className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed reveal-text text-[var(--foreground)] mb-20">
                See our recent projects at <strong>BlakShade Ltd</strong> — delivering diesel generators worldwide.
            </p>

            <ul className="curved-grid">
                {imageItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.link}>
                            <Image
                                src={item.src}
                                alt={`Project ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Casestudy;
