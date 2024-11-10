'use client';

import { BasicModalPropsType, InfoSectionType } from '@/app/types';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { useState } from 'react';
import { InfoSection } from '../components/InfoSection';
import { ScrollLinks } from '../components/ScrollLinks';
import greyNavArrow from "../../../assets/svgs/nav-arrow-grey.svg";
import blackNavArrow from "../../../assets/svgs/nav-arrow-black.svg";
import { ActionPromptBtn } from './components/ActionPromptBtn';


export const BasicModalContent = (props: BasicModalPropsType) => {
    const {introduction, title, headerImages, infoSections } = props;

    const [galleryMode, setGalleryMode] = useState(false);
    const toggleGalleryMode = () => {
        setGalleryMode(!galleryMode);
    }

    const [displayed, setDisplayed] = useState(0);
    
    const prev = () => {
        setDisplayed(displayed - 1);
    }
    const next = () => {
        setDisplayed(displayed + 1);
    }


    const sections = [{title: introduction.title, slug: introduction.slug.current}, ...infoSections.map((section: InfoSectionType) => ({title: section.title, slug: section.slug.current}))];
    
    return (
        <>
            { !galleryMode && 
            <div className='w-11/12'>
                <div className='absolute right-[5%] top-[24px] md:hidden'>
                    <ActionPromptBtn title="Join a ministry" url=""/>
                </div>
                <div className="h-fit mt-[24px] mb-[66px] px-[20px] overflow-hidden">
                    <h1 className="text-[24px] font-[600] md:text-[36px]">{title}</h1>
                    <div className='relative mt-[24px] w-full h-[370px] flex flex-row justify-between items-end transition-transform ease-out duration-500' style={{transform: `translateX(-${displayed * 85}%`}}>
                        {
                            headerImages.map((image, i) => {
                                return(
                                    <div key={i} className='w-5/6 h-full mr-[8px] relative pr-[15px] overflow-hidden shrink-0 rounded-[24px]' >
                                        <Image 
                                            src={urlFor(image.asset._ref).url()}
                                            alt="placeholder image"
                                            fill={true}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div id="modal-carouselScrollers" className="flex gap-[6px] mt-[18px] md:hidden">
                        <button onClick={prev} disabled={displayed === 0}>
                            <Image src={displayed === 0 ? greyNavArrow : blackNavArrow} alt="nav left icon" className='rotate-180'/>
                        </button>
                        <button onClick={next} disabled={displayed === headerImages.length - 1}>
                            <Image src={displayed === headerImages.length-1 ? greyNavArrow : blackNavArrow} alt="nav right icon" />
                        </button>
                    </div>
                </div>
                <div className="ml-[20px] pb-6 md:flex md:flex-row md:justify-between md:space-x-10">
                    <ScrollLinks sections={sections}/>
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
                    </div> 
                </div> 
            </div>
            }
            { galleryMode &&
            <div className='flex flex-col items-center'>
                <div className="h-[15%] w-full px-9 grid grid-cols-3">
                    <h1 className="text-4xl font-bold self-center">{title}</h1>
                    { galleryMode &&
                        <button
                            type="button"
                            className="justify-self-center py-2 px-5 my-10 border border-black rounded-[100px] flex items-center gap-[6px] font-[500] cursor-pointer"
                            onClick={toggleGalleryMode}
                            >
                            <p>Go back to reading</p>
                        </button>
                    }
                </div>
                <div className='py-14 flex flex-row items-center justify-center flex-wrap'>
                    { headerImages.map((image, i) => (
                        <Image 
                            key={i}
                            src={urlFor(image.asset._ref).url()}
                            alt="placeholder image"
                            width={425}
                            height={200}
                            className='m-2'
                        />
                    ))}
                </div>
            </div>
            }
        </>
    )
}
