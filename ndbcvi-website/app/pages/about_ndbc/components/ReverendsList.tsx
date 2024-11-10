import React from 'react'
import ReusableCardComponent from '@/app/shared/components/ReusableCardComponent'
import { urlFor } from '@/sanity/lib/image'
import { ModalTemplate } from '@/app/shared/modals/ModalTemplate'
import { BioModalContent } from '@/app/shared/modals/BioModal/BioModalContent'
import { PersonType } from '@/app/types'

export const ReverendsList = ({list}: {list: PersonType[]}) => {
    return (
        <div id='container' className='w-full flex flex-row lg:justify-center overflow-x-scroll'>
            {list.map((person) => {
                return (
                    <div key={person.slug.current} className='m-1 cursor-pointer w-[80%] shrink-0
                                                    lg:flex-[0.5] lg:hover:flex-[1.5] lg:transition-all lg:ease-out lg:duration-500 rounded-lg'>
                        <ModalTemplate 
                            modalActivator={ <ReusableCardComponent 
                                                key={person.slug.current} 
                                                imgUrl={urlFor(person.photo.asset._ref).url()} 
                                                title={person.name} 
                                                rounded="2xl"
                                                body=""
                                                button={<p className='text-white underline'>Read Bio</p>}
                                                imgFit="contain"
                                            />}
                            modalContent={<BioModalContent person={person} />}
                        />
                        
                    </div>
                )
            })}
        </div>
    )
}
