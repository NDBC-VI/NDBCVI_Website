import { useModalContext } from '@/app/context/modalContext'
import Link from 'next/link'
import React from 'react'

type ScrollLinkType = {
    title: string,
    slug: string
}
export const ScrollLinks = ({sections}: {sections: ScrollLinkType[]}) => {
    const { scrollIntoTheView } = useModalContext();

    return (
        <div className="sticky top-0 h-fit p-4 flex flex-col justify-around">
            <h3 className="font-medium font-semibold text-lg">On this page</h3>
            {
                sections?.map((section: ScrollLinkType, index: number) => (
                    <Link key={index+1} className="text-thin text-sm my-3" onClick={(e) => scrollIntoTheView(e, section.slug)} href={""}>{section.title}</Link>
                ))
            }
        </div>
    )
}
