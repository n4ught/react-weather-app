import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import WeatherTable from "./containers/WeatherTable/WeatherTable";

function App() {
  return (
    <div className="App">
      <WeatherTable />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
