import React from 'react';
import './style.css'

const Weather = ({temp,city,country,sunrise,sunset,error}) => {
  
    const tempus = String(temp).substring(0,2)      
  
    return (
        <div>
            {city &&
            <div>
            <p className='city__country'>{city}, {country}</p>
            <p className='tempus'>{tempus}°C</p>
            {/* <p>Восход солнца: {sunrise}</p> */}

            </div>
           }
        </div>
    );
};

export default Weather;