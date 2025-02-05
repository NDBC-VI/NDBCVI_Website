'use client';

import { InfoSection } from '../components/InfoSection';
import { TabbedFaqSection } from './components/TabbedFaqSection';
import { InfoSectionType } from '@/app/types'
import { SanityDocument } from 'next-sanity';
import React from 'react'
import { ScrollLinks } from '../components/ScrollLinks';

export const FaqModalContent = ({faqs}: {faqs: SanityDocument}) => {
  const { faqSection, faqInfoSections } = faqs;

  return (
      <div className='w-full'>
        <div className="w-full md:flex md:flex-row md:justify-between md:space-x-10">
          <div className='ml-[20px] md:flex md:flex-row md:justify-between md:space-x-10 h-fit hidden md:block md:sticky md:top-0 '>
            <ScrollLinks sections={[{title: "FAQs", slug: "faqs"}, ...faqInfoSections.map((section: InfoSectionType) => ({title: section.title, slug: section.slug.current}))]}/>
          </div>
          <div id="faqs" className="md:w-2/3 md:px-6 md:relative md:self-end">
            <h1 className='text-[24px] mx-[24px] font-[600] mb-[18px] md:text-[36px] md:block'>FAQs</h1>
            <h3 className='text-[16px] text-[#757575] mx-[24px] font-[500]'>Tap categories to see more</h3>
            <div id="faqSection">
              <TabbedFaqSection sections={faqSection} />
            </div>
            {
              faqInfoSections?.map((section: InfoSectionType) => (
                  <div id={section.slug.current} key={section.slug.current}>
                    <InfoSection infoSection={section} />
                  </div>
              ))
            }
          </div> 
        </div> 
      </div>
  )
}
