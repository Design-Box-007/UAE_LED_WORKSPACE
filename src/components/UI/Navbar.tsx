"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPhone } from "react-icons/fa";

interface NavLink {
  title: string;
  href: string;
}

const navLinks: NavLink[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Projects", href: "/projects" },
  { title: "Blog", href: "/blog" },
  { title: "FAQ", href: "/faq" },
];

// ✅ function to decide color based on route
const getActiveColor = (pathName: string) => {
  if (pathName === "/") return "white";
  if (pathName.startsWith("/about")) return "#18245D";
  if (pathName.startsWith("/services")) return "white";
  if (pathName.startsWith("/projects")) return "white";
  if (pathName.startsWith("/blog")) return "#18245D";
  if (pathName.startsWith("/faq")) return "18245D";
  if (pathName.startsWith("/contact")) return "white";
  return "black";
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();
  const activeColor = getActiveColor(pathName); // shared color

  return (
    <nav className="w-full z-20 px-6 md:px-20 absolute top-0 py-4 bg-transparent flex justify-between items-center">
      {/* Logo */}
      <div
        className="text-lg md:text-3xl font-medium tracking-wide"
        style={{ color: activeColor }}
      >
        LED Display UAE
      </div>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex items-center gap-6 bg-background px-4 py-2 rounded-full shadow-sm">
        {navLinks.map((link) => (
          <li key={link.title} className="font-semibold text-lg">
            <Link
              href={link.href}
              className="px-2 py-1 transition text-primary"
            >
              {link.title}
            </Link>
          </li>
        ))}
        <li>
          <Link href={""}>
            <button className="bg-primary text-background p-2 rounded-full hover:opacity-90 transition">
              <FaPhone size={16} />
            </button>
          </Link>
        </li>
      </ul>

      {/* Mobile / Tablet Hamburger Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative w-8 h-6 flex flex-col justify-between items-center"
        >
          <span
            className={`h-1 w-8 rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
            style={{ backgroundColor: activeColor }}
          />
          <span
            className={`h-1 w-8 rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
            style={{ backgroundColor: activeColor }}
          />
          <span
            className={`h-1 w-8 rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
            style={{ backgroundColor: activeColor }}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-background shadow-md px-6 py-4 lg:hidden z-50 animate-slide-down">
          <ul className="flex flex-col gap-4 text-primary">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 font-semibold text-primary"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
