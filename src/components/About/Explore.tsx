import images from "@/data/assets";
import Image from "next/image";
import React from "react";

const insights = [
  {
    image: images.aboutUs.img4,
    title: "Top 5 LED Display Trends for 2024",
    desc: "Learn about the cutting-edge innovations shaping the future of LED displays for every occasion.",
  },
  {
    image: images.aboutUs.img3,
    title: "The Future of Outdoor LED Walls",
    desc: "Discover how outdoor LED displays are transforming events, retail, and public spaces worldwide.",
  },
  {
    image: images.aboutUs.img2,
    title: "How to Choose the Right LED Display",
    desc: "Practical tips for picking the perfect LED solution for your unique needs and environment.",
  },
];

const Explore = () => {
  return (
    <section className="px-5 sm:px-10 lg:px-20 pb-20 lg:pb-40">
      <div>
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6 gap-3 md:gap-0">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-[#24316E] tracking-tight text-center lg:text-left">
            Insights in LEDs
          </h2>
          <span className="text-sm sm:text-base md:text-lg text-[#24316E] font-bold text-center md:text-right">
            Explore the Latest Trends, Tech, and Tips in LED Display Solutions
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={250}
                className="rounded-lg w-full h-52 lg:h-70 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-base sm:text-lg mb-6 flex-grow">
                {item.desc}
              </p>
              <button className="bg-gray-100 rounded-lg py-3 px-4 font-medium text-gray-900 transition hover:bg-gray-200 w-full">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
