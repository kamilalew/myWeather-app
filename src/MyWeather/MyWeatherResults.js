import React from 'react';


export default function MyWeatherResults(props) {
    return (
        <div>
            <h1 className='city'>{props.city}, {props.country}</h1>
            <div className='temperatures'>
                <sub className='minTemperature'>{props.minTemperature}&deg;</sub>
                <h1 className='temperature'>{props.temperature}&deg;</h1>
                <sub className='maxTemperature'>{props.maxTemperature}&deg;</sub>
            </div>
            <img src={require(`../icons/${props.weatherIcon}.png`)} alt={props.weatherIcon}/>
    
        </div>
    )
}