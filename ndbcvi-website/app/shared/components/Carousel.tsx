'use client';
import { SanityDocument } from 'next-sanity';
import React, { useEffect } from 'react'
import { Event } from '../modals/EventsModal/components/Event';
import Image from 'next/image';
import greyNavArrow from "../../assets/svgs/nav-arrow-grey.svg";
import blackNavArrow from "../../assets/svgs/nav-arrow-black.svg";

export const Carousel = ({items, next, prev, displayed, autoSlide = false, autoSlideInterval = 3000}: {items: SanityDocument[], next: ()=>void, prev: ()=>void, displayed: number, autoSlide: boolean, autoSlideInterval: number}) => {

    useEffect(() => {
        if(!autoSlide) {
            return;
        }
        const slideInterval = setInterval(next, autoSlideInterval);
        
        return() => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval])

    return (
        <div className='w-full'>
            <h1 className=' ml-[20px] text-[24px] font-[600] mb-[24px] md:text-[36px]'>{items[displayed].title}</h1>
            <div className='w-full flex flex-col-reverse gap-[24px] md:flex-col'>
                <div className='ml-[20px] w-11/12 flex justify-between'>
                    <h3 className='text-[18px] text-[#757575] font-[500] md:hidden'>Swipe to see more events</h3>
                    <div id="modal-carouselScrollers" className="flex gap-[8px] md:mt-[18px]
                                                        md:gap-[6px]">
                        <button onClick={prev} disabled={displayed === 0}>
                            <Image src={displayed === 0 ? greyNavArrow : blackNavArrow} alt="nav left icon" className='rotate-180'/>
                        </button>
                        <button onClick={next} disabled={displayed === items.length - 1}>
                            <Image src={displayed === items.length-1 ? greyNavArrow : blackNavArrow} alt="nav right icon" />
                        </button>
                    </div>
                </div>
                <div className="w-full overflow-hidden">
                    <div className='w-full flex justify-between transition-transform ease-out duration-500' style={{transform: `translateX(-${displayed * 100}%`}}>
                        {items.map((item) => (
                            <div key={item.slug.current} className='w-full mr-[5px] shrink-0'>
                                <Event event={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
