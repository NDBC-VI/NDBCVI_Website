'use client';

import { useModalContext } from '@/app/context/modalContext';
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom';
import Image from 'next/image';
import upArrow from '@/app/assets/svgs/arrow-up-white.svg';
import { ScrollLinkType } from '@/app/types';
import Link from 'next/link';


interface EventScrollLinksProps {
    sections: EventScrollLinkType,
    displayedEvent: number,
    scrollFn: () => void
}

type EventScrollLinkType = {
    title: string,
    index: number,
}

export const EventScrollLinks = ({events, displayedEvent, scrollFn}: {events: EventScrollLinkType[], displayedEvent: number, scrollFn: (e: React.MouseEvent, index: number) => void}) => {
    const { scrollIntoTheView, modalScrollPosition, isOpen } = useModalContext();

    const teleportLocation = (typeof document !== 'undefined' && document.getElementById('small-screen-scrollLinks')) as HTMLElement;

    const [visibleSection, setVisibleSection] = useState("");

    // Wait for the DOM to be ready before teleporting modal to the top of the DOM
    const [domReady, setDomReady] = useState(false);
    useEffect(() => {
        setDomReady(true);
        
    }, []);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    useEffect(() => {
        
        const eventsSection = document.getElementById("events") as HTMLElement;
        const calendarSection = document.getElementById("calendar") as HTMLElement;

        if(eventsSection.offsetTop + eventsSection.offsetHeight >= modalScrollPosition) {
            setVisibleSection('events');
        }
        else if(calendarSection.offsetTop + calendarSection.offsetHeight >= modalScrollPosition) {
            setVisibleSection('calendar');
        }
    }, [modalScrollPosition]);
    
    return (
        <>
                <div className="hidden md:block md:sticky md:top-0 md:h-fit md:p-4 md:flex md:flex-col md:justify-around">
                    <h3 className="font-medium font-semibold text-lg">On this page</h3>
                    {
                        events?.map((section: EventScrollLinkType, index: number) => (
                            <p key={index+1} className= {`text-thin text-sm my-3 cursor-pointer ${displayedEvent === section.index && visibleSection === 'events' ? "" : "opacity-40"}`} onClick={(e) => scrollFn(e, section.index)}>{section.title}</p>
                        ))
                    }
                    <Link id='calendar-link' className= {`text-thin text-sm my-3 ${visibleSection === 'calendar' ? "" : "opacity-40"}`} onClick={(e) => scrollIntoTheView(e, 'calendar')} href={""}>Calendar</Link>
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
                                    events?.map((section: EventScrollLinkType, index: number) => (
                                        <div key={index+1} className="snap-center w-fit">
                                            <p className= {`text-[400] text-nowrap text-[16px] mr-4 cursor-pointer ${displayedEvent === section.index && visibleSection === "events" ? "" : "opacity-40"}`} onClick={(e) => scrollFn(e, section.index)}>{section.title}</p>
                                        </div>
                                    ))
                                }
                                <div className="snap-center w-fit">
                                    <p className= {`text-[400] text-nowrap text-[16px] mr-4 cursor-pointer ${visibleSection === "calendar" ? "" : "opacity-40"}`} onClick={(e) => scrollIntoTheView(e, 'calendar')}>Calendar</p>
                                </div>
                            </div>

                        </div>
                    </div>,
                teleportLocation)
            }
            </>
    )
}
