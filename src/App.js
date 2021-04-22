import React, { useEffect, useState } from 'react';

const api = {
  key: "2f7f54eb288468c062977e7c9b7f9f44",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [app, setApp] = useState('');

  // const setFun =async ()=> {
  useEffect(() => {
    if(typeof weather.main!= "undefined"){
      if(weather.weather[0].id<300 && weather.weather[0].id>200){
          setApp('thunder');
          
      }else if(weather.weather[0].id<400 && weather.weather[0].id>=300){
          setApp('drizzle');
      }else if(weather.weather[0].id<600 && weather.weather[0].id>=500){
          setApp('rain');
      }else if(weather.weather[0].id<700 && weather.weather[0].id>=600){
          setApp('snow');
      }else if(weather.weather[0].id<800 && weather.weather[0].id>=700){
          setApp('atmosphere');
      }else if(weather.weather[0].id==800){
          setApp('clear');
      }else if(weather.weather[0].id>800){
          setApp('clouds');
      }
      console.log(app);
    }})
  // }

  const search = async (evt) => { 
    if (evt.key === "Enter") {
      await fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
          
        });

      // await setFun();
      
    }
  }

  return (
    <div className={app}>
      <main>
        <div className="search-box ">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box ">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="extra">Humidity: {weather.main.humidity}%</div>
            <div className="extra">Pressure: {weather.main.pressure} Pa</div>
            <div className="extra">Lat: {weather.coord.lat} -- Lon: {weather.coord.lon} </div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)-273}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : (
        <div className="weather-box">
          Please search by city Name
        </div>)}
      </main>
      <div>

      </div>
    </div>
  );
}

export default App;
