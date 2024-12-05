'use client';
import React from 'react'
import { SanityImageObject } from '@sanity/image-url/lib/types/types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { ImageSlider } from '../../components/ImageSlider'

export const GalleryModalContent = ({images, parentModal, returnToModal}: {images: SanityImageObject[], parentModal: string, returnToModal:()=>void}) => {

    return (
        <>
            {/* {images.map((image, i) => (
                <link 
                key={`preload-${i}`} 
                rel="preload" 
                as="image" 
                href={urlFor(image.asset._ref).url()} 
                />
            ))} */}
            <div className='flex flex-col overflow-hidden'>
                <h1 className="title_font">Gallery</h1>
                <button
                    type="button"
                    className="py-[8px] px-[24px] w-fit border border-black rounded-[100px] flex items-center text-[14px] font-[500] cursor-pointer absolute top-[24px] right-[20px] md:ml-[20px] md:text-[16px] lg:relative lg:top-0 lg:right-0"
                    onClick={returnToModal}
                    >
                    <p>Return to {parentModal}</p>
                </button>
                <div className="lg:hidden">
                    <ImageSlider 
                        images={images}
                        buttonsPosition='start' toolbarBottom={true} 
                        autoSlide={true} 
                        autoSlideInterval={5000} 
                        clickFn={returnToModal}
                    />
                </div>
                <div id="masonryDisplay" className='hidden lg:block lg:py-14 lg:flex lg:flex-row lg:items-center lg:justify-center lg:flex-wrap'>
                    { images.map((image, i) => (
                        <>
                            <Image
                                key={i}
                                src={urlFor(image.asset._ref).url()}
                                alt="placeholder image"
                                width={425}
                                height={200}
                                className='m-2'
                            />
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}
