import React from "react";
import ResponsiveGeoMap from "./components/ResponsiveGeoMap";
import Header from "./components/Header";
import data from "./data/05022020.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ResponsiveGeoMap data={data} />
    </div>
  );
}

export default App;