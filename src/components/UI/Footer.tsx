const Footer = () => {
  return (
    <footer className="bg-gray-50 px-4 md:px-8 lg:px-20 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1320px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="w-8 h-8 bg-[#0f123f] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 9.739s9-4.189 9-9.739V7l-10-5z"/>
                </svg>
              </div>
              <span className="text-xl md:text-2xl font-semibold text-[#0f123f]">LED Display UAE</span>
            </div>
            
            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              LED display for events | digital kiosk supplier Dubai | 360 LED screen provider | entrance LED display rentals | LED wall installation services
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6">Product</h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0f123f] transition-colors duration-300 text-sm md:text-base">
                  Entrance Arch LEDs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0f123f] transition-colors duration-300 text-sm md:text-base">
                  360° LED Screens
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0f123f] transition-colors duration-300 text-sm md:text-base">
                  Digital Kiosks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0f123f] transition-colors duration-300 text-sm md:text-base">
                  Corporate LED Walls
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0f123f] transition-colors duration-300 text-sm md:text-base">
                  Custom Displays
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6">Company</h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0f123f] transition-colors duration-300 text-sm md:text-base">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0f123f] transition-colors duration-300 text-sm md:text-base">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0f123f] transition-colors duration-300 text-sm md:text-base">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0f123f] transition-colors duration-300 text-sm md:text-base">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6">Resources</h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0f123f] transition-colors duration-300 text-sm md:text-base">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0f123f] transition-colors duration-300 text-sm md:text-base">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0f123f] transition-colors duration-300 text-sm md:text-base">
                  Installation Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0f123f] transition-colors duration-300 text-sm md:text-base">
                  Partner with Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            {/* Copyright */}
            <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
              © 2025 LED Display UAE. All Rights Reserved.
            </p>
            
            {/* Legal Links */}
            <div className="flex items-center gap-6 md:gap-8">
              <a href="#" className="text-gray-600 hover:text-[#0f123f] transition-colors duration-300 text-sm md:text-base">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-[#0f123f] transition-colors duration-300 text-sm md:text-base">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer