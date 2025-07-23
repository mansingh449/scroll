'use client';
import React from 'react';

const sectors = [
  {
    name: 'Technology',
    companies: '48 Companies',
    change: '+1.24%',
  },
  {
    name: 'Fintech & Web3',
    companies: '88+ sector',
    change: '+0.24%',
  },
  {
    name: 'Health',
    companies: '68+ sector',
    change: '+0.24%',
  },
];

export default function InvestNow() {
  const handleRedirect = () => {
    window.open('https://stg.app.pe-projects.com/auth/signup', '_blank');
  };

  return (
    <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className=" lg:flex-row items-center gap-8 bg-gradient-to-r relative from-[#7B49E1] to-[#C2ABF1] rounded-3xl p-6 sm:p-10  overflow-hidden min-h-[660px] md:min-h-[450px]">

        {/* Left Content */}
        <div className=" text-white z-10">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-medium leading-tight mb-6">
            Investing Made Easy<br />and Fun!
          </h2>
          <p className="text-[16px] sm:text-[18px] font-normal max-w-[300px] lg:max-w-[488px] mb-6">
            Unlock private equity exposure through PE Projects — contract-based, accessible, and free from traditional ownership constraints.
          </p>
          <button
            className="cursor-pointer flex items-center gap-4 bg-white text-base leading-6 font-medium text-[#171717] pl-4 py-[3px] pr-[3px] rounded-full shadow transition hover:bg-[#f6f3ff]"
            onClick={handleRedirect}
          >
            Sign up now
            <svg width="46" height="46" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.772705" width="46" height="46" rx="23" fill="#956DE7" />
              <path d="M26.5 25.9393V20.2727H20.8333" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M26.3334 20.4394L19.5 27.2727" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Right Content */}
        {/* <div className="lg:w-1/2 w-full xl:absolute xl:-right-24 xl:bottom-0 z-10 h-[400px]">
          <div className="bg-white shadow-xl max-w-full md:max-w-[450px] p-6 sm:p-8 rounded-t-[49.09px] mx-auto lg:mx-0">
            <div className="text-[24px] sm:text-[28px] font-medium text-[#171717] mb-6">Invest now</div>

            <div className="flex gap-4 mb-6 pb-2 -mx-2 px-2">
              {sectors.map((sector, idx) => (
                <div
                  key={idx}
                  className="bg-white border rounded-xl p-4 min-w-[100px] sm:min-w-[220px] flex-shrink-0 border-[#F5F5F5]"
                >
                  <div className="text-[12px] text-[#00C950] font-medium bg-[#DCFCE7] rounded-full inline-block px-2 py-1 mb-2">
                    {sector.change}
                  </div>
                  <div className="text-[16px] font-semibold text-[#171717] mb-1">{sector.name}</div>
                  <div className="text-[13px] font-normal text-[#737373]">{sector.companies}</div>
                </div>
              ))}
            </div>

      
            <div className="bg-white shadow-2xl rounded-xl border border-gray-100 p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-[18px] font-medium text-[#171717]">Anthropic</div>
                  <div className="text-[13px] font-normal text-[#737373]">Technology & AI</div>
                </div>
                <span className="bg-[#F0FDF4] text-[13px] font-medium text-[#008236] px-3 py-1 rounded-full">
                  Available
                </span>
              </div>
              <p className="text-[14px] font-normal text-[#737373]">
                Anthropic is an AI research company that focuses on the safety and alignment of AI systems with human values.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 rounded-[9px] bg-[#F2EDFC] text-[13px] font-normal text-[#956DE7]">
                  Price
                </span>
                <span className="px-5 py-1 rounded-[9px] bg-[#EFF6FF] text-[13px] font-normal text-[#2B7FFF]">
                  Number of Units
                </span>
                <span className="px-5 py-1 rounded-[9px] bg-[#F5F5F5] text-[13px] font-normal text-[#737373]">
                  Total
                </span>
              </div>
            </div>
          </div>
        </div> */}
        <div className='absolute right-0 bottom-0  sm:w-[250px] md:w-[350px] lg:w-[450px] xl:w-auto'>
          <img src={'/Discover.png'} className=' md:h-auto hidden md:block' />
          <img src={'/MobDiscover.png'} className=' md:h-auto block md:hidden' />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-white/0 pointer-events-none" />
      </div>
    </section>
  );
}
