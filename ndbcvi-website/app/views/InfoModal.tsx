'use client';

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image'; 
import { InfoSection } from '../components/InfoSection';
import { urlFor } from '@/sanity/lib/image';
import { InfoSectionType, InfoPopupProps } from '../types';
import { create } from 'domain';




export const InfoModal = (props: InfoPopupProps) => {

    const {introduction, title, slug, headerImages, infoSections } = props;

    const [open, setOpen] = useState(false);

    // Wait for the DOM to be ready before teleporting modal to the top of the DOM
    const [domReady, setDomReady] = useState(false)
    useEffect(() => {
        setDomReady(true)
    }, [])


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

        <>
            <button type='button' className='h-10 px-4 font-medium text-sm rounded-md text-white bg-gray-900' onClick={() => setOpen(true)}>
                Open Modal
            </button>

            {
                domReady &&
                createPortal(
                    <div id='backdrop' onClick={() => setOpen(false)} className={` flex flex-col items-center overflow-scroll transition-colors overflow-scroll ${open ? "fixed inset-0 bg-black/50" : ""}`}>
                        <div id="infoPopup" onClick={(e) => e.stopPropagation()} className={`absolute top-0 left-1/12 w-11/12 pb-2 rounded-3xl bg-white ${open ? "" : 'hidden'}`}>
                            <div className="h-[60vh] px-9 py-10 rounded-t-3xl">
                                <div className="h-[15%] w-full flex flex-row justify-between items-center">
                                    <h1 className="text-4xl font-bold">{title}</h1>
                                    <button onClick={() => setOpen(false)} className='w-8 h-8 rounded-full bg-slate-100'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="grey" className="size-6 mx-auto">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </button>
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
                                    <h3 className="font-medium text-lg">On this page</h3>
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
                        </div>
                    </div>,
                    document.getElementById('portal')
                )
            }
        </>
    )
}
