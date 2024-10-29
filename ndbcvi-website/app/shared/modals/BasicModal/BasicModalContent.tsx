'use client';

import Image from 'next/image'; 
import { urlFor } from '@/sanity/lib/image';
import { InfoSection } from '../components/InfoSection';
import { InfoSectionType, BasicModalPropsType } from '@/app/types';
import { ScrollLinks } from '../components/ScrollLinks';
import { useState } from 'react';




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
                    <div className="h-fit my-5 py-5 w-full flex flex-row justify-around items-end">
                        <Image 
                            src={urlFor(headerImages[0].asset._ref).url()}
                            alt="placeholder image"
                            width={300}
                            height={200}
                        />

                        <Image 
                            src={urlFor(headerImages[1].asset._ref).url()}
                            alt="placeholder image"
                            width={350}
                            height={500}
                            className='cursor-pointer'
                            onClick={toggleGalleryMode}
                        />
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
