import { SanityDocument } from 'next-sanity';
import React from 'react'
import { InfoPopupProps } from '../types';
import { InfoModal } from '../components/InfoModal';

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
                        const infoModalProps: InfoPopupProps = {
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
                            <InfoModal {...infoModalProps} />
                        </div>
                        );
                    })
                }
            </div>
        </div>

    )
}
