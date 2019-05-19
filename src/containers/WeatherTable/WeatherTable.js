import React, { Component } from "react";
import DaysList from "../../components/DaysList/DaysList";
import axios from "axios";

import "./WeatherTable.css";

import DateFilter from "../../components/DateFilter/DateFilter";

class WeatherTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],
      dates: [],
      defaultDate: ""
    };

    this.dateChangedHandler = this.dateChangedHandler.bind(this);
  }

  dateChangedHandler = event => {
    this.setState({ defaultDate: event.target.value });
  };

  componentDidMount() {
    const self = this;
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?id=1701668&APPID=a6790759eaf45edd13928f11f39562f7&"
      )
      .then(response => {
        var staticDate = null;
        var daysArray = [];

        for (var i = 0; i < response.data.list.length; i++) {
          var currentDate = response.data.list[i].dt_txt.split(" ");
          var today = new Date(currentDate[0] + "Z");

          if (staticDate === null) {
            staticDate = currentDate[0];
          }

          if (
            staticDate == currentDate[0] &&
            daysArray.indexOf(currentDate[0]) < 0
          ) {
            daysArray.push(currentDate[0]);
          }

          staticDate = currentDate[0];
        }

        self.setState({
          days: response.data.list,
          dates: daysArray,
          defaultDate: daysArray[0]
        });

        console.log(response.data.list);
      });
  }

  render() {
    return (
      <div className="weatherTableContainer">
        <DateFilter
          value={this.state.defaultDate}
          changed={event => this.dateChangedHandler(event)}
          dates={this.state.dates}
        />
        <DaysList days={this.state.days} default={this.state.defaultDate} />
      </div>
    );
  }
}

export default WeatherTable;
