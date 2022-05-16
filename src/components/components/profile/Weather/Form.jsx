import React from 'react';

const Form = ({gettingWeather, city, setCity}) => {
    return (
        <form onSubmit={gettingWeather}>
        <input onChange={(e) => setCity(e.target.value)} type="text" className="city" value={city} placeholder="Город"/>
        <button>Получить погоду</button>
    </form>
    );
};

export default Form;