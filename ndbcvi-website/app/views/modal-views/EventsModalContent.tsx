import { Calendar } from '@/app/components/Calendar';
import { Carousel } from '@/app/components/Carousel';
import { useModalContext } from '@/app/context/modalContext';
import { SanityDocument } from 'next-sanity';
import Link from 'next/link';
import React from 'react'


export const EventsModalContent = ({events}: {events: SanityDocument[]}) => {
  const { scrollIntoTheView } = useModalContext();
  console.log(events);

  return (
    <div>
      <>
            <div className="h-[60vh] px-9 py-10 rounded-t-3xl">
                <div className="h-[15%] w-full flex flex-row justify-between items-center">
                    <h1 className="text-4xl font-bold">Title</h1>
                </div>
                <div className="h-[80%] my-5 w-full flex flex-row justify-around items-end">
                   {/* Header images */}
                </div>
            </div>
            <div className="relative grid grid-cols-3 grid-rows-1">
                <div className="sticky top-0 h-96 p-4 grid">
                    <h3 className="font-medium font-semibold text-lg">On this page</h3>
                      <Link key={0} className="text-thin text-sm" onClick={(e) => scrollIntoTheView(e, "events")} href={""}>Upcoming Events</Link>
                      <Link key={3} className="text-thin text-sm" onClick={(e) => scrollIntoTheView(e, "calendar")} href={""}>Calendar</Link>
                </div>
                <div id="events" className="col-span-2 h-auto p-6 relative self-end">
                    <Carousel items={events} />
                </div> 
                <div id="calendar" className='col-span-3 p-6 flex flex-col'>
                  <div className='w-4/5 self-end'>
                    <h1 className='text-2xl font-semibold p-6'>Calendar</h1>
                    <Calendar />
                  </div>
                </div>
            </div> 
      </>
    </div>
  )
}
