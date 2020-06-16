import React from 'react';



function Daily(props){

    const highTemp = new Date(props.temperatureHighTime * 1000).toLocaleTimeString("en-US", { timeZone: props.timezone, hour12: true, hour:'2-digit', minute:'2-digit' });
    const sunrise = new Date(props.sunriseTime * 1000).toLocaleTimeString("en-US", { timeZone: props.timezone, hour12: true, hour:'2-digit', minute:'2-digit' });;
    const sunset = new Date(props.sunsetTime * 1000).toLocaleTimeString("en-US", { timeZone: props.timezone, hour12: true, hour:'2-digit', minute:'2-digit' });
    // this isn't working from darkSky currently.... {props.precipType.charAt(0).toUpperCase() + props.precipType.slice(1)}
    return(
        <div className="daily-card">
        <p className="daily-day">{props.time} </p>
        <p>{props.summary}</p>
        <p>High of {Math.round(props.temperatureHigh)} around {highTemp}</p>
        <p>Low of {Math.round(props.temperatureLow)}</p>
        <p>{props.precipType} probability {Math.round(props.precipProbability * 100)}%</p>
        <p>Sunrise: {sunrise}</p>
        <p>Sunset: {sunset}</p>
        <hr />
        </div>
    )
}

export default Daily;