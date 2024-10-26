import { urlFor } from '@/sanity/lib/image'
import { PortableText, SanityDocument } from 'next-sanity'
import Image from 'next/image'
import React from 'react'
import { CountdownComponent } from './CountdownComponent'

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
    <div className='w-[58vw] p-4'>
      <h1 className='mx-2 my-3 font-semibold text-3xl'>{event.title}</h1>
      <div className='flex flex-row flex-wrap'>
        <Image 
          src={urlFor(event.image.asset._ref).width(200).height(250).url()}
          alt="placeholder image"
          width={400}
          height={80}
          className='rounded-2xl m-2 object-cover object-fit'
        />
        <div className='h-[350px] w-1/3 flex-grow flex flex-col m-4 p-5 relative top-[7vh]'>
          <CountdownComponent startDate={event.startDate} />
          <p className='my-1.5'>{formatDate(new Date(event.startDate))}</p>
          <p className='text-sm my-1.5'>{event.location}</p>
          <a className='my-2 font-semibold' href={event.googleMapsLink} target='_blank'>
            <p className='text-sm underline text-blue-900 underline'>
              Open location in Maps
            </p>
          </a>
        </div>
        <div className='mt-8'>
          <PortableText value={event.content} />
        </div>
      </div>
    </div>
  )
}
