import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="px-3 overflow-hidden pt-20 pb-20">
        {/* Image */}
        <div className="relative">
          <Image
            src="/images/blog/blog-10.png" // replace with your image path
            alt="Feature"
            width={1080}
            height={720}
            className="w-full md:h-160 h-100 object-cover brightness-60 rounded-2xl"
          />

          {/* Text Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex items-center justify-between">
            {/* Left Side Text */}
            <div>
              <p className="md:text-[20px]">Featured</p>
              <h2 className="md:text-[40px] text-[20px] mt-1 font-bold">
                Illuminating Ideas: Explore the World of LED Displays
              </h2>
              <p className="md:text-[24px] mt-2">
                Discover insights, trends, and solutions for events, advertising, and beyond.
              </p>
            </div>

            {/* Arrow Button */}
            <button className="ml-6 p-3 bg-white/20 rounded-full hover:bg-white/30 transition">
              <ArrowRight size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
