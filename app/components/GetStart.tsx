"use client";
import React from "react";

const GetStart = () => {
  return (
    <div className="w-full min-h-[60vh] bg-[#5d81a2] text-white flex items-center justify-center px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 md:gap-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Get started today.
        </h1>
        <p className="text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed">
          Ready to take the first step towards a happier, healthier you? Contact
          me to book your first session. I look forward to starting this
          therapeutic journey with you.
        </p>
        <button className="px-8 py-3 md:px-10 md:py-3 border-2 border-white hover:bg-white hover:text-[#5d81a2] transition-all duration-500 font-medium mt-2 md:mt-4 cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStart;