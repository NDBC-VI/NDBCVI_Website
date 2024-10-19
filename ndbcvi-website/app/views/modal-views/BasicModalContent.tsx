'use client';

import Link from 'next/link';
import Image from 'next/image'; 
import { InfoSection } from '../../components/InfoSection';
import { urlFor } from '@/sanity/lib/image';
import { InfoSectionType, BasicModalPropsType } from '../../types';
import { useModalContext } from '../../context/modalContext';




export const BasicModalContent = (props: BasicModalPropsType) => {
    const {introduction, title, headerImages, infoSections } = props;
    
    const { scrollIntoTheView } = useModalContext();

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
            <div className="relative grid grid-cols-3 grid-rows-1">
                <div className="sticky top-0 h-96 p-4 grid">
                    <h3 className="font-medium font-semibold text-lg">On this page</h3>
                    {
                        introduction?.slug?.current !== undefined &&
                        <Link key={0} className="text-thin text-sm" onClick={(e) => scrollIntoTheView(e, introduction.slug.current)} href={""}>{introduction.title}</Link>
                    }
                    {
                        infoSections?.map((section: InfoSectionType, index: number) => (
                            <Link key={index+1} className="text-thin text-sm" onClick={(e) => scrollIntoTheView(e, section.slug.current)} href={""}>{section.title}</Link>
                        ))
                    }
                </div>
                <div className="col-span-2 h-auto p-6 relative self-end">
                    {
                        introduction?.slug?.current !== undefined &&
                        <div key={introduction.slug.current} >
                            <InfoSection infoSection={introduction} />
                        </div>
                    }
                    { infoSections?.map(section => (
                                <div key={section.slug.current} >
                                    <InfoSection infoSection={section} />
                                </div>
                            ))
                    }
                </div> 
            </div> 
        </>
    )
}
