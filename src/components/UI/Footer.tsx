"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-200 p-10">
      <div className="mx-auto relative flex flex-col gap-3">
        {/* 🔹 Social Icons - Top Right */}
        <div className="absolute right-0 top-0 flex items-center gap-4 md:gap-5">
          <a
            href="#"
            aria-label="Facebook"
            className="text-gray-600 hover:text-[#0f123f] transition-all duration-300 text-lg"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-gray-600 hover:text-[#0f123f] transition-all duration-300 text-lg"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-[#0f123f] transition-all duration-300 text-lg"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="text-gray-600 hover:text-[#0f123f] transition-all duration-300 text-lg"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-gray-600 hover:text-[#0f123f] transition-all duration-300 text-lg"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16 mt-10 md:mt-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="w-8 h-8 bg-[#0f123f] rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 9.739s9-4.189 9-9.739V7l-10-5z" />
                </svg>
              </div>
              <span className="text-xl md:text-2xl font-semibold text-[#0f123f]">
                LED Display UAE
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              LED display for events | digital kiosk supplier Dubai | 360 LED
              screen provider | entrance LED display rentals | LED wall
              installation services
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
              © 2025 LED Display UAE. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
