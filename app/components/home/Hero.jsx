'use client';

import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowRight, Eye } from "lucide-react";
import Image from 'next/image';
import clsx from 'clsx';
import { useState } from 'react';
import Link from 'next/link';
const chartDataMap = {
    '1W': [
        { name: '7/10', value: 9200 },
        { name: '7/11', value: 9100 },
        { name: '7/12', value: 9400 },
        { name: '7/13', value: 9400 },
        { name: '7/14', value: 9700 },
        { name: '7/15', value: 10000 },
        { name: '7/16', value: 10201 },
    ],
    '1M': [
        { name: '6/18', value: 8800 },
        { name: '6/25', value: 9000 },
        { name: '7/02', value: 9600 },
        { name: '7/09', value: 10201 },
    ],
    '3M': [
        { name: 'May', value: 8700 },
        { name: 'Jun', value: 9100 },
        { name: 'Jul', value: 10201 },
    ],
    '1Y': [
        { name: '7/10', value: 9200 },
        { name: '7/11', value: 9100 },
        { name: '7/12', value: 9400 },
        { name: '7/13', value: 9400 },
        { name: '7/14', value: 9700 },
        { name: '7/15', value: 10000 },
        { name: '7/16', value: 10201 },
        { name: '7/10', value: 9200 },
        { name: '7/11', value: 9100 },
        { name: '7/12', value: 9400 },
        { name: '7/13', value: 9400 },
        { name: '7/14', value: 9700 },
        { name: '7/15', value: 10000 },
        { name: '7/16', value: 10201 },
    ],
    '6M': [
        { name: '7/10', value: 9200 },
        { name: '7/14', value: 9700 },
        { name: '7/15', value: 10000 },
        { name: '7/16', value: 10201 },
        { name: '7/10', value: 9200 },
        { name: '7/11', value: 9100 },
        { name: '7/16', value: 10201 },
    ],
};

const filters = ['1W', '1M', '3M', '6M', '1Y', 'ALL'];

const chartImg = {
    "1W": { img: "/PE Platform App & Website/1W.png", price: "$10,201.00", range: "+2.01%" },
    "1M": { img: "/PE Platform App & Website/1M.png", price: "$11,287.00", range: "+12.87%" },
    "3M": { img: "/PE Platform App & Website/3M.png", price: "$14,273.00", range: "+42.73%" },
    "6M": { img: "/PE Platform App & Website/6M.png", price: "$19,050.00", range: "+90.50%" },
    "1Y": { img: "/PE Platform App & Website/1Y.png", price: "$27,645.00", range: "+176.45%" },
    "ALL": { img: "/PE Platform App & Website/All.png", price: "$58,010.00", range: "+480.10%" },
};

