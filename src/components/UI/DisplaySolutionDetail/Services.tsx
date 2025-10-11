"use client";

import React from "react";
import { motion } from "framer-motion";
interface FooterContentProps {
  header?: string;
  footer?: string;
}
const ServingEmirates: React.FC<FooterContentProps> = ({ header, footer }) => {
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
    <section className="md:px-10 px-5 py-5">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <h2 className="text-xl md:text-4xl text-heading font-playfair font-bold mb-3">
          Serving All Emirates
        </h2>

        {/* Description */}
        <p className="font-playfair md:text-xl leading-relaxed">{header}</p>

        {/* Locations List */}
        <ul className="flex flex-col gap-3 mt-3">
          {locations.map((location, index) => (
            <li
              key={index}
              className="before:content-['•'] before:mr-2 md:text-xl text-[15px] font-light"
            >
              {location}
            </li>
          ))}
        </ul>

        {/* Footer Description */}
        <p className="mt-6 text-heading font-playfair italic md:text-2xl leading-relaxed">
          {footer}
        </p>
      </motion.div>
    </section>
  );
};

export default ServingEmirates;
