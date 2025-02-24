'use client';
import React from 'react'
import { SanityImageObject } from '@sanity/image-url/lib/types/types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { ImageSlider } from '../../components/ImageSlider'

export const GalleryModalContent = ({images, parentModal, returnToModal}: {images: SanityImageObject[], parentModal: string, returnToModal:()=>void}) => {

    return (
        <>
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
                {/* className='hidden lg:block lg:py-14 lg:flex lg:flex-row lg:items-center lg:justify-center lg:flex-wrap' */}
                <div id="masonryDisplay" className='hidden lg:block lg:text-center w-full columns-3'>
                    { images.map((image, i) => (
                        <>
                            <Image 
                                key={i}
                                src={urlFor(image.asset._ref).url()}
                                alt="placeholder image"
                                loader={({ width, quality=75 }) => 
                                    urlFor(image.asset._ref).format("webp").width(width).quality(quality).auto("format").url()
                                }
                                width={425}
                                height={200}
                                priority
                                placeholder='blur'
                                blurDataURL={urlFor(image.asset._ref).width(10).blur(50).url()}
                                className='m-2 block self-center'
                            />
                            {/* <Image
                                key={i}
                                src={urlFor(image.asset._ref).url()}
                                alt="placeholder image"
                                width={425}
                                height={200}
                                className='m-2'
                            /> */}
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}
