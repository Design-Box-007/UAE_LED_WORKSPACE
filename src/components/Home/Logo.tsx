import Image from "next/image";
import React from "react";

const Logo = () => {
  const logos1 = [
    { src: "/images/logo/1.png", alt: "Logoipsum 1" },
    { src: "/images/logo/2.png", alt: "Logoipsum 2" },
    { src: "/images/logo/3.png", alt: "Logoipsum 3" },
    { src: "/images/logo/4.png", alt: "Logoipsum 4" },
    { src: "/images/logo/5.png", alt: "Logoipsum 5" },
    { src: "/images/logo/6.png", alt: "Logoipsum 6" },
    { src: "/images/logo/7.png", alt: "Logoipsum 7" },
    { src: "/images/logo/8.png", alt: "Logoipsum 8" },
    { src: "/images/logo/9.png", alt: "Logoipsum 9" },
    { src: "/images/logo/10.png", alt: "Logoipsum 10" },
    { src: "/images/logo/11.png", alt: "Logoipsum 11" },
    { src: "/images/logo/12.png", alt: "Logoipsum 12" },
    { src: "/images/logo/13.png", alt: "Logoipsum 13" },
    { src: "/images/logo/14.png", alt: "Logoipsum 14" },
    { src: "/images/logo/15.png", alt: "Logoipsum 15" },
    { src: "/images/logo/16.png", alt: "Logoipsum 16" },
    { src: "/images/logo/17.png", alt: "Logoipsum 17" },
    { src: "/images/logo/18.png", alt: "Logoipsum 18" },
    { src: "/images/logo/19.png", alt: "Logoipsum 19" },
    { src: "/images/logo/20.png", alt: "Logoipsum 20" },
    { src: "/images/logo/21.png", alt: "Logoipsum 21" },
    { src: "/images/logo/22.png", alt: "Logoipsum 22" },
    { src: "/images/logo/23.png", alt: "Logoipsum 23" },
    { src: "/images/logo/25.png", alt: "Logoipsum 25" },
  ];
  // const logos2 = [
  //   { src: "/images/about-us/logo.png", alt: "Logoipsum 6" },
  //   { src: "/images/about-us/logo.png", alt: "Logoipsum 7" },
  //   { src: "/images/about-us/logo.png", alt: "Logoipsum 8" },
  //   { src: "/images/about-us/logo.png", alt: "Logoipsum 9" },
  //   { src: "/images/about-us/logo.png", alt: "Logoipsum 10" },
  // ];
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="font-playfair text-3xl md:text-4xl text-heading mb-3">
          Our Clients
        </h1>
        <p className="md:text-lg text-base text-gray-700 font-playfair">
          Trusted by Leading Brands Across the Region
        </p>
      </div>

      {/* Logos Grid */}
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Row 1 */}
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 justify-center items-center gap-8 md:gap-12">
          {logos1.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-lg overflow-hidden shadow-sm hover:scale-105 transition-transform"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={160}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logo;
