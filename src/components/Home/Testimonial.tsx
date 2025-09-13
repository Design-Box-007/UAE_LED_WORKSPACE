"use client";

import images from "@/data/assets";
import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="relative w-full bg-white px-4 md:px-8 lg:px-20 py-5 md:py-10">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col text-center lg:text-left">
            <p className="text-hero font-medium text-base md:text-lg mb-3 md:mb-4">
              Testimonial
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-hero leading-tight mb-4 md:mb-5">
              What Our Clients <br className="md:hidden" />
              Are Saying
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              From exhibitions to permanent installations, our clients trust us
              to deliver clarity, quality, and impact.
            </p>

            {/* CTA Button */}
            <div className="flex items-center gap-4 hover:gap-6 transition-all duration-300 bg-hero text-white py-3 px-4 rounded-[30px] cursor-pointer">
              <button className="text-2xl">Get a Consult Now</button>
             
              <svg
                className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>

          {/* Right Column: Testimonial Card */}
          <div className="bg-gray-50 rounded-2xl md:rounded-3xl md:p-5 relative overflow-hidden lg:mt-0">
            {/* Client Info */}
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-10 md:w-12 h-10 md:h-12 bg-[#0f123f] rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 md:w-6 h-5 md:h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-base md:text-lg">
                  <span className="hidden sm:inline">
                    Event Manager, Dubai Expo Team
                  </span>
                  <span className="sm:hidden">Dubai Expo Team</span>
                </p>
              </div>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              ’’LED Display UAE helped us pull off a spectacular event with a
              custom LED arch and stage wall. Their execution was flawless and
              on time.’’
            </blockquote>

            {/* Background Image */}
            <div className="relative h-60 md:h-40 lg:h-48 rounded-xl md:rounded-2xl overflow-hidden">
              <Image
                src={images.projects.img2}
                alt="LED Display Installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
