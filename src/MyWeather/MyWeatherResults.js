import React from 'react';
import Clouds from '../icons/Clouds.png';
import Clear from '../icons/Clear.png';

const iconMapping = {
    Clouds: Clouds,
    cloudy: Clouds,
    clear: Clear
};

export default function MyWeatherResults(props) {
    return (
        <div>
            <h1 className='city'>{props.city}</h1>
            <div className='temperatures'>
                <sub className='minTemperature'>{props.minTemperature}&deg;</sub>
                <h1 className='temperature'>{props.temperature}&deg;</h1>
                <sub className='maxTemperature'>{props.maxTemperature}&deg;</sub>
            </div>
            <img src={iconMapping[props.description]} alt={props.description}/>
            {/* <img src={process.env.PUBLIC_URL + '/Clear.png'} alt={props.description}/> */}
        </div>
    ) 
}