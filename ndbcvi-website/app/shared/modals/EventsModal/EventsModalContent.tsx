"use client";

import { Calendar } from '@/app/shared/modals/EventsModal/components/Calendar';
import { Carousel } from '../../components/Carousel';
import { SanityDocument } from 'next-sanity';
import React, { useState } from 'react'
import { ScrollLinks } from '../components/ScrollLinks';
import { EventScrollLinks } from './components/EventScrollLinks';


export const EventsModalContent = ({events}: {events: SanityDocument[]}) => {
  const [displayed, setDisplayed] = useState(0);
  const scrollToEvent = (index: number) => {
    setDisplayed(index);
  }
  const scrollToPrev = () => {
    setDisplayed((curr) => (curr === 0 ? events.length - 1 : curr - 1));
  }
  const scrollToNext = () => {
    setDisplayed((curr) => (curr === events.length - 1 ? 0 : curr + 1));
  }
  
  const eventScrollLinks = events.map((event: SanityDocument, index: number) => ({title: event.title, index: index}));
    
  return (
      <div className='w-full mb-[40px]'>
            <div className="rounded-t-3xl">
                <div className="w-full flex flex-row justify-between items-center">
                    <h1 className="text-[48px] mx-[24px] font-[600] hidden md:block">Events</h1>
                </div>
                <div className={`h-[80%] my-5 w-full flex flex-row justify-around items-end`}>
                   {/* Header images */}
                </div>
            </div>
            <div className="w-full md:flex md:flex-row md:justify-between md:space-x-10">
                <EventScrollLinks sections={eventScrollLinks} displayedEvent={displayed} scrollFn={scrollToEvent} />
                {/* <ScrollLinks sections={[{title: "Upcoming Events", slug: "events"}, {title: "Calendar", slug: "calendar"}]}/> */}
                <div id="events" className="w-full md:w-2/3 md:px-6 md:relative md:self-end">
                  <Carousel items={events} next={scrollToNext} prev={scrollToPrev} displayed={displayed} autoSlide={true} autoSlideInterval={3000} />
                  <div id="calendar" className='w-full flex flex-col'>
                    <div className='w-full self-end'>
                      <h1 className='text-2xl font-semibold p-6'>Calendar</h1>
                      <Calendar />
                    </div>
                  </div>
                </div> 
            </div> 
      </div>
  )
}
