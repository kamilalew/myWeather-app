import React from 'react';
import MyWeatherSearch from './MyWeather/MyWeatherSearch';
import MyWeatherResults from './MyWeather/MyWeatherResults';
import './App.css';

const API_Key = "db6a356c39aabb6af4e464edc3cf68f9";


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: '',
      country: '',
      temperature: '',
      minTemperature: '',
      maxTemperature: ''
    };
    this.getWeather();
  }

  getWeather = async () => {
    const API_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_Key}`)

    const API_response = await API_call.json();

    console.log(API_response)

    this.setState({
      city: API_response.name,
      country: API_response.sys.country,
      temperature: Math.round(API_response.main.temp - 273.15),
      minTemperature: Math.round(API_response.main.temp_min - 273.15),
      maxTemperature: Math.round(API_response.main.temp_max - 273.15)
    })
    console.log(this.state.minTemperature)

  }

  


  render() {

    return (
      <div className="App">
        <MyWeatherSearch />
        <MyWeatherResults city={this.state.city} country={this.state.country} 
          temperature={this.state.temperature} 
          minTemperature={this.state.minTemperature}
          maxTemperature={this.state.maxTemperature}/>
    </div>
    )
  }
}

