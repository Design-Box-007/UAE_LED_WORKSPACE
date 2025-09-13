"use client";

import images from "@/data/assets";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full bg-gradient-blue-white-downward px-3 md:px-8 lg:px-10 text-white overflow-hidden md:pt-0 pt-10">
            <div className="mx-auto py-10 md:py-24 lg:py-32 flex flex-col items-center">
                {/* Left Column: Text */}
                <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:gap-0">
                    <h1 className="text-xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6 text-center lg:text-left">
                        Unmatched LED Display <br className="hidden lg:block"/>
                        Solutions for Every <br className="hidden lg:block"/>
                        Experience
                    </h1>
                    <div className="text-center lg:text-left">
                        <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
                            Bring your brand to life with cutting-edge LED technology — <br className="hidden md:block" />
                            from immersive 360° displays to sleek entrance arches and <br className="hidden md:block" />
                            digital kiosks, designed to captivate any audience.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 items-center lg:items-start">
                            <button className="w-full sm:w-auto bg-white text-[#0f123f] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300">
                                Explore Our Services
                            </button>
                            <button className="w-full sm:w-auto border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-[#0f123f] transition-all duration-300">
                                Explore Our Products
                            </button>
                        </div>
                    </div>


                </div>

                {/* Right Column: Image */}
                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg mt-8 lg:mt-0">
                    <Image
                        src={images.home.img1} // replace with actual image path or use 'next/image' with proper import
                        alt="LED Display Example"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl"
                    />
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4 z-20 relative justify-center md:justify-start">
                        {["LED Display", "Events display", "Advertising", "Digital kiosk"].map((tag) => (
                            <span
                                key={tag}
                                className="bg-white text-black text-xs md:text-sm px-3 md:px-4 py-1 rounded-full font-medium shadow"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white text-xs md:text-sm">
                        You name it, we have it all
                    </div>
                </div>
            </div>
        </section>
    );
}
