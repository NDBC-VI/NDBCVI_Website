'use client';
import { SanityDocument } from 'next-sanity';
import React, { useState } from 'react'
import { Event } from './Event';

export const Carousel = ({items}: {items: SanityDocument[]}) => {

    // const events = [
    //     "https://i.ibb.co/ncrXc2V/1.png",
    //     "https://i.ibb.co/B3s7v4h/2.png",
    //     "https://i.ibb.co/XXR8kzF/3.png",
    //     "https://i.ibb.co/yg7BSdM/4.png",
    // ];

    const [displayed, setDisplayed] = useState(0);

    const prev = () => {
        if(displayed > 0){
            setDisplayed(displayed - 1);
        }
    }
    const next = () => {
        if(displayed < items.length - 1){
            setDisplayed(displayed + 1);
        } 
    }

    return (
        <div className='w-[58vw] bg-pink-300 overflow-hidden'>
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
