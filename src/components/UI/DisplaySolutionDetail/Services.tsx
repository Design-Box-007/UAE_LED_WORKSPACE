"use client";

import React from "react";
import { motion } from "framer-motion";

const ServingEmirates = () => {
  const locations = [
    "Dubai",
    "Abu Dhabi",
    "Sharjah",
    "Fujairah",
    "Ras Al Khaimah",
    "Ajman",
    "Umm Al Quwain",
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20 text-center md:text-left">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto space-y-6"
      >
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Serving All Emirates
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          We supply and install digital kiosk solutions across the UAE,
          including:
        </p>

        {/* Locations List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4 text-gray-800 font-medium">
          {locations.map((location, index) => (
            <li
              key={index}
              className="before:content-['•'] before:text-blue-600 before:mr-2"
            >
              {location}
            </li>
          ))}
        </ul>

        {/* Footer Description */}
        <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
          Whether you need a single kiosk or a multi-location rollout, we
          provide professional support from consultation to deployment and
          maintenance.
        </p>
      </motion.div>
    </section>
  );
};

export default ServingEmirates;
