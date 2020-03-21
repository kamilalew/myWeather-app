import React from 'react';
import sunny from '../icons/Weather-Icons-38.png'

export default function MyWeatherResults() {
    return (
        <div>
            <h1 className='city'>New York</h1>
            <div className='temperatures'>
                <sub className='minTemperature'>23&deg;</sub>
                <h1 className='temperature'>25&deg;</h1>
                <sub className='maxTemperature'>27&deg;</sub>
            </div>
            <img className='images' alt='sunny' src={sunny} />
        </div>
    )
}