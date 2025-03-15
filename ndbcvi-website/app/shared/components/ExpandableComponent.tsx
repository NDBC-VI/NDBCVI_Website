import { PortableText, PortableTextBlock } from 'next-sanity'
import React from 'react'

export const ExpandableComponent = ({title, content}: {title: string, content: PortableTextBlock}) => {
    return (
        <div>
            <details className='bg-white rounded group mb-4'>
                <summary className='list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none rounded group-open:rounded-b-none group-open:z-[1]'>
                    <h3 className='flex flex-1 p-4 font-semibold'>
                        {title}
                    </h3>
                    <div className='flex w-10 items-center justify-center'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='rotate-45 group-open:rotate-90 transition-transform'>
                            <path d="M1.13672 16.8639L9.00066 9.00001M9.00066 9.00001L16.8646 1.13605M9.00066 9.00001L1.13672 1.13605M9.00066 9.00001L16.8646 16.8639" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </summary>
                <div className='p-4'>
                    <PortableText value={content} />
                </div>
            </details>
        </div>
    )
}
