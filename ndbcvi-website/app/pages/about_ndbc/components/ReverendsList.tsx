import React from 'react'
import { SanityDocument } from 'sanity'
import ReusableCardComponent from '../shared/components/ReusableCardComponent'
import { urlFor } from '@/sanity/lib/image'
import { ModalTemplate } from '../shared/modals/ModalTemplate'
import { BioModalContent } from '../shared/modals/BioModal/BioModalContent'

export const ReverendsList = ({list}: {list: SanityDocument[]}) => {
    return (
        <div id="container" className='w-[90vw] bg-white flex flex-row justify-center'>
            {list.map((person) => (
                <div key={person.slug.current} className='m-1 cursor-pointer flex-[0.5] hover:flex-[1.5] transition-all ease-out duration-500 rounded-lg'>
                    <ModalTemplate 
                        modalActivator={ <ReusableCardComponent 
                                            key={person.slug.current} 
                                            imgUrl={urlFor(person.photo.asset._ref).url()} 
                                            title={person.name} 
                                            rounded="2xl"
                                            button={<p className='text-white underline'>Read Bio</p>}
                                            imgFit="contain"
                                        />}
                        modalContent={<BioModalContent person={person} />}
                    />
                    
                </div>
            ))}
        </div>
    )
}
