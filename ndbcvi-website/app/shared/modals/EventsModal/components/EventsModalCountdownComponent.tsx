import React from 'react'
import Countdown, { zeroPad } from 'react-countdown'


export const EventsModalCountdownComponent = ({startDate}: {startDate: Date}) => {


    const renderer = ({ days, hours, minutes, seconds, completed }: { days: number, hours: number, minutes: number, seconds: number, completed: boolean }) => {
        return (
            <div className='w-full mb-5'>
                <h3 className='text-4xl font-semibold text-slate-300 my-2'><span className='text-black'>{zeroPad(days, 2)}</span> days</h3>
                <h3 className='text-4xl font-semibold text-slate-300 my-2'><span className='text-black'>{zeroPad(hours, 2)}</span> hours</h3>
                <h3 className='text-4xl font-semibold text-slate-300 my-2'><span className='text-black'>{zeroPad(minutes, 2)}</span> minutes</h3>
                <h3 className='text-4xl font-semibold text-slate-300 my-2'><span className='text-black'>{zeroPad(seconds, 2)}</span> seconds</h3>
            </div>
        )
    }

    return (   
        <div>
            <Countdown date={startDate} renderer={renderer} />
        </div>
    )
}
