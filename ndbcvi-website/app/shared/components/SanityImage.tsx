import { urlFor } from '@/sanity/lib/image'
import { SanityImageObject } from '@sanity/image-url/lib/types/types'
import Image from 'next/image'
import React from 'react'

export const SanityImage = ({image}: {image: SanityImageObject}) => {
    return (
        <Image 
            src={urlFor(image.asset._ref).url()}
            alt="placeholder image"
            loader={({ width, quality=100 }) => 
                urlFor(image.asset._ref).width(width).quality(quality).url()
            }
            fill={true}
        />
    )
}
