import React from 'react'
import { useState } from 'react'
import "../style/Weather.css"
import moment from 'moment'
import { BiSearch } from "react-icons/bi";
import axios from 'axios';



function Weather({units}) {

    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('');
    const apiKey = process.env.REACT_APP_API_KEY;


    const apiCall = async (e) => {
        e.preventDefault()
        const loc = e.target.elements.loc.value
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=${units}&appid=${apiKey}`;
        const req = axios.get(url);
        const res = await req;
        setWeather({
            descp: res.data.weather[0].description,
            temp: res.data.main.temp,
            city: res.data.name,
            wind: res.data.wind.speed,
            humidity: res.data.main.humidity,
            timezone: res.data.timezone / 3600, // convert from seconds to hours
            sunrise: res.data.sys.sunrise,
            sunset: res.data.sys.sunset,
            feels_like: res.data.main.feels_like
        })
        setCity(res.data.name)
    }


    // Convert k to C, then C to f
    let k = weather.temp;
    let C = k - 273.15
    // 1.6 might not be 100% accurate but it's close enough.
    let f = (1.6 * C + 32).toFixed(0);
    let feelsLike = weather.feels_like;
    let feel = feelsLike - 273.15
    let feelsTemp = (1.6 * feel + 32).toFixed(0)

    // let windSpeed = weather.wind;
    // let s = Math.round(windSpeed);

    // let sunriseTime = new Date(weather.sunrise * 1000).toLocaleTimeString('en-IN');
    // let sunsetTime = new Date(weather.sunset * 1000).toLocaleTimeString('en-IN');



    const Weath = () => {
        return <div>
            <div className="winfo">
                Weather information for {city}
            </div>
            <div className="Weath">
                <div className="welement">
                    <p>{f}&#8457;</p>

                    <p data-testid="weather">Weather: {weather.descp}</p>

                    <p>Feels like: {feelsTemp}&#8457;</p>
                    <p>
                        Humidity: {weather.humidity}%
                    </p>
                    <p>
                        Day: {moment().format('dddd')}
                    </p>
                    <p>
                        Date: {moment().format('LL')}
                    </p>
                </div>
            </div>
        </div>
    }
    return (
        <>
            {/* <div className="weathhead">Weather Information</div> */}
            <div className="mainweather">
                <div className="weather">
                    <form onSubmit={apiCall} className="form">
                        <input type="text" placeholder="Type in city name" name="loc" />
                        <button className="bttn"><BiSearch data-testid="search-icon" size={30}/></button>
                    </form>
                    {weather && <Weath />}
                </div>
            </div>
        </>
    )
}

export default Weather