"use client";

import React from "react";
import { motion } from "framer-motion";

interface FooterContentProps {
  footerContent: {
    title: string;
    description: string[];
  };
}

const FooterContent: React.FC<FooterContentProps> = ({ footerContent }) => {
  const { title, description } = footerContent;

  return (
    <section className="bg-blue-700 text-white py-16 px-6 md:px-12 lg:px-20 text-center md:text-left">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto space-y-6"
      >
        {/* Footer title */}
        <h2 className="text-2xl md:text-4xl font-bold leading-snug">{title}</h2>

        {/* Footer description */}
        <div className="space-y-4 text-base md:text-lg text-blue-50 leading-relaxed">
          {description.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        {/* CTA Button (Optional) */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 inline-block bg-white text-blue-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-100 transition-all"
        >
          Get a Free Consultation
        </motion.button>
      </motion.div>
    </section>
  );
};

export default FooterContent;
