import { PortableText } from 'next-sanity'
import React from 'react'
import { ReverendsList } from '../components/ReverendsList'
import { ReverendList } from '@/app/types'

export const Reverends = ({reverends}: {reverends: ReverendList}) => {
    return (
        <section className='w-full pl-[40px] flex flex-col items-center z-0 lg:px-[40px]'>
            <div className='w-full flex flex-col items-start
                    lg:flex-row lg:justify-between lg:mb-[5vh] lg:text-right'>
                <h2 className='text-[24px] mb-[16px] font-[600] lg:text-[48px]'>Reverends</h2>
                <div className='text-[16px] lg:w-3/5 lg:text-[24px]'>
                    <PortableText value={reverends.description} />
                </div>
            </div>
            <div className='w-full flex flex-row justify-center my-5'>
                <ReverendsList list={reverends.reverendList}  />
            </div>
        </section>
    )
}
