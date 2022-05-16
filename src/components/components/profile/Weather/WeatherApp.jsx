import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import Form from './Form'
import Info from './Info';
import Weather from './Weather';

import useGeoLocation from './hook/useGeolocation';


import { useDispatch } from 'react-redux';

const API_KEY = "4c9fa88f297b0a9278cc11b52b10deca"

const WeatherApp = () => {
    const [city, setCity] = useState("")

    const location = useGeoLocation()
    const lat = JSON.stringify(location.coordinates.lat)
    const lon = JSON.stringify(location.coordinates.lng)
    console.log(location);
   const  [state, setState] = useState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    })
    const dispatch = useDispatch()

    // const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
   
  
console.log(location);
 const  gettingWeather =async(e) => {
    if(!location.loaded){
        return  <div>loading... </div>
    }

     const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
     const data = await api_url.json()
     console.log(data);
     var sunset = data.sys.sunset
     var sunrise = data.sys.sunrise
     var date = new Date()

     var date2  = new Date()
          date.setTime(sunset)
     date2.setTime(sunrise)
     var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
     var sunrise_date = date2.getHours() + ":" + date2.getMinutes() + ":" + date2.getSeconds()

     setState({
         temp: data.main.temp,
         city: data.name,
         country: data.sys.country,
         sunrise: sunrise_date,
         sunset: sunset_date,
         error: null
     })

   }

useEffect(() => {
    gettingWeather()
}, [location.coordinates])

    return (
        
            <div> 
            <Weather 
            temp={state.temp}
            city={state.city}
            country={state.country}
            sunrise={state.sunrise}
            sunset={state.sunset}
            error={state.error}
            />
            

        </div>

    );

};

export default WeatherApp;