'use client';

import { InfoSection } from '@/app/components/InfoSection';
import { TabbedFaqSection } from '@/app/components/TabbedFaqSection';
import { useModalContext } from '@/app/context/modalContext';
import { InfoSectionType } from '@/app/types'
import { SanityDocument } from 'next-sanity';
import Link from 'next/link';
import React from 'react'

export const FaqModalContent = ({faqs}: {faqs: SanityDocument}) => {
  const { faqSection, faqInfoSections } = faqs;

  const { scrollIntoTheView } = useModalContext();

  return (
      <>
          <div className="relative grid grid-cols-3 grid-rows-1 px-9 py-10">
              <div className="sticky top-0 h-96 p-4 grid">
                  <h3 className="font-medium font-semibold text-lg">On this page</h3>
                    <Link key="faqs" className="text-thin text-sm" onClick={(e) => scrollIntoTheView(e, "faqSection")} href={""}>FAQs</Link>
                    {
                      faqInfoSections?.map((infoSection: InfoSectionType, index: number) => (
                          <Link key={index+1} className="text-thin text-sm" onClick={(e) => scrollIntoTheView(e, infoSection.slug.current)} href={""}>{infoSection.title}</Link>
                      ))
                    }
              </div>
              <div className="col-span-2 h-auto p-6 relative self-end">
                {/* FAQ Tabbed Section Component */}
                <div id="faqSection">
                  <TabbedFaqSection sections={faqSection} />
                </div>
                {
                  faqInfoSections?.map((section: InfoSectionType) => (
                      <div key={section.slug.current}>
                        <InfoSection infoSection={section} />
                      </div>
                  ))
                }
              </div> 
          </div> 
      </>
  )
}
