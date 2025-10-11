"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeaderProps {
  image: string;
  title: string;
  description: string[];
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <section className=" pt-25 pb-10 px-5 md:px-10 text-center md:text-left">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Main title */}
        <h1 className="text-xl md:text-4xl font-bold text-heading font-playfair mb-6 leading-snug text-left">
          {title}
        </h1>

        <Image
          src={image}
          alt={title}
          width={1080}
          height={720}
          className="mb-5 w-full md:h-[600px] rounded-2xl object-cover"
        />

        {/* Description paragraphs */}
        <div className="space-y-4 leading-relaxed ">
          {description.map((para, index) => (
            <p key={index} className="md:text-2xl font-light text-justify">
              {para}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PageHeader;
