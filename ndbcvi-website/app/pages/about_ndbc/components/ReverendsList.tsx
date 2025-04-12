import React from 'react'
import ReusableCardComponent from '@/app/shared/components/ReusableCardComponent'
import { urlFor } from '@/sanity/lib/image'
import { ModalTemplate } from '@/app/shared/modals/ModalTemplate'
import { BioModalContent } from '@/app/shared/modals/BioModal/BioModalContent'
import { PersonType } from '@/app/types'

export const ReverendsList = ({list}: {list: PersonType[]}) => {
    const defaultImg = "https://s3-alpha-sig.figma.com/img/c399/a4aa/cbd312b546258322b4fb6eadc0c8c032?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mt8A9Nqq0f-4V2j6Tz9krgCo3aTWKRBrlu8NGdcwF4HXKYaSfzkITpDQKeGwu-JAn7~pGxmVNUEOWH8BqMZl5BbQE245uspjtN2cMqrj10Q3K2o9Zl-ZTgy5zUzwM0kTVBpueJHmhZPCr2ZiFkX5vNNeIfxdnlIbPvlfVlxWSOd45JiOjcN3dFYbVq-HfL5~nuOB~UnsWLhY1JE1bXk34-wLqXTkT9amR4kCS3hWMOJ44T84YKNnEOOEhjQ~WQbDv~hxUB6LzC4EOIipepj4mNbvu62-spfZDPOENNaTAly7hZ0TZTNSaR6Gy3Tk44UMhtyvJ5wRj5EPLNfw25Jwdg__";
    
    return (
        <div id='container' className='w-full flex flex-row lg:justify-center overflow-x-scroll'>
            {list.map((person) => {
                return (
                    <div key={person.slug ? person.slug.current : `reverend-${person.name}`} className='m-1 cursor-pointer w-[80%] shrink-0
                                                    lg:flex-[0.5] lg:hover:flex-[1.5] lg:transition-all lg:ease-out lg:duration-500 rounded-lg'>
                        <ModalTemplate 
                            modalActivator={ <ReusableCardComponent 
                                                key={person.slug.current} 
                                                imgUrl={person.photo ? urlFor(person.photo.asset._ref).url() : defaultImg} 
                                                title={person.name} 
                                                rounded="[24px]"
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
