'use client';

import { urlFor } from '@/sanity/lib/image'
import { SanityDocument } from 'next-sanity'
import Image from 'next/image'
import React from 'react'
import { EventsModalCountdownComponent } from './EventsModalCountdownComponent'
import blackMapPin from "@/app/assets/svgs/map-pin-black.svg";
import calendar from "@/app/assets/svgs/calendar.svg";
import computer from "@/app/assets/svgs/computer-screen.svg";
import magnifyingGlass from "@/app/assets/svgs/magnifying-glass.svg";
import ReusableCardComponent from '@/app/shared/components/ReusableCardComponent'

type EventPropsType = {
  event: SanityDocument
}
export const Event = (props: EventPropsType) => {
  const { event } = props;

  const formatDate = (startDate: Date) => {
    const dayOfMonth = startDate.getDate();
    const formattedDay = `${dayOfMonth}${dayOfMonth % 10 === 1 && dayOfMonth !== 11 ? 'st' : dayOfMonth % 10 === 2 && dayOfMonth !== 12 ? 'nd' : dayOfMonth % 10 === 3 && dayOfMonth !== 13 ? 'rd' : 'th'} `;
    return formattedDay + Intl.DateTimeFormat('en-NG', {
      month: "long",
      year: "numeric"
    }).format(startDate);
  }

  console.table(event);
  return (
      <div className='w-full px-[20px] flex flex-col justify-center'>
        <div className="flex w-full flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2">
              <ReusableCardComponent imgUrl={urlFor(event.image.asset._ref).url()} title={event.title} body='' rounded='[24px]' />
            </div>
            <div className='flex flex-col gap-[20px] mb-[24px] md:self-center md:ml-[24px]'>
              <EventsModalCountdownComponent startDate={event.startDate} />
              <div className="flex gap-[6px] items-center">
                <Image src={calendar} alt="calendar icon" width={24} />
                <p className='text-[16px] font-[400]'>{formatDate(new Date(event.startDate))}</p>
              </div>
              { event.location !== null &&
                <div className="flex gap-[6px] items-center">
                  <Image src={magnifyingGlass} alt="map pin" width={24} />
                    <p className='text-[16px] font-[400]'>{event.location}</p>
                </div>
              }
              { event.mapsLink && 
                <div className="flex gap-[6px] items-center">
                  <Image src={blackMapPin} alt="map pin" width={24} />
                    <a className="text-[16px] font-[400] underline" href={event.mapsLink} target="_blank">
                      Open location in Maps
                    </a>
                </div>
              }
              { event.onlineMeetinglink !== null &&
                <div className="flex gap-[6px] items-center">
                  <Image src={computer} alt="map pin" width={24} />
                  <a className="text-[16px] font-[400] underline" href={event.onlineMeetingLink} target="_blank">
                    Join Online
                  </a>
                </div>
              }
            </div>
        </div>
      </div>
  )
}
