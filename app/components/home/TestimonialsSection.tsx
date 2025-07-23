'use client';
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const listings = [
  { img: "/Technology.webp", title: "Technology", link: "/listings/details/tech/" },
  { img: "/AI.webp", title: "AI", link: "/listings/details/tech/" },
  { img: "/Fintech.webp", title: "Fintech", link: "/listings/details/finance/" },
  { img: "/Web3.webp", title: "Web 3", link: "/listings/details/finance/" },
  { img: "/Healthcare.webp", title: "Healthcare", link: "/listings/details/healthcare/" },
];

export default function FifthSection() {
  const router = useRouter();
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;
  const [visibleSlides, setVisibleSlides] = useState(3);

  const updateVisibleSlides = () => {
    const width = window.innerWidth;
    if (width < 480) setVisibleSlides(1.2);
    else if (width < 768) setVisibleSlides(1.3);
    else setVisibleSlides(3);
  };


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (index: number) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
        }
      }
    ],
    arrows: false,
  };

  const nextSlide = () => {
    // @ts-ignore
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    // @ts-ignore
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, []);
  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide >= totalSlides - visibleSlides;
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 md:space-y-16 relative">
      <div className="space-y-4">
        <div>
          <span className="bg-[linear-gradient(25deg,#7B49E1_11.39%,#C2ABF1_98.74%)] inline-block h-6 text-white text-xs leading-4 font-medium px-4 py-1 rounded-full">
            Investment Category
          </span>
        </div>
        <h2 className="text-[32px] leading-10 sm:text-[56px] sm:leading-16 font-medium text-[#171717]">
          Explore opportunities.
        </h2>
        <p className="text-base sm:text-lg font-normal text-[#737373] max-w-2xl">Discover categories.</p>
      </div>

      <div className="relative">
        <div className="relative">
          <Slider ref={sliderRef} {...settings} className="gap-6">
            {listings.map((item: any, index: any) => (
              <div
                key={item.title}
                className={`flex-shrink-0  bg-white rounded-[24px] border border-[#E5E5E5] shadow-sm flex flex-col p-3 md:p-4 transition hover:shadow-md hover:border-[#7B49E1] invest`}
                onClick={() => router.push(item.link)}
              >
                <div className=" h-32 sm:h-[220px] rounded-[12px] overflow-hidden mb-4 bg-[#FAFAFA] flex items-center justify-center">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={352}
                    height={220}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-base leading-6 sm:text-2xl sm:leading-8 font-medium text-[#171717]">
                  {item.title}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Arrows bottom right */}
        <div className="absolute right-0 mt-3 flex gap-3 pr-1 sm:pr-2">
          <button
            onClick={prevSlide}
            className={`w-10 h-10 rounded-full border border-gray-${isFirstSlide ? "300" : "500"} bg-white text-black hover:bg-gray-50 transition flex items-center justify-center`}
            aria-label="Scroll left"
            disabled={isFirstSlide}
          >
            <ChevronLeft size={20} {...(isFirstSlide && { color: "#d3d7dd" })} />
          </button>
          <button
            onClick={nextSlide}
            className={`w-10 h-10 rounded-full border border-gray-${isLastSlide ? "300" : "500"} bg-white text-black hover:bg-gray-50 transition flex items-center justify-center`}
            aria-label="Scroll right"
            disabled={isLastSlide}
          >
            <ChevronRight size={20} {...(isLastSlide && { color: "#d3d7dd" })} />
          </button>
        </div>

      </div>

      <div className="flex justify-center">
        <button
          onClick={() => router.push('/listings')}
          className="cursor-pointer relative px-[24px] mt-8 md:mt-0 py-[8px] gap-[12px] text-[16px] leading-[24px] font-medium text-[#262626] border border-[#737373] rounded-[24px] overflow-hidden transition-all duration-300 group"
        >
          <span className="absolute bg-[#7B49E1] rounded-full"></span>
          <span className="relative">Explore more</span>
        </button>
      </div>
    </section >
  );
}
