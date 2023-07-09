import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon_url: response.data.condition.icon_url,
      city: response.data.city,
      currentDate: "Sunday",
      currentTime: "16:11",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form className="form" id="search-form">
          <div className="row">
            <div className="col-4">
              <input
                type="text"
                placeholder="Enter your city"
                autofocus="on"
                autocomplete="off"
                className="form-control shadow-sm"
                id="city-input"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-primary shadow-sm"
              />
            </div>
            <div className="col-6">
              <span className="find">
                <i className="fa-regular fa-hand-point-left hand"></i> Find your
                WEATHER HERE
              </span>
            </div>
          </div>
        </form>

        <div className="row">
          <div className="col-4">
            <h1 className="city" id="current-city">
              {weatherData.city}
            </h1>
            <ul className="today">
              <li className="current-date">{weatherData.currentDate}</li>
              <li className="current-time">{weatherData.currentTime}</li>
            </ul>
          </div>

          <div className="col-4">
            <div className="current-weather">
              <img
                src={weatherData.icon_url}
                alt={weatherData.description}
                class="today-weather-icon"
                id="icon"
              />
              <span className="current-temperature" id="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">
                <a href="#" id="fahrenheit-link" className="active">
                  °F
                </a>
              </span>
            </div>
          </div>

          <div className="col-4">
            <ul className="hwd">
              <li>
                Humidity: <span id="humidity">{weatherData.humidity} %</span>
              </li>
              <li>
                Wind: <span id="wind">{weatherData.wind} km/h</span>
              </li>
              <li>
                <span className="description" id="description">
                  {weatherData.description}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "1acbot392864443e815e617a5f81390f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
