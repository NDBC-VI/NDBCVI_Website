"use client";

import React, { useState } from 'react'
import { SanityDocument } from 'next-sanity';
import { google, outlook, office365, yahoo, ics } from "calendar-link"
import appleIcon from "@/app/assets/mail-svgs/apple-logo.svg";
import googleCalendarIcon from "@/app/assets/mail-svgs/googlecalendar-logo.svg";
import office365Icon from "@/app/assets/mail-svgs/microsoft-logo.svg";
import outlookIcon from "@/app/assets/mail-svgs/microsoftoutlook-logo.svg";
import calendarIcon from "@/app/assets/svgs/calendar.svg";
import Image from 'next/image';

export const AddToCalendarBtn = ({event}: {event: SanityDocument}) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = () => setIsOpen(!isOpen);

    const addToCalendar = {
        title: event.title,
        description: "PortableTextBlock to String",
        start: event.startDate,
        end: event.endDate || new Date(new Date(event.startDate).getTime() + (1000 * 60 * 60)),
    }
    const appleUrl = ics(addToCalendar);
    const googleUrl = google(addToCalendar);
    const office365Url = office365(addToCalendar);
    const outlookUrl = outlook(addToCalendar);
    const yahooUrl = ics(addToCalendar);
    
    return (
        <div className='' onClick={toggleIsOpen}>
            <button
                type="button"
                className={`bg-[#1D1841] text-white text-[14px] px-[24px] py-[8x] font-[500] py-2 px-6 rounded-[100px] text-nowrap ${isOpen ? 'opacity-70' : 'opacity-100'}`}>
                Add to calendar
            </button>
            <ul className={`${isOpen ? "opacity-100" : "opacity-0 invisible"} absolute transition-opacity bg-white shadow rounded border px-2 py-1`}>
                <li>
                    <a href={appleUrl} target="_blank" className='flex items-center gap-2 px-4 py-2'>
                        <Image src={appleIcon} className='w-4 h-4' alt="export to apple calendar icon" />
                        Apple
                    </a>
                </li>
                <li>
                    <a href={googleUrl} target="_blank" className='flex items-center gap-2 px-4 py-2'>
                        <Image src={googleCalendarIcon} className='w-4 h-4' alt="export to apple calendar icon" />
                        Google    
                    </a>
                </li>
                <li>
                    <a href={office365Url} target="_blank" className='flex items-center gap-2 px-4 py-2'>
                        <Image src={office365Icon} className='w-4 h-4' alt="export to apple calendar icon" />                    
                        Office365
                    </a>
                </li>
                <li>
                    <a href={outlookUrl} target="_blank" className='flex items-center gap-2 px-4 py-2'>
                        <Image src={outlookIcon} className='w-4 h-4' alt="export to apple calendar icon" />
                        Outlook
                    </a>
                </li>
                <li>
                    <a href={yahooUrl} target="_blank" className='flex items-center gap-2 px-4 py-2'>
                        <Image src={calendarIcon} className='w-4 h-4' alt="export to apple calendar icon" />
                        Yahoo
                    </a>
                </li>
            </ul>
        </div>
    )
}
