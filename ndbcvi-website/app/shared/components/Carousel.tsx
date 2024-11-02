'use client';
import { SanityDocument } from 'next-sanity';
import React, { useEffect, useState } from 'react'
import { Event } from '../modals/EventsModal/components/Event';

export const Carousel = ({items, autoSlide = false, autoSlideInterval = 3000}: {items: SanityDocument[], autoSlide: boolean, autoSlideInterval: number}) => {

    const [displayed, setDisplayed] = useState(0);
    
    const prev = () => {
        setDisplayed((curr) => (curr === 0 ? items.length - 1 : curr - 1))
    }
    const next = () => {
        setDisplayed((curr) => (curr === items.length - 1 ? 0 : curr + 1));
    }

    useEffect(() => {
        if(!autoSlide) {
            return;
        }
        const slideInterval = setInterval(next, autoSlideInterval);
        
        return() => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval])

    return (
        <div className='w-[58vw] overflow-hidden'>
            <div id="carousel-scrollers" className='w-48'>
                <button onClick={prev} className={`m-4 bg-purple-200 py-4 px-6 rounded-lg ${displayed === 0 ? 'opacity-60' : ''}`}>{'<'}</button>
                <button onClick={next} className={`m-4 bg-purple-200 py-4 px-6 rounded-lg ${displayed === items.length - 1 ? 'opacity-60' : ''}`}>{'>'}</button>
            </div>
            <div className='flex transition-transform ease-out duration-500' style={{transform: `translateX(-${displayed * 100}%`}}>
                {items.map((item) => (
                    <div key={item.slug.current}>
                        <Event event={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}
