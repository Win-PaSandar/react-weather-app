import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="weatherTemperature ">
      <span className="current-temperature" id="temperature">
        {Math.round(props.fahrenheit)}
      </span>

      <span className="units">
        <span href="#" id="fahrenheit-link" className="active">
          °F
        </span>
      </span>
    </div>
  );
}
