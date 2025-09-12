"use client";

import images from "@/data/assets";
import Image from "next/image";

export default function OurWork() {
    return (
        <section className="relative w-full bg-gray-50 px-4 md:px-8 lg:px-20 py-7 md:py-10">
            <div className="mx-auto max-w-[1320px]">
                {/* Header Section */}
                <div className="flex flex-col gap-6 md:gap-8 w-full mb-12 md:mb-16">
                    {/* First Line: "Our Work" label and Description */}
                    <div className="flex flex-col md:flex-row justify-between md:items-start items-center w-full gap-4 md:gap-0 text-center md:text-left">
                        <p className="text-hero font-medium text-xl md:text-lg">Our Work</p>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                            From expo booths to outdoor hoardings, our LED solutions have<br className="hidden md:block" />
                            powered over 1500+ projects globally.
                        </p>
                    </div>

                    {/* Second Line: "Our Work in Action" heading and Buttons */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-6 lg:gap-0 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-900">
                            Our Work in Action
                        </h2>
                        
                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full lg:w-auto">
                            <button className="inline-flex items-center justify-center gap-3 bg-[#0f123f] text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl md:rounded-3xl font-medium text-base md:text-lg hover:bg-[#1a1f4f] transition-all duration-300 group">
                                Explore More
                                <svg className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            
                            <button className="inline-flex items-center justify-center gap-3 bg-[#0f123f] text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl md:rounded-3xl font-medium text-base md:text-lg hover:bg-[#1a1f4f] transition-all duration-300 group">
                                Contact Us
                                <svg className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Project Card */}
                <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
                    {/* Project Image */}
                    <div className="relative h-[250px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden">
                        <Image
                            src={images.projects.img1}
                            alt="Expo 2024 Dubai LED Installation"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Project Details */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 md:p-6 lg:p-8 gap-4 sm:gap-0">
                        {/* Left: Project Title */}
                        <div>
                            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">
                                Expo 2024 - Dubai, UAE
                            </h3>
                        </div>

                        {/* Right: Project Description with Arrow */}
                        <div className="flex items-center gap-3 md:gap-4">
                            <p className="text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                                <span className="hidden sm:inline">Immersive entry LED with live motion loop</span>
                                <span className="sm:hidden">LED Installation</span>
                            </p>
                            <div className="w-8 md:w-10 h-8 md:h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 cursor-pointer flex-shrink-0">
                                <svg className="w-4 md:w-5 h-4 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 