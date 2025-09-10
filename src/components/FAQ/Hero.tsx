import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#0f123f] text-white px-6 text-center pt-30 pb-10">
      {/* Title */}

      <h2 className="text-2xl md:text-[50px]">
        Innovative LED Displays for Every Need
      </h2>

      {/* Subtitle */}
      <p className="mt-4 max-w-2xl mx-auto md:text-[20px] ">
        Explore a wide range of high-performance LED solutions tailored for
        events, advertising, corporate setups, and more.
      </p>

      {/* Image */}
      <div className="mt-10 md:px-[40px] w-full h-full">
        <Image
          src="/images/about-us/about-us-5.png" // replace with your image
          alt="LED Display"
          width={1200}
          height={600}
          className="rounded-xl shadow-lg w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
