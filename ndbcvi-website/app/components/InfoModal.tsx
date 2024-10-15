'use client';

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image'; 
import { getImageProps } from 'next/image';
import { InfoSection } from './InfoSection';
import { urlFor } from '@/sanity/lib/image';
import { InfoSectionType, InfoPopupProps } from '../types';




export const InfoModal = (props: InfoPopupProps) => {

    const {introduction, title, slug, thumbnailImage, thumbnailCaption, headerImages, infoSections } = props;

    // State controlling if the modal is open or not
    const [open, setOpen] = useState(false);

    // Wait for the DOM to be ready before teleporting modal to the top of the DOM
    const [domReady, setDomReady] = useState(false)
    useEffect(() => {
        setDomReady(true);
        
    }, []);

    // Element where the modal will be teleported to
    const modalTeleport = (typeof document !== 'undefined' && document.getElementById('portal')) as HTMLElement;

    const getBackgroundImage = (srcSet = '') => {
        const imageSet = srcSet
            .split(', ')
            .map((str) => {
                const [url, dpi] = str.split(' ')
                return `url("${url}") ${dpi}`
            })
            .join(', ');
        return `image-set(${imageSet})`
    }

    // Helper function for scrolling to sections of the modal without changing the URL
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
            <div className='group relative h-full ap-2 cursor-pointer px-6 pt-12 flex flex-col' onClick={() => setOpen(true)}>
                <Image 
                    src={urlFor(thumbnailImage.asset._ref).url()}
                    alt="placeholder image"
                    width={450}
                    height={50}
                    className='absolute inset-0 h-full w-full object-cover object-center brightness-50'
                />
                <div className='z-10'>
                    <p className='text-white text-3xl font-semibold my-5 mx-3'>{title}</p>
                    <p className='text-white my-5 mx-3'>{thumbnailCaption}</p>
                </div>
                <button className='p-2 mx-3 my-6 w-2/5 bg-white text-black rounded-full transition-all opacity-0 group-hover:opacity-100 duration:750 z-10'>
                    Learn more
                </button>
            </div>
            {
                domReady &&
                createPortal(
                    <div id='backdrop' onClick={() => setOpen(false)} className={`flex flex-col items-center z-20 overflow-scroll overscroll-contain transition-colors overflow-scroll ${open ? "fixed inset-0 bg-black/70" : ""}`}>
                        <div id="infoPopup" onClick={(e) => e.stopPropagation()} className={`absolute my-5 left-1/12 w-11/12 h-11/12 pb-2 rounded-3xl bg-white transition-all ${open ? "scale-100 opacity-100" : 'scale-125 opacity-0'}`}>
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
                        </div>
                    </div>,
                    modalTeleport
                )
            }
        </>
    )
}
