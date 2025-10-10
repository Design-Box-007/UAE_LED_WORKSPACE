"use client";

import images from "@/data/assets";
import Image from "next/image";
import * as React from "react";

// 1. Define the type for the Stat Card data
interface Stat {
  text: string;
  svg: React.ReactNode;
}

// 2. Define the Stat Card data array using the defined type
const STATS_DATA: Stat[] = [
  {
    text: "1500+ successful installations worldwide",
    svg: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </>
    ),
  },
  {
    text: "Serving clients across 15+ countries",
    svg: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 719-9"
        />
      </>
    ),
  },
  {
    text: "Trusted by brands in events, retail, real estate, and government sectors",
    svg: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 713.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 713.138-3.138z"
        />
      </>
    ),
  },
  {
    text: "Customizable LED solutions for every use case",
    svg: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
        />
      </>
    ),
  },
];

// 3. Type the functional component's props
const StatCard: React.FC<Stat> = ({ text, svg }) => (
  <div className="flex items-center gap-2 shadow-2xl bg-white p-10 rounded-2xl">
    <svg
      className="w-15 h-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {svg}
    </svg>

    <p className="font-semibold text-gray-900 text-sm md:text-m leading-tight">
      {text}
    </p>
  </div>
);

// 4. Use React.FC for the main component
const AboutSection: React.FC = () => {
  return (
    <section className="w-full px-5 md:px-10 py-5 lg:py-10">
      <div className="mx-auto">
        <div className="flex flex-col items-end gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 w-full items-start">
            <div className="text-center lg:text-left">
              <p className="text-hero md:text-4xl text-2xl mb-3 md:mb-4">
                About Us
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 leading-tight">
                Lighting Up Experiences with <br className="hidden md:block" />
                World-Class LED Displays
              </h2>
            </div>

            <div className="flex justify-start mt-0 lg:mt-10 text-center lg:text-left">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-xl text-justify">
                LED Display UAE is a leading provider of innovative LED screen
                and display solutions helping brands, agencies, and event
                organizers deliver unforgettable visual experiences. From
                compact digital kiosks to massive 360° installations, we combine
                design, durability, and technology all under one roof.
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-[21px] w-full min-h-[400px] lg:h-[636px]">
          {/* Left Column: Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 lg:space-y-4 flex-none w-full lg:w-88 lg:h-full lg:flex lg:flex-col lg:justify-center">
            {STATS_DATA.map((item, index) => (
              <StatCard key={index} text={item.text} svg={item.svg} />
            ))}
          </div>

          {/* Right Column: Large Image with CTA Button */}
          <div className="relative flex-grow md:h-80 lg:h-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={images.aboutUs.img1}
              alt="LED Display Installation"
              width={1080}
              height={720}
              className="object-cover w-full h-full"
            />

            {/* Learn More Button positioned over the image */}
            <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 right-4 md:right-6 lg:right-8">
              <div className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-sm">
                <button className="inline-flex items-center gap-2 text-[#0f123f] font-medium hover:gap-3 transition-all duration-300 text-sm md:text-base">
                  <span className="hidden sm:inline">Learn More About Us</span>
                  <span className="sm:hidden">Learn More</span>
                  <svg
                    className="w-3 md:w-4 h-3 md:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
