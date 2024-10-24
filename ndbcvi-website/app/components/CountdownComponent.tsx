import React from 'react'
import Countdown from 'react-countdown'


export const CountdownComponent = ({dateTime}: {dateTime: Date}) => {

    const padToTwoDigits = (number: number) => {
        if(number < 10) {
            return `0${number}`;
        }
        else {
            return number;
        }
    }

    const renderer = ({ days, hours, minutes, seconds, completed }: { days: number, hours: number, minutes: number, seconds: number, completed: boolean }) => {
        return (
            <div className='w-full p-2'>
                <h3 className='text-4xl font-semibold text-slate-300 my-2'><span className='text-black'>{padToTwoDigits(days)}</span> days</h3>
                <h3 className='text-4xl font-semibold text-slate-300 my-2'><span className='text-black'>{padToTwoDigits(hours)}</span> hours</h3>
                <h3 className='text-4xl font-semibold text-slate-300 my-2'><span className='text-black'>{padToTwoDigits(minutes)}</span> minutes</h3>
                <h3 className='text-4xl font-semibold text-slate-300 my-2'><span className='text-black'>{padToTwoDigits(seconds)}</span> seconds</h3>
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
