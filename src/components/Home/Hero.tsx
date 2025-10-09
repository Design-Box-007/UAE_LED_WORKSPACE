"use client";

import images from "@/data/assets";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";

const TAGS = ["LED Display", "Events display", "Advertising", "Digital kiosk"];
const WHATSAPP_NUMBERS = ["+971585321473", "+971555131473"];

type WhatsappButtonProps = {
  number: string;
};

const WhatsappButton = ({ number }: WhatsappButtonProps) => (
  <button className="bg-white text-[#0f123f] px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:scale-105">
    <BsWhatsapp />
    {number}
  </button>
);

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-blue-white-downward px-5 lg:px-10 text-white overflow-hidden md:pt-0 pt-10">
      <div className="mx-auto py-10 md:py-24 lg:py-32 flex flex-col items-center">
        {/* Image container */}
        <div className="relative w-full h-[500px] md:h-[450px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
          {/* Background image */}
          <Image
            src={images.home.img1}
            alt="LED Display Example"
            fill
            className="object-cover brightness-75"
          />

          {/* Text inside the image */}
          <div className="absolute inset-0 flex lg:flex-row flex-col w-full lg:justify-between justify-center items-center text-center lg:text-left px-6 md:px-16 lg:px-10 z-10">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-playfair font-medium leading-tight mb-4">
              Unmatched LED Display <br className="hidden lg:block" />
              Solutions for Every <br className="hidden lg:block" />
              Experience
            </h1>

            <p className="text-sm md:text-lg lg:text-xl text-gray-200 max-w-3xl">
              Bring your brand to life with cutting-edge LED technology — from
              immersive 360° displays to sleek entrance arches and digital
              kiosks, designed to captivate any audience.
            </p>
          </div>

          {/* Tags */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="bg-white/90 text-black text-xs md:text-sm px-3 md:px-4 py-1 rounded-full font-medium shadow"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom text */}
          <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white text-xs md:text-sm">
            You name it, we have it all
          </div>

          {/* WhatsApp buttons */}
          <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 flex flex-col sm:flex-row gap-2 z-20">
            {WHATSAPP_NUMBERS.map((number) => (
              <WhatsappButton key={number} number={number} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
