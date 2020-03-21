import React from 'react';
import sunny from '../icons/Weather-Icons-38.png'

export default function MyWeatherResults(props) {
    return (
        <div>
            <h1 className='city'>{props.city}, {props.country}</h1>
            <div className='temperatures'>
                <sub className='minTemperature'>{props.minTemperature}&deg;</sub>
                <h1 className='temperature'>{props.temperature}&deg;</h1>
                <sub className='maxTemperature'>{props.maxTemperature}&deg;</sub>
            </div>
            <img className='images' alt='sunny' src={sunny} />
        </div>
    )
}