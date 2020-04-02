import React from 'react';
import Clouds from '../icons/Clouds.png';
import Clear from '../icons/Clear.png';
import Thunderstorm from '../icons/Thunderstorm.png';
import Drizzle from '../icons/Drizzle.png';
import Rain from '../icons/Rain.png';
import Snow from '../icons/Snow.png';
import Mist from '../icons/Mist.png';
import Smoke from '../icons/Smoke.png';
import Haze from '../icons/Haze.png';
import Dust from '../icons/Dust.png';
import Fog from '../icons/Fog.png';
import Sand from '../icons/Sand.png';
import Ash from '../icons/Ash.png';
import Squall from '../icons/Squall.png';
import Tornado from '../icons/Tornado.png';



const iconMapping = {
    Clouds: Clouds,
    Clear: Clear,
    Thunderstorm: Thunderstorm,
    Drizzle: Drizzle,
    Rain: Rain,
    Snow: Snow,
    Mist: Mist,
    Smoke: Smoke,
    Haze: Haze,
    Dust: Dust,
    Fog: Fog,
    Sand: Sand,
    Ash: Ash,
    Squall: Squall,
    Tornado: Tornado
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