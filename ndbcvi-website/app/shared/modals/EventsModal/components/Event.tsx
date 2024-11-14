'use client';

import { urlFor } from '@/sanity/lib/image'
import { PortableText, SanityDocument } from 'next-sanity'
import Image from 'next/image'
import React from 'react'
import { EventsModalCountdownComponent } from './EventsModalCountdownComponent'
import blackMapPin from "@/app/assets/svgs/map-pin-black.svg";
import calendar from "@/app/assets/svgs/calendar.svg";
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
              <div className="flex gap-[6px] items-center">
                <Image src={blackMapPin} alt="map pin" width={24} />
                <p className='text-[16px] font-[400]'>{event.location}</p>
              </div>
              <a className="text-[16px] font-[400] underline" href={event.googleMapsLink} target="_blank">
                Open location in Maps
              </a>
            </div>
        </div>
      </div>
  )
}
