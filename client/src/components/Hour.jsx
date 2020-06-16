import React from 'react';

function Hour(props){
    const icon = `images/${props.icon}.png`
    const hours = new Date(props.time * 1000).getUTCHours();
    return (<div className="hour card">
        <div className="hour-time">{hours === 0 ? "12am" : hours === 12 ? "12pm" : hours < 12? hours +"am" : hours - 12 + "pm"}</div>
        <div>{props.precip}%</div>
        <div className="hour-summary">{props.summary}</div>
        <img src= {icon} className="hour-icon" alt={props.icon}></img>
        </div>)
}

export default Hour;