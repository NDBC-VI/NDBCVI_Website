'use client';

import { SanityDocument } from 'next-sanity';
import React from 'react'
import { BasicModalPropsType } from '../types';
import { BackgroundImageCard } from '../components/BackgroundImageCard';
import { Modal } from '../components/modals/Modal';
import { BasicModalContent } from './modal-views/BasicModalContent';
import { EventsModalContent } from './modal-views/EventsModalContent';


interface InvitationsSectionProps{
    popups: SanityDocument[],
    events: SanityDocument[]
}

export const InvitationsSection: React.FC<InvitationsSectionProps> = (props: InvitationsSectionProps) => {
    const { popups, events } = props;

    return (
        <div className="flex flex-col justify-center items-center py-10">
            <h3 className='text-4xl font-bold my-2'>Be a Blessing</h3>
            <p className='text-sm mt-2 mb-8'>Join us and experience the love of God at NDBC</p>
            <div className='h-[68vh] flex flex-row items-center'>
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
                        <Modal 
                            key={infoPopup.slug.current} 
                            modalActivator={<BackgroundImageCard {...basicModalProps} />} 
                            modalContent={<BasicModalContent {...basicModalProps}/>} 
                        />
                        );
                    })
                }
            </div>
        </div>

    )
}