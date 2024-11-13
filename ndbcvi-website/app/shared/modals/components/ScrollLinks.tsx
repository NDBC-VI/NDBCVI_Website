"use client";

import { useModalContext } from '@/app/context/modalContext';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import upArrow from '@/app/assets/svgs/arrow-up-white.svg';
import { createPortal } from 'react-dom';
import { ActionPromptBtn } from '../BasicModal/components/ActionPromptBtn';
import { ScrollLinkType } from '@/app/types';


export const ScrollLinks = ({sections}: {sections: ScrollLinkType[]}) => {
    const { scrollIntoTheView, modalScrollPosition, isOpen } = useModalContext();

    const [visibleSection, setVisibleSection] = useState("");

    const teleportLocation = (typeof document !== 'undefined' && document.getElementById('small-screen-scrollLinks')) as HTMLElement;

    // Wait for the DOM to be ready before teleporting modal to the top of the DOM
    const [domReady, setDomReady] = useState(false);
    useEffect(() => {
        setDomReady(true);
    }, []);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

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
                <div className="flex flex-col items-start mt-[60px] ">
                    <h1 className='text-[24px] font-[600] text-[#1D1841] leading-[29.05px] mb-[10px]
                        md:text-[36px] md:leading-[43.57px] md:mb-[36px]'>
                            We're excited to <br /> have you join us
                    </h1>
                    <ActionPromptBtn title='Join a ministry' url=''/>
                </div>
            </div>

        {   domReady && isOpen && createPortal(     
                <div className='absolute bottom-0 left-0 w-full flex justify-center cursor-pointer'>
                    <div className='w-11/12 scale-x-[1.005] flex flex-col md:hidden'>
                        <div className={`w-full z-10 bg-[#1D1841] rounded-b-3xl text-white ${isDropdownOpen ? "rounded-b-none" : ""}`} onClick={toggleDropdown}>
                            <div className='flex justify-between mx-[20px] mt-[24px] mb-[12px]'>
                                <h3 className={`text-[20px] font-[600] ${isDropdownOpen ? "opacity-60" : ""}`}>On this page</h3>
                                <div className={`flex w-10 items-center justify-center transition-all linear duration-300 ${isDropdownOpen ? "opacity-60 rotate-180" : ""}`}>
                                    <Image src={upArrow} alt="up arrow" />
                                </div>
                            </div>
                        </div>
                        <div className={`w-full bg-[#1D1841] text-white z-[9] pl-[20px] pt-0 pb-[18px] rounded-b-3xl flex overflow-x-scroll relative bottom-[50px] opacity-0 transition-all linear duration-300 ${isDropdownOpen ? "translate-y-[50px] opacity-100 z-12" : ""}`}>
                            {
                                sections?.map((section: ScrollLinkType, index: number) => (
                                    <div key={index+1} className="snap-center w-fit">
                                        <Link className= {`text-[400] text-nowrap text-[16px] mr-4 ${visibleSection === section.slug ? "" : "opacity-40"}`} onClick={(e) => scrollIntoTheView(e, section.slug)} href={""}>{section.title}</Link>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>,
            teleportLocation)
        }
        </>
    )
}
