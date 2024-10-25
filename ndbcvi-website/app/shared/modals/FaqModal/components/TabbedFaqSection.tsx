"use client"

import { useState } from 'react';
import { FaqSectionType, FaqType } from '@/app/types';
import { ExpandableComponent } from '@/app/shared/components/ExpandableComponent';
import TabBtn from '@/app/shared/components/TabBtn';

export const TabbedFaqSection = ({sections}: {sections: FaqSectionType[]}) => {

    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <div className='justify-center items-center py-5'>
            <div className="flex flex-col gap-y-2">
                {/* Tab buttons */}
                <div className="w-3/5 self-center p-1 rounded-xl flex justify-between items">
                    {sections.map((section: FaqSectionType, index: number) => (
                        <TabBtn key={section.slug.current} title={section.title} active={selectedTab === index} clickFn={() => setSelectedTab(index)}/>
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
                {/* Tab contents  */}
                {
                    sections.map((section: FaqSectionType, index: number) => {
                        return section.faqs.map((faq: FaqType) => {
                            return (
                                <div key={faq.slug.current} className={`w-full ${selectedTab === index ? "" : 'hidden'}`}>
                                    <ExpandableComponent title={faq.title} content={faq.content} />
                                </div>
                            )
                        });
                    })
                }
                </div>
            </div>
        </div>
    )
}
