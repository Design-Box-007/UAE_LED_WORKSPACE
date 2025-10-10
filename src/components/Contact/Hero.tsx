import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-blue-white-downward text-white px-6 text-center pt-20 pb-10">
      <div className="mt-10 md:px-[40px] w-full h-full relative">
        {/* Image */}
        <Image
          src="/images/about-us/about-us-5.png"
          alt="LED Display"
          width={1200}
          height={600}
          className="rounded-xl shadow-lg w-full h-[600px] object-cover brightness-75"
        />

        {/* Text overlay (wrapped inside the image) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <h2 className="text-2xl md:text-[50px] font-playfair">
            Innovative LED Displays for Every Need
          </h2>
          <p className="mt-4 max-w-2xl mx-auto md:text-[20px]">
            Explore a wide range of high-performance LED solutions tailored for
            events, advertising, corporate setups, and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
