import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInformation(props) {
  return (
    <div className="weatherInformation">
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
          <div className="today-weather-icon ">
            <WeatherIcon code={props.data.icon} />
          </div>
          <WeatherTemperature fahrenheit={props.data.temperature} />
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
