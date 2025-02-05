import Link from 'next/link'
import React, { MouseEventHandler } from 'react'

export const MenuLink = ({link, clickFn}: {link: {title: string, path: string, id: number}, clickFn?: MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <Link
        href={link.path}
        className="group"
    >
        <button
            type="button"
            className="text-[24px] md:text-[30px] font-[600] text-left"
            onClick={clickFn}
        >
            {link.title}
        </button>
        <div className="bg-black w-0 h-0 transition-all duration-500 ease-out group-hover:w-[5.5rem] group-hover:h-[0.5vh]"></div>
    </Link>
  )
}
