import React from 'react';

function Current(props){
    const sunrise = new Date(props.sunriseTime * 1000).toLocaleTimeString("en-US", { timeZone: props.timezone, hour12: true, hour:'2-digit', minute:'2-digit' });;
    const sunset = new Date(props.sunsetTime * 1000).toLocaleTimeString("en-US", { timeZone: props.timezone, hour12: true, hour:'2-digit', minute:'2-digit' });

    const icon = `images/${props.icon}.png`
    return(
        <div className="current card">
            <div className="currentSummary">
            <header>
                <div><p>Weather for {props.city}, {props.state}</p>
                <p>{props.day + ", " + props.month + " " + props.date + " " + props.year}</p>
                    </div>
            </header>
            <img src= {icon} className="icon" alt={props.icon}></img>
        <div className="summaryWrapper">
            <div className="temperature">{props.temperature}&deg;</div>
            <div>{props.summary}</div>
            <div>Feels like: {props.feelsLike}&#176;</div>
            <div className = "current-set">
                <p>Sunrise: {sunrise}</p>
                <p>Sunset: {sunset}</p>
            </div>
        </div>

            </div>

            <div className="rightNow"> 
                <table>
                    <caption>Currently</caption>
                    <tbody>
                    <tr>
                        <th>Rain</th>
                            <td>{props.precipProbability}%</td>
                    </tr>
                    <tr>
                        <th>UV Index</th>
                            <td>{props.uvIndex}</td>
                    </tr>    
                    <tr>
                        <th>Humidity</th>
                            <td>{props.humidity * 100}%</td>
                    </tr>
                    <tr>
                        <th>Dew Point</th>
                            <td>{props.dewPoint}&deg;</td>
                    </tr>
                    <tr>
                        <th>Pressure</th>
                            <td>{props.pressure} in</td>
                    </tr>
                    <tr>
                        <th>Visibility</th>
                            <td>{props.visibility} mi</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Current;