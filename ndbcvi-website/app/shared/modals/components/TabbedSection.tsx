"use client"

import { PortableText } from 'next-sanity'
import { useState } from 'react';
import { InfoSectionType } from '@/app/types';
import TabBtn from '../../components/TabBtn';

export const TabbedSection = ({subSections}: {subSections: InfoSectionType[]}) => {

    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <div className='justify-center items-center py-5'>
            <div className="flex flex-col gap-y-2 w-full">
                <div className="rounded-xl flex flex-row flex-wrap max-w-fit self-center justify-start">
                    {subSections.map((section: InfoSectionType, index: number) => (
                        <div key={section.slug.current} className='m-3'>
                            <TabBtn title={section.title} active={selectedTab === index} clickFn={() => setSelectedTab(index)}/>
                        </div>
                        // <button 
                        //     key={section.slug.current}
                        //     className={`outline-none w-full p-1 m-2 hover:bg-slate-300 rounded-xl text-center focus:text-black
                        //         ${selectedTab === index ? "bg-slate-300 font-semibold" : "bg-slate-100"}`}
                        //     onClick={() => setSelectedTab(index)}
                        // >
                        //     {section.title}
                        // </button>
                    ))}
                </div>
                <div>
                {subSections.map((section: InfoSectionType, index: number) => (
                        <div key={section.slug.current} className={`${selectedTab === index ? "" : 'hidden'}`}>
                            <PortableText value={section.content} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
