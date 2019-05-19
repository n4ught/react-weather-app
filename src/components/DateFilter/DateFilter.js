import React from "react";

import "./DateFilter.css";

const dateFilter = props => {
  const months = [
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
    "December"
  ];

  var sixDates = props.dates.map(date => {
    var splittedDate = date.split("-");

    return (
      <option value={date} key={date}>
        {months[splittedDate[1] - 1] +
          " " +
          splittedDate[2] +
          ", " +
          splittedDate[0]}
      </option>
    );
  });

  return (
    <div className="dateFilter">
      <label htmlFor="dateFilter">Filter by Date:</label>
      <select name="dateFilter" value={props.value} onChange={props.changed}>
        {sixDates}
      </select>
    </div>
  );
};

export default dateFilter;
