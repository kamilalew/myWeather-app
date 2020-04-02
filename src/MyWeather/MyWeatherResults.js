import React from 'react';
import iconMapping from './IconMapping';


export default function MyWeatherResults(props) {
    return (
        <div>
            <h1 className='city'>{props.city}</h1>
            <div className='temperatures'>
                { props.minTemperature ? <sub className='minTemperature'>{props.minTemperature}&deg;</sub> : null }
                { props.temperature ? <h1 className='temperature'>{props.temperature}&deg;</h1> : null }
                { props.maxTemperature ? <sub className='maxTemperature'>{props.maxTemperature}&deg;</sub> : null }
            </div>
            <img src={iconMapping[props.description]} alt={props.description}/>
            {/* <img src={process.env.PUBLIC_URL + '/Clear.png'} alt={props.description}/> */}
        </div>
    ) 
}