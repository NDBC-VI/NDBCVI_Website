"use client"

import React from 'react';
import { PortableText } from '@portabletext/react';
import { TabbedSection } from './TabbedSection';
import { InfoSectionType } from '@/app/types';


export const InfoSection = ({infoSection}: {infoSection: InfoSectionType}) => {
    return (
        <div id={infoSection.slug.current} className='px-4 py-3 mb-[24px]'>
            <h1 className='text-[20px] mb-[18px] md:text-[36px] font-[600]'>{infoSection.title}</h1>
            {
                infoSection?.content && (
                    <div className='text-[16px] font-[400] md:text-[18px]'>
                        <PortableText value={infoSection.content} 
                            components={{
                                list: {
                                    bullet: ({ children }) => (
                                        <ul className="list-disc pl-6">{children}</ul>
                                    ),
                                    number: ({ children }) => (
                                        <ol className="list-decimal pl-6">{children}</ol>
                                    ),
                                },
                                listItem: {
                                    bullet: ({ children }) => <li>{children}</li>,
                                    number: ({ children }) => <li>{children}</li>,
                                },
                        }}/>
                    </div>
                    )
            }

            { infoSection?.subInfoSections?.length > 1 &&
                <>
                    <h2 className='text-[16px] font-[500] text-[#757575] md:text-[18px]'>Tap categories to see more</h2>
                    <TabbedSection subSections={infoSection.subInfoSections} />
                </>
            }

            {
                infoSection?.content && (
                    <div className='text-[16px] font-[400] md:text-[18px]'>
                        <PortableText value={infoSection.summary} 
                            components={{
                                list: {
                                    bullet: ({ children }) => (
                                        <ul className="list-disc pl-6">{children}</ul>
                                    ),
                                    number: ({ children }) => (
                                        <ol className="list-decimal pl-6">{children}</ol>
                                    ),
                                },
                                listItem: {
                                    bullet: ({ children }) => <li>{children}</li>,
                                    number: ({ children }) => <li>{children}</li>,
                                },
                        }}/>
                    </div>
                    )
            }

        </div>
    )
}
