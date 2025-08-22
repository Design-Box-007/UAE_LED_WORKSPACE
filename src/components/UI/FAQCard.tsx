"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
}

export default function FAQCard({ faqs, title = "Frequently Asked Questions" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 px-6 lg:px-25">
      <div className="mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-blue-900 mb-8">
          {title}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg bg-white shadow-sm px-5 py-2"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-4 font-medium text-gray-800 focus:outline-none text-2xl "
              >
                {faq.question}
                <ChevronDown
                  className={`transform transition-transform duration-300 text-blue-600 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={26}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
