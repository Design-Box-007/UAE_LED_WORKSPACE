"use client";

import { useState } from "react";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { usePathname } from "next/navigation";

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

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();
  return (
    <nav className="w-full z-20 px-20 absolute top-0 py-4 bg-transparent text-background flex justify-between items-center">
      {/* Logo */}
      <div
        className={`text-lg md:text-3xl font-medium tracking-wide ${
          pathName === "/"
            ? "text-white"
            : pathName === "/about"
            ? "text-[#18245D]"
            : pathName === "/services"
        }`}
      >
        LED Display UAE
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-6 bg-background text-primary px-4 py-2 rounded-full shadow-sm">
        {navLinks.map((link) => (
          <li key={link.title} className="font-semibold text-lg">
            <Link href={link.href} className="px-2 py-1 transition">
              {link.title}
            </Link>
          </li>
        ))}
        <li>
          <button className="bg-primary text-background p-2 rounded-full hover:opacity-90 transition">
            <FaPhone size={16} />
          </button>
        </li>
      </ul>

      {/* Mobile Nav Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-background text-primary p-2 rounded-full"
        >
          <FaPhone size={20} />
        </button>
      </div>

      {/* Optional Mobile Menu Dropdown (for extension) */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-background shadow-md px-6 py-4 md:hidden z-50">
          <ul className="flex flex-col gap-4 text-primary">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link href={link.href} onClick={() => setMenuOpen(false)}>
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
