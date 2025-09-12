"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";

interface Solution {
  id: string;
  title: string;
  image: string;
}

interface TabContent {
  id: string;
  name: string;
  solutions: Solution[];
}

interface DisplaySolutionsProps {
  title?: string;
  subtitle?: ReactNode;
  tabsData: TabContent[];
}

export default function DisplaySolutions({
  title = "Our Display Solutions",
  subtitle = "Versatile LED Products Tailored for Every Space, Purpose, and Performance Need",
  tabsData,
}: DisplaySolutionsProps) {
  const [activeTab, setActiveTab] = useState(tabsData[0]?.id || "all");

  const currentContent = tabsData.find((tab) => tab.id === activeTab) || tabsData[0];

  return (
    <section className="relative w-full bg-white px-4 md:px-8 lg:px-10 py-5 md:py-10 pt-10">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6 md:gap-8 lg:gap-[99px] w-full mb-8 md:mb-10 lg:mb-12 ">
          <div className="flex-none text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#0f123f]">
              {title}
            </h2>
          </div>
          <div className="flex-none text-center lg:text-left">
            <p className="text-gray-700 text-[15px] md:text-lg">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-8 md:mb-10 lg:mb-12">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-1 md:gap-2 px-3 md:px-6 py-1 rounded-md border transition-all duration-300 text-sm md:text-base ${
                activeTab === tab.id
                  ? "bg-[#0f123f] text-white border-[#0f123f]"
                  : "bg-white text-gray-700 border-gray-300 hover:border-[#0f123f] hover:text-[#0f123f]"
              }`}
            >
              <svg className="w-3 md:w-4 h-3 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {currentContent.solutions.map((solution) => (
            <div
              key={solution.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden rounded-t-2xl">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Section */}
              <div className="p-4 md:p-6 bg-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {solution.title}
                  </h3>

                  {/* Arrow Icon */}
                  <div className="w-8 md:w-10 h-8 md:h-10 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-700 transition-all duration-300 flex-shrink-0">
                    <svg
                      className="w-4 md:w-5 h-4 md:h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show message when no solutions available */}
        {currentContent.solutions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No solutions available for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
