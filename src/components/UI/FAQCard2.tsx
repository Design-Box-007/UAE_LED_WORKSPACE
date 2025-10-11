"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}
const FAQAccordion: React.FC<{ faqs: FAQItem[] }> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-4 w-full space-y-10 my-5 bg-white md:px-10 px-5 pt-10">
      <h2 className="lg:text-5xl md:text-3xl text-2xl font-medium text-heading font-playfair">
        Frequently Asked Questions
      </h2>
      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div key={index} className="border-2 rounded-2xl overflow-hidden">
            {" "}
            {/* Moved border here */}
            <button
              className="w-full flex cursor-pointer justify-between text-left items-center py-5 px-4 lg:px-10 text-black text-lg font-medium"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? (
                <FaChevronUp className="text-blue-500 transition-transform duration-300 rotate-180" />
              ) : (
                <FaChevronDown className="text-blue-500 transition-transform duration-300" />
              )}
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={
                openIndex === index
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-10 py-5 bg-gray-100 text-gray-800">
                {faq.answer}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
