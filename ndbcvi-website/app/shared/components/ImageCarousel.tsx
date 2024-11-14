'use client';

import { urlFor } from '@/sanity/lib/image'
import { SanityImageObject } from '@sanity/image-url/lib/types/types'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export const ImageCarousel = ({images}: {images: SanityImageObject[]}) => {

    const [displayed, setDisplayed] = useState(0);
    const autoSlide = true;
    const autoSlideInterval = 3000;

    const next = () => {
        setDisplayed((curr) => (curr === images.length - 1 ? 0 : curr + 1));
        console.log(displayed)
    }

    useEffect(() => {
        if(!autoSlide) {
            return;
        }
        const slideInterval = setInterval(next, autoSlideInterval);
        
        return() => clearInterval(slideInterval);
    },)
    
    return (
        <div className='w-full h-full overflow-x-hidden relative'>
            <div className={`w-full h-full flex flex-row justify-between transition-all ease-in-out duration-500`} style={{transform: `translateX(-${displayed * 100}%`}}>
                {
                    images.map((image, i) => (
                        <div key={i} className='w-full h-full relative shrink-0 grow-0'>
                            <Image
                                src={urlFor(image.asset._ref).url()}
                                alt={'about NDBC'}
                                fill={true}
                                className='rounded-[24px]'
                            />
                        </div>
                    ))
                }
            </div>
            <div id="carousel-dot-buttons" className='absolute bottom-[1.5rem] left-[50%] translate-x-[-50%] flex'>
                {
                    images.map((_, i) => (
                        <button key={i} onClick={() => setDisplayed(i)} className={`w-[16px] h-[16px] flex justify-center items-center hover:scale-150 focus:scale-150 outline-none aria-label ${i === displayed ? 'scale-150' : ''}`}>
                            <div className={`w-[0.5rem] h-[0.5rem] rounded-full border-[2px] border-white transition-all ${i === displayed ? 'bg-white' : 'bg-inherit'}`} />
                        </button>
                    ))
                }
            </div>
        </div>
    )
}
