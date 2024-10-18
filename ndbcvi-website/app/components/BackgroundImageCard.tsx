import React from 'react'

import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { BasicModalProps } from '../types'

export const BackgroundImageCard = (props: BasicModalProps) => {
    const { thumbnailImage, thumbnailCaption, title } = props;
    
    return (
        <>
            <Image 
                src={urlFor(thumbnailImage.asset._ref).url()}
                alt="placeholder image"
                width={450}
                height={50}
                className='absolute inset-0 h-full w-full object-cover object-center brightness-50'
            />
            <div className='z-10 flex flex-col justify-end text-wrap size-full transition ease-in-out hover:-translate-y-5'>
                <p className='m-7 text-white text-3xl font-semibold'>{title}</p>
                <p className='mx-7 text-white'>{thumbnailCaption}</p>
                <button className='p-2 mx-3 my-6 w-2/5 bg-white text-black rounded-full transition-all opacity-0 group-hover:opacity-100 duration:750 z-10'>
                    Learn more
                </button>
            </div>
        </>
    )
}
