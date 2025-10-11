"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface SubFeature {
  subfeatureTitle?: string;
  title: string;
  description?: string;
  featurePoints?: string[];
}

interface Feature {
  title: string;
  subTitle?: string;
  image?: string;
  description: string;
  subfeatureTitle?: string;
  subfeatures: SubFeature[];
  footer?: string;
}

interface FeatureContentProps {
  features: Feature[];
}

const FeatureContent: React.FC<FeatureContentProps> = ({ features }) => {
  return (
    <section className="md:px-10 px-5">
      <div>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-xl md:text-4xl font-bold text-heading font-playfair mb-2">
                {feature.title}
              </h3>
              <h4 className="md:text-xl font-playfair mb-3">
                {feature.subTitle}
              </h4>
              {feature.image && (
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={1080}
                  height={720}
                  className="mb-10 w-full h-full rounded-2xl"
                />
              )}

              <p className="md:text-xl text-[15px] font-light leading-relaxed text-justify">
                {feature.description}
              </p>
            </div>

            {/* Subfeatures */}
            <div className="flex flex-col gap-10">
              {feature.subfeatures.map((sub, subIndex) => (
                <div key={subIndex} className="space-y-3 ">
                  {sub.subfeatureTitle && (
                    <h1 className="md:text-2xl text-heading font-playfair font-bold">
                      {sub.subfeatureTitle}
                    </h1>
                  )}

                  <h5 className="md:text-2xl text-heading font-semibold font-playfair">
                    {sub.title}
                  </h5>

                  <ul className="list-disc list-inside space-y-4 md:text-xl text-[15px]">
                    {sub.featurePoints?.map((point, pointIndex) => (
                      <li key={pointIndex} className="font-light">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-5 mb-10">
              <p className="italic md:text-2xl font-playfair text-heading">
                {feature.footer}
              </p>
            </div>
            <hr className="border-t border-heading my-6" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureContent;
