import React from "react";

import "./Day.css";

const day = props => {
  var timeString = props.time;
  var H = +timeString.substr(0, 2);
  var h = H % 12 || 12;
  var ampm = H < 12 || H === 24 ? "AM" : "PM";
  timeString = h + timeString.substr(2, 3) + ampm;

  return (
    <div className="day flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h4>{props.day}</h4>
          <img
            src={"https://openweathermap.org/img/w/" + props.icon + ".png"}
          />
          <p>
            {props.description
              .toLowerCase()
              .replace(/\b[a-z]/g, letter => letter.toUpperCase())}
          </p>
          <p>{timeString}</p>
        </div>
        <div className="flip-card-back">
          <p>Humidity: {props.humidity}</p>
          <p>Sea Level: {props.seaLevel}</p>
          <p>Temperature: {props.temp}</p>
        </div>
      </div>
    </div>
  );
};

export default day;
