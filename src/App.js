import React from 'react';
import MyWeatherSearch from './MyWeather/MyWeatherSearch';
import MyWeatherResults from './MyWeather/MyWeatherResults';
import './App.css';

const API_Key = "db6a356c39aabb6af4e464edc3cf68f9";


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.getWeather();
  }



  getWeather = async () => {
    const API_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_Key}`)

    const API_response = await API_call.json();

    console.log(API_response)
  }
  render() {

    return (
      <div className="App">
        <MyWeatherSearch />
        <MyWeatherResults />
    </div>
    )
  }
}

