import React from 'react'
import Countdown, { zeroPad } from 'react-countdown'


export const EventsModalCountdownComponent = ({startDate}: {startDate: Date}) => {


    const renderer = ({ days, hours, minutes }: { days: number, hours: number, minutes: number }) => {
        return (
            <div className='w-full flex gap-[12px] md:flex-col md:gap-[24px]'>
                <h3 className='text-[20px] font-[600] leading-[24.2px] md:text-[36px] text-slate-300'><span className='text-black'>{zeroPad(days, 2)}</span> {days!== 1 ? "days" : "day"} </h3>
                <h3 className='text-[20px] font-[600] leading-[24.2px] md:text-[36px] text-slate-300'><span className='text-black'>{zeroPad(hours, 2)}</span> {hours!== 1 ? "hours" : "hour"} </h3>
                <h3 className='text-[20px] font-[600] leading-[24.2px] md:text-[36px] text-slate-300'><span className='text-black'>{zeroPad(minutes, 2)}</span> {minutes!== 1 ? "minutes" : "minute"} </h3>
            </div>
        )
    }

    return (   
        <div>
            <Countdown date={startDate} renderer={renderer} />
        </div>
    )
}
