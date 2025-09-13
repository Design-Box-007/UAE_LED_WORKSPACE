import images from "@/data/assets";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full px-5 sm:px-10 lg:px-20 md:py-16 py-13 lg:py-30 space-y-6 bg-gradient-blue-white-downward">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end lg:gap-30 gap-6 lg:mt-0 mt-[30px]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug text-white">
          Real Results in <br className="hidden md:block"/>
          Every Pixel
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-white lg:w-[500px]">
          From immersive indoor displays to skyline-spanning billboards, explore
          how LED Display UAE transforms spaces through cutting-edge LED 
          technology.
        </p>
      </div>

      <div className="w-full rounded-2xl overflow-hidden">
        <Image
          src={images.projects.img7}
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
