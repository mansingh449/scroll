"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SlideContainerType = {
  step: number;
  mainTitle: string;
  title: string;
  description: string;
  check1: string;
  check2: string;
  isActive?: boolean;
  onClick?: () => void;
};

const SlideContainer = ({
  step,
  mainTitle,
  title,
  description,
  check1,
  check2,
  isActive = false,
  onClick,
}: SlideContainerType) => (
  <div
    className={`flex flex-row w-full cursor-pointer ${isActive ? "p-[none]" : ""}`}
    onClick={onClick}
  >
    <div className="bg-[#f2edfc] h-[40px] w-[40px] flex justify-center items-center rounded-full">
      <h1 className="text-[#7B49E1] font-bold text-xl">{step}</h1>
    </div>
    <div className=" ml-6 ">
      <div className="space-y-1">
        <h1 className="text-[#0A0A0A] leading-7 font-medium text-xl">{title}</h1>
        <h2 className="text-[#737373] font-normal leading-6 text-base">{description}</h2>
      </div>

      {[check1, check2].map((text, i) => (
        <div key={i} className="flex flex-row mt-[16px]">
          <div className="bg-[#7B49E1] h-5 w-5 rounded-full flex justify-center items-center">
            <img
              src="/check-icon.svg"
              alt="check-icon"
              className="h-[14px] w-[14px]"
            />
          </div>
          <h2 className="text-[#0A0A0A] ml-3 text-base leading-6">{text}</h2>
        </div>
      ))}
    </div>
  </div>
);

const images = ["/Step1.svg", "/Step2.svg", "/Step3.svg"];

