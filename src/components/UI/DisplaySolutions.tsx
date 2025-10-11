"use client";

import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatToHyphenated } from "@/utils/utils";

// 1. Types for Data Structure
interface SolutionCardData {
  name: string;
  image: string;
}

interface DisplaySolutionsProps {
  title?: string;
  subtitle?: ReactNode;
  tabsData: SolutionCardData[];
}

// 2. Reusable Icons
// const CheckCircleIcon: React.FC = () => (
//   <svg
//     className="w-3 md:w-4 h-3 md:h-4"
//     fill="currentColor"
//     viewBox="0 0 20 20"
//   >
//     <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//   </svg>
// );

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

// 3. Extracted Components

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
          className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-2xl h-[400px]"
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

// 4. Main Component
const DisplaySolutions: React.FC<DisplaySolutionsProps> = ({
  title = "Our Display Solutions",
  subtitle = "Versatile LED Products Tailored for Every Space, Purpose, and Performance Need",
  tabsData,
}) => {
  if (!tabsData || tabsData.length === 0) return null;

  return (
    <section className="relative w-full bg-white px-4 md:px-8 lg:px-10 py-5 md:py-10 pt-10">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="flex flex-col gap-3 mb-5">
          <h2 className="text-3xl md:text-4xl font-medium text-heading font-playfair">
            {title}
          </h2>
          <p className="text-gray-700 font-playfair text-[15px] md:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10">
          {tabsData.map((solution) => (
            <SolutionCard key={solution.name} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisplaySolutions;
