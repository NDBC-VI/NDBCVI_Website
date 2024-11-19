'use client';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import greyNavArrow from "../../assets/svgs/nav-arrow-grey.svg";
import blackNavArrow from "../../assets/svgs/nav-arrow-black.svg";
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { urlFor } from '@/sanity/lib/image';

export const ImageSlider = ({images, toolbarBottom = true, buttonsPosition = 'end', autoSlide = false, autoSlideInterval = 3000, clickFn = () => null}: {images: SanityImageObject[], toolbarBottom: boolean, buttonsPosition: string, autoSlide?: boolean, autoSlideInterval?: number, clickFn?: ()=>void }) => {

    const [displayed, setDisplayed] = useState(0);

    const prev = () => {
        setDisplayed((curr) => (curr === 0 ? images.length - 1 : curr - 1));
    }
    const next = () => {
        setDisplayed((curr) => (curr === images.length - 1 ? 0 : curr + 1));
    }

    useEffect(() => {
        if(!autoSlide) {
            return;
        }
        const slideInterval = setInterval(next, autoSlideInterval);
        
        return() => clearInterval(slideInterval);
    },)

    return (
        <div className={`ml-[20px] w-[99.5%] flex ${toolbarBottom ? 'flex-col' : 'flex-col-reverse'} gap-[18px] overflow-hidden`}>
            <div className={`${images.length === 0 ? "hidden" : "" } relative mt-[24px] w-full h-[370px] flex flex-row justify-between items-end transition-transform ease-out duration-500`} style={{transform: `translateX(-${displayed * 85}%)`}}>
                {
                    images.map((image: SanityImageObject, i: number) => {
                        return(
                            <div key={i} className='w-5/6 h-full mr-[8px] relative pr-[15px] overflow-hidden shrink-0 rounded-[24px] cursor-pointer
                                            lg:w-1/4 lg:mr-0 lg:mx-[4px]'>
                                <Image 
                                    src={urlFor(image.asset._ref).url()}
                                    alt="placeholder image"
                                    fill={true}
                                    onClick={clickFn}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div id="sliderScrollers" className={`flex gap-[8px] self-${buttonsPosition} md:mt-[18px]
                                                md:gap-[6px]`}>
                <button onClick={prev} disabled={displayed === 0}>
                    <Image src={displayed === 0 ? greyNavArrow : blackNavArrow} alt="nav left icon" className='rotate-180'/>
                </button>
                <button onClick={next} disabled={displayed === images.length - 1}>
                    <Image src={displayed === images.length-1 ? greyNavArrow : blackNavArrow} alt="nav right icon" />
                </button>
            </div>
        </div>
        )
}
