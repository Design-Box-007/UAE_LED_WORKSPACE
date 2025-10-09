import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// const logos1: { type: "image"; src: string; alt: string }[] = [
//   { type: "image", src: "/images/about-us/logo.png", alt: "Logoipsum 1" },
//   { type: "image", src: "/images/about-us/logo.png", alt: "Logoipsum 2" },
//   { type: "image", src: "/images/about-us/logo.png", alt: "Logoipsum 3" },
//   { type: "image", src: "/images/about-us/logo.png", alt: "Logoipsum 4" },
//   { type: "image", src: "/images/about-us/logo.png", alt: "Logoipsum 5" },
//   { type: "image", src: "/images/about-us/logo.png", alt: "Logoipsum 6" },
//   { type: "image", src: "/images/about-us/logo.png", alt: "Logoipsum 7" },
//   { type: "image", src: "/images/about-us/logo.png", alt: "Logoipsum 8" },
//   { type: "image", src: "/images/about-us/logo.png", alt: "Logoipsum 9" },
// ];

const TrustedPartners = () => {
  const trustedPartnersData: { logo: string }[] = [
    {
      logo: "/images/about-us/logo.png",
    },
    {
      logo: "/images/about-us/logo.png",
    },
    {
      logo: "/images/about-us/logo.png",
    },
    {
      logo: "/images/about-us/logo.png",
    },
    {
      logo: "/images/about-us/logo.png",
    },
    {
      logo: "/images/about-us/logo.png",
    },
    {
      logo: "/images/about-us/logo.png",
    },
    {
      logo: "/images/about-us/logo.png",
    },
  ];
  return (
    <div className="w-full py-6 space-y-4">
      <h5 className="text-xl sm:text-2xl lg:text-3xl font-medium text-custom-red-light font-poppins text-center">
        Trusted By{" "}
      </h5>

      <Marquee gradient={false} speed={40}>
        {trustedPartnersData.map((item, index) => (
          <div
            key={index}
            className="mx-8 flex items-center justify-center min-w-[100px] h-full"
          >
            <Image
              src={item.logo} // ✅ fixed here
              alt={`Partner ${index + 1}`}
              width={150}
              height={64}
              quality={100}
              className="object-cover w-full"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TrustedPartners;

// Alternative with image sources
// const imageLogos = [
//   {
//     src: "/logos/company1.png",
//     alt: "Company 1",
//     href: "https://company1.com",
//   },
//   {
//     src: "/logos/company2.png",
//     alt: "Company 2",
//     href: "https://company2.com",
//   },
//   {
//     src: "/logos/company3.png",
//     alt: "Company 3",
//     href: "https://company3.com",
//   },
// ];
