"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const professionalBgItems = [
  {
    id: 1,
    title: "Licensed Clinical Psychologist (PsyD)",
    description:
      "Santa Monica, California based licensed clinical psychologist with advanced doctoral training, providing evidence-based therapy for adults experiencing anxiety, trauma, and burnout.",
  },
  {
    id: 2,
    title: "Evidence-Based & Integrative Practitioner",
    description:
      "Trained in CBT, EMDR, mindfulness, and body-oriented approaches, integrating emotional and physiological work to support lasting change and nervous system regulation.",
  },
  {
    id: 3,
    title: "Specialist in Adult Trauma & High-Stress Professionals",
    description:
      "Extensive experience working with adults facing trauma, chronic stress, perfectionism, and professional burnout, including entrepreneurs, creatives, and high-achieving professionals.",
  },
];

const ProfessionalBG = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-12 md:py-16 bg-[#e5d4ef]">
      {/* Header */}
      <div className="text-center mb-10 md:mb-12 lg:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          My Professional Background
        </h1>
      </div>
      {/* Collapsible Items */}
      <div className="max-w-3xl mx-auto">
        <div className="border border-gray-800 flex justify-center items-center text-center"></div>

        {professionalBgItems.map((item) => (
          <div
            key={item.id}
            className=" border-b border-gray-800 overflow-hidden transition-colors duration-200"
          >
            {/* Collapse Header */}
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex justify-between items-center p-4 md:p-6 transition-colors duration-200"
            >
              <h2 className="text-lg md:text-xl lg:text-xl text-gray-800 text-left pr-4">
                {item.title}
              </h2>
              <span className="shrink-0 text-gray-600">
                {openItem === item.id ? (
                  <ChevronUp className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </span>
            </button>

            {/* Collapse Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openItem === item.id ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-6 md:p-8 ml-20">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalBG;
