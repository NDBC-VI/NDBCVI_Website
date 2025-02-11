import { urlFor } from '@/sanity/lib/image'
import { SanityImageObject } from '@sanity/image-url/lib/types/types'
import Image from 'next/image'
import React from 'react'

interface ImageProps {
    image: SanityImageObject
}

export const SanityImage: React.FC<ImageProps> = ({image}) => {
    return (
        <Image 
            src={urlFor(image.asset._ref).url()}
            alt="placeholder image"
            loader={({ width, quality=75 }) => 
                urlFor(image.asset._ref).format("webp").width(width).quality(quality).auto("format").url()
            }
            fill={true}
            priority
            placeholder='blur'
            blurDataURL={urlFor(image.asset._ref).width(10).blur(50).url()}
        />
    )
}
