"use client";
import Image from "next/image";
import React from "react";

const SpecialtiesSection = () => {
  const specialitiesItems = [
    {
      id: 1,
      title: "Anxiety, Panic & Stress",
      description:
        "Help for adults who feel overwhelmed by constant worry, physical tension, or overthinking, even while functioning well outwardly.",
      image:
        "https://careersinpsychology.org/wp-content/uploads/2017/05/Cognitive-Behaviorl-Therapist-2.jpg",
    },
    {
      id: 2,
      title: "Trauma & EMDR Therapy",
      description:
        "Carefully paced trauma work using EMDR and body-based approaches to support safety, regulation, and long-term healing.",
      image:
        "https://summitcounseling.org/wp-content/uploads/2023/12/GettyImages-1506914077.jpg",
    },
    {
      id: 3,
      title: "Burnout, Perfectionism & High Achievers",
      description:
        "Support for driven professionals feeling exhausted, pressured, or disconnected after years of sustained stress.",
      image:
        "https://images.squarespace-cdn.com/content/v1/5c2c2a00a2772ceb0874a925/1642646081721-3JI176CY6GFCEU6J14T2/GettyImages-1216869584.jpg",
    },
  ];

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-12 md:py-16">
      {/* Header */}
      <div className="text-center mb-10 md:mb-12">
        <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          My Specialities
        </h1>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-6 lg:gap-8">
        {specialitiesItems.map((item) => (
          <div
            key={item.id}
            className="
        flex flex-col
        bg-[#e5d4ef]
        p-6 md:p-6 lg:p-8
        border border-gray-800
        w-full md:w-1/3
        min-h-150 lg:min-h-120
        text-left
      "
          >
            {/* Title */}
            <h1 className="text-xl md:text-xl text-gray-800 mb-4">
              {item.title}
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-sm leading-relaxed">
              {item.description}
            </p>

            {/* Circular Image */}
            <div className=" flex justify-center mt-10">
              <div className="w-76 h-76 md:w-75 md:h-75 lg:w-78 lg:h-78 rounded-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialtiesSection;
