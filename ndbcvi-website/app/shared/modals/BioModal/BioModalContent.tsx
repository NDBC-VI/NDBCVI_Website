'use client';

import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from 'next-sanity'
import { ScrollLinks } from '../components/ScrollLinks'
import Link from 'next/link';
import { PersonType } from '@/app/types';

export const BioModalContent = ({person}: {person: PersonType}) => {
    return (
        <>
                <div className='flex flex-row justify-between space-x-10 p-10'>
                    <ScrollLinks sections={[{title: person.name, slug: person.slug.current}]}/>
                    <div id={person.slug.current} className="w-full md:w-2/3 px-6 relative self-end">
                        <h1 className='text-[24px] md:text-[36px] font-[600]'>{person.name}</h1>
                        <Image 
                            src={urlFor(person.photo.asset._ref).url()}
                            alt={`Photo of ${person.name}`}
                            width={250}
                            height={200}
                            className='rounded-2xl my-8'
                        />
                        <PortableText value={person.bio} />
                        
                        <Link href={person.link} target='_blank'>
                            <button
                                type="button"
                                className="py-2 px-5 my-10 border border-black rounded-[100px] flex items-center gap-[6px] font-[500] cursor-pointer"
                                >
                                <p>{person.linkText}</p>
                            </button>
                        </Link>
                    </div> 
                </div> 
            </>
    )
}
