import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      time: new Date(response.data.time * 1000),
    });
  }

  function search() {
    let apiKey = "1acbot392864443e815e617a5f81390f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form className="form" id="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-4">
              <input
                type="text"
                placeholder="Enter your city"
                autofocus="on"
                autocomplete="off"
                className="form-control shadow-sm"
                id="city-input"
                onChange={handleCityChange}
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

        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
