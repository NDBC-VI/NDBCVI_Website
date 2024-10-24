import { urlFor } from '@/sanity/lib/image'
import { PortableText, SanityDocument } from 'next-sanity'
import Image from 'next/image'
import React from 'react'

type EventPropsType = {
  event: SanityDocument
}
export const Event = (props: EventPropsType) => {

  const { event } = props;
  return (
    <div className='bg-green-100 w-[58vw] p-4'>
      <h1 className='mx-2 my-3 font-semibold text-3xl'>{event.title}</h1>
      <div className='flex flex-row flex-wrap'>
        <Image 
          src={urlFor(event.image.asset._ref).width(200).height(250).url()}
          alt="placeholder image"
          width={400}
          height={80}
          className='rounded-2xl m-2 object-cover object-fit'
        />
        <div className='h-[350px] w-1/3 flex-grow flex flex-col m-2 p-5 bg-blue-400 '>
          <p>{event.dateTime}</p>
          <a href={event.googleMapsLink} target='_blank'>
            <p className='text-sm'>
              Open location in Maps
            </p>
          </a>
        </div>
        <div className='m-2'>
          <PortableText value={event.content} />
        </div>
      </div>
    </div>
  )
}
