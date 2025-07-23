'use client';
import React, { useState } from "react";

const features = [
  {
    icon: '/home_page/Icon.svg',
    title: "Instant Participation",
    desc: "You gain immediate synthetic exposure via CFD — without delays linked to matched sales or fund subscription cycles.",
  },
  {
    icon: '/home_page/Icon-1.svg',
    title: "Economic Exposure",
    desc: "Your CFD tracks the economic performance of a private company, enabling participation in potential value changes over time without any leverage.",
  },
  {
    icon: '/home_page/Icon-2.svg',
    title: "Segregation of Funds",
    desc: "Your funds are held separately from the operating capital of PE Projects, in accordance with applicable regulations.",
  },
];

export default function InvestmentPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (

    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12  ">
      <div className="rounded-[24px] border-2 border-[#f0f0f0] p-4 md:p-12 space-y-8 sm:space-y-12">
        <div className="space-y-4">
          <div>
            <span className="bg-[linear-gradient(25deg,#7B49E1_11.39%,#C2ABF1_98.74%)] inline-block h-6 text-white text-xs leading-4 font-medium px-4 py-1 rounded-full">
              Investment
            </span>
          </div>
          <h2 className="text-[32px] leading-10 sm:text-[56px] sm:leading-16 font-medium text-[#171717]">
            What Type of Investment<br className="hidden sm:block" />
            Are You Buying?
          </h2>
          <p className="text-base sm:text-lg font-normal text-[#737373] max-w-2xl">
            When you enter into a PE Project, you gain synthetic economic exposure to private market assets — without acquiring legal ownership of the underlying shares.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="rounded-3xl p-5 md:p-6 flex space-y-5 md:space-y-8 flex-col items-start cursor-pointer transition-all duration-200 bg-[#FAFAFA] hover:bg-white border border-[#F5F5F5] hover:border-[#7B49E1] text-gray-900"
              style={{
                boxShadow:
                  hoveredIndex === i
                    ? "0px 0px 16px 0px rgba(123, 73, 225, 0.24)"
                    : "0px 1px 2px 0px rgba(20, 21, 26, 0.05)",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={f.icon} alt={`${f.title} icon`} className="w-10 h-10" />
              <div className="space-y-2">
                <h3 className="text-xl leading-6 sm:text-2xl sm:leading-8 font-medium text-[#0A0A0A]">{f.title}</h3>
                <p className="text-base sm:text-lg font-normal text-[#737373]">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
