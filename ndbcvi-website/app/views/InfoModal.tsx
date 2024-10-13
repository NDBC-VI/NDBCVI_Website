'use client';

import React from 'react'
import Link from 'next/link';
import Image from 'next/image'; 
import { InfoSection } from '../components/InfoSection';
import { urlFor } from '@/sanity/lib/image';
import { InfoSectionType, InfoPopupProps } from '../types';




export const InfoModal: React.FC<InfoPopupProps> = (content: InfoPopupProps) => {


    const scrollIntoTheView = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id) as HTMLElement;
        if (!element) {
            return;
        }
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    };

    return (
        <div id="infoPopup" className="w-11/12 pb-2 rounded-3xl bg-white">
            <div className="h-[60vh] px-9 py-10 rounded-t-3xl">
                <div className="h-[15%] w-full flex flex-row justify-between items-center">
                    <h1 className="text-4xl font-bold">{content.title}</h1>
                    <button className='w-8 h-8 rounded-full bg-slate-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="grey" className="size-6 mx-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="h-[80%] my-5 w-full flex flex-row justify-around items-end">
                    <Image 
                        src={urlFor(content.headerImages[0].asset._ref).url()}
                        alt="placeholder image"
                        width={450}
                        height={200}
                    />

                    <Image 
                        src={urlFor(content.headerImages[1].asset._ref).url()}
                        alt="placeholder image"
                        width={350}
                        height={500}
                    />
                </div>
            </div>
            <div className="relative grid grid-cols-3 grid-rows-1">
                <div className="sticky top-0 h-96 p-4 grid">
                    <h3 className="font-medium text-lg">On this page</h3>
                    {
                        content.introduction?.slug?.current !== undefined &&
                        <Link key={0} className="text-thin text-sm" onClick={(e) => scrollIntoTheView(e, content.introduction.slug.current)} href={""}>{content.introduction.title}</Link>
                    }
                    {
                        content.infoSections?.map((section: InfoSectionType, index: number) => (
                            <Link key={index+1} className="text-thin text-sm" onClick={(e) => scrollIntoTheView(e, section.slug.current)} href={""}>{section.title}</Link>
                        ))
                    }
                </div>
                <div className="col-span-2 h-auto p-6 relative self-end">
                    {
                        content.introduction?.slug?.current !== undefined &&
                        <div key={content.introduction.slug.current} >
                            <InfoSection infoSection={content.introduction} />
                        </div>
                    }
                    { content.infoSections?.map(section => (
                                <div key={section.slug.current} >
                                    <InfoSection infoSection={section} />
                                </div>
                            ))
                    }
                </div> 
            </div> 
        </div>
    )
}
