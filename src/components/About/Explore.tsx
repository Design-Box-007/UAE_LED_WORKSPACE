import { Aboutinsights } from "@/data/Explore/data";
import { formatToHyphenated } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Explore = () => {
  return (
    <section className="pt-10 pb-20 lg:pb-40">
      <div>
        {/* Heading */}
        <div className="flex flex-col md:items-center lg:items-start md:justify-between mb-6 gap-3">
          <h2 className="text-heading md:text-4xl text-2xl font-playfair">
            Insights in LEDs
          </h2>
          <span className="text-sm sm:text-base md:text-lg text-heading font-playfair font-bold text-center md:text-right">
            Explore the Latest Trends, Tech, and Tips in LED Display Solutions
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Aboutinsights.map((item, idx) => (
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
              <h3 className="text-xl font-semibold text-heading font-playfair mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-base sm:text-lg mb-6 flex-grow">
                {item.desc}
              </p>
              <Link href={`about/${formatToHyphenated(item.title)}/`}>
                <button className="bg-gray-100 rounded-lg py-3 px-4 font-medium text-gray-900 transition hover:bg-gray-200 w-full">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
