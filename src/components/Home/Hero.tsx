"use client";

import images from "@/data/assets";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full bg-[#0f123f] px-20 text-white overflow-hidden">
            <div className="mx-auto py-32 flex flex-col items-center">
                {/* Left Column: Text */}
                <div className="flex flex-col lg:flex-row justify-between items-center w-full">
                    <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
                        Unmatched LED Display <br />
                        Solutions for Every <br />
                        Experience
                    </h1>
                    <div>
                        <p className="text-lg text-gray-300 mb-8">
                            Bring your brand to life with cutting-edge LED technology — <br />
                            from immersive 360° displays to sleek entrance arches and <br />
                            digital kiosks, designed to captivate any audience.
                        </p>
                        <div className="flex gap-4 flex-wrap mb-6">
                            <button>
                                Explore Our Services
                            </button>
                            <button>
                                Explore Our Products
                            </button>
                        </div>
                    </div>


                </div>

                {/* Right Column: Image */}
                <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src={images.home.img1} // replace with actual image path or use 'next/image' with proper import
                        alt="LED Display Example"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl"
                    />
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4 z-20 relative">
                        {["LED Display", "Events display", "Advertising", "Digital kiosk"].map((tag) => (
                            <span
                                key={tag}
                                className="bg-white text-black text-sm px-4 py-1 rounded-full font-medium shadow"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="absolute bottom-4 left-4 text-white text-sm">
                        You name it, we have it all
                    </div>
                </div>
            </div>
        </section>
    );
}
