'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import { useRouter } from "next/navigation";
import { useScroll } from "../../context/ScrollContext";
import { motion } from "framer-motion";
export default function AffiliatePartner() {
  const router = useRouter();

  const [open, setOpen] = useState(1);
  const [progress, setProgress] = useState(0);

  const totalSections = 3;
  const intervalDuration = 50; // ms
  const step = 0.5; // progress increment

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Reset progress and open next accordion
          const next = open < totalSections ? open + 1 : 1;
          setOpen(next);
          return 0;
        }
        return prev + step;
      });
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [open]);

  const handleOpen = (value: any) => {
    setOpen(value);
    setProgress(0);
  };

  const accordionImages: any = {
    1: "/progress-1.svg",
    2: "/progress-2.svg",
    3: "/progress-3.svg",
  };

  const { affiliateRef, shouldScrollToAffiliate, scrollToAffiliate } = useScroll();

  useEffect(() => {
    if (shouldScrollToAffiliate) {
      const timeout = setTimeout(() => {
        scrollToAffiliate();
      }, 100); // wait for page to finish rendering
      return () => clearTimeout(timeout);
    }
  }, [shouldScrollToAffiliate]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 md:space-y-16 relative" ref={affiliateRef}>
      <div className=" space-y-4">
        <div>
          <span className="bg-[linear-gradient(25deg,#7B49E1_11.39%,#C2ABF1_98.74%)] inline-block h-6 text-white text-xs leading-4 font-medium px-4 py-1 rounded-full">
            Affiliate Partner
          </span>
        </div>
        <h2 className="text-[32px] leading-10 sm:text-[56px] sm:leading-16 max-w-5xl font-medium text-[#171717]">
          Share the platform with your network and start earning rewards.
        </h2>

        <p className="text-base sm:text-lg max-w-5xl font-normal text-[#737373]">
          Unlock access to private equity exposure and benefit form our multi-level commission structure.
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-8 items-center justify-between w-full">
        {/* Left Accordion */}
        <div className="w-full max-w-xl sm:max-w-[645px] items-start">
          <Accordion
            open={open === 1}
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="flex flex-col items-start text-xl sm:text-[24px] font-medium leading-8 tracking-normal text-[#171717] border-b border-transparent relative cursor-pointer"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              Invest in Private Equity exposure.
              <AccordionBody className=" text-sm sm:text-[18px] font-normal text-[#737373]">
                Gain exposure to the economic performance of high-growth private companies — without delays tied to matched sales or subscription cycles.
              </AccordionBody>
              <div className="w-full h-[2px] bg-[#E5E5E5] mt-2 relative">
                <motion.div
                  className="h-[2px] bg-[#7B49E1] absolute top-0 left-0"
                  animate={{ width: open === 1 ? `${progress}%` : '0%' }}
                  transition={{ ease: "linear", duration: 0.05 }} // adjust duration for smoothness
                />
              </div>
            </AccordionHeader>
          </Accordion>

          <Accordion open={open === 2} placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="flex flex-col items-start text-xl sm:text-[24px] font-medium leading-8 tracking-normal text-[#171717] border-b border-transparent relative cursor-pointer"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              Flexible exit opportunities.
              <AccordionBody className="text-sm sm:text-[18px] font-normal text-[#737373]">
                Our evolving secondary market aims to unlock flexible exit opportunities for synthetic Private Equity exposure — in a market traditionally known for its illiquidity.
              </AccordionBody>
              <div className="w-full h-[2px] bg-[#E5E5E5] mt-2 relative">
                <motion.div
                  className="h-[2px] bg-[#7B49E1] absolute top-0 left-0"
                  animate={{ width: open === 2 ? `${progress}%` : '0%' }}
                  transition={{ ease: "linear", duration: 0.05 }} // adjust duration for smoothness
                />
              </div>
            </AccordionHeader>
          </Accordion>

          <Accordion open={open === 3} placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="flex flex-col items-start text-xl sm:text-[24px] font-medium leading-8 tracking-normal text-[#171717] border-b border-transparent relative cursor-pointer"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              Regulated & secure.
              <AccordionBody className="text-sm sm:text-[18px] font-normal text-[#737373]">
                Regulated platform with segregated client funds and bank-grade encryption for maximum security.
              </AccordionBody>
              <div className="w-full h-[2px] bg-[#E5E5E5] mt-2 relative">
                <motion.div
                  className="h-[2px] bg-[#7B49E1] absolute top-0 left-0"
                  animate={{ width: open === 3 ? `${progress}%` : '0%' }}
                  transition={{ ease: "linear", duration: 0.05 }} // adjust duration for smoothness
                />
              </div>
            </AccordionHeader>
          </Accordion>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-[500px] flex items-center justify-center">
          <Image
            src={accordionImages[open] || "/PE Platform App & Website/Invest.png"}
            alt="Accordion Related"
            width={515}
            height={350}
            className="object-contain w-full max-w-[515px]" // make image scale nicely
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => router.push('/partnerwithus/apply?step=1')}
          className=" px-[24px] py-[8px] flex items-center justify-center gap-[12px] rounded-[24px] bg-[#7B49E1] opacity-100 cursor-pointer"
        >
          <span className="text-[16px] font-medium text-[#FFFFFF]">
            Apply as Marketing Partner
          </span>
        </button>
      </div>
    </section>
  );
}
