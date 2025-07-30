"use client";

import images from "@/data/assets";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="relative w-full bg-gray-50 px-4 md:px-8 lg:px-20 py-12 md:py-16 lg:py-20">
            <div className="mx-auto max-w-[1320px]">
                {/* Header Section */}
                <div className="flex flex-col items-end gap-6 md:gap-8 mb-12 md:mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 w-full items-start">
                        {/* Left Column: About Us Heading */}
                        <div className="text-center lg:text-left">
                            <p className="text-[#0f123f] font-medium text-base md:text-lg mb-3 md:mb-4">About Us</p>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 leading-tight">
                                Lighting Up Experiences with <br className="hidden md:block" />
                                World-Class LED Displays
                            </h2>
                        </div>

                        {/* Right Column: Description Text */}
                        <div className="flex justify-start mt-0 lg:mt-11 text-center lg:text-left">
                            <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-m">
                                LED Display UAE is a leading provider of innovative LED screen and display 
                                solutions helping brands, agencies, and event organizers deliver unforgettable 
                                visual experiences. From compact digital kiosks to massive 360° installations, 
                                we combine design, durability, and technology all under one roof.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-[21px] w-full min-h-[400px] lg:h-[636px]">
                    {/* Left Column: Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 lg:space-y-4 flex-none w-full lg:w-88 lg:h-full lg:flex lg:flex-col lg:justify-center">
                        {/* Card 1 */}
                        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm h-32 md:h-36 flex flex-col">
                            <div className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center mb-4 md:mb-6">
                                <svg className="w-6 md:w-8 h-6 md:h-8 text-[#0f123f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div className="mt-auto">
                                <p className="font-semibold text-gray-900 text-sm md:text-m leading-tight">1500+ successful installations worldwide</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm h-32 md:h-36 flex flex-col">
                            <div className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center mb-4 md:mb-6">
                                <svg className="w-6 md:w-8 h-6 md:h-8 text-[#0f123f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 719-9" />
                                </svg>
                            </div>
                            <div className="mt-auto">
                                <p className="font-semibold text-gray-900 text-sm md:text-m leading-tight">Serving clients across 15+ countries</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm h-32 md:h-36 flex flex-col">
                            <div className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center mb-4 md:mb-6">
                                <svg className="w-6 md:w-8 h-6 md:h-8 text-[#0f123f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 713.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 713.138-3.138z" />
                                </svg>
                            </div>
                            <div className="mt-auto">
                                <p className="font-semibold text-gray-900 text-sm md:text-m leading-tight">Trusted by brands in events, retail, real estate, and government sectors</p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm h-32 md:h-36 flex flex-col">
                            <div className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center mb-4 md:mb-6">
                                <svg className="w-6 md:w-8 h-6 md:h-8 text-[#0f123f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                                </svg>
                            </div>
                            <div className="mt-auto">
                                <p className="font-semibold text-gray-900 text-sm md:text-m leading-tight">Customizable LED solutions for every use case</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Large Image with CTA Button */}
                    <div className="relative flex-grow h-64 md:h-80 lg:h-full rounded-2xl overflow-hidden shadow-lg mt-6 lg:mt-0">
                        <Image
                            src={images.aboutUs.img1}
                            alt="LED Display Installation"
                            fill
                            className="object-cover"
                        />
                        
                        {/* Learn More Button positioned over the image */}
                        <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 right-4 md:right-6 lg:right-8">
                            <div className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-sm">
                                <button className="inline-flex items-center gap-2 text-[#0f123f] font-medium hover:gap-3 transition-all duration-300 text-sm md:text-base">
                                    <span className="hidden sm:inline">Learn More About Us</span>
                                    <span className="sm:hidden">Learn More</span>
                                    <svg className="w-3 md:w-4 h-3 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 