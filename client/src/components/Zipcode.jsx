import React, { useState } from 'react';
require('dotenv').config()


function Zipcode(props){
    const [inputZip, setInputZip ] = useState("");

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const zipCodeUrl = `http://www.zipcodeapi.com/rest/${process.env.REACT_APP_ZIPCODE}/info.json/${inputZip}/degrees`;

      function handleChange(e){
        setInputZip(e.target.value);
    }

    //user submitted zipcode fetching lat and lng

    function submitZip(e){
        props.submitZip();
        e.preventDefault();
        fetch(proxyUrl + zipCodeUrl)
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())
        .then(data => {
            props.onAdd(data);
        })
        .catch(err => console.log(err))
       setInputZip("")

    }
    //geo coordinates fetch
    function getCurrentLocation(){
        props.loadingCurrent();
        navigator.geolocation.getCurrentPosition(showPosition)
    }


    function showPosition(p){
        props.onAdd({
            lat: p.coords.latitude,
            lng: p.coords.longitude,
            city: "your area"
        })
        //sets location loaded to true on Card
        props.submitZip();

    }
        

    return(
        <div className="zipcode">
        <form onSubmit={submitZip}>
        <input 
            name="zipcode"
            type="text"
            maxLength="5"
            placeholder="Enter Zipcode"
            onChange={handleChange}
            value = {inputZip}
        />
        <button type="submit">Submit</button>
        </form>
        <button class="arrow fas fa-location-arrow" onClick={getCurrentLocation}></button>
        </div>

    )
}

export default Zipcode;