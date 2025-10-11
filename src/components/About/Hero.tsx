"use client";

import Image from "next/image";
import React from "react";

// 🎯 1. Props interface
interface HeroProps {
  image: string; // background image
  title: string;
  description: string;
  titleColor?: string; // optional override (default white)
  descColor?: string;
  bgColor?: string;
  overlay?: boolean; // optional dark overlay toggle
  position?: "top" | "center" | "bottom"; // text vertical position
}

// 🎯 2. Reusable Hero component
const Hero: React.FC<HeroProps> = ({
  image,
  title,
  description,
  titleColor = "text-white",
  descColor = "text-white",
  // overlay = true,
  position = "top",
  bgColor,
}) => {
  // Determine vertical alignment dynamically
  const alignmentClass =
    position === "top"
      ? "justify-start"
      : position === "center"
      ? "justify-center"
      : "justify-end";

  return (
    <section className={`relative w-full pt-30 pb-10 ${bgColor}`}>
      {/* Background Image */}
      <div className="relative w-full rounded-2xl overflow-hidden">
        <Image
          src={"/images/new-images/About Us Landing Page.jpg"}
          alt="Hero Background"
          width={1200}
          height={600}
          className="w-full md:h-[650px] h-[300px] object-cover brightness-55"
        />

        {/* Content */}
        <div
          className={`absolute inset-0 flex ${alignmentClass} items-start lg:items-end px-6 md:px-10 py-10 z-[2]`}
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-6">
            <h1
              className={`md:text-5xl text-2xl leading-snug font-playfair ${titleColor}`}
            >
              {title}
            </h1>

            <p
              className={`lg:text-right text-justify ${descColor} text-sm md:text-lg lg:text-xl max-w-xl`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
