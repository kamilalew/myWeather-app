import React from 'react';

export default function MyWeatherSearch() {
    return (
        <div>
            <h1>MyWeather APP</h1>
            <input type='text' className='inputValue' placeholder='Enter the city'></input>
            <button type='submit' className='searchButton'>Search</button>
        </div>
    )
}