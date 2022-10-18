import React, { Component } from 'react'
import Form from './Components/Form/Form'
import Weather from './Components/Weather/Weather'

export default class App extends Component {
  state={
    temperature:"",
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:'',
  }
  
  getWeather= async (e)=>{
    e.preventDefault();
    const api_key='e36ed364400282e43250b6c4c0274d44';
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${api_key}`);
    const data=await api.json();

    city&&country?this.setState({
      temperature:data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:'',
    }):this.setState({
      temperature:"",
      city:'',
      country:'',
      humidity:'',
      description:'',
      error:'Please Enter Data....',
    })
    

  }
  render() {
    return (
      <div className="wrapper">
      <div className='form-container'>
      <Form  getWeather={this.getWeather}/>
      <Weather {...this.state} />
      </div>
      
        </div>
    )
  }
}
