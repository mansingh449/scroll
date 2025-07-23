import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const knowledge = [
  {
    img: "/image_30.webp",
    badge: { text: "Video Tutorial", color: "bg-[#EFF6FF] text-[#1447E6]" },
    title: "Trade Private Equity Exposure",
    desc: "Learn how private equity exposure can become tradable — even in traditionally illiquid markets.",
    meta: { time: "12 mins", rating: 4.7, count: 312 },
  },
  {
    img: "/image_29.webp",
    badge: { text: "Article", color: "bg-[#F0FDF4] text-[#008236]" },
    title: "Private Equity: A Historical Perspective",
    desc: "Trace the evolution of private equity — from its origins to its role in today’s global investment landscape.",
    meta: { time: "8 min read", rating: 4.9, count: 428 },
  },
  {
    img: "/image_32.webp",
    badge: { text: "Interactive Tutorial", color: "bg-[#F5F5F5] text-[#404040]" },
    title: "How to Gain Access to Unicorn Success",
    desc: "Discover how you can gain access to high-growth private companies exposure before they go public — and what makes it possible.",
    meta: { time: "15 mins", rating: 4.8, count: 276 },
  },
  {
    img: "/image_32.webp",
    badge: { text: "Interactive Tutorial", color: "bg-[#F5F5F5] text-[#404040]" },
    title: "How to Gain Access to Unicorn Success",
    desc: "Discover how you can gain access to high-growth private companies exposure before they go public — and what makes it possible.",
    meta: { time: "15 mins", rating: 4.8, count: 276 },
  },
];

const courses = [
  {
    level: "Beginner",
    color: "text-[#008236] bg-[#F0FDF4]",
    title: "Private Equity Fundamentals",
    description:
      "Master the basics of investing in Private Equity and understand how PE Project is work.",
    duration: "5 hour",
    modules: "5 Module",
    image: "/course-thumb.jpg",
  },
  {
    level: "Intermediate",
    color: "text-[#1447E6] bg-[#EFF6FF]",
    title: "Private Equity Markets",
    description:
      "Understand how PE markets work, including valuations, funding rounds, and exit strategies.",
    duration: "6 hour",
    modules: "8 Module",
    image: "/course-thumb.jpg",
  },
  {
    level: "Advanced",
    color: "text-[#5734A0] bg-[#F2EDFC]",
    title: "Advanced Trading Strategies",
    description:
      "Advanced techniques for PE trading, risk management, and portfolio optimization.",
    duration: "5 hour",
    modules: "7 Module",
    image: "/course-thumb.jpg",
  },
];

export default function SixthSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    infinite: true,
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
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
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
  //  const router = useRouter();
  return (
    <section className="max-w-7xl  px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 md:space-y-16 mx-auto">
      <div className="space-y-4">
        <div>
          <span className="bg-[linear-gradient(25deg,#7B49E1_11.39%,#C2ABF1_98.74%)] inline-block h-6 text-white text-xs leading-4 font-medium px-4 py-1 rounded-full">
            Academy
          </span>
        </div>
        <h2 className="text-[32px] leading-10 sm:text-[56px] sm:leading-16 font-medium text-[#171717]">
          Gain knowledge.
        </h2>
        <p className="text-base sm:text-lg font-normal text-[#737373] max-w-2xl">Learn about Private Equity.</p>
      </div>

      <div className="relative">
        <div className="relative">
          <Slider ref={sliderRef} {...settings} className="gap-6" adaptiveHeight={false}>
            {knowledge.map((item, i) => (
              <div
                key={item.title}
                className="hover:bg-white h-[450px] sm:h-[410px] relative  hover:border-[#7B49E1] flex-shrink-0  bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col items-start p-4 transition hover:shadow-lg cursor-pointer"
                style={{
                  boxShadow:
                    hoveredIndex === i
                      ? "0px 0px 16px 0px rgba(123, 73, 225, 0.24)"
                      : "0px 1px 2px 0px rgba(20, 21, 26, 0.05)",
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="w-full h-[180px] rounded-xl overflow-hidden mb-4 flex items-center justify-center bg-gray-50 relative">
                  <Image src={item.img} alt={item.title} width={100} height={180} className="object-cover w-full h-full" />
                </div>
                <span className={`inline-block  ${item.badge.color} text-[14px] font-medium rounded-full px-3 py-1 mb-2`}>{item.badge.text}</span>
                <div className=" text-base leading-6 sm:text-xl sm:leading-7 font-medium text-[#171717] mb-1">{item.title}</div>
                <div className=" text-sm leading-5.5 sm:text-base sm:leading-6 font-normal text-[#737373] mb-4">{item.desc}</div>
                <div className="flex items-center justify-center gap-4 text-xs text-[#737373] w-full absolute left-0 px-4 bottom-4">
                  <span className="flex items-center text-[16px] font-normal text-[#737373] gap-1"><svg width="20" height="20" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#888" strokeWidth="1.5" /><path d="M8 4v4l2.5 2.5" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>{item.meta.time}</span>
                  <span className="flex items-center justify-center text-[16px] font-normal text-[#737373] gap-1 ml-auto">

                    <div className="flex items-center gap-1">
                      <img src="star.png" alt="Rating" className="w-5 h-5" />
                      <span className="text-[16px] font-medium text-[#262626]">{item.meta.rating}</span>
                      <span className="text-[16px] font-normal text-[#737373]">({item.meta.count})</span>
                    </div>
                  </span>
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
      <div className="flex justify-center pt-10 sm:pt-0">
        <Link href={'/academy/'}>
          <button className="h-[40px] w-[149px] rounded-full border-[1px] border-[Grey/500] text-[#262626] text-[16px] font-medium leading-[24px]" >Explore more</button>
        </Link>
      </div>
    </section>
  );
}