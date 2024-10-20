'use client';

import { SanityDocument } from 'next-sanity';
import React from 'react'
import { BasicModalPropsType } from '../types';
import { BackgroundImageCard } from '../components/BackgroundImageCard';
import { Modal } from '../components/modals/Modal';
import { BasicModalContent } from './modal-views/BasicModalContent';


interface InvitationsSectionProps{
    popups: SanityDocument[],
    // test: FaqModalPropsType
}

export const InvitationsSection: React.FC<InvitationsSectionProps> = (props: InvitationsSectionProps) => {
    const { popups } = props;

    // To delete
    // const faqModalTest: FaqModalPropsType = {
    //     title: test.title,
    //     slug: { 
    //         current: test.slug.current,
    //     },
    //     faqSections: test.faqSections,
    //     faqInfoSections: test.faqInfoSections
    //   }
    //   ^ To delete ^

    return (
        <div className="flex flex-col justify-center items-center py-10">
            <h3 className='text-4xl font-bold m-2'>Be a Blessing</h3>
            <p className='text-sm mt-2 mb-8'>Join us and experience the love of God at NDBC</p>

{/* To delete 
      <Modal modalContentProps={<FaqModalContent {...faqModalTest}/>}>
        <div className='bg-black w-[50px] h-[30px]'>Click me!</div>
      </Modal>
      */}
            <div className='h-[68vh] bg-pink-200 flex flex-row items-center'>
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
                        <Modal key={infoPopup.slug.current} modalContentProps={<BasicModalContent {...basicModalProps}/>}>
                            <BackgroundImageCard {...basicModalProps} />
                        </Modal>
                        );
                    })
                }
                
            </div>
        </div>

    )
}