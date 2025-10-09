"use client";

import React from "react";

// CTA

// 1. Extracted Button Component
interface CtaButtonProps {
  label: string;
  // Add href/onClick if this button is a link or has an action
}

const CtaButton: React.FC<CtaButtonProps> = ({ label }) => (
  <button className="bg-white text-base sm:text-xl md:text-2xl lg:text-2xl text-gray-900 font-medium px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-sm flex items-center gap-2 hover:bg-gray-100 transition text-center justify-center w-full sm:w-auto">
    {label}
    {/* Using the Unicode arrow for simplicity */}
    <span className="ml-1">↗</span>
  </button>
);

// 2. Main Component
const CTA: React.FC = () => {
  return (
    <section className="px-5 sm:px-10 lg:px-20 ">
      <div className="rounded-2xl bg-[linear-gradient(180deg,_#001A49_0%,_#4845D2_100%)] p-6 sm:p-10 lg:p-14 flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Left side: Headline */}
        <div className="w-full">
          <h2 className="text-white text-2xl sm:text-4xl md:text-6xl lg:text-8xl leading-snug md:leading-[90px] lg:leading-[120px] text-center md:text-left">
            Let’s Light Up Your Next Experience
          </h2>
        </div>

        {/* Right side: Description and buttons */}
        <div className="w-full flex flex-col items-center md:items-start gap-8 sm:gap-12 lg:gap-28 mt-6 md:mt-0">
          <p className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl leading-relaxed md:leading-[40px] lg:leading-[50px] text-center md:text-left">
            From idea to installation, our team is ready to bring your LED
            vision to life — no matter the scale or scope.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
            <CtaButton label="Request a Quote" />
            <CtaButton label="Contact Us Now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
