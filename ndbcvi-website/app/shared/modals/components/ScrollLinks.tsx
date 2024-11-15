"use client";

import { useModalContext } from '@/app/context/modalContext';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import upArrow from '@/app/assets/svgs/arrow-up-white.svg';
import { createPortal } from 'react-dom';
import { ScrollLinkType } from '@/app/types';


export const ScrollLinks = ({sections}: {sections: ScrollLinkType[]}) => {
    const { scrollIntoTheView, modalScrollPosition, isOpen, handleClose } = useModalContext();

    const [visibleSection, setVisibleSection] = useState("");

    const teleportLocation = (typeof document !== 'undefined' && document.getElementById('small-screen-scrollLinks')) as HTMLElement;

    // Wait for the DOM to be ready before teleporting modal to the top of the DOM
    const [domReady, setDomReady] = useState(false);
    useEffect(() => {
        setDomReady(true);
    }, []);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    }

    useEffect(() => {
        for(const section of sections) {
            const infoSection = document.getElementById(section.slug) as HTMLElement;
            
            // Check to see if the section is visible on the screen, and highlight the link of the visible section.
            // Change the visibility point based on if it's on desktop or mobile
            const visibilityPoint = window.innerWidth <= 768 ? infoSection.offsetTop : infoSection.offsetTop + infoSection.offsetHeight;
            if(visibilityPoint >= modalScrollPosition) {
                setVisibleSection(section.slug);
                break;
            }
        }
    }, [sections, modalScrollPosition]);

    return (
        <>
            <div className="hidden md:block md:h-fit md:p-4 md:flex md:flex-col md:justify-around">
                <h3 className="font-medium font-semibold text-lg">On this page</h3>
                {
                    sections?.map((section: ScrollLinkType, index: number) => (
                        <Link key={index+1} className= {`text-thin text-sm my-3 ${visibleSection === section.slug ? "" : "opacity-40"}`} onClick={(e) => scrollIntoTheView(e, section.slug)} href={""}>{section.title}</Link>
                    ))
                }
            </div>

        {   domReady && isOpen && createPortal(     
                <div className='absolute bottom-0 left-0 w-full flex justify-center' onClick={handleClose}>
                    <div className='w-11/12 scale-x-[1.005] flex flex-col md:hidden'>
                        <div className={`w-full z-10 bg-[#1D1841] rounded-b-3xl text-white cursor-pointer`} onClick={(e) => toggleDropdown(e)}>
                            <div className='flex justify-between mx-[20px] mt-[24px] mb-[12px]'>
                                <h3 className={`text-[20px] font-[600] ${isDropdownOpen ? "opacity-60" : ""}`}>On this page</h3>
                                <div className={`flex w-10 items-center justify-center transition-all linear duration-300 ${isDropdownOpen ? "opacity-60 rotate-180" : ""}`}>
                                    <Image src={upArrow} alt="up arrow" />
                                </div>
                            </div>
                        </div>
                        <div className={`w-full h-[60px] bg-[#1D1841] text-white z-[9] pl-[20px] pt-0 pb-[18px] rounded-b-3xl flex items-end overflow-x-scroll relative bottom-[50px] opacity-0 transition-all linear duration-300 ${isDropdownOpen ? "translate-y-[30px] opacity-100 z-12" : ""}`} onClick={(e: React.MouseEvent) => e.stopPropagation()}>
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
