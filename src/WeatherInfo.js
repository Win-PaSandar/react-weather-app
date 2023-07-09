import React from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col-4">
          <h1 className="city" id="current-city">
            {props.data.city}
          </h1>
          <ul className="today">
            <li className="current-date">
              <FormattedDate date={props.data.date} />
            </li>
            <li className="current-time">
              <FormattedTime time={props.data.time} />
            </li>
          </ul>
        </div>

        <div className="col-4">
          <div className="current-weather">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              class="today-weather-icon"
              id="icon"
            />
            <span className="current-temperature" id="temperature">
              {Math.round(props.data.temperature)}
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
              Humidity: <span id="humidity">{props.data.humidity} %</span>
            </li>
            <li>
              Wind: <span id="wind">{props.data.wind} km/h</span>
            </li>
            <li>
              <span className="description" id="description">
                {props.data.description}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}