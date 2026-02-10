"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQs = () => {
  const faqsContent = [
    {
      id: 1,
      ques: "What can I expect in therapy?",
      ans: "Therapy is a collaborative, supportive space where you can explore challenges, build insight, and learn practical tools to feel more regulated and grounded.",
    },
    {
      id: 2,
      ques: "How do I know if therapy is right for me?",
      ans: "If you feel overwhelmed, stuck, or affected by stress or past experiences, therapy can help you gain clarity and emotional relief.",
    },
    {
      id: 3,
      ques: "How long does therapy take?",
      ans: "The length varies based on your goals and needs—some clients benefit from short-term support, while others choose deeper, ongoing work.",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 md:px-8 lg:px-16 py-12 lg:py-0">
      {/* Image Section - More prominent */}
      <div className="w-full lg:w-1/2 relative flex justify-center items-center">
        <div className="relative md:w-107.5 md:h-162.5 w-50.5 h-75.75 overflow-hidden rounded-tl-[200px] rounded-tr-[200px]">
          <Image
            src="https://wallpaperbat.com/img/8753679-flower-phone-wallpaper.jpg"
            alt="Mindfulness meditation image"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* FAQs Section */}
      <div className="w-full lg:w-1/2 lg:pl-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 lg:mb-12 text-center lg:text-left">
          FAQs
        </h1>

        <div className=" max-w-2xl mx-auto lg:mx-0">
          {faqsContent.map((faq) => (
            <div
              key={faq.id}
              className="border-t border-b border-gray-800 overflow-hidden"
            >
              {/* FAQ Header */}
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center p-6 bg-white transition-colors duration-200"
                aria-expanded={openFaq === faq.id}
              >
                <span className="shrink-0 text-gray-600">
                  {openFaq === faq.id ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-left ml-5">
                  {faq.ques}
                </h3>
              </button>

              {/* FAQ Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === faq.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-6 pt-0">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {faq.ans}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
