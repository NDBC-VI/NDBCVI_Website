import React from 'react'
import Countdown from 'react-countdown'


export const CountdownComponent = ({dateTime}: {dateTime: Date}) => {
    const startDate = new Date(dateTime);

    const renderer = ({ days, hours, minutes, seconds, completed }: { days: number, hours: number, minutes: number, seconds: number, completed: boolean }) => {
        return (
            <div className='w-full p-2'>
                <h3 className='text-4xl font-semibold text-slate-300 my-2'><span className='text-black'>{days}</span> days</h3>
                <h3 className='text-4xl font-semibold text-slate-300 my-2'><span className='text-black'>{hours}</span> hours</h3>
                <h3 className='text-4xl font-semibold text-slate-300 my-2'><span className='text-black'>{minutes}</span> minutes</h3>
            </div>
        )
    }

    return (   
        <div>
            <Countdown date={dateTime} renderer={renderer}>

            </Countdown>
        </div>
    )
}
