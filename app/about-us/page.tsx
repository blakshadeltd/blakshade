'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Head>
        <title>About Us - BlakShade Ltd</title>
        <meta name="description" content="Learn about BlakShade Ltd, your trusted partner for tailored diesel generator solutions worldwide." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Navigation */}

        {/* Hero Section */}
        <div
          className="bg-[var(--foreground)] h-[120px] md:h-[180px] rounded-[30px] mx-4 relative overflow-hidden"
          style={{ background: "linear-gradient(90deg, var(--foreground), var(--hover))" }}
        >
          <div className="container h-full flex items-end pb-4">
            <h1 className="text-[var(--background)] text-2xl md:text-4xl">
              About Us
            </h1>
          </div>
        </div>

        {/* Intro Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Revolutionizing Generator Solutions</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Incorporated on March 7, 2023, BlakShade Ltd. is transforming how businesses source power generation solutions. We combine industry expertise with cutting-edge technology to deliver unmatched reliability.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our extensive range of diesel generators provides solutions for every need. From compact 10 kVA units for smaller applications to robust 3,500 kVA powerhouses for large-scale projects, BlakShade ensures seamless operation and uninterrupted productivity.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-900 rounded-full h-12 w-12 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-700">24/7 power solutions for critical infrastructure</p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-blue-900 rounded-lg h-80 w-full absolute -z-10 mt-4 ml-4"></div>
                <div className="bg-yellow-500 rounded-lg h-80 w-full absolute -z-10 -mt-4 -ml-4"></div>
                <div className="bg-gray-300 rounded-lg h-80 w-full z-10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-bold">Global Power Solutions</h3>
                    <p>Reliable generators for every application</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Impact in Numbers</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Since our inception, we've been delivering exceptional power solutions to clients across various industries.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: 'industry', value: '350+', label: 'Projects Completed' },
                { icon: 'globe', value: '25+', label: 'Countries Served' },
                { icon: 'bolt', value: '10-3500', label: 'kVA Range' },
                { icon: 'users', value: '98%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:transform hover:-translate-y-2">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon === 'industry' ? "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" :
                        stat.icon === 'globe' ? "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" :
                          stat.icon === 'bolt' ? "M13 10V3L4 14h7v7l9-11h-7z" :
                            "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"} />
                    </svg>
                  </div>
                  <h3 className="text-4xl font-bold text-blue-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Trusted Partners</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Backed by leading international brands in power generation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Cummins', description: 'World-renowned for reliability and innovation in power generation technology.' },
                { name: 'Caterpillar', description: 'Industry leader in durable and efficient power solutions for demanding applications.' },
                { name: 'Perkins', description: 'Expertise in diesel engines with superior performance and fuel efficiency.' }
              ].map((brand, index) => (
                <div key={index} className="p-8 rounded-lg border border-gray-200 text-center transition-all duration-300 hover:shadow-lg">
                  <div className="h-24 mb-6 flex items-center justify-center">
                    <div className="bg-gray-200 h-20 w-48 rounded-md flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <span className="text-xl font-bold text-gray-700">{brand.name}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{brand.name}</h3>
                  <p className="text-gray-600">{brand.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="max-w-2xl mx-auto">The principles that guide everything we do at BlakShade Ltd.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: 'shield-alt', title: 'Reliability', description: 'We deliver power solutions you can depend on, even in the most challenging conditions.' },
                { icon: 'lightbulb', title: 'Innovation', description: 'We continuously evolve our solutions to incorporate the latest technological advancements.' },
                { icon: 'handshake', title: 'Partnership', description: 'We work closely with our clients to understand their unique needs and deliver tailored solutions.' }
              ].map((value, index) => (
                <div key={index} className="bg-blue-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon === 'shield-alt' ? "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" :
                        value.icon === 'lightbulb' ? "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" :
                          "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Power Your Project?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">Contact us today to discuss your power generation needs and receive a customized solution tailored to your requirements.</p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="mailto:info@blakshade.com" className="bg-blue-900 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
                <a href="tel:+447380491992" className="border border-blue-900 text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-blue-900 hover:text-white transition flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +44 7380 491992
                </a>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-600">Or visit our online quotation system to</p>
                <Link href="/quote" className="inline-block mt-2 bg-yellow-500 text-white px-6 py-2 rounded-md font-medium hover:bg-yellow-600 transition">
                  Request a Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">BLAKSHADE LTD</h3>
                <p className="text-gray-400">Your trusted partner for tailored diesel generator solutions worldwide.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <p className="text-gray-400 mb-2">
                  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@blakshade.com
                </p>
                <p className="text-gray-400">
                  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +44 7380 491992
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.033 10.033 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2023 BlakShade Ltd. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}