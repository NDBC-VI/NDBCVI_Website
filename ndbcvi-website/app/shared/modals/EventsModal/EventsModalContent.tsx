import { Calendar } from '@/app/shared/modals/EventsModal/components/Calendar';
import { Carousel } from '../../components/Carousel';
import { SanityDocument } from 'next-sanity';
import React from 'react'
import { ScrollLinks } from '../components/ScrollLinks';


export const EventsModalContent = ({events}: {events: SanityDocument[]}) => {

  return (
      <>
            <div className="max-h-[60vh] px-9 py-10 rounded-t-3xl">
                <div className="h-[15%] w-full flex flex-row justify-between items-center">
                    <h1 className="text-4xl font-bold">Title</h1>
                </div>
                <div className="h-[80%] my-5 w-full flex flex-row justify-around items-end">
                   {/* Header images */}
                </div>
            </div>
            <div className="relative grid grid-cols-3 grid-rows-1">
                <ScrollLinks sections={[{title: "Upcoming Events", slug: "events"}, {title: "Calendar", slug: "calendar"}]}/>
                <div id="events" className="col-span-2 h-auto p-6 relative self-end">
                    <Carousel items={events} autoSlide={true} autoSlideInterval={3000} />
                </div> 
                <div id="calendar" className='col-span-3 p-6 flex flex-col'>
                  <div className='w-4/5 self-end'>
                    <h1 className='text-2xl font-semibold p-6'>Calendar</h1>
                    <Calendar />
                  </div>
                </div>
            </div> 
      </>
  )
}
