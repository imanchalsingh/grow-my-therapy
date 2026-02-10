"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <>
      <nav
        className={`flex bg-white h-14 w-full fixed top-0 left-0 z-50 justify-between items-center px-4 md:px-10 transition-all duration-300 ${
          isScrolled ? "shadow-sm" : ""
        }`}
      >
        {/* Left side - Hamburger Menu for mobile */}
        <div className=" flex items-center justify-between flex-row">
          {/* Hamburger Menu Button for mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-[#e0e7f5] transition-all duration-200 active:scale-95"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X
                size={28}
                className="text-gray-800 transition-transform duration-300 rotate-180"
              />
            ) : (
              <Menu
                size={28}
                className="text-gray-800 transition-transform duration-300"
              />
            )}
          </button>

          {/* Logo */}
          {/* Logo */}
          <div
            className="
    font-bold transition-all duration-300 ease-out
    absolute right-4 top-1/2 -translate-y-1/2
    md:static md:translate-y-0
  "
          >
            <h1 className="text-gray-800 text-2xl md:text-3xl whitespace-nowrap">
              Fictional Therapy
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-gray-900 px-4 py-2 transition-all duration-200 font-medium relative group overflow-hidden"
            >
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </div>

        {/* Mobile Navigation Menu - Full screen sliding animation */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-[#EDF2FA] md:hidden z-40 transform transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "translate-z-0 opacity-100 visible"
              : "-translate-z-full opacity-0 invisible"
          }`}
          style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between h-14 px-4 border-b border-gray-200">
            <button
              onClick={closeMenu}
              className="p-2 rounded-lg hover:bg-[#e0e7f5] transition-all duration-200"
              aria-label="Close menu"
            >
              <X size={28} className="text-gray-800" />
            </button>
          </div>

          {/* Mobile Navigation Items */}
          <div className="flex flex-col py-8 px-6">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 px-4 py-4 rounded-lg hover:bg-[#e0e7f5] transition-all duration-300 font-medium text-xl border-b border-gray-100 last:border-b-0"
                style={{
                  animationDelay: `${index * 100}ms`,
                  transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: isMenuOpen ? 1 : 0,
                  transition: `transform 0.5s ease-out ${index * 100}ms, opacity 0.5s ease-out ${index * 100}ms`,
                }}
                onClick={closeMenu}
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span>{item.label}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Optional: Add a footer or additional info in mobile menu */}
          <div className="absolute bottom-0 left-0 w-full p-6 border-t border-gray-200">
            <div className="text-center text-gray-600 text-sm">
              <p>© {new Date().getFullYear()} Dr. Maya</p>
            </div>
          </div>
        </div>

        {/* Optional: Add a subtle backdrop when menu is open */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-white bg-opacity-10 md:hidden z-30 transition-opacity duration-500"
            onClick={closeMenu}
            style={{ animation: "fadeIn 0.5s ease-out" }}
          />
        )}
      </nav>

      {/* Add padding to prevent content from being hidden under fixed navbar */}
      <div className="h-14"></div>

      {/* Add CSS animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .mobile-menu-item {
          animation: slideIn 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;
