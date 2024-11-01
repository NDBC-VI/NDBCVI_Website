'use client';

import { BasicModalPropsType, InfoSectionType } from '@/app/types';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { useState } from 'react';
import { InfoSection } from '../components/InfoSection';
import { ScrollLinks } from '../components/ScrollLinks';
import mapPin from "@/app/assets/svgs/map-pin.svg";




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
            <div>
                <div className="h-fit my-5 py-5 px-9 py-10">
                    <div className="h-[15%] w-1/2 flex flex-row justify-between items-center">
                        <h1 className="text-4xl font-bold">{title}</h1>
                    </div>
                    <div className="min-h-[60vh] my-5 py-5 w-full flex flex-row justify-around items-end">
                        <Image 
                            src={urlFor(headerImages[0].asset._ref).url()}
                            alt="placeholder image"
                            width={500}
                            height={200}
                        />

                        <div className='relative w-fit h-fit cursor-pointer' onClick={toggleGalleryMode}>
                            <div className='absolute z-10 w-full h-full bg-gradient-to-b from-30% from-transparent to-black'></div>
                            <Image
                                src={urlFor(headerImages[5].asset._ref).url()}
                                alt="placeholder image"
                                width={300}
                                height={400}
                                style={{objectFit: 'contain'}}
                            />
                            <div className='absolute bottom-5 z-20 w-full text-white flex flex-col items-center'>
                                <Image src={mapPin} alt="map pin" width={24} />
                                <p>See more images</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between my-5 space-x-10">
                    <ScrollLinks sections={sections}/>
                    <div className="w-2/3 px-6 relative self-end">
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
                    { headerImages.map(image => (
                        <Image 
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
