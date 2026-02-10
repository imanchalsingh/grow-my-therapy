"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import office1 from "../../public/Images/office1.jpeg";

const MainSection = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.classList.add("animate-fadeInUp");
    }
    if (imageRef.current) {
      imageRef.current.classList.add("animate-fadeInUp");
    }
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row bg-[#e5d4ef] overflow-hidden">
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
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      {/* Text Section */}
      <div 
        ref={textRef}
        className="w-full lg:w-1/2 flex justify-center text-center items-center flex-col px-6 py-12 lg:py-0 lg:px-12 opacity-0"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold mb-6 lg:mb-8">
          Live a more balanced, fulfilling life.
        </h1>
        <div className="space-y-4 text-base md:text-lg lg:text-xl max-w-2xl">
          <p>
            {`Life can feel overwhelming when anxiety, stress, or past experiences quietly shape your days especially while managing work, relationships, and high expectations.`}
          </p>
          <p>
            {`You don’t have to navigate it alone. Together, we’ll create space to slow down, feel more grounded, and build a way of living that feels more sustainable and aligned with who you are.`}
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div 
        ref={imageRef}
        className="w-full lg:w-1/2 relative lg:ml-10 mt-8 lg:mt-0 min-h-[50vh] lg:min-h-screen opacity-0"
      >
        <Image
          className="w-full h-full object-cover absolute lg:right-0"
          src={office1}
          alt="Office image"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
};

export default MainSection;