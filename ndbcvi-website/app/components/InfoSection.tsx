"use client"

import React from 'react';
import { SanityDocument } from 'next-sanity';
import { PortableText } from 'next-sanity';
// import { client } from '@/sanity/lib/client';

const InfoSection = ({infoSection}: {infoSection: SanityDocument}) => {
    return (
        <main className='container mx-auto prose prose-xl px-4 py-12'>
            <h1>{infoSection.title}</h1>
            {
                infoSection?.content && (
                    <PortableText value={infoSection.content} />
                    )
            }

        </main>
    )
}

export default InfoSection