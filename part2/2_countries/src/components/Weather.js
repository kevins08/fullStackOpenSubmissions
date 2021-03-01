import React, {useState, useEffect} from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY
const api_key_trimmed = api_key.slice(1,api_key.length-2)

const Weather = ({city}) => {
    const [weather, setWeather] = useState([])

    //console.log('city sent to Weather: ',city)

    useEffect(() => {
        axios
          .get(`http://api.weatherstack.com/current?access_key=${api_key_trimmed}&query=${city}&units=f`)
          .then(response => {
            setWeather(response.data)
            //console.log('response from useEffect',response)
          })
      },[city])
      
    //console.log('weather before return', weather)  

    if (weather.length===0) {
        return (<h2>Weather in {city} loading</h2>)
    } else {
        return (
            <div>
            <h2>Weather in {city}</h2>
            <div><strong>Temperature: </strong>{weather.current.temperature} degrees Fahrenheit</div>
            <img src={weather.current.weather_icons[0]} 
                alt={`Weather icon is ${weather.current.weather_descriptions}`} width="100" />
                <div><strong>Wind: </strong>{weather.current.wind_speed}mph in the {weather.current.wind_dir} direction</div>
            </div>
)}}

export default Weather