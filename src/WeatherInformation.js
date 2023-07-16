import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInformation(props) {
  return (
    <div className="d-flex justify-content-between flex-wrap weatherInformation">
      <div className="col">
        <h1 className="city">{props.data.city}</h1>
        <ul className="today">
          <li className="currentDate">
            <FormattedDate date={props.data.date} />
          </li>
          <li className="currentTime">
            <FormattedTime time={props.data.time} />
          </li>
        </ul>
      </div>

      <div className="col">
        <div className="todayWeather">
          <div className="todayWeatherIcon">
            <WeatherIcon code={props.data.icon} size={60} />
          </div>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>

      <div className="col">
        <ul className="hwd">
          <li>
            Humidity: <span className="humidity">{props.data.humidity} %</span>
          </li>
          <li>
            Wind: <span className="wind">{props.data.wind} km/h</span>
          </li>
          <li>
            <span className="description" id="description">
              {props.data.description}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
