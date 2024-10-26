import { SanityDocument } from 'next-sanity'
import React from 'react'
import ReusableCardComponent from '../shared/components/ReusableCardComponent'
import { urlFor } from '@/sanity/lib/image'


export const PeopleList = ({list}: {list: SanityDocument[]}) => {
    return (
        <div id="container" className='w-[90vw] bg-white flex flex-row justify-center'>
            {list.map(person => (
                <div key={person.slug.current} className='m-1 cursor-pointer flex-[0.5] hover:flex-[1.5] transition-all ease-out duration-500 rounded-lg'>
                    <ReusableCardComponent 
                        key={person.slug.current} 
                        imgUrl={urlFor(person.photo.asset._ref).url()} 
                        title={person.name} 
                        body={person.bio[0].children[0].text} 
                        rounded="2xl"
                    />
                </div>
            ))}
        </div>
    )
}
