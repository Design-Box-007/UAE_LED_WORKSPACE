import images from "@/data/assets";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-gray-50 px-5 sm:px-10 lg:px-20 py-16 lg:py-30 space-y-6 ">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end lg:gap-20 gap-6 lg:mt-0 mt-[30px]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug text-[#18245D]">
          Illuminating Ideas,
          <br />
          Elevating Experiences
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-700  lg:text-right">
          Your Trusted Partner for Next-Gen LED Display Solutions
        </p>
      </div>

      <div className="w-full rounded-2xl overflow-hidden">
        <Image
          src={images.aboutUs.img5}
          alt="LED Display Solutions"
          width={1200}
          height={600}
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
