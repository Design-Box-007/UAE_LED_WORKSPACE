"use client";

import React from "react";
import Link from "next/link";

interface CTAButton {
  label: string;
  href: string;
}

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: CTAButton;
  secondaryButton?: CTAButton;
}

export default function CTA({
  title,
  description,
  primaryButton,
  secondaryButton,
}: CTASectionProps) {
  return (
    <section className="relative w-full bg-white px-4 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1320px]">
        {/* CTA Card */}
        <div
          className="rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16"
          style={{
            background: "linear-gradient(180deg, #1F2964 0%, #3F53CA 100%)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 lg:gap-12 items-center text-center lg:text-left">
            {/* Left Column: Main Heading */}
            <div>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-medium text-white leading-tight">
                {title}
              </h2>
            </div>

            {/* Right Column: Description */}
            <div>
              <p className="text-white text-[15px] md:text-lg lg:text-xl leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-10">
            <div className="flex-1">
              <Link
                href={primaryButton.href}
                className="w-full inline-flex items-center justify-between gap-3 bg-white text-hero px-4 md:px-8 lg:px-12 py-2 md:py-5 lg:py-6 rounded-xl md:rounded-2xl font-medium text-base md:text-lg lg:text-2xl hover:bg-gray-50 transition-all duration-300 group"
              >
                <span>{primaryButton.label}</span>
                <svg
                  className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            {secondaryButton && (
              <div className="flex-1">
                <Link
                  href={secondaryButton.href}
                  className="w-full inline-flex items-center justify-between gap-3 bg-white text-hero px-4 md:px-8 lg:px-12 py-2 md:py-5 lg:py-6 rounded-xl md:rounded-2xl font-medium text-base md:text-lg lg:text-2xl hover:bg-gray-50 transition-all duration-300 group"
                >
                  <span>{secondaryButton.label}</span>
                  <svg
                    className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