export default function StepScroll() {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const totalSteps = 3;
  // const stepHeight = window.innerHeight; // or any fixed height
  // const totalScrollLength = (totalSteps - 1) * stepHeight; // 2 * 100vh = 200vh

  useLayoutEffect(() => {
    if (!sectionRef.current || window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top+=10 top",
        end: () => `+=${(totalSteps - 1) * (window.innerHeight + 150)}`,
        pin: true,
        scrub: true,
        snap: {
          snapTo: 1 / (totalSteps - 1),
          duration: 0.001,
          delay: 0,
          ease: "none",
        },
        onUpdate: (self) => {
          // Round to nearest step value
          const snapped = Math.round(self.progress * (totalSteps - 1)) / (totalSteps - 1);
          console.log("snapped >> ", snapped)
          setProgress(snapped);
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const progressHeight = `${progress * 350}px`;
  const imageProgress = progress;

  console.log("___progressHeight >> ", progressHeight)

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-7xl w-full space-y-8 md:space-y-16 px-4 sm:px-6 lg:px-8 py-8 sm:py-12  mx-auto flex flex-col items-start">
        <div className="space-y-4 max-w-[646px]">
          <div >
            <span className="bg-[linear-gradient(25deg,#7B49E1_11.39%,#C2ABF1_98.74%)] inline-block h-6 text-white text-xs leading-4 font-medium px-4 py-1 rounded-full">
              Account Opening
            </span>
          </div>
          <h2 className="text-[32px] leading-10 sm:text-[56px] sm:leading-16 max-w-5xl font-medium text-[#171717]">
            Start in 3 Simple Steps
          </h2>
          <p className="text-sm sm:text-lg  font-normal text-[#737373]">
            Gain private equity exposure in minutes — through CFDs linked to the value of actual private companies, without delays or complex fund structures.
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full items-start gap-8">
          {/* 👉 Image on Mobile */}

          {/* 📱 Static Image above each step on Mobile */}
          <div className="md:hidden w-full mb-6 relative h-auto flex flex-col gap-12">
            {/* Step 1 */}
            <div>
              <img
                src="/Step1.svg"
                alt="Step - 1"
                className="w-full h-[300px] md:h-[600px] object-contain mb-4"
              />
              <SlideContainer
                step={1}
                mainTitle="Step 1"
                title="Create Your Account"
                description="Sign up in under 2 minutes."
                check1="Quick KYC process"
                check2="No paperwork needed"
                isActive={activeStep === 0}
                onClick={() => {
                  setActiveStep(0);
                  setProgress(0 / 3);
                }}
              />
            </div>

            {/* Step 2 */}
            <div>
              <img
                src="/Step2.svg"
                alt="Step - 2"
                className="w-full h-[300px] md:h-[600px] object-contain mb-4"
              />
              <SlideContainer
                step={2}
                mainTitle="Step 2"
                title="Discover"
                description="Browse offering"
                check1="Discover"
                check2="AI-Powered Screening"
                isActive={activeStep === 1}
                onClick={() => {
                  setActiveStep(1);
                  setProgress(1 / 3);
                }}
              />
            </div>

            {/* Step 3 */}
            <div>
              <img
                src="/Step3.svg"
                alt="Step - 3"
                className="w-full h-[600px] object-contain mb-4"
              />
              <SlideContainer
                step={3}
                mainTitle="Step 3"
                title="Invest & Manage"
                description="Investment in just a few clicks."
                check1="Instant portfolio updates"
                check2="Access secondary trading"
                isActive={activeStep === 2}
                onClick={() => {
                  setActiveStep(2);
                  setProgress(2 / 3);
                }}
              />
            </div>
          </div>

          <div className="hidden md:flex flex-col pt-[12px] mr-[24px] md:mr-[24px] mb-6 md:mb-0 items-center md:items-start">
            <div
              className="w-1 bg-gradient-to-b from-[#7B49E100] to-[#7B49E1] relative transition-[height] duration-500 ease-in-out"
              style={{ height: progressHeight }}
            >
              <div className="h-[12px] w-[12px] rounded-full absolute bottom-[-10px] left-1/2 -translate-x-1/2 border border-[#7B49E1] p-[2px] flex items-center justify-center box-content">
                <div className="bg-[#956DE7] w-full h-full rounded-full" />
              </div>
            </div>
          </div>

          {/* Step Texts */}
          <div className="hidden md:flex flex-col w-full items-start gap-8">
            <SlideContainer
              step={1}
              mainTitle="Step 1"
              title="Create Your Account"
              description="Sign up in under 2 minutes."
              check1="Quick KYC process"
              check2="No paperwork needed"
              isActive={activeStep === 0}
              onClick={() => {
                setActiveStep(0);
                setProgress(0 / 3);
              }}
            />
            <SlideContainer
              step={2}
              mainTitle="Step 2"
              title="Discover"
              description="Browse curated private market deals."
              check1="Verified listings"
              check2="Transparent pricing"
              isActive={activeStep === 1}
              onClick={() => {
                setActiveStep(1);
                setProgress(0.5);
              }}
            />
            <SlideContainer
              step={3}
              mainTitle="Step 3"
              title="Invest & Manage"
              description="Seamlessly access and manage your private equity exposure."
              check1="Fund your Account"
              check2="AI-driven news updates"
              isActive={activeStep === 2}
              onClick={() => {
                setActiveStep(2);
                setProgress(1);
              }}
            />
          </div>

          {/* For desktop */}
          <div className="relative h-[400px] md:w-[552px] lg:w-[552px] md:h-[552px] shrink-0 hidden md:flex items-center justify-center overflow-hidden">
            {images.map((src, index) => {
              const stepSize = 1 / (images.length - 1); // Ensure last step aligns properly
              const stepPosition = index * stepSize;
              const maxTranslate = 600; // Height of image container in px

              const translateY = maxTranslate * (stepPosition - imageProgress);

              const isVisible =
                Math.abs(imageProgress - stepPosition) <= stepSize / 1.5;

              return (
                <img
                  key={index}
                  src={src}
                  alt={`Step - ${index + 1}`}
                  className="absolute top-0 left-0 md:w-[552px] md:h-[552px] object-contain transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
                  style={{
                    transform: `translateY(${translateY}px)`,
                    opacity: isVisible ? 1 : 0,
                    zIndex: isVisible ? 1 : 0,
                  }}
                />
              );
            })}
          </div>

        </div>
      </div>
    </section >
  );
}