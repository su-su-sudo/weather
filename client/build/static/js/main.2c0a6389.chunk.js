(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{24:function(e,t,a){e.exports=a(37)},32:function(e){e.exports=JSON.parse("{}")},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),i=a.n(l),c=a(3);a(14).config();var u=function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),l=a[0],i=a[1],u="http://www.zipcodeapi.com/rest/".concat("FnsIEwWuvi5EDBsT6t8VK7sgwZWIrZv6wh9jw2qCvB5YQ5REPQlCLQ2vfJq0nbml","/info.json/").concat(l,"/degrees");function m(t){e.onAdd({lat:t.coords.latitude,lng:t.coords.longitude,city:"your area"}),e.submitZip()}return r.a.createElement("div",{className:"zipcode"},r.a.createElement("form",{onSubmit:function(t){e.submitZip(),t.preventDefault(),fetch("https://cors-anywhere.herokuapp.com/"+u).then((function(e){return e.ok?e:Promise.reject(e)})).then((function(e){return e.json()})).then((function(t){e.onAdd(t)})).catch((function(e){return console.log(e)})),i("")}},r.a.createElement("input",{name:"zipcode",type:"text",maxLength:"5",placeholder:"Enter Zipcode",onChange:function(e){i(e.target.value)},value:l}),r.a.createElement("button",{type:"submit"},"Submit")),r.a.createElement("button",{class:"arrow fas fa-location-arrow",onClick:function(){e.loadingCurrent(),navigator.geolocation.getCurrentPosition(m)}}))},m=a(15),o=a.n(m),s=a(20);var d=function(e){var t=new Date(1e3*e.sunriseTime).toLocaleTimeString("en-US",{timeZone:e.timezone,hour12:!0,hour:"2-digit",minute:"2-digit"}),a=new Date(1e3*e.sunsetTime).toLocaleTimeString("en-US",{timeZone:e.timezone,hour12:!0,hour:"2-digit",minute:"2-digit"}),n="images/".concat(e.icon,".png");return r.a.createElement("div",{className:"current card"},r.a.createElement("div",{className:"currentSummary"},r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement("p",null,"Weather for ",e.city,", ",e.state),r.a.createElement("p",null,e.day+", "+e.month+" "+e.date+" "+e.year))),r.a.createElement("img",{src:n,className:"icon",alt:e.icon}),r.a.createElement("div",{className:"summaryWrapper"},r.a.createElement("div",{className:"temperature"},e.temperature,"\xb0"),r.a.createElement("div",null,e.summary),r.a.createElement("div",null,"Feels like: ",e.feelsLike,"\xb0"),r.a.createElement("div",{className:"current-set"},r.a.createElement("p",null,"Sunrise: ",t),r.a.createElement("p",null,"Sunset: ",a)))),r.a.createElement("div",{className:"rightNow"},r.a.createElement("table",null,r.a.createElement("caption",null,"Currently"),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Rain"),r.a.createElement("td",null,e.precipProbability,"%")),r.a.createElement("tr",null,r.a.createElement("th",null,"UV Index"),r.a.createElement("td",null,e.uvIndex)),r.a.createElement("tr",null,r.a.createElement("th",null,"Humidity"),r.a.createElement("td",null,100*e.humidity,"%")),r.a.createElement("tr",null,r.a.createElement("th",null,"Dew Point"),r.a.createElement("td",null,e.dewPoint,"\xb0")),r.a.createElement("tr",null,r.a.createElement("th",null,"Pressure"),r.a.createElement("td",null,e.pressure," in")),r.a.createElement("tr",null,r.a.createElement("th",null,"Visibility"),r.a.createElement("td",null,e.visibility," mi"))))))};var p=function(e){var t="images/".concat(e.icon,".png"),a=new Date(1e3*e.time).getUTCHours();return r.a.createElement("div",{className:"hour card"},r.a.createElement("div",{className:"hour-time"},0===a?"12am":12===a?"12pm":a<12?a+"am":a-12+"pm"),r.a.createElement("div",null,e.precip,"%"),r.a.createElement("div",{className:"hour-summary"},e.summary),r.a.createElement("img",{src:t,className:"hour-icon",alt:e.icon}))};var y=function(e){var t=new Date(1e3*e.temperatureHighTime).toLocaleTimeString("en-US",{timeZone:e.timezone,hour12:!0,hour:"2-digit",minute:"2-digit"}),a=new Date(1e3*e.sunriseTime).toLocaleTimeString("en-US",{timeZone:e.timezone,hour12:!0,hour:"2-digit",minute:"2-digit"}),n=new Date(1e3*e.sunsetTime).toLocaleTimeString("en-US",{timeZone:e.timezone,hour12:!0,hour:"2-digit",minute:"2-digit"});return r.a.createElement("div",{className:"daily-card"},r.a.createElement("p",{className:"daily-day"},e.time," "),r.a.createElement("p",null,e.summary),r.a.createElement("p",null,"High of ",Math.round(e.temperatureHigh)," around ",t),r.a.createElement("p",null,"Low of ",Math.round(e.temperatureLow)),r.a.createElement("p",null,e.precipType," probability ",Math.round(100*e.precipProbability),"%"),r.a.createElement("p",null,"Sunrise: ",a),r.a.createElement("p",null,"Sunset: ",n),r.a.createElement("hr",null))},E=a(21);a(32);a(14).config();var h=function(e){var t=["January","February","March","April","May","June","July","August","September","October","November","December"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=e.geo,l=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cors-anywhere.herokuapp.com/"+"https://api.darksky.net/forecast/".concat("4716fc9718aac83c7942af6f82a345eb","/").concat(n.lat,",").concat(n.lng));case 2:if((t=e.sent).ok){e.next=5;break}throw new Error(t.statusText);case 5:return e.abrupt("return",t.json());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(E.a,{promiseFn:l},(function(e){var l=e.data,i=e.err;if(e.isLoading)return"Loading weather...";if(i)return"Something went wrong: ".concat(i.message);if(l){var c=l,u=new Date(1e3*c.currently.time);return console.log(l),r.a.createElement("div",null,r.a.createElement(d,{day:a[u.getDay()],month:t[u.getMonth()],date:u.getDate(),year:u.getFullYear(),city:n.city,state:n.state,feelsLike:Math.round(c.currently.apparentTemperature),temperature:Math.round(c.currently.temperature),precipProbability:c.currently.precipProbability,dewPoint:c.currently.dewPoint,uvIndex:c.currently.uvIndex,summary:c.currently.summary,humidity:c.currently.humidity,pressure:c.currently.pressure,visibility:c.currently.visibility,icon:c.currently.icon,sunriseTime:c.daily.data[0].sunriseTime,sunsetTime:c.daily.data[0].sunsetTime,timezone:c.timezone}),r.a.createElement("div",{className:"upcomingHours"},r.a.createElement("p",{className:"hour-main-summary"}," Todays outlook: ",c.hourly.summary),r.a.createElement("div",{className:"hours card"},c.hourly.data.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(p,{key:t,time:e.time,summary:e.summary,precip:e.precipProbability,icon:e.icon}))})))),r.a.createElement("div",{className:"upcomingWeek"},r.a.createElement("br",null),"Upcoming for the week: ",c.daily.summary,r.a.createElement("br",null),r.a.createElement("div",null,c.daily.data.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(y,{key:t,precipType:e.precipType,precipProbability:e.precipProbability,time:a[new Date(1e3*e.time).getDay()],timezone:c.timezone,summary:e.summary,temperatureHigh:e.temperatureHigh,temperatureHighTime:e.temperatureHighTime,temperatureLow:e.temperatureLow,sunriseTime:e.sunriseTime,sunsetTime:e.sunsetTime}))})))))}})))};var g=function(e){var t=Object(n.useState)(null),a=Object(c.a)(t,2),l=a[0],i=a[1],m=Object(n.useState)(null),o=Object(c.a)(m,2),s=o[0],d=o[1],p=Object(n.useState)({city:"default",state:"default",zip_code:"default",lat:"default",lng:"default"}),y=Object(c.a)(p,2),E=y[0],g=y[1];function f(e){g({city:e.city,state:e.state,zip_code:e.zip_code,lat:e.lat,lng:e.lng})}return r.a.createElement("div",null,r.a.createElement(u,{onAdd:f,submitZip:function(){i(!0)},loadingCurrent:function(){d(!0)}}),r.a.createElement("div",{className:"content"},l?r.a.createElement(h,{geo:E,onAdd:f}):r.a.createElement("div",null,s?"Getting location, please wait...":"Let's see what's happening in your neck of the woods...")))};var f=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Here's Tom with the Weather. "))};var v=function(e){return r.a.createElement("footer",null,r.a.createElement("p",null,"\u24d2 ",(new Date).getFullYear()," Ian made this"))};a(14).config();var b=function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(g,null),r.a.createElement(v,null))};i.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.2c0a6389.chunk.js.map