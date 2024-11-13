"use client";

import { useModalContext } from '@/app/context/modalContext';
import { Calendar } from '@/app/shared/modals/EventsModal/components/Calendar';
import { SanityDocument } from 'next-sanity';
import React, { useState } from 'react';
import { Carousel } from '../../components/Carousel';
import { ActionPromptBtn } from '../BasicModal/components/ActionPromptBtn';
import { EventScrollLinks } from './components/EventScrollLinks';


export const EventsModalContent = ({events}: {events: SanityDocument[]}) => {
  
  const { scrollIntoTheView } = useModalContext();

  const [displayed, setDisplayed] = useState(0);

  const scrollToEvent = (e: React.MouseEvent, index: number) => {
    scrollIntoTheView(e, 'events');
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
        <div className='absolute right-[5%] top-[24px] md:hidden'>
            <ActionPromptBtn title="Add to calendar" url=""/>
        </div>
        <div className="rounded-t-3xl">
            <div className="w-full flex flex-row justify-between items-center">
                <h1 className="text-[48px] mx-[24px] font-[600] hidden md:block">Events</h1>
            </div>
            <div className={`h-[80%] my-5 w-full flex flex-row justify-around items-end`}>
                {/* Header images */}
            </div>
        </div>
        <div className="w-full md:flex md:flex-row md:justify-between md:space-x-10">
          <EventScrollLinks events={eventScrollLinks} displayedEvent={displayed} scrollFn={scrollToEvent} />
          <div className="w-full md:w-2/3 md:px-6 md:relative md:self-end">
            <div id="events" className="w-full">
              <Carousel items={events} next={scrollToNext} prev={scrollToPrev} displayed={displayed} autoSlide={true} autoSlideInterval={3000} />
            </div>
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
