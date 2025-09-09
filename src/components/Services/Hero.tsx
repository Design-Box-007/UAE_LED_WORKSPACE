"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import images from "@/data/assets";

export default function Hero() {
  const slides = [
    images.service.img1,
    images.service.img2,
    images.service.img3,
  ];

  

  return (
    <section className=" w-full flex flex-col justify-center overflow-hidden bg-[#0f123f] py-10">

      {/* Content */}
      <div className="text-center pt-35 pb-20 px-6 lg:px-2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Innovative LED Displays for Every Need
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Explore a wide range of high-performance LED solutions tailored <br /> for
          events, advertising, corporate setups, and more.
        </p>
        <button className="px-6 py-3 rounded-full bg-white font-semibold shadow-md hover:bg-gray-100 transition">
          Explore Our Products 
        </button>
      </div>

      {/* Image Slider */}
      <div className="w-full">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          centeredSlides
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="rounded-2xl overflow-hidden shadow-2xl"
          breakpoints={{
            0:{
              slidesPerView: 1,
            },
            768:{
              slidesPerView: 2,
            },
          }}
        >
          {slides.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center lg:p-0 px-10">
              <div className="transition-all duration-500">
                <Image
                  src={src}
                  alt={`LED Display ${index}`}
                  width={1025}
                  height={720}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
