import React from 'react';
import Current from './Current'
import Hour from './Hour';
import Daily from './Daily';
import Async from 'react-async';
import test from '../test.json';
require('dotenv').config()


function Weather(props) {


  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const geo = props.geo;

  /// testing area /////////////////////////////

  // const weather = test[0];
  // const current ={
  //   lat: 42.293657599999996,
  //   lng: -71.4440704
  // }



//////// API REQUESTS /////////////////////////////////////

  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

  const loadWeather = async() => {
   const res = await fetch(proxyUrl + `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY}/${geo.lat},${geo.lng}`)
   if (!res.ok) throw new Error(res.statusText)
   return res.json()
 
    ;
    }
  



///////////RETURN

return ( 
<div >
  <Async promiseFn={loadWeather} >

      {({data, err, isLoading}) => {

        if (isLoading) return "Loading weather..."
        if (err) return `Something went wrong: ${err.message}`
        
        if (data) {
          const weather = data;
          const theDate = new Date(weather.currently.time * 1000)
          console.log(data)
          
        return ( 
        <div >
            <Current 
            day = {dayNames[theDate.getDay()]}
            month = {months[theDate.getMonth()]}
            date = {theDate.getDate()}
            year = {theDate.getFullYear()}
            city = {geo.city}
            state = {geo.state}
            feelsLike = {Math.round(weather.currently.apparentTemperature)}
            temperature = {Math.round(weather.currently.temperature)}
            precipProbability = {weather.currently.precipProbability}
            dewPoint = {weather.currently.dewPoint}
            uvIndex = {weather.currently.uvIndex}
            summary = {weather.currently.summary}
            humidity = {weather.currently.humidity}
            pressure ={weather.currently.pressure}
            visibility = {weather.currently.visibility}
            icon = {weather.currently.icon}
            sunriseTime = {weather.daily.data[0].sunriseTime}
            sunsetTime = {weather.daily.data[0].sunsetTime}
            timezone = {weather.timezone}
            />


          <div className = "upcomingHours" >
               <p className="hour-main-summary"> Todays outlook: {weather.hourly.summary}</p>
              <div className = "hours card" > 
                {weather.hourly.data.map((hour, i) => {
                  return ( 
                    <div >
                    <Hour key = {i}
                    time = {hour.time}
                    summary = {hour.summary}
                    precip = {hour.precipProbability}
                    icon = {hour.icon}
                    /> 
                    </div>
                    )
                  })
                } 
              </div> 
            </div>
          
            <div className = "upcomingWeek" >
              <br></br>
             Upcoming for the week: {weather.daily.summary}
             <br></br>
               <div > 
                {weather.daily.data.map((day, i) => {
                return ( 
                  <div >
                  <Daily 
                  key = {i}
                  precipType = {day.precipType}
                  precipProbability = {day.precipProbability}
                  time = {dayNames[new Date(day.time * 1000).getDay()]}
                  timezone = {weather.timezone}
                  summary = {day.summary}
                  temperatureHigh = {day.temperatureHigh}
                  temperatureHighTime = {day.temperatureHighTime}
                  temperatureLow = {day.temperatureLow}
                  sunriseTime = {day.sunriseTime}
                  sunsetTime = {day.sunsetTime}
                  /> 
                  </div>
                  )
                  })
                } 
                </div>
            </div> 
        </div>
          )
        }
      }
    
    }
    </Async>
</div>)
}

export default Weather;
