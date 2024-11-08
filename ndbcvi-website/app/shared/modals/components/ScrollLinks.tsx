"use client";

import { useModalContext } from '@/app/context/modalContext';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import upArrow from '@/app/assets/svgs/arrow-up-white.svg';
import downArrow from '@/app/assets/svgs/arrow-down.svg';

type ScrollLinkType = {
    title: string,
    slug: string
}
export const ScrollLinks = ({sections}: {sections: ScrollLinkType[]}) => {
    const { scrollIntoTheView, modalScrollPosition } = useModalContext();

    const [visibleSection, setVisibleSection] = useState("");

    useEffect(() => {
        for(const section of sections) {
            const infoSection = document.getElementById(section.slug) as HTMLElement;

            if(infoSection.offsetTop + infoSection.offsetHeight >= modalScrollPosition) {
                setVisibleSection(section.slug);
                break;
            }
        }
    }, [sections, modalScrollPosition]);

    return (
        <>
            <div className="hidden md:block md:sticky md:top-0 md:h-fit md:p-4 md:flex md:flex-col md:justify-around">
                <h3 className="font-medium font-semibold text-lg">On this page</h3>
                {
                    sections?.map((section: ScrollLinkType, index: number) => (
                        <Link key={index+1} className= {`text-thin text-sm my-3 ${visibleSection === section.slug ? "" : "opacity-40"}`} onClick={(e) => scrollIntoTheView(e, section.slug)} href={""}>{section.title}</Link>
                    ))
                }
            </div>
            <div className='fixed top-[99%] left-[-40px] right-0 flex md:hidden'>
                <details className='w-full mx-auto my-0 group'>
                    <summary className='py-[24px] px-[20px] list-none flex justify-start items-end cursor-pointer bg-[#1D1841] rounded-b-3xl focus-visible:outline-none group-open:rounded-b-none group-open:z-[1]'>
                        <h3 className='flex text-[20px] flex-1 text-white font-semibold group-open:opacity-60'>
                            On this page
                        </h3>
                        <div className='group-open:rotate-180 group-open:opacity-60 flex w-10 items-center justify-center'>
                            <Image src={upArrow} alt="up arrow" />
                        </div>
                    </summary>
                    <div className='w-full overflow-x-scroll bg-[#1D1841] rounded-b-3xl text-white text-[16px] px-[20px] pb-[24px]'>
                        {
                            sections?.map((section: ScrollLinkType, index: number) => (
                                <Link key={index+1} className= {`text-[400] text-nowrap w-fit text-[16px] mr-4 ${visibleSection === section.slug ? "" : "md:opacity-40"}`} onClick={(e) => scrollIntoTheView(e, section.slug)} href={""}>{section.title}</Link>
                            ))
                        }
                    </div>
                </details>
            </div>
        </>
    )
}
