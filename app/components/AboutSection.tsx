"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profile_pic from "../../public/Images/Dr. Maya Reynolds.png";
import office_image from "../../public/Images/office2.jpeg";

const AboutSection = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const semiCircleRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.classList.add("animate-fadeInUp");
    }
    if (semiCircleRef.current) {
      semiCircleRef.current.classList.add("animate-slideInLeft");
    }
    if (circleRef.current) {
      circleRef.current.classList.add("animate-slideInRight");
    }
  }, []);

  return (
    <div className="w-full h-[130vh] flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-16 py-12 lg:py-0 relative bg-gray-200">
      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            transform: translateX(-50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInRight {
          from {
            transform: translateX(50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>

      {/* Text Section */}
      <div
        ref={textRef}
        className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-12 opacity-0"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          {`Hi, I'm Dr. Maya Reynolds.`}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          {`I offer a calm, supportive space where we can thoughtfully explore what you're experiencing—both emotionally and physically. With care, collaboration, and evidence-based tools, we'll work together to help you feel more grounded, resilient, and supported as you navigate life's challenges.`}
        </p>
      </div>

      {/* Images Section */}
      <div className="w-full lg:w-1/2 relative h-[70vh] lg:h-screen flex justify-center items-center mt-12 lg:mt-0">
        {/* Semicircular Image Container */}
        <div
          ref={semiCircleRef}
          className="relative w-62.5 h-93.75 md:w-87.5 md:h-131.25 lg:w-107.5 lg:h-161.25 opacity-0"
        >
          <div className="absolute inset-0 overflow-hidden rounded-tl-[200px] rounded-tr-[200px] z-10">
            <Image
              src={profile_pic}
              alt="Dr. Maya Reynolds"
              fill
              priority
              sizes="(max-width: 768px) 250px, (max-width: 1024px) 350px, 430px"
              className="object-cover"
            />
          </div>

          {/* Circular Image - Overlapping from right bottom */}
          <div
            ref={circleRef}
            className="absolute w-37.5 h-37.5 md:w-60 md:h-60 lg:w-72.5 lg:h-72.5 rounded-full overflow-hidden z-20 opacity-0"
            style={{
              bottom: "-15%",
              right: "-20%",
            }}
          >
            <Image
              src={office_image}
              alt="Office environment"
              fill
              sizes="(max-width: 768px) 150px, (max-width: 1024px) 200px, 250px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
