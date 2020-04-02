import React from 'react';
import './MyWeatherSearch.css'

export default class MyWeatherSearch extends React.Component {
    constructor(props) {
      super(props); 
      this.state = {
          city: ''
      };
      console.log(this.state.city);
    }

    render() {
        return (
            <div>
                 <h1 className='title'>MyWeather APP</h1>
                 <input type='text' className='inputValue' placeholder='Enter the city' value={this.state.city}
                    onChange={e=> this.setState({city: e.target.value})}></input>
                 <button type='submit' className='searchButton'
                   onClick={(e) => {this.props.getWeather(this.state.city)}}>Search</button>
            </div>
        )
    }
}