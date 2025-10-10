"use client";

import React from "react";
import Link from "next/link";

// CTA

// 1. Types for Data Structure
interface CTAButton {
  label: string;
  href: string;
}

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: CTAButton;
  secondaryButton?: CTAButton;
  className?: string;
}

// 2. Reusable SVG Icon
const ArrowRightIcon: React.FC<{ sizeClass?: string }> = ({
  sizeClass = "w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6",
}) => (
  <svg
    className={`${sizeClass} group-hover:translate-x-1 transition-transform duration-300`}
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
);

// 3. Extracted Button Link Component
interface ButtonLinkProps {
  buttonData: CTAButton;
  isSecondary?: boolean;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  buttonData,
  isSecondary = false,
}) => (
  <div className={isSecondary ? "flex-1" : ""}>
    <Link
      href={buttonData.href}
      className="w-full inline-flex items-center justify-between gap-3 bg-white text-hero  md:p-4 p-3 rounded-xl md:rounded-2xl font-medium text-base md:text-lg lg:text-2xl hover:bg-gray-50 transition-all duration-300 group"
    >
      <span>{buttonData.label}</span>
      <ArrowRightIcon />
    </Link>
  </div>
);

// 4. Main Component
const CTA: React.FC<CTASectionProps> = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  className,
}) => {
  return (
    <section className={`relative w-full py-10 bg-white ${className}`}>
      <div className="mx-auto">
        {/* CTA Card */}
        <div
          className="rounded-2xl md:rounded-3xl p-6 md:p-10"
          style={{
            background: "linear-gradient(180deg, #1F2964 0%, #3F53CA 100%)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 lg:gap-12 items-center text-center lg:text-left">
            {/* Left Column: Main Heading */}
            <div>
              <h2 className="font-playfair text-xl md:text-3xl lg:text-4xl font-medium text-white leading-tight">
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
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-10 justify-center">
            <ButtonLink buttonData={primaryButton} />

            {secondaryButton && (
              <ButtonLink buttonData={secondaryButton} isSecondary={true} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
