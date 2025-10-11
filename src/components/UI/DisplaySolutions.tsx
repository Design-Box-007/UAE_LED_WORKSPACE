"use client";

import { useState, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatToHyphenated } from "@/utils/utils";

interface SolutionCardData {
  name: string;
  image: string;
}

interface DisplaySolutionsProps {
  title?: string;
  subtitle?: ReactNode;
  tabsData: SolutionCardData[];
}

const ArrowRightIcon: React.FC = () => (
  <svg
    className="w-4 md:w-5 h-4 md:h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

interface SolutionCardProps {
  solution: SolutionCardData;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution }) => (
  <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-2">
    <Link href={`/${formatToHyphenated(solution.name)}/`}>
      <div className="w-full aspect-[4] p-4">
        <Image
          src={solution.image}
          alt={solution.name}
          width={1080}
          height={720}
          className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-2xl h-[350px]"
        />
      </div>
      <div className="p-3 md:p-4 bg-white">
        <div className="flex items-center justify-between">
          <h3 className="text-base md:text-lg font-semibold text-heading font-playfair">
            {solution.name}
          </h3>
          <div className="w-6 md:w-8 h-6 md:h-8 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-700 transition-all duration-300 flex-shrink-0">
            <ArrowRightIcon />
          </div>
        </div>
      </div>
    </Link>
  </div>
);

const DisplaySolutions: React.FC<DisplaySolutionsProps> = ({
  title = "Our Display Solutions",
  subtitle = "Versatile LED Products Tailored for Every Space, Purpose, and Performance Need",
  tabsData,
}) => {
  const [activeCategory, setActiveCategory] = useState("All");

  // ✅ 5 categories
  const categories = [
    "All",
    "Indoor LED Screens",
    "Outdoor LED Screens",
    "LED Video Walls",
    "Custom LED Screens",
    "Digital Kiosks",
  ];

  // ✅ Filter by checking if category text appears in the name
  const filteredSolutions =
    activeCategory === "All"
      ? tabsData
      : tabsData.filter((solution) =>
          solution.name.toLowerCase().includes(activeCategory.toLowerCase())
        );

  if (!tabsData || tabsData.length === 0) return null;

  return (
    <section className="relative w-full bg-white px-4 md:px-8 lg:px-10 pt-20">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-5">
          <h2 className="text-3xl md:text-4xl font-medium text-heading font-playfair">
            {title}
          </h2>
          <p className="text-gray-700 font-playfair text-[15px] md:text-lg">
            {subtitle}
          </p>
        </div>

        {/* ✅ Category Buttons */}
        <div className="flex flex-wrap gap-3 mt-6 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-[10px] border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ✅ Filtered Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6">
          {filteredSolutions.map((solution) => (
            <SolutionCard key={solution.name} solution={solution} />
          ))}
        </div>

        {filteredSolutions.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No matching solutions found.
          </p>
        )}
      </div>
    </section>
  );
};

export default DisplaySolutions;
