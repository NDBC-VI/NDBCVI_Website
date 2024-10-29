'use client';

import Image from 'next/image'; 
import { urlFor } from '@/sanity/lib/image';
import { InfoSection } from '../components/InfoSection';
import { InfoSectionType, BasicModalPropsType } from '@/app/types';
import { ScrollLinks } from '../components/ScrollLinks';




export const BasicModalContent = (props: BasicModalPropsType) => {
    const {introduction, title, headerImages, infoSections } = props;

    const sections = [{title: introduction.title, slug: introduction.slug.current}, ...infoSections.map((section: InfoSectionType) => ({title: section.title, slug: section.slug.current}))];
    
    return (
        <>
            <div className="h-[60vh] px-9 py-10 rounded-t-3xl">
                <div className="h-[15%] w-full flex flex-row justify-between items-center">
                    <h1 className="text-4xl font-bold">{title}</h1>
                </div>
                <div className="h-[80%] my-5 w-full flex flex-row justify-around items-end">
                    <Image 
                        src={urlFor(headerImages[0].asset._ref).url()}
                        alt="placeholder image"
                        width={450}
                        height={200}
                    />

                    <Image 
                        src={urlFor(headerImages[1].asset._ref).url()}
                        alt="placeholder image"
                        width={350}
                        height={500}
                    />
                </div>
            </div>
            <div className="flex flex-row justify-between space-x-10">
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
        </>
    )
}
