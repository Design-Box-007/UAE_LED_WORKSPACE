"use client";
import images from "@/data/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Arrow Icon
const ArrowIcon: React.FC<{ sizeClass?: string }> = ({
  sizeClass = "w-4 md:w-5 h-4 md:h-5",
}) => (
  <svg
    className={`${sizeClass} group-hover:translate-x-1 transition-transform duration-300`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

// Primary Button
interface PrimaryButtonProps {
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children }) => (
  <button className="inline-flex items-center justify-center gap-3 bg-heading text-center text-white px-6 md:px-6 py-3 md:py-4 rounded-2xl md:rounded-[20px] font-medium text-base md:text-lg hover:bg-[#1a1f4f] transition-all duration-300 group w-full lg:w-auto cursor-pointer shadow-2xl">
    {children}
    <ArrowIcon />
  </button>
);

const OurWork2: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full px-5 md:px-10 pt-10">
      <div className="flex flex-col gap-8 w-full">
        {/* Header */}
        <div className="flex flex-col lg:flex-row md:justify-between items-center gap-3">
          <div>
            <p className="text-2xl md:text-4xl mb-3 font-playfair text-heading">
              Our Work
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed font-playfair">
              From expo booths to outdoor hoardings, our LED solutions have
              powered over 1500+ projects globally.
            </p>
          </div>

          <Link href="/projects" className="w-full md:w-auto font-playfair">
            <PrimaryButton>Explore More</PrimaryButton>
          </Link>
        </div>

        {/* Project Card */}
        <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
          {/* Video Section */}
          <div className="relative md:h-[500px] h-[300px] overflow-hidden group">
            {!isPlaying ? (
              <>
                {/* Thumbnail */}
                <Image
                  src={images.projects.img1}
                  alt="Expo 2024 Dubai LED Installation"
                  width={1080}
                  height={720}
                  className="w-full h-full object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  {/* Play Button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="bg-white/90 hover:bg-white text-gray-900 rounded-full p-6 md:p-8 transition-all duration-300 shadow-xl hover:scale-105"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 md:w-10 md:h-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </>
            ) : (
              // Dummy YouTube video embed
              <iframe
                className="absolute inset-0 w-full h-full"
                src="/video/UAE-video.mp4"
                title="YouTube Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            )}
          </div>

          {/* Project Details */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 md:p-6 lg:p-8 gap-4 sm:gap-0">
            <div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">
                Expo 2024 - Dubai, UAE
              </h3>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <p className="text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                <span className="hidden sm:inline">
                  Immersive entry LED with live motion loop
                </span>
                <span className="sm:hidden">LED Installation</span>
              </p>

              <div className="w-8 md:w-10 h-8 md:h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 cursor-pointer flex-shrink-0">
                <ArrowIcon sizeClass="w-4 md:w-5 h-4 md:h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork2;
