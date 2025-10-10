"use client";

import images from "@/data/assets";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { Instagram } from "lucide-react";

const chips = [
  { id: "all", label: "All", icon: "grid" },
  { id: "indoor", label: "Indoor LED Display", icon: "dot" },
  { id: "outdoor", label: "Outdoor LED", icon: "ring" },
];

const items = [
  { id: 1, title: "Skyline Billboard | Dubai, UAE", img: images.projects.img1 },
  { id: 2, title: "Retail Elegance", img: images.projects.img2 },
  { id: 3, title: "Auto Expo Event", img: images.projects.img3 },
  { id: 4, title: "Smart Lobby", img: images.projects.img4 },
  { id: 5, title: "Glass Storefront", img: images.projects.img5 },
  { id: 6, title: "Digital Signage Network", img: images.projects.img6 },
];

export default function Explore() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="w-full pb-10 px-5 md:px-10">
      <div className="mx-auto rounded-2xl w-full bg-[#1b2970]/95 shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-1 ring-white/5 px-3 sm:px-4 md:px-6 lg:px-7 py-4 sm:py-5 md:py-6">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 py-3">
          <h2 className="text-white text-[20px] sm:text-[22px] md:text-5xl font-semibold font-playfair">
            View our works
          </h2>
          <div className="flex items-center gap-2">
            {chips.map((c, i) => (
              <button
                key={c.id}
                className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[12px] text-white/90 backdrop-blur transition hover:bg-white/15 ${
                  i === 0 ? "bg-white/20" : ""
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((card) => (
            <figure
              key={card.id}
              className="group relative overflow-hidden rounded-xl bg-black/20 ring-1 ring-white/10 cursor-pointer"
              onClick={() => setSelectedImage(card.img)}
            >
              <Image
                src={card.img}
                alt={card.title}
                width={2000}
                height={1200}
                className="w-full object-cover h-[400px] transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <figcaption className="absolute bottom-3 left-3 right-3">
                <p className="text-white lg:text-2xl text-[15px] drop-shadow">
                  {card.title}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 flex items-center justify-between rounded-2xl px-4 py-3 text-white/80">
          <span className="text-[12px] lg:text-2xl">
            Don’t Miss out on our hot deals
          </span>
          <div className="flex items-center gap-4">
            <Instagram size={30} />
            <BsTwitterX size={30} />
            <BsWhatsapp size={30} />
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md transition-all duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-[90%] md:w-[70%] lg:w-[40%] transition-transform duration-300 scale-100 "
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Expanded view"
              width={1080}
              height={720}
              className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-300"
            />
            {/* X button inside image */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition duration-300"
            >
              <X size={22} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
