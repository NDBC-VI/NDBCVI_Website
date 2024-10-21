import { Calendar } from '@/app/components/Calendar';
import { useModalContext } from '@/app/context/modalContext';
import Link from 'next/link';
import React from 'react'

export const EventsModalContent = () => {

  const { scrollIntoTheView } = useModalContext();

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
                      <Link key={0} className="text-thin text-sm" onClick={(e) => scrollIntoTheView(e, "section1")} href={""}>Section 1</Link>
                      <Link key={0} className="text-thin text-sm" onClick={(e) => scrollIntoTheView(e, "section2")} href={""}>Section 2</Link>
                      <Link key={0} className="text-thin text-sm" onClick={(e) => scrollIntoTheView(e, "section3")} href={""}>Section 3</Link>
                      <Link key={0} className="text-thin text-sm" onClick={(e) => scrollIntoTheView(e, "calendar")} href={""}>Calendar</Link>
                </div>
                <div className="col-span-2 h-auto p-6 relative self-end">
                    <div id="section1" className='w-full h-[400px] bg-red-200'>Section1</div>
                    <div id="section2" className='w-full h-[400px] bg-orange-200'>Section2</div>
                    <div id="section3" className='w-full h-[400px] bg-yellow-200'>Section3</div>
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
