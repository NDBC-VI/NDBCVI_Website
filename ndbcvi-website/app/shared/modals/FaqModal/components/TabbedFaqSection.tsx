"use client"

import { useState } from 'react';
import { FaqSectionType, FaqType } from '@/app/types';
import { ExpandableComponent } from '@/app/shared/components/ExpandableComponent';
import TabBtn from '@/app/shared/components/TabBtn';
import { PortableTextBlock } from 'next-sanity';

export const TabbedFaqSection = ({sections}: {sections: FaqSectionType[]}) => {

    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <div className='justify-center items-center py-5'>
            <div className="flex flex-col gap-y-2">
                {/* Tab buttons */}
                <div className="w-3/5 self-center p-1 rounded-xl flex justify-between items">
                    {sections.map((section: FaqSectionType, index: number) => (
                        <TabBtn key={section.slug.current} title={section.title} active={selectedTab === index} clickFn={() => setSelectedTab(index)}/>
                    ))}
                </div>
                <div>
                {/* Tab contents  */}
                {
                    sections.map((section: FaqSectionType, index: number) => {
                        return section.faqs.map((faq: FaqType) => {
                            const answer = faq.content as PortableTextBlock;
                            return (
                                <div key={faq.slug.current} className={`w-full ${selectedTab === index ? "" : 'hidden'}`}>
                                    <ExpandableComponent title={faq.title} content={answer} />
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
