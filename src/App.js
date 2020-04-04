import React from "react";
import ResponsiveGeoMap from "./components/ResponsiveGeoMap";
import data from "./data3292020.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h3>
          Map of Cannabis Regulations Worldwide{" "}
          <img src="logo192.png" alt="logo" />
        </h3>
        <p>
          Data parsed from{" "}
          <a href="https://en.wikipedia.org/wiki/Legality_of_cannabis">
            Wikipedia
          </a>
          . (
          <a href="mailto:sueann.ioanis@gmail.com?Subject=Cannabis%20Map%20Data">
            Email
          </a>{" "}
          if you see a discrepancy or update it <a href="https://github.com/sioanis/420map">on github</a>. <i>Last Updated: (3/28/2020)</i> by{" "} @sioanis
          
        </p>
      </header>
      <div className="map">
        <ResponsiveGeoMap data={data} />
      </div>
    </div>
  );
}

export default App;
