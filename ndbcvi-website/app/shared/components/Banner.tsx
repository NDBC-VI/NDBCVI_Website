'use client';

import { SanityDocument } from 'next-sanity'
import Link from 'next/link';
import React, { useState } from 'react'


export const Banner = ({bannerProps}: {bannerProps: SanityDocument}) => {
    const { content, linkText, link } = bannerProps;

    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className={`w-full h-[7vh] flex flex-row justify-center items-center bg-[#1D1841] z-20 transition ease-in duration-1500 ${isVisible ? "" : "-translate-y-[7vh] hidden"}`}>
            <p className='text-white text-center mx-5'>{content}</p>
            <Link target="_blank" href={link} className='mx-3 text-white font-semibold text-sm underline'> 
                {linkText} 
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" onClick={() => setIsVisible(false)} className="size-6 absolute right-10 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </div>
    )
}
