import Image from "next/image";
import React from "react";

const Logo = () => {
  const logos1 = [
    { src: "/images/about-us/logo.png", alt: "Logoipsum 1" },
    { src: "/images/about-us/logo.png", alt: "Logoipsum 2" },
    { src: "/images/about-us/logo.png", alt: "Logoipsum 3" },
    { src: "/images/about-us/logo.png", alt: "Logoipsum 4" },
    { src: "/images/about-us/logo.png", alt: "Logoipsum 5" },
  ];
  const logos2 = [
    { src: "/images/about-us/logo.png", alt: "Logoipsum 6" },
    { src: "/images/about-us/logo.png", alt: "Logoipsum 7" },
    { src: "/images/about-us/logo.png", alt: "Logoipsum 8" },
    { src: "/images/about-us/logo.png", alt: "Logoipsum 9" },
  ];
  return (
    <div className="px-10 pt-20">
      <div className="flex flex-col gap-2">
        <h1 className="font-playfair md:text-4xl text-2xl text-heading">Our Clients </h1>
        <p className="md:text-xl text-[15px] text-gray-900 font-playfair">Trusted by Leading Brands Across the Region</p>
      </div>
      <div className="max-w-6xl mx-auto mt-3 text-center">
        <span className="text-xl sm:text-2xl md:text-3xl tracking-wide">
          Trusted By
        </span>

        <div className="mt-6 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
          {logos1.map((logo, index) => (
            <div
              key={index}
              className="h-8 sm:h-10 flex items-center mb-4 sm:mb-6"
            >
              <Image src={logo.src} alt={logo.alt} width={150} height={40} />
            </div>
          ))}

          {logos2.map((logo, index) => (
            <div
              key={index}
              className="h-8 sm:h-10 flex items-center mb-4 sm:mb-0 "
            >
              <Image src={logo.src} alt={logo.alt} width={150} height={40} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logo;
