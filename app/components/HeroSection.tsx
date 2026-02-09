"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profile_pic from "../../public/Images/Dr. Maya Reynolds.png";

const HeroSection = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add animation classes after component mounts
    if (textRef.current && imageRef.current) {
      textRef.current.classList.add("animate-slideInRight");
      imageRef.current.classList.add("animate-slideInLeft");
    }
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .hover-scale {
          transition: transform 0.3s ease;
        }
        
        .hover-scale:hover {
          transform: scale(1.02);
        }
      `}</style>

      <div className="flex flex-col lg:flex-row w-full h-screen relative justify-center lg:justify-between items-center px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-0 text-gray-800 overflow-hidden">
        {/* Image Container */}
        <div
          ref={imageRef}
          className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0 opacity-0"
        >
          <div className="relative w-2xl h-[50vh] md:w-7xl md:h-screen">
            <Image
              className="
    h-[90%] w-150 rounded-t-[50%]
    absolute bottom-0 z-10 hover-scale
    left-1/2 -translate-x-1/2
    lg:left-0 lg:translate-x-0 
  "
              src={profile_pic}
              alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
            />
          </div>
        </div>

        {/* Text Content Container */}
        <div
          ref={textRef}
          className="
    w-full lg:w-1/2
    flex justify-center lg:justify-start
    px-4 md:px-8 lg:px-12
  "
        >
          <div className="flex flex-col items-center text-center">
            <h1 className="max-w-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Dr. Maya Reynolds
            </h1>

            <p className="max-w-lg text-lg md:text-xl text-gray-600 mb-8">
              Licensed Clinical Psychologist | Fictional Therapist
            </p>

            <button className="px-8 py-3 md:px-10 md:py-4 border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-500 font-medium cursor-pointer hover:shadow-lg transform ">
              Get Started &rarr;

            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
