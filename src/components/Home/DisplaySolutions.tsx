"use client";

import { useState } from "react";
import images from "@/data/assets";
import Image from "next/image";

interface TabContent {
    id: string;
    name: string;
    solutions: {
        id: string;
        title: string;
        image: string;
    }[];
}

const tabsData: TabContent[] = [
    {
        id: 'all',
        name: 'All',
        solutions: [
            { id: 'indoor', title: 'Indoor LED Displays', image: images.service.img1 },
            { id: 'outdoor', title: 'Outdoor LED Screens', image: images.service.img2 }
        ]
    },
    {
        id: 'indoor',
        name: 'Indoor LED Display',
        solutions: [
            { id: 'indoor', title: 'Indoor LED Displays', image: images.service.img1 }
        ]
    },
    {
        id: 'outdoor',
        name: 'Outdoor LED',
        solutions: [
            { id: 'outdoor', title: 'Outdoor LED Screens', image: images.service.img2 }
        ]
    },
    {
        id: 'custom',
        name: 'Custom LED',
        solutions: [
            { id: 'custom', title: 'Custom LED Solutions', image: images.service.img3 }
        ]
    },
    {
        id: 'video_walls',
        name: 'Video Walls',
        solutions: [
            { id: 'video_walls', title: 'Video Wall Systems', image: images.service.img4 }
        ]
    },
    {
        id: 'rental',
        name: 'LED Rental Displays',
        solutions: [
            { id: 'rental', title: 'LED Rental Displays', image: images.service.img5 }
        ]
    },
    {
        id: 'transparent',
        name: 'Transparent LED',
        solutions: [
            { id: 'transparent', title: 'Transparent LED Displays', image: images.service.img6 }
        ]
    }
];

export default function DisplaySolutions() {
    const [activeTab, setActiveTab] = useState('all');

    const currentContent = tabsData.find(tab => tab.id === activeTab) || tabsData[0];

    return (
        <section className="relative w-full bg-white px-20 py-20">
            <div className="mx-auto max-w-[1320px]">
                {/* Header Section */}
                <div className="flex flex-row justify-between items-end gap-[99px] w-full h-24 mb-12">
                    <div className="flex-none">
                        <h2 className="text-6xl font-medium text-[#0f123f]">
                            Our Display Solutions
                        </h2>
                    </div>
                    <div className="flex-none">
                        <p className="text-gray-700 text-lg text-left">
                            Versatile LED Products Tailored for Every Space,<br />
                            Purpose, and Performance Need
                        </p>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap gap-3 justify-center mb-12">
                    {tabsData.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`inline-flex items-center gap-2 px-6 py-1 rounded-md border transition-all duration-300 ${
                                activeTab === tab.id
                                    ? 'bg-[#0f123f] text-white border-[#0f123f]'
                                    : 'bg-white text-gray-700 border-gray-300 hover:border-[#0f123f] hover:text-[#0f123f]'
                            }`}
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Content Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {currentContent.solutions.map((solution) => (
                        <div 
                            key={solution.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative h-80 overflow-hidden rounded-t-2xl">
                                <Image
                                    src={solution.image}
                                    alt={solution.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-6 bg-white">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {solution.title}
                                    </h3>
                                    
                                    {/* Arrow Icon */}
                                    <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-700 transition-all duration-300">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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