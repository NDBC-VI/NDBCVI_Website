"use client"

import React from 'react';
import { SanityDocument } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import { TabbedComponent } from './TabbedComponent';
// import { client } from '@/sanity/lib/client';

export const InfoSection = ({infoSection}: {infoSection: SanityDocument}) => {
    return (
        <main id={infoSection.slug.current} className='container prose prose-xl px-4 py-6'>
            <h1 className='text-2xl font-semibold my-6'>{infoSection.title}</h1>
            {
                infoSection?.content && (
                    <PortableText value={infoSection.content} />
                    )
            }

            { infoSection?.subInfoSections?.length > 1 &&
                <TabbedComponent subSections={infoSection.subInfoSections} />
            }

        </main>
    )
}
