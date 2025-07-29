"use client";

import images from "@/data/assets";
import Image from "next/image";

export default function OurWork() {
    return (
        <section className="relative w-full bg-gray-50 px-20 py-20">
            <div className="mx-auto max-w-[1320px]">
                {/* Header Section */}
                <div className="flex flex-col gap-8 w-full mb-16">
                    {/* First Line: "Our Work" label and Description */}
                    <div className="flex flex-row justify-between items-center w-full">
                        <p className="text-[#0f123f] font-medium text-lg">Our Work</p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            From expo booths to outdoor hoardings, our LED solutions have<br />
                            powered over 1500+ projects globally.
                        </p>
                    </div>

                    {/* Second Line: "Our Work in Action" heading and Buttons */}
                    <div className="flex flex-row justify-between items-center w-full">
                        <h2 className="text-6xl font-medium text-gray-900">
                            Our Work in Action
                        </h2>
                        
                        {/* Buttons */}
                        <div className="flex gap-4">
                            <button className="inline-flex items-center justify-start gap-3 bg-[#0f123f] text-white px-17 py-4 rounded-3xl font-medium text-lg hover:bg-[#1a1f4f] transition-all duration-300 group">
                                Explore More
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            
                            <button className="inline-flex items-center justify-start gap-3 bg-[#0f123f] text-white px-17 py-4 rounded-3xl font-medium text-lg hover:bg-[#1a1f4f] transition-all duration-300 group">
                                Contact Us
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Project Card */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                    {/* Project Image */}
                    <div className="relative h-[600px] overflow-hidden">
                        <Image
                            src={images.projects.img1}
                            alt="Expo 2024 Dubai LED Installation"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Project Details */}
                    <div className="flex justify-between items-center p-8">
                        {/* Left: Project Title */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900">
                                Expo 2024 - Dubai, UAE
                            </h3>
                        </div>

                        {/* Right: Project Description with Arrow */}
                        <div className="flex items-center gap-4">
                            <p className="text-lg text-gray-700 font-medium">
                                Immersive entry LED with live motion loop
                            </p>
                            <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 cursor-pointer">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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