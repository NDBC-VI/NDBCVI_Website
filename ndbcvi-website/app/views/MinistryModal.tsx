'use client';

import React from 'react'
import Link from 'next/link';
import Image from 'next/image'; 
import { SanityDocument } from 'sanity';
import { InfoSection } from '../components/InfoSection';
import { urlFor } from '@/sanity/lib/image';


type MinistryModalProps = {
    images: SanityDocument[],
    infoSections: SanityDocument[]
}

export const MinistryModal: React.FC<MinistryModalProps> = (props) => {
    const { images, infoSections } = props
    const leftImage = images[0];


    const scrollIntoTheView = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        let element = document.getElementById(id) as HTMLElement;
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
        <div id="ministryPopup" className="min-h-[300vh] max-h-[400vh] pb-10 w-11/12 rounded-3xl bg-white">

            <div className="h-[60vh] px-9 py-10 rounded-t-3xl">
                <div className="h-[15%] w-full flex flex-row justify-between items-center">
                    <h1 className="text-4xl font-bold">Our Ministries</h1>
                    <button className='w-8 h-8 rounded-full bg-slate-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="grey" className="size-6 mx-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="h-[80%] my-5 w-full flex flex-row justify-around items-end">
                    <Image 
                        src={urlFor(leftImage.image).url()}
                        alt="placeholder image"
                        width={450}
                        height={200}
                    />

                    <Image 
                        src={urlFor(leftImage.image).url()}
                        alt="placeholder image"
                        width={350}
                        height={500}
                    />
                </div>
            </div>
            <div className="relative h-[350vh] pb-10">
                <div className="sticky top-0 w-1/5 h-96 p-4 grid">
                    <h3 className="font-medium text-lg">On this page</h3>

                    <Link className="text-thin text-sm" onClick={(e) => scrollIntoTheView(e, 'introduction')} href={""}>Introduction</Link>
                    <Link className="text-thin text-sm" onClick={(e) => scrollIntoTheView(e, 'worship-and-music')} href={""}>Worship and Music</Link>
                    <Link className="text-thin text-sm" onClick={(e) => scrollIntoTheView(e, 'education-and-spiritual')} href={""}>Education and Spiritual</Link>
                    <Link className="text-thin text-sm" onClick={(e) => scrollIntoTheView(e, 'mission-and-outreach')} href={""}>Mission and Outreach</Link>
                    <Link className="text-thin text-sm" onClick={(e) => scrollIntoTheView(e, 'admin-and-operations')} href={""}>Admin and Operations</Link>
                    <Link className="text-thin text-sm" onClick={(e) => scrollIntoTheView(e, 'community-life')} href={""}>Community Life</Link>
                </div>
                <div className="max-w-2xl p-6 absolute top-0 right-[10vw]">
                { infoSections.map(section => {
                        return (
                            <div key={section._id} >
                                <InfoSection infoSection={section} />
                            </div>
                        )
                })}
                </div>
            </div>
        </div>
    )
}