export default function HeroSection() {
    const [activeFilter, setActiveFilter] = useState('1Y');
    const currentChart = chartImg[activeFilter];
    const chartData = chartDataMap[activeFilter] || chartDataMap['1Y'];
    const SIGN_UP_URL = process.env.NEXT_PUBLIC_SIGN_UP_URL;
    const [whole, decimal] = currentChart.price.split(".");
    return (
        <section className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white">
            {/* Left content */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className=" max-w-[660px]  md:text-left"
            >
                <div className="mb-4">
                    <span className=" border-[#F5F5F5] border inline-block h-6 text-[#0A0A0A] text-xs leading-4 font-medium px-4 py-1 rounded-full">
                        Trusted Partner
                    </span>
                </div>
                <h1 className="text-[32px] leading-10 capitalize sm:text-[64px]  font-semibold text-[#171717] mb-4 sm:leading-[72px]">
                    Gain Private Equity exposure.
                </h1>
                <p className="text-[#7B49E1] text-base leading-6 sm:text-2xl sm:leading-10 font-medium mb-4">
                    Participate early in the success of tomorrow’s market leaders — before they go public.
                </p>
                <p className="text-[#737373] text-base sm:text-lg mb-5 sm:mb-6">
                    Access supertrends like AI, enjoy the growth of the best unicorns, grow together with the companies of tomorrow, start investing now.
                </p>
                <Link href={SIGN_UP_URL || "/"} target='_blank'>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-3  lg:mx-0 text-base font-medium bg-[#7B49E1] text-white  pl-4 pr-1 py-1 rounded-full shadow-md"
                    >
                        Sign up
                        <span className="h-8 w-8 sm:w-9 sm:h-9 flex items-center justify-center bg-white text-violet-600 rounded-full">
                            <ArrowUpRight size={14} />
                        </span>
                    </motion.button>
                </Link>
                <div className="flex gap-1.5 sm:gap-3 justify-start mt-8 md:mt-24 flex-wrap">
                    <div className='bg-[#F2EDFC] text-[#262626] px-1.5 sm:px-3 py-2 rounded-[26px] flex items-center gap-2.5 '>
                        <svg width="12.688" height="15.417" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg" className=' hidden md:inline-block'><path d="M11.6863 6.87315V5.08398C11.6863 2.98981 9.98795 1.29148 7.89378 1.29148C5.79962 1.28231 4.09462 2.97231 4.08545 5.06731V5.08398V6.87315" stroke="#956DE7" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0694 16.708H4.70187C2.95687 16.708 1.54187 15.2938 1.54187 13.548V9.97384C1.54187 8.22801 2.95687 6.81384 4.70187 6.81384H11.0694C12.8144 6.81384 14.2294 8.22801 14.2294 9.97384V13.548C14.2294 15.2938 12.8144 16.708 11.0694 16.708Z" stroke="#956DE7" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.88578 10.8356V12.6864" stroke="#956DE7" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <span className=" text-xs sm:text-base font-medium leading-6">
                            Smart Investing
                        </span>
                    </div>
                    <div className='bg-[#F2EDFC] text-[#262626] px-1.5 sm:px-3 py-2 rounded-[26px] flex items-center gap-2.5 '>
                        <svg width="12.688" height="15.417" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" className=' hidden md:inline-block'><path fill-rule="evenodd" clip-rule="evenodd" d="M7.98722 17.005C7.98722 17.005 14.3806 15.0692 14.3806 9.73252C14.3806 4.39502 14.6122 3.97835 14.0997 3.46502C13.5864 2.95169 8.82555 1.29169 7.98722 1.29169C7.14889 1.29169 2.38805 2.95169 1.87555 3.46502C1.36222 3.97835 1.59389 4.39502 1.59389 9.73252C1.59389 15.0692 7.98722 17.005 7.98722 17.005Z" stroke="#956DE7" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.82178 8.8955L7.39844 10.4747L10.6468 7.22467" stroke="#956DE7" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <span className="text-xs sm:text-base font-medium leading-6">
                            Next-Gen FinTech
                        </span>
                    </div>
                    <div className='bg-[#F2EDFC] text-[#262626] px-1.5 sm:px-3 py-2 rounded-[26px] flex items-center gap-2.5 '>
                        <svg width="15.417" height="15.417" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className=' hidden md:inline-block'><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7082 10.0004C17.7082 14.2579 14.2573 17.7087 9.99984 17.7087C5.74234 17.7087 2.2915 14.2579 2.2915 10.0004C2.2915 5.74289 5.74234 2.29205 9.99984 2.29205C14.2573 2.29205 17.7082 5.74289 17.7082 10.0004Z" stroke="#956DE7" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.8594 12.4524L9.71777 10.5782V6.53906" stroke="#956DE7" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <span className="text-xs sm:text-base  font-medium leading-6">
                            Early Investor Access
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* Right Portfolio Card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 md:mt-0 relative rounded-[24px] hidden lg:block bg-white shadow-[0px_32px_72px_-24px_rgba(0,0,0,0.06),_0px_1px_2px_0px_rgba(0,0,0,0.06),_0px_0px_0px_1px_rgba(0,0,0,0.06)]  px-5 py-2.5 w-full max-w-[480px]"
            >
                <div className='px-4'>
                    <div className='py-3'>
                        <h3 className="text-[#171717]  text-2xl font-medium">Portfolio</h3>
                    </div>
                    <div className=' mb-1 flex gap-1'>
                        <p className="text-[#737373] font-normal text-sm mb-1 ">Portfolio Balance</p>
                        <Eye color='#737373' />
                    </div>
                    <div className="flex items-end gap-4 mb-2">
                        <h2 className=" text-[40px] leading-12 font-bold text-[#171717]">{whole}<span className="text-[#D4D4D4] font-normal">.{decimal}</span></h2>
                        <span className=" px-2 py-1  rounded-full text-xs bg-[#F0FDF4] text-[#008236] flex items-center justify-center font-normal">{currentChart.range}</span>
                    </div>
                </div>

                <div className=" pt-6 mb-4">
                    <Image src={currentChart.img} alt={`Portfolio chart`} width={420} height={200} className="object-contain" />
                </div>

                {/* FILTER TABS */}
                <div className="flex justify-between text-sm text-gray-400 mt-3 mb-4">
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={clsx(
                                'px-2 py-1 rounded-3xl font-medium w-[57px]',
                                activeFilter === f ? 'text-[#171717] rounded-[100px] border border-[#E5E5E5] bg-white shadow-[0px_0px_0px_2px_#F5F5F5]' : 'hover:text-black text-[#737373]'
                            )}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* MAIN BALANCE SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white px-4 py-3 border border-[#E5E5E5] absolute w-full rounded-2xl left-1/2 -translate-x-1/2 shadow-md flex items-center justify-between max-w-[408px]"
                >
                    <span className="text-[#171717] text-sm md:text-lg font-medium">Main Balance</span>
                    <div className="flex items-center gap-2">
                        <span className="text-[#171717] text-sm md:text-xl font-semibold">
                            {whole}
                            <span className="text-[#D4D4D4] font-normal">.{decimal}</span>
                        </span>
                        <div className=' bg-[#F5F5F5] h-8 w-8 rounded-full relative'>
                            <ArrowRight size={16} className="text-[#171717] absolute top-1/2 left-1/2 -translate-1/2" />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
