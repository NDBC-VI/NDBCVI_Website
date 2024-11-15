import { SanityDocument } from 'next-sanity'
import React from 'react'
import ReusableCardComponent from '@/app/shared/components/ReusableCardComponent'
import { urlFor } from '@/sanity/lib/image'


export const PeopleList = ({list}: {list: SanityDocument[]}) => {
    return (
        <div id="container" className='w-full flex flex-row lg:justify-center overflow-x-scroll'>
            {list.map(person => (
                <div key={person.slug.current} className='m-1 cursor-pointer w-[80%] shrink-0
                                                    lg:flex-[0.5] lg:hover:flex-[1.5] lg:transition-all lg:ease-out lg:duration-500 rounded-lg'>
                    <ReusableCardComponent 
                        imgUrl={urlFor(person.photo.asset._ref).url()} 
                        title={person.name} 
                        body={person.bio[0].children[0].text} 
                        rounded="[24px]"
                    />
                </div>
            ))}
        </div>
    )
}