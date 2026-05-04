"use client";

import { Mail, Menu, X } from "lucide-react";
import { useState } from "react";

export default function PortfolioHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
        <div className="flex items-center justify-between">
          {/* Left group - Contact badge */}
          <div className="flex items-center gap-3">
            {/* Circle badge with mail icon */}
            <a
              href="mailto:coolieobowley95@gmail.com"
              className="w-10 h-10 rounded-full border border-[#E0E7FF] bg-transparent flex items-center justify-center cursor-pointer hover:border-[#6366F1] hover:bg-[#EEF2FF] transition-all duration-200"
            >
              <Mail size={18} className="text-[#6366F1]" strokeWidth={2} />
            </a>

            {/* Email address - hidden on very small screens */}
            <a
              href="mailto:coolieobowley95@gmail.com"
              className="hidden sm:block text-[#1F2937] font-semibold text-[15px] hover:text-[#6366F1] transition-colors cursor-pointer"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              coolieobowley95@gmail.com
            </a>
          </div>

          {/* Right group - Navigation items (desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-[#1F2937] font-semibold text-[15px] hover:text-[#6366F1] transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Hamburger menu (mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors duration-150 rounded-md"
          >
            {isMenuOpen ? (
              <X size={24} className="text-[#1F2937]" strokeWidth={2} />
            ) : (
              <Menu size={24} className="text-[#1F2937]" strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-[#1F2937] font-semibold text-[15px] hover:text-[#6366F1] transition-colors cursor-pointer"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
