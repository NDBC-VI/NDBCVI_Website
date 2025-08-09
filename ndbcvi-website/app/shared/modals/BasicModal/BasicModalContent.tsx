'use client';

import { BasicModalPropsType } from '@/app/types';
import { useState } from 'react';
import { InfoSection } from '../components/InfoSection';
import { GalleryModalContent } from '../GalleryModal/GalleryModalContent';
import { ImageSlider } from '../../components/ImageSlider';
import { SanityImage } from '../../components/SanityImage';

export const BasicModalContent = (props: BasicModalPropsType) => {
    const {title, headerImages, content, subInfoSections } = props;

    const [galleryMode, setGalleryMode] = useState(false);
    const toggleGalleryMode = () => {
        setGalleryMode(!galleryMode);
    }

    return (
        <>
            { !galleryMode && 
            <div className='w-11/12'>
                <div className="h-fit px-[20px] mb-[24px] overflow-hidden">
                    <h1 className="text-[24px] font-[600] md:text-[36px]">{title}</h1>
                    <div id='basicHeaderImagesLgScreen' className={`${headerImages.length === 0 ? "hidden" : "" } relative mt-[24px] w-full h-[370px] flex flex-row justify-between items-end hidden lg:flex`}>
                        {
                            headerImages.map((image, i) => {
                                return(
                                    <div key={i} onClick={toggleGalleryMode} className='w-5/6 h-full mr-[8px] flex items-center relative pr-[15px] overflow-hidden shrink-0 rounded-[24px] cursor-pointer
                                                    lg:w-1/4 lg:mr-0 lg:mx-[4px]'>
                                        <SanityImage image={image} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div id='basicHeaderImagesSmallScreen' className="lg:hidden">
                        <ImageSlider
                            images={headerImages}
                            buttonsPosition='start'
                            toolbarBottom={true}
                            clickFn={toggleGalleryMode}
                        />
                    </div>
                </div>
                <div className="ml-[20px] md:flex md:flex-row md:justify-between md:space-x-10">
                        {
                            content !== undefined &&
                            <InfoSection infoSection={content} />
                        }
                        { subInfoSections?.map(section => (
                                    <div id={section.slug.current} key={section.slug.current} >
                                        <InfoSection infoSection={section} />
                                    </div>
                                ))
                        }
                </div> 
            </div>
            }
            { galleryMode &&
                <GalleryModalContent images={headerImages} parentModal={title} returnToModal={toggleGalleryMode} />
            }
        </>
    )
}
