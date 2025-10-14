"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

interface LogoItem {
  logo: string;
}

interface MarqueeLogosProps {
  title?: string; // Optional title, defaults to "Trusted By"
  logos: LogoItem[];
}

const MarqueeLogos: React.FC<MarqueeLogosProps> = ({
  title = "Trusted By",
  logos,
}) => {
  return (
    <div className="w-full py-6 space-y-4">
      <h5 className="text-xl sm:text-2xl lg:text-3xl font-medium text-custom-red-light text-center font-playfair">
        {title}
      </h5>

      <Marquee gradient={false} speed={40}>
        {logos.map((item, index) => (
          <div
            key={index}
            className="mx-8 flex items-center justify-center min-w-[100px] h-full"
          >
            <Image
              src={item.logo}
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

export default MarqueeLogos;
