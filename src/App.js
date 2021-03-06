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
      maxTemperature: '',
      weatherIcon: '',
      description: '',
    };
    this.getWeather('');
  }

  getWeather = async (city) => {

    const API_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`)

    if(API_call.status === 200) {

      const API_response = await API_call.json();
      console.log(API_response);
  
      this.setState({
        city: API_response.name,
        country: API_response.sys.country,
        temperature: calcTemp(API_response.main.temp),
        minTemperature: calcTemp(API_response.main.temp_min),
        maxTemperature: calcTemp(API_response.main.temp_max),
        description: API_response.weather[0].main,
        error: ''
      })
      console.log(this.state.description)
      console.log(this.state.error)
    }else if(API_call.status === 400) {
      this.setState({
        error: ''
      })
    }else{
      this.setState({
        error: API_call.statusText
      })
    }

    function calcTemp(temp) {
      return Math.round(temp - 273.15);
    }
  }

  render() {



    return (
      <div className="App">
        <MyWeatherSearch getWeather={this.getWeather}/>
          {this.state.error ? <div>The city you searched for has not been found</div> : null}
        <MyWeatherResults 
          city={this.state.city} 
          country={this.state.country} 
          temperature={this.state.temperature} 
          minTemperature={this.state.minTemperature}
          maxTemperature={this.state.maxTemperature}
          description={this.state.description}
          />
    </div>
    )
  }
}

