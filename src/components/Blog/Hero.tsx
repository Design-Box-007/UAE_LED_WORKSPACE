"use client";

import images from "@/data/assets";
import Image from "next/image";


export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] top-20 flex items-end rounded-xl overflow-hidden">
      {/* Background Image */}
      <Image
        src={images.blog.img10}
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay (optional for dark gradient) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-6 md:p-12 lg:p-16 max-w-3xl text-white">
        <p className="text-sm mb-2 opacity-80">Featured</p>
        <h1 className="text-2xl md:text-4xl font-semibold mb-4">
          Illuminating Ideas: Explore the World of LED Displays
        </h1>
        <p className="text-base md:text-lg opacity-90">
          Discover insights, trends, and solutions for events, advertising, and
          beyond.
        </p>

        {/* Arrow button */}
        <button className="mt-6 flex items-center gap-2 text-white hover:gap-3 transition-all">
          <span className="text-lg font-medium">Explore</span>
          <span className="text-2xl">→</span>
        </button>
      </div>
    </section>
  );
}
