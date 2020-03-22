import React from 'react';

export default class MyWeatherSearch extends React.Component {
    constructor(props) {
      super(props); 
      this.state = {
          city: ''
      };
    }

    render() {
        return (
            <div>
                 <h1>MyWeather APP</h1>
                 <input type='text' className='inputValue' placeholder='Enter the city' value={this.state.city}
                    onChange={e=> this.setState({city: e.target.value})}></input>
           
                 <button type='submit' className='searchButton'
                   onClick={this.props.getWeather}>Search</button>
            </div>
        )
    }
}