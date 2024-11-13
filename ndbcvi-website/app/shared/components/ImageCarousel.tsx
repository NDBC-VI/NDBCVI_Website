'use client';
import React, { useEffect } from 'react'
import { Event } from '../modals/EventsModal/components/Event';
import Image from 'next/image';
import greyNavArrow from "../../assets/svgs/nav-arrow-grey.svg";
import blackNavArrow from "../../assets/svgs/nav-arrow-black.svg";
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { urlFor } from '@/sanity/lib/image';

export const ImageCarousel = ({images, next, prev, displayed, toolbarBottom = true, buttonsPosition = 'end', autoSlide = true, autoSlideInterval = 3000, clickFn}: {images: SanityImageObject[], next: ()=>void, prev: ()=>void, displayed: number, toolbarBottom: boolean, buttonsPosition: string, autoSlide: boolean, autoSlideInterval: number, clickFn: () => void}) => {

    useEffect(() => {
        if(!autoSlide) {
            return;
        }
        const slideInterval = setInterval(next, autoSlideInterval);
        
        return() => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval])

    return (
        <div className={`ml-[20px] w-11/12 flex ${toolbarBottom ? 'flex-col' : 'flex-col-reverse'} gap-[18px] justify-between overflow-hidden`}>
            <div className={`${images.length === 0 ? "hidden" : "" } relative mt-[24px] w-full h-[370px] flex flex-row justify-between items-end transition-transform ease-out duration-500`} style={{transform: `translateX(-${displayed * 85}%`}}>
                {
                    images.map((image, i) => {
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
            <div id="modal-carouselScrollers" className={`flex gap-[8px] self-${buttonsPosition} md:mt-[18px]
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
