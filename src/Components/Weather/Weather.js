import React from 'react'
import '../../index.css'
const Weather = ({temperature,city,country,humidity,description,error}) => {
  return (
    <div className='info'>
    {temperature&&<p>Temperature: <span>{temperature}</span></p>}   
        {city&&<p>City: <span>{city}</span></p>}
        {country&&<p>Country: <span>{country}</span></p>}
        {humidity&& <p>Humidity: <span>{humidity}</span></p>}
        {description&& <p>Description: <span>{description}</span></p>}
        {error&&<p>Error: {error}</p>}
    </div>
  )
}

export default Weather
