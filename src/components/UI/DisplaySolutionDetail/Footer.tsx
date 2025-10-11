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
    <section className="md:px-10 px-5 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Footer title */}
        <h2 className="text-xl md:text-4xl font-bold font-playfair text-heading leading-snug">
          {title}
        </h2>

        {/* Footer description */}
        <div className="mt-5 flex flex-col gap-4">
          {description.map((para, index) => (
            <p
              key={index}
              className="md:text-xl text-[15px] text-justify font-light"
            >
              {para}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FooterContent;
