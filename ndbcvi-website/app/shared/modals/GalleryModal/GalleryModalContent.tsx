'use client';
import React, { useState } from 'react'
import { SanityImageObject } from '@sanity/image-url/lib/types/types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { ImageCarousel } from '../../components/ImageCarousel'

export const GalleryModalContent = ({images, parentModal, returnToModal}: {images: SanityImageObject[], parentModal: string, returnToModal:()=>void}) => {
    
    const [displayed, setDisplayed] = useState(0);

    const scrollToPrev = () => {
        setDisplayed((curr) => (curr === 0 ? images.length - 1 : curr - 1));
    }
    const scrollToNext = () => {
    setDisplayed((curr) => (curr === images.length - 1 ? 0 : curr + 1));
    }
    
    
    return (
        <div className='flex flex-col'>
            <h1 className="title_font">Gallery</h1>
            <button
                type="button"
                className="py-[8px] px-[24px] w-fit border border-black rounded-[100px] flex items-center text-[14px] font-[500] cursor-pointer absolute top-[24px] right-[20px] md:ml-[20px] md:text-[16px] lg:relative lg:top-0 lg:right-0"
                onClick={returnToModal}
                >
                <p>Return to {parentModal}</p>
            </button>
            <div className="lg:hidden">
                <ImageCarousel 
                    images={images} 
                    next={scrollToNext} 
                    prev={scrollToPrev} 
                    displayed={displayed} 
                    buttonsPosition='start'
                />
            </div>
            <div id="masonryDisplay" className='hidden lg:block lg:py-14 lg:flex lg:flex-row lg:items-center lg:justify-center lg:flex-wrap'>
                { images.map((image, i) => (
                    <Image 
                        key={i}
                        src={urlFor(image.asset._ref).url()}
                        alt="placeholder image"
                        width={425}
                        height={200}
                        className='m-2'
                    />
                ))}
            </div>
        </div>
    )
}
