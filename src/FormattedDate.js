import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentDay = days[props.date.getDay()];
  let currentMonth = months[props.date.getMonth()];
  let currentDate = props.date.getDate();
  return (
    <div>
      {currentDay}, {currentMonth} {currentDate}
    </div>
  );
}
