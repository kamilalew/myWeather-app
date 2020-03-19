import React from 'react';
import sunny from '../icons/Weather-Icons-38.png'

export default function MyWeatherResults() {
    return (
        <div>
            <h1 className='city'>New York</h1>
            <h1 className='temperature'>25&deg;</h1>
            <img className='images' alt='sunny' src={sunny} />
        </div>
    )
}