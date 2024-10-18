"use client"

import { PortableText } from 'next-sanity'
import { useState } from 'react';
import { InfoSectionType } from '../types';

export const TabbedSection = ({subSections}: {subSections: InfoSectionType[]}) => {

    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <div className='justify-center items-center py-5'>
            <div className="flex flex-col gap-y-2 w-full">
                <div className="bg-grey-100 p-1 rounded-xl flex justify-between items">
                    {subSections.map((section: InfoSectionType, index: number) => (
                        <button 
                            key={section.slug.current}
                            className={`outline-none w-full p-1 m-2 hover:bg-slate-300 rounded-xl text-center focus:text-black
                                ${selectedTab === index ? "bg-slate-300 font-semibold" : "bg-slate-100"}`}
                            onClick={() => setSelectedTab(index)}
                        >
                            {section.title}
                        </button>
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
