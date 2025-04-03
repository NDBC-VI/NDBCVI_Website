"use client"

import { PortableText } from 'next-sanity'
import { useState } from 'react';
import { InfoSectionType } from '@/app/types';
import TabBtn from '../../components/TabBtn';

export const TabbedSection = ({subSections}: {subSections: InfoSectionType[]}) => {

    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <div className='w-full justify-center items-center pb-5'>
            <div className="flex flex-col gap-y-2 w-full h-fit overflow-x-hidden">
                <div className="w-full overflow-x-scroll flex items-center">
                    {subSections.map((section: InfoSectionType, index: number) => (
                        <div key={section.slug.current} className='my-3 mr-3 text-[14px] md:text-[18px]'>
                            <TabBtn title={section.title} active={selectedTab === index} clickFn={() => setSelectedTab(index)}/>
                        </div>
                    ))}
                </div>
                <div>
                {subSections.map((section: InfoSectionType, index: number) => (
                        <div key={section.slug.current} className={`text-[16px] font-[400] md:text-[24px] ${selectedTab === index ? "" : 'hidden'}`}>
                            <PortableText value={section.content} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
