'use client';

import { SanityDocument } from 'next-sanity';
import React from 'react'
import { InfoModalProps } from '../types';
import ModalComponent from '@/app/components/ModalComponent';
import { InfoModal } from '../components/InfoModal';
import { GroupsThumbnails } from '../components/GroupsThumbnails';

interface InvitationsSectionProps{
    popups: SanityDocument[]
}

export const InvitationsSection: React.FC<InvitationsSectionProps> = (props: InvitationsSectionProps) => {

    return (
        <div className="flex flex-col justify-center items-center">
            <h3 className='text-4xl font-bold m-2'>Be a Blessing</h3>
            <p className='text-sm mt-2 mb-8'>Join us and experience the love of God at NDBC</p>
            <div className='w-full flex flex-row items-center'>
                {
                    props.popups.map((infoPopup: SanityDocument) => {
                        const infoModalProps: InfoModalProps = {
                            introduction: infoPopup?.introduction,
                            title: infoPopup?.title,
                            slug: { 
                                current: infoPopup?.slug.current,
                            },
                            thumbnailImage: infoPopup?.thumbnailImage,
                            thumbnailCaption: infoPopup?.thumbnailCaption,
                            headerImages: infoPopup?.headerImages,
                            infoSections: [...infoPopup?.infoSections]
                        }
                        return (
                        <div key={infoPopup.slug.current} className='grow h-[50vh]'>
                            <ModalComponent.ModalProvider modalContent={<InfoModal {...infoModalProps}/>}>
                                <ModalComponent.Modal>
                                    <ModalComponent.Activator>
                                        <GroupsThumbnails {...infoModalProps} />
                                    </ModalComponent.Activator>
                                </ModalComponent.Modal>
                            </ModalComponent.ModalProvider>
                        </div>
                        );
                    })
                }
                
            </div>
        </div>

    )
}


// <InfoModal {...infoModalProps} /> 
// <ModalComponent.Root key={infoPopup.slug.current} modalContent={infoModalProps}>
//     <ModalComponent.Activator>
//         <div className='group relative h-full ap-2 cursor-pointer px-6 pt-12 flex flex-col justify-end'>
//             <Image 
//                 src={urlFor(infoModalProps.thumbnailImage.asset._ref).url()}
//                 alt="placeholder image"
//                 width={450}
//                 height={50}
//                 className='absolute inset-0 h-full w-full object-cover object-center brightness-50'
//             />
//             <div className='z-10'>
//                 <p className='text-white text-3xl font-semibold my-5 mx-3'>{infoModalProps.title}</p>
//                 <p className='text-white my-5 mx-3'>{infoModalProps.thumbnailCaption}</p>
//             </div>
//             {/* <button className='p-2 mx-3 my-6 w-2/5 bg-white text-black rounded-full transition-all opacity-0 group-hover:opacity-100 duration:750 z-10'>
//                 Learn more
//             </button> */}
//         </div>
//     </ModalComponent.Activator>

//     <ModalComponent.InfoBody />
// </ModalComponent.Root>