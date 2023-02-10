import React from "react";
import "../App.css";
import "../style/Weather.css"


export default function Home() {

    return (
        <>
            <div className="container">
                <div className="about">
                    <p>This is a simple weather app that fetches data from openweathermap that shows the approximate temperature in Fahreinheit of a given city.</p>
                    <p>Navigate over to weather and type in a city name to receive information.</p>
                </div>
            </div>
        </>
    )
}