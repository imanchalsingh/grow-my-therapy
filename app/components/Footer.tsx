"use client";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      {/* Main Footer Content */}
      <div className="bg-[#edfae3] w-full py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            {/* Contact Information */}
            <div className="w-full lg:w-auto">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Dr. Maya Reynolds
              </h1>
              <div className="space-y-1 text-gray-600">
                <p>123th Street 45 W</p>
                <p>Santa Monica</p>
                <p>CA 90401</p>
              </div>
            </div>

            {/* Hours and Links */}
            <div className="w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row justify-start lg:justify-between gap-8 md:gap-20">
                {/* Hours Section */}
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Hours
                  </h2>
                  <div className="space-y-1 text-gray-600">
                    <p>Monday - Friday</p>
                    <p>10am - 6pm</p>
                  </div>
                </div>

                {/* Find Section */}
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2 ">
                    Find
                  </h2>
                  <div className="space-y-1 text-gray-600">
                    <a
                      href="#contact"
                      className="hover:text-gray-900 transition-colors duration-200 cursor-pointer font-semibold ml-2 underline"
                    >
                      Contact
                    </a>
                    <a
                      href="#blog"
                      className="block hover:text-gray-900 transition-colors duration-200 cursor-pointer font-semibold ml-2 underline"
                    >
                      Blog
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#e5d4ef] w-full py-6 px-4 md:px-8 lg:px-16 h-50">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4 text-center items-center md:text-center">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center  gap-4 text-sm text-gray-700 md:text-center">
              <a
                href="#privacy"
                className="hover:text-gray-900 transition-colors duration-200"
              >
                Privacy & Cookies Policy
              </a>
              <span className="hidden md:inline">|</span>
              <a
                href="#"
                className="hover:text-gray-900 transition-colors duration-200 "
              >
                Good Faith Estimate
              </a>
              <span className="hidden md:inline">|</span>
              <a
                href="#terms"
                className="hover:text-gray-900 transition-colors duration-200"
              >
                Website Terms & Conditions
              </a>
              <span className="hidden md:inline">|</span>
              <a
                href="#disclaimer"
                className="hover:text-gray-900 transition-colors duration-200"
              >
                Disclaimer
              </a>
            </div>

            {/* Credits */}
            <p className="text-sm text-gray-600">
              Website Template Credits:
              <a className="cursor-pointer font-bold ml-2 underline" href="#">
                Go bloom Creative
              </a>
            </p>

            {/* Copyright */}
            <p className="text-sm text-gray-600 mt-20">
              All Rights Reserved © {currentYear} Grow my therapy, LLC.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
