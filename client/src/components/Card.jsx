import React, { useState } from 'react';
import Zipcode from './Zipcode';
import Weather from './Weather';
  
function Card(props){
    const [locationLoaded, setLocationLoaded] = useState(null);
    const [currentLoading, setCurrentLoading] = useState(null);
    const  [geo, setGeo] = useState({
        city: 'default',
        state: 'default',
        zip_code: 'default',
        lat: 'default',
        lng: 'default'
      });
    
    
    function loadingCurrent(){
        setCurrentLoading(true);
    }
    function submitZip(){
        setLocationLoaded(true);
    }

    function userLocation(data){
       setGeo( {
        city: data.city,
        state: data.state,
        zip_code: data.zip_code,
        lat: data.lat,
        lng: data.lng,
    })
    }

    return(
        <div>
        <Zipcode 
            onAdd={userLocation}
            submitZip={submitZip}
            loadingCurrent={loadingCurrent}
            />

        <div className="content">
            {!locationLoaded? <div>{!currentLoading? "Let's see what's happening in your neck of the woods..." : "Getting location, please wait..."}</div>
            :
            <Weather geo={geo} onAdd={userLocation}/>

            }
    </div>

        </div>
    )

}

export default Card;