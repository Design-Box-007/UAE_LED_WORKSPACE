"use client";

import React from "react";
import { motion } from "framer-motion";

interface SubFeature {
  title: string;
  featurePoints: string[];
}

interface Feature {
  title: string;
  subTitle: string;
  description: string;
  subfeatures: SubFeature[];
  footer: string;
}

interface FeatureContentProps {
  features: Feature[];
}

const FeatureContent: React.FC<FeatureContentProps> = ({ features }) => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto space-y-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 bg-gradient-to-b from-white to-gray-50"
          >
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">
                {feature.title}
              </h3>
              <h4 className="text-lg md:text-xl text-gray-600 italic mb-3">
                {feature.subTitle}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>

            {/* Subfeatures */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {feature.subfeatures.map((sub, subIndex) => (
                <div key={subIndex} className="space-y-3">
                  <h5 className="text-lg font-semibold text-gray-900">
                    {sub.title}
                  </h5>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {sub.featurePoints.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-8 pt-4 border-t border-gray-200">
              <p className="text-gray-600 italic">{feature.footer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureContent;
