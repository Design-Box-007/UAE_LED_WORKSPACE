"use client";

import images from "@/data/assets";
import { Instagram } from "lucide-react";
import Image from "next/image";
import { BsTwitterX, BsWhatsapp } from "react-icons/bs";
 
const chips = [
  { id: "all", label: "All", icon: "grid" },
  { id: "indoor", label: "Indoor LED Display", icon: "dot" },
  { id: "outdoor", label: "Outdoor LED", icon: "ring" },
];

const items = [
  {
    id: 1,
    title: "Skyline Billboard | Dubai, UAE",
    img: images.projects.img1,
    bigInfo: false,
  },
  {
    id: 2,
    title: "Retail Elegance",
    img: images.projects.img2,
  },
  {
    id: 3,
    title: "Auto Expo Event",
    img: images.projects.img3,
  },
  {
    id: 4,
    title: "Smart Lobby",
    img: images.projects.img4,
  },
  {
    id: 5,
    title: "Glass Storefront",
    img: images.projects.img5,
  },
  {
    id: 6,
    title: "Digital Signage Network",
    img: images.projects.img6,
  },
];

export default function Explore() {
  return (
    <section className="w-full py-10 sm:py-6 md:py-8 px-10">
      <div className="mx-auto w-full rounded-3xl bg-[#1b2970]/95 shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-1 ring-white/5 px-3 sm:px-4 md:px-6 lg:px-7 py-4 sm:py-5 md:py-6">
        {/* Header row */}
        <div className="flex flex-wrap items-center justify-between gap-3 py-3">
          <h2 className="text-white text-[20px] sm:text-[22px] md:text-5xl font-semibold">
            Explore Our Property Portfolio
          </h2>

          <div className="flex items-center gap-2">
            {chips.map((c, i) => (
              <button
                key={c.id}
                className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[12px] text-white/90 backdrop-blur transition hover:bg-white/15 ${
                  i === 0 ? "bg-white/20" : ""
                }`}
              >
                {c.icon === "grid" && (
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="7"
                      height="7"
                      rx="1.5"
                      strokeWidth="1.8"
                    />
                    <rect
                      x="14"
                      y="3"
                      width="7"
                      height="7"
                      rx="1.5"
                      strokeWidth="1.8"
                    />
                    <rect
                      x="3"
                      y="14"
                      width="7"
                      height="7"
                      rx="1.5"
                      strokeWidth="1.8"
                    />
                    <rect
                      x="14"
                      y="14"
                      width="7"
                      height="7"
                      rx="1.5"
                      strokeWidth="1.8"
                    />
                  </svg>
                )}
                {c.icon === "dot" && (
                  <span className="inline-block h-2 w-2 rounded-full bg-white/90" />
                )}
                {c.icon === "ring" && (
                  <span className="inline-block h-2 w-2 rounded-full ring-2 ring-white/90" />
                )}
                {c.label}
              </button>
            ))}

            {/* circular arrow button */}
            <button className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25">
              <svg
                className="h-4.5 w-4.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M5 12h14" strokeWidth="2" strokeLinecap="round" />
                <path
                  d="M13 6l6 6-6 6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-4 grid grid-cols-1 gap-3.5 sm:mt-5 sm:grid-cols-2 sm:gap-4 lg:mt-6 lg:grid-cols-2 lg:gap-5">
          {items.map((card) => (
            <figure
              key={card.id}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl ring-1 ring-white/10 bg-black/20"
            >
              {/* image */}
              <Image
                src={card.img}
                alt={card.title}
                width={2000}
                height={1200}
                className="h-full w-full object-cover sm:h-[240px] md:h-[250px] lg:h-full transition-transform duration-300 group-hover:scale-[1.02]"
                priority={card.id <= 3}
              />

              {/* top-right expand icon */}
              <span className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/45 text-white/90 backdrop-blur hover:bg-black/60">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M15 3h6v6" strokeWidth="1.8" strokeLinecap="round" />
                  <path
                    d="M9 21H3v-6"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path d="M21 3l-7 7" strokeWidth="1.8" />
                  <path d="M3 21l7-7" strokeWidth="1.8" />
                </svg>
              </span>

              {/* caption / info */}
              {card.bigInfo ? (
                <figcaption className="absolute left-3 right-3 -bottom-2 sm:left-4 sm:right-4 sm:-bottom-3">
                  <div className="rounded-xl bg-white p-3 shadow-xl ring-1 ring-black/5">
                    <p className="text-[12.5px] font-semibold text-[#16204f]">
                      Skyline Billboard | Dubai, UAE
                    </p>
                    <div className="mt-2 grid grid-cols-2 gap-2 text-[11.5px] text-[#46507d] ">
                      <div>
                        <p>Display Type</p>
                        <p className="font-medium text-[#17225a]">
                          6mm – Corner Pitch
                        </p>
                      </div>
                      <div>
                        <p>Location</p>
                        <p className="font-medium text-[#17225a]">
                          High-footfall zone
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="font-medium text-[#17225a]">Highlights</p>
                        <p>
                          Unmatched visibility and client revenue uplift across
                          24/7 AdOps optimization.
                        </p>
                      </div>
                    </div>
                  </div>
                </figcaption>
              ) : (
                <figcaption className="pointer-events-none absolute bottom-3 left-3 right-3">
                  <p className="select-none lg:text-4xl text-[15px]  tracking-tight text-white drop-shadow">
                    {card.title}
                  </p>
                </figcaption>
              )}
            </figure>
          ))}
        </div>

        {/* bottom mini-bar */}
        <div className="mt-4 sm:mt-5 lg:mt-6 flex items-center justify-between rounded-2xl px-4 py-3 text-white/80">
          <span className="text-[12px] lg:text-2xl sm:text-[12.5px]">
            Don’t Miss out on our hot deals
          </span>
          <div className="flex items-center gap-4">
            <Instagram size={30} />
            <BsTwitterX size={30} />
            <BsWhatsapp size={30} />
          </div>
        </div>
      </div>
    </section>
  );
}
