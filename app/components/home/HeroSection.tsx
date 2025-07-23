'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';



const companyLogos = [
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

const chartData: any = {
  "1W": { img: "/PE Platform App & Website/1W.png", price: "$10,201.00", range: "+2.01%" },
  "1M": { img: "/PE Platform App & Website/1M.png", price: "$11,287.00", range: "+12.87%" },
  "3M": { img: "/PE Platform App & Website/3M.png", price: "$14,273.00", range: "+42.73%" },
  "6M": { img: "/PE Platform App & Website/6M.png", price: "$19,050.00", range: "+90.50%" },
  "1Y": { img: "/PE Platform App & Website/1Y.png", price: "$27,645.00", range: "+176.45%" },
  "ALL": { img: "/PE Platform App & Website/All.png", price: "$58,010.00", range: "+480.10%" },
};

const stickyBadges = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.6863 6.87315V5.08398C11.6863 2.98981 9.98795 1.29148 7.89378 1.29148C5.79962 1.28231 4.09462 2.97231 4.08545 5.06731V5.08398V6.87315" stroke="#956DE7" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M11.0694 16.708H4.70187C2.95687 16.708 1.54187 15.2938 1.54187 13.548V9.97384C1.54187 8.22801 2.95687 6.81384 4.70187 6.81384H11.0694C12.8144 6.81384 14.2294 8.22801 14.2294 9.97384V13.548C14.2294 15.2938 12.8144 16.708 11.0694 16.708Z" stroke="#956DE7" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.88578 10.8356V12.6864" stroke="#956DE7" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Smart Investing',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.98722 17.005C7.98722 17.005 14.3806 15.0692 14.3806 9.73252C14.3806 4.39502 14.6122 3.97835 14.0997 3.46502C13.5864 2.95169 8.82555 1.29169 7.98722 1.29169C7.14889 1.29169 2.38805 2.95169 1.87555 3.46502C1.36222 3.97835 1.59389 4.39502 1.59389 9.73252C1.59389 15.0692 7.98722 17.005 7.98722 17.005Z" stroke="#956DE7" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.82178 8.8955L7.39844 10.4747L10.6468 7.22467" stroke="#956DE7" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Next-Gen FinTech',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M17.7082 10.0004C17.7082 14.2579 14.2573 17.7087 9.99984 17.7087C5.74234 17.7087 2.2915 14.2579 2.2915 10.0004C2.2915 5.74289 5.74234 2.29205 9.99984 2.29205C14.2573 2.29205 17.7082 5.74289 17.7082 10.0004Z" stroke="#956DE7" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.8594 12.4524L9.71777 10.5782V6.53906" stroke="#956DE7" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Early Investor Access',
  },
];

export default function RotateImage() {


  const SIGN_UP_URL = process.env.NEXT_PUBLIC_SIGN_UP_URL;

  // start animation
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const speed = 0.5; // slow speed

  useEffect(() => {
    const container = containerRef.current;
    const scrollContent = scrollRef.current;

    if (!container || !scrollContent) return;

    let scrollLeft = scrollContent.scrollWidth / 2;

    const animate = () => {
      if (!container || !scrollContent) return;

      scrollLeft -= speed;

      if (scrollLeft <= 0) {
        scrollLeft = scrollContent.scrollWidth / 2;
      }

      container.scrollLeft = scrollLeft;

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>


      <div className="relative w-full bg-white py-8 sm:py-12 overflow-hidden flex items-center">
        <div ref={containerRef} className="w-full overflow-hidden">
          <div ref={scrollRef} className="flex gap-[40px] w-fit">
            {[...companyLogos, ...companyLogos].map((logo, idx) => (
              <Link href={logo.url || "/"} target='_blank'    key={`link-${idx}`}>
                <div
                  key={`${logo.name}`}
                  className="flex items-center justify-center min-w-[120px]"
                >
                  <Image
                    src={logo.src}
                    
                    alt={`Logo ${idx}`}
                    width={180}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}