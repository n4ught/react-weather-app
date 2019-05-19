import React from "react";
import "./DaysList.css";

import Day from "./Day/Day";
import DayRow from "../DayRow/DayRow";

const daysList = props => {
  var staticDate = props.default;
  var rows;
  var weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const days = props.days.map(day => {
    var currentDate = day.dt_txt.split(" ");
    var today = new Date(currentDate[0] + "Z");

    if (staticDate === null) {
      staticDate = currentDate[0];
    }

    if (staticDate == currentDate[0]) {
      return (
        <div key={day.dt}>
          <Day
            day={weekday[today.getDay()]}
            description={day.weather[0].description}
            icon={day.weather[0].icon}
            time={currentDate[1]}
            humidity={day.main.humidity}
            seaLevel={day.main.sea_level}
            temp={day.main.temp}
          />
        </div>
      );
    }
  });

  return <div className="daysList">{days}</div>;
};

export default daysList;
