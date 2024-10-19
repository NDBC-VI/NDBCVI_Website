'use client';

import { SanityDocument } from 'next-sanity';
import React from 'react'
import { BasicModalPropsType } from '../types';
import { BackgroundImageCard } from '../components/BackgroundImageCard';
import { BasicModalTemplate } from '../components/modals/BasicModalTemplate';


interface InvitationsSectionProps{
    popups: SanityDocument[]
}

export const InvitationsSection: React.FC<InvitationsSectionProps> = (props: InvitationsSectionProps) => {
    const { popups } = props;
    return (
        <div className="flex flex-col justify-center items-center">
            <h3 className='text-4xl font-bold m-2'>Be a Blessing</h3>
            <p className='text-sm mt-2 mb-8'>Join us and experience the love of God at NDBC</p>
            <div className='w-full flex flex-row items-center'>
                {
                    popups.map((infoPopup: SanityDocument) => {
                        const basicModalProps: BasicModalPropsType = {
                            introduction: infoPopup?.introduction,
                            title: infoPopup?.title,
                            slug: { 
                                current: infoPopup?.slug.current,
                            },
                            thumbnailImage: infoPopup?.thumbnailImage,
                            thumbnailCaption: infoPopup?.thumbnailCaption,
                            headerImages: infoPopup?.headerImages,
                            infoSections: infoPopup?.infoSections
                        }
                        return (
                        <div key={infoPopup.slug.current} className='grow h-[50vh]'>
                            <BasicModalTemplate basicModalProps={basicModalProps}>
                                <BackgroundImageCard {...basicModalProps} />
                            </BasicModalTemplate>
                        </div>
                        );
                    })
                }
                
            </div>
        </div>

    )
}


// <BasicModal {...BasicModalPropsType} /> 
// <ModalComponent.Root key={infoPopup.slug.current} modalContent={BasicModalPropsType}>
//     <ModalComponent.Activator>
//         <div className='group relative h-full ap-2 cursor-pointer px-6 pt-12 flex flex-col justify-end'>
//             <Image 
//                 src={urlFor(BasicModalPropsType.thumbnailImage.asset._ref).url()}
//                 alt="placeholder image"
//                 width={450}
//                 height={50}
//                 className='absolute inset-0 h-full w-full object-cover object-center brightness-50'
//             />
//             <div className='z-10'>
//                 <p className='text-white text-3xl font-semibold my-5 mx-3'>{BasicModalPropsType.title}</p>
//                 <p className='text-white my-5 mx-3'>{BasicModalPropsType.thumbnailCaption}</p>
//             </div>
//             {/* <button className='p-2 mx-3 my-6 w-2/5 bg-white text-black rounded-full transition-all opacity-0 group-hover:opacity-100 duration:750 z-10'>
//                 Learn more
//             </button> */}
//         </div>
//     </ModalComponent.Activator>

//     <ModalComponent.InfoBody />
// </ModalComponent.Root>