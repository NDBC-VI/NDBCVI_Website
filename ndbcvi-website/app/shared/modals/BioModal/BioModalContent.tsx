'use client';

import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { PortableText, SanityDocument } from 'next-sanity'
import { ScrollLinks } from '../components/ScrollLinks'

export const BioModalContent = ({person}: {person: SanityDocument}) => {
    return (
        <>
                <div className="flex flex-row justify-between space-x-10 p-10">
                    <ScrollLinks sections={[{title: person.name, slug: person.slug.current}]}/>
                    <div className="w-2/3 px-6 relative self-end">
                        <Image 
                            src={urlFor(person.photo.asset._ref).url()}
                            alt={`Photo of ${person.name}`}
                            width={250}
                            height={200}
                            className='rounded-2xl my-8'
                        />
                        <PortableText value={person.bio} />
                    </div> 
                </div> 
            </>
    )
}
