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
      <>
          <div className='relative grid grid-cols-3 grid-rows-1 px-9 py-10'>
            <ScrollLinks sections={[{title: "FAQs", slug: "faqs"}, ...faqInfoSections.map((section: InfoSectionType) => ({title: section.title, slug: section.slug.current}))]}/>
            <div id="faqs" className="col-span-2 h-auto p-6 relative self-end">
              {/* FAQ Tabbed Section Component */}
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
      </>
  )
}
