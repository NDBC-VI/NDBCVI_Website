'use client';

import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from 'next-sanity'
import { ScrollLinks } from '../components/ScrollLinks'
import Link from 'next/link';
import { PersonType } from '@/app/types';
import { SanityImage } from '../../components/SanityImage';

export const BioModalContent = ({person}: {person: PersonType}) => {
    return (
        <>
            <div className='flex flex-row justify-between pb-[56px]'>
                <div className='ml-[20px] md:flex md:flex-row md:justify-between md:space-x-10 h-fit hidden md:block md:sticky md:top-0 '>
                    <ScrollLinks sections={[{title: person.name, slug: person.slug.current}]}/>
                </div>
                <div id={person.slug.current} className="w-full md:w-2/3 pt-[24px] px-[20px] flex flex-col relative self-end">
                    <h1 className='text-[24px] md:text-[36px] font-[600]'>{person.name}</h1>
                    <div className='relative w-[311px] h-[500px] self-center md:self-start md:w-[330px] md:h-[534px] mt-[24px]'>
                        <SanityImage image={person.photo} />
                    </div>
                    <div className="relative top-[25px]">
                        <PortableText value={person.bio} />
                    
                        <div className='w-fit'>
                            <Link href={person.link} target='_blank' className='w-fit'>
                                <button
                                    type="button"
                                    className="py-2 px-5 my-10 border border-black rounded-[100px] flex items-center gap-[6px] font-[500] cursor-pointer"
                                    >
                                    <p>{person.linkText}</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div> 
            </div> 
        </>
    )
}
