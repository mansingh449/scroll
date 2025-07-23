"use client";
import React from "react";
import RotateImage from "./components/home/HeroSection";
import WhyChoosePlatform from "./components/home/WhyChoosePlatform";
import ExploreListings from "./components/home/ExploreListings";
import SellSharesSection from "./components/home/SellSharesSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import NewsletterSection from "./components/home/NewsletterSection";
import InvestNow from "./components/layout/InvestNow";
import HeroSection from "./components/home/Hero"
import { motion } from 'framer-motion';
import Image from "next/image";
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: any) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4 },
  }),
};

const logos = [
  { name: 'X1', src: 'infinity_logos/xAI.svg', url: 'https://x1.com' },
  { name: 'Precision', src: 'infinity_logos/precision.svg', url: 'https://www.precisionit.co.in/' },
  { name: 'Synchron', src: 'infinity_logos/synchron.svg', url: 'https://synchron.com/' },
  { name: 'Kraken', src: 'infinity_logos/Icon 8.svg', url: 'https://www.kraken.com/' },
  { name: 'Ripple', src: 'infinity_logos/Ripple.svg', url: 'https://ripple.com' },
  { name: 'Scale', src: 'infinity_logos/scale AI.svg', url: 'https://scale.com' },
  { name: 'Perplexity', src: 'infinity_logos/perplexity.svg', url: 'https://perplexity.ai' },
  { name: 'Anthropic', src: 'infinity_logos/anthropic.svg', url: 'https://www.anthropic.com/' },
  { name: 'Headspace', src: 'infinity_logos/Headspace.svg', url: 'https://www.headspace.com/' },
  { name: 'Whoop', src: 'infinity_logos/Whoop.svg', url: 'https://www.whoop.com/in/en/?srsltid=AfmBOoqh1ITqoSkHxZ47ir9xORa3JyJQ7AnC6dIZM2c7KaRWC1lw5ILW' },
  { name: 'Rippling', src: 'infinity_logos/Icon 14.svg', url: 'https://www.rippling.com/' },
  { name: 'Airtable', src: 'infinity_logos/Icon 16.svg', url: 'https://www.airtable.com/' },
  { name: 'Brex', src: 'infinity_logos/Ripple.svg', url: 'https://www.brex.com/' },
  { name: 'Discord', src: 'infinity_logos/Icon 10.svg', url: 'https://discord.com/' },
  { name: 'Gopuff', src: 'infinity_logos/Icon 9.svg', url: 'https://perplexity.ai' },
  { name: 'Shein', src: 'infinity_logos/Icon 1.svg', url: 'https://www.sheinindia.in/' },
  { name: 'Celonis', src: 'infinity_logos/Icon 12.svg', url: 'https://www.celonis.com/' },
  { name: 'Databricks', src: 'infinity_logos/Icon 11.svg', url: 'https://anthropic.com' },
];



export default function HomePage() {
  return (
    <div className="flex flex-col overflow-x-hidden bg-white">
      <HeroSection />
      <div className="bg-white px-4 md:px-16 py-8 md:py-10 block md:hidden">
        <p className="text-center text-[#0A0A0A] mb-8 text-sm md:text-base leading-[28px] italic" style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
          “Your supermarket for growth in private markets.”
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-4    max-w-6xl mx-auto">
          {logos.map((logo, idx) => {
            return (
              <motion.a
                key={logo.name}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                custom={idx}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="relative flex items-center justify-center h-9 hover:scale-105 transition-transform"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={36}
                  className="object-contain"
                />

              </motion.a>
            );
          })}
        </div>
      </div>
      <div className="hidden md:block pt-10">
        <p className="text-center text-[#0A0A0A] leading-[28px] italic text-sm md:text-base " style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
          “Your supermarket for growth in private markets.”
        </p>
        <RotateImage />
      </div>
      <div className="relative block md:hidden rounded-xl py-8 px-4 sm:px-6  overflow-hidden">
        {/* Video Background */}
        <video
          src="https://storage.pe-projects.com/public/video/PeProjectsDashbaord.mp4" // Replace with actual path
          className="w-full h-full object-cover rounded-lg"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="bg-gradient-to-t absolute bottom-8 z-50 h-13 w-full from-white to-white/0"></div>
      </div>
      <section className="!bg-white">
        <WhyChoosePlatform />

        <div className="bg-white">
          {" "}
          {/* <ExploreListings /> */}
        </div>
        <SellSharesSection />
        <div className="bg-white">
          {" "}
          <TestimonialsSection />
        </div>
        <NewsletterSection />
        <InvestNow />

      </section>
    </div>
  );
}
