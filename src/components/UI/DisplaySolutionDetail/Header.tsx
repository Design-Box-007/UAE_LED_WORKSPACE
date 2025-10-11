"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageHeaderProps {
  name: string;
  title: string;
  description: string[];
}

const PageHeader: React.FC<PageHeaderProps> = ({
  name,
  title,
  description,
}) => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-12 lg:px-20 text-center md:text-left">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        {/* Small name/tag */}
        <p className="text-blue-700 uppercase tracking-widest text-sm font-semibold mb-3">
          {name}
        </p>

        {/* Main title */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-snug">
          {title}
        </h1>

        {/* Description paragraphs */}
        <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
          {description.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PageHeader;
