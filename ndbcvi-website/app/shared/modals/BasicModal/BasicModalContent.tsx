'use client';

import { BasicModalPropsType, InfoSectionType } from '@/app/types';
import { useState } from 'react';
import { InfoSection } from '../components/InfoSection';
import { ScrollLinks } from '../components/ScrollLinks';
import { ActionPromptBtn } from './components/ActionPromptBtn';
import { GalleryModalContent } from '../GalleryModal/GalleryModalContent';
import { ImageSlider } from '../../components/ImageSlider';
import { SanityImage } from '../../components/SanityImage';


export const BasicModalContent = (props: BasicModalPropsType) => {
    const {introduction, title, headerImages, infoSections } = props;

    const [galleryMode, setGalleryMode] = useState(false);
    const toggleGalleryMode = () => {
        setGalleryMode(!galleryMode);
    }

    const sections = [{title: introduction.title, slug: introduction.slug.current}, ...infoSections.map((section: InfoSectionType) => ({title: section.title, slug: section.slug.current}))];
    
    return (
        <>
            { !galleryMode && 
            <div className='w-11/12'>
                <div className='absolute right-[5%] top-[24px] md:hidden'>
                    <ActionPromptBtn title="Join a ministry" url=""/>
                </div>
                <div className="h-fit px-[20px] mb-[24px] overflow-hidden">
                    <h1 className="text-[24px] font-[600] md:text-[36px]">{title}</h1>
                    <div id='basicHeaderImagesLgScreen' className={`${headerImages.length === 0 ? "hidden" : "" } relative mt-[24px] w-full h-[370px] flex flex-row justify-between items-end hidden lg:flex`}>
                        {
                            headerImages.map((image, i) => {
                                return(
                                    <div key={i} onClick={toggleGalleryMode} className='w-5/6 h-full mr-[8px] relative pr-[15px] overflow-hidden shrink-0 rounded-[24px] cursor-pointer
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
                    <div className='h-fit hidden md:block md:sticky md:top-0'>
                        <ScrollLinks sections={sections}/>
                        <div className="flex flex-col items-start mt-[60px] ">
                            <h1 className='text-[24px] font-[600] text-[#1D1841] leading-[29.05px] mb-[10px]
                                md:text-[36px] md:leading-[43.57px] md:mb-[36px]'>
                                    We&apos;re excited to <br /> have you join us
                            </h1>
                            <ActionPromptBtn title='Join a ministry' url=''/>
                        </div>
                    </div>
                    <div className="md:w-2/3 md:px-6 md:relative md:self-end">
                        {
                            introduction?.slug?.current !== undefined &&
                            <div id={introduction.slug.current} key={introduction.slug.current} >
                                <InfoSection infoSection={introduction} />
                            </div>
                        }
                        { infoSections?.map(section => (
                                    <div id={section.slug.current} key={section.slug.current} >
                                        <InfoSection infoSection={section} />
                                    </div>
                                ))
                        }
                        <div className='bg-[#F6F6F6] w-full mx-[20px] px-[52px] py-[60px] mb-10 rounded-[24px]'>
                            <div className="flex flex-col items-center gap-[10px]">
                                <h1 className='text-[24px] font-[600] text-[#1D1841] text-center leading-[29.05px] mb-[10px]
                                    md:text-[36px] md:leading-[43.57px] md:mb-[36px]'>
                                        We&apos;re excited to <br className='md:hidden' /> have <br className='hidden md:block' /> you join us
                                </h1>
                                <ActionPromptBtn title='Join a ministry' url=''/>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div>
            }
            { galleryMode &&
                <GalleryModalContent images={headerImages} parentModal={title} returnToModal={toggleGalleryMode} />
            }
        </>
    )
}
