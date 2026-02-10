"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const TherapySection = () => {
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
    <div className="w-full min-h-screen flex flex-col lg:flex-row bg-[#e5d4ef] overflow-hidden text-gray-800">
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

      {/* Image Section */}
      <div
        ref={imageRef}
        className="w-full lg:w-1/2 relative mt-8 lg:mt-0 min-h-[50vh] lg:min-h-screen opacity-0 order-2 lg:order-1"
      >
        <Image
          className="w-full h-full object-cover absolute"
          src="https://images.squarespace-cdn.com/content/v1/5652f717e4b0070eb05c2f63/8d3bae5c-a9da-4f9d-a9aa-b73e71c975ff/Ball_Squeeze_Palm_Up.jpg?format=1000w"
          alt="Therapy session image"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Text Section */}
      <div
        ref={textRef}
        className="w-full lg:w-1/2 flex justify-center items-center flex-col lg:py-0 lg:px-12 opacity-0 order-1 lg:order-2"
      >
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 lg:mb-10 text-gray-800">
            {` You don't have to carry everything on your own.`}
          </h1>

          <div className="space-y-6 text-base md:text-lg text-gray-700">
            <p className="font-medium">
              If you find yourself experiencing any of the following, support
              can help:
            </p>

            <ul className="space-y-4 pl-5">
              <li className="flex items-start">
                <span className="mr-3 text-lg">•</span>
                <span>
                  Constant worry, tension, or feeling emotionally on edge
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-lg">•</span>
                <span>Overthinking that leaves you drained or stuck</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-lg">•</span>
                <span>
                  Difficulty relaxing, sleeping, or feeling safe in your body
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-lg">•</span>
                <span>
                  Burnout from prolonged stress or high internal pressure
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-lg">•</span>
                <span>
                  Lingering effects of past experiences impacting your
                  confidence or relationships
                </span>
              </li>
            </ul>

            <p className="pt-4 border-t border-gray-300 mt-6">
              {` With care, compassion, and practical tools, we'll work together to
              help you feel more grounded, regulated, and connected to yourself
              again.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapySection;
