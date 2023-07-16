import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="d-flex justify-content-around align-content-between weatherForecastDay">
      <div className="forecastBox">
        <div className="forecastDay">{day()}</div>

        <WeatherIcon code={props.data.condition.icon} size={40} />

        <div className="weatherForecastTemperatures">
          <span className="forecastMax">{maxTemperature()}</span>
          <span className="forecastMin">{minTemperature()}</span>
        </div>
      </div>
    </div>
  );
}
