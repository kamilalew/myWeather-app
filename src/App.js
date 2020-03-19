import React from 'react';
import MyWeatherSearch from './MyWeather/MyWeatherSearch';
import MyWeatherResults from './MyWeather/MyWeatherResults';
import './App.css';


function App() {
  return (
    <div className="App">
      <MyWeatherSearch />
      <MyWeatherResults />
    </div>
  );
}

export default App;
