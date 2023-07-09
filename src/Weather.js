import React from "react";
import "./Weather.css";

export default function Weather() {
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
            Yangon
          </h1>
          <ul className="today">
            <li className="current-date">Sunday, July 9</li>
            <li className="current-time">16:44</li>
          </ul>
        </div>

        <div className="col-4">
          <div className="current-weather">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              alt=""
              class="today-weather-icon"
              id="icon"
            />
            <span className="current-temperature" id="temperature"></span>
            <span className="units">
              <a href="#" id="fahrenheit-link" className="active">
                86° F
              </a>
            </span>
          </div>
        </div>

        <div className="col-4">
          <ul className="hwd">
            <li>
              Humidity: <span id="humidity"></span>68%
            </li>
            <li>
              Wind: <span id="wind"></span> 18 km/h
            </li>
            <li>
              <span id="description"></span>Partly cloudy
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
