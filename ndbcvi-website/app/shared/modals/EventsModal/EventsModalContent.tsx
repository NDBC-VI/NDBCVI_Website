"use client";

import { useModalContext } from '@/app/context/modalContext';
import { Calendar } from '@/app/shared/modals/EventsModal/components/Calendar';
import { SanityDocument } from 'next-sanity';
import React, { useState } from 'react';
import { Carousel } from '../../components/Carousel';
import { ActionPromptBtn } from '../BasicModal/components/ActionPromptBtn';
import { EventScrollLinks } from './components/EventScrollLinks';
import { useNavBarContext } from '@/app/context/navBarContext';
import { ImageCarousel } from '../../components/ImageCarousel';
import { GalleryModalContent } from '../GalleryModal/GalleryModalContent';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';


export const EventsModalContent = () => {
  
  const { eventsPopup } = useNavBarContext(); 
  const { title, images } = eventsPopup.data;
  const { upcomingEvents } = eventsPopup;

  const { scrollIntoTheView } = useModalContext();

  const [displayed, setDisplayed] = useState(0);

  const scrollToEvent = (e: React.MouseEvent, index: number) => {
    scrollIntoTheView(e, 'events');
    setDisplayed(index);
  }
  const scrollToPrev = () => {
    setDisplayed((curr) => (curr === 0 ? upcomingEvents.length - 1 : curr - 1));
  }
  const scrollToNext = () => {
    setDisplayed((curr) => (curr === upcomingEvents.length - 1 ? 0 : curr + 1));
  }

  const [galleryMode, setGalleryMode] = useState(false);
  const toggleGalleryMode = () => setGalleryMode(!galleryMode);
  
  const eventScrollLinks = upcomingEvents.map((event: SanityDocument, index: number) => ({title: event.title, index: index}));
    
  return (
    <>
      { !galleryMode &&
        <div className='w-full mb-[40px]'>
          <div className='absolute right-[5%] top-[24px] md:hidden'>
              <ActionPromptBtn title="Add to calendar" url=""/>
          </div>
            <div className="h-fit px-[20px] mb-[24px] overflow-hidden">
              <h1 className="text-[24px] font-[600] md:text-[36px]">{title}</h1>
              
              <div id='eventsHeaderImagesLgScreen' className={`${images.length === 0 ? "hidden" : "" } relative mt-[24px] w-full h-[370px] flex flex-row justify-between items-end hidden md:flex`}>
                {
                    images.map((image: SanityImageObject, i: number) => {
                        return(
                            <div key={i} className='w-5/6 h-full mr-[8px] relative pr-[15px] overflow-hidden shrink-0 rounded-[24px] cursor-pointer
                                            lg:w-1/4 lg:mr-0 lg:mx-[4px]'>
                                <Image 
                                    src={urlFor(image.asset._ref).url()}
                                    alt="placeholder image"
                                    fill={true}
                                    onClick={toggleGalleryMode}
                                />
                            </div>
                        )
                    })
                }
              </div>
              <div id='eventsHeaderImagesSmallScreen' className='md:hidden'>
                <ImageCarousel
                    images={images}
                    next={scrollToNext}
                    prev={scrollToPrev}
                    displayed={displayed}
                    buttonsPosition='start'
                    toolbarBottom={true}
                    autoSlide={false}
                    autoSlideInterval={0}
                    clickFn={toggleGalleryMode}
                />
              </div>

            </div>
          <div className="w-full md:flex md:flex-row md:justify-between md:space-x-10">
            <EventScrollLinks events={eventScrollLinks} displayedEvent={displayed} scrollFn={scrollToEvent} />
            <div className="w-full md:w-2/3 md:px-6 md:relative md:self-end">
              <div id="events" className="w-full">
                <Carousel items={upcomingEvents} next={scrollToNext} prev={scrollToPrev} displayed={displayed} autoSlide={true} autoSlideInterval={3000} />
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
      }
      {
        galleryMode &&
        <GalleryModalContent images={images} parentModal={title} returnToModal={toggleGalleryMode} />
      }
    </>
  )
}
