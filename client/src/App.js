import React, { useState } from "react";
import ResponsiveGeoMap from "./components/ResponsiveGeoMap";
import Header from "./components/Header";
// import d05022020 from "./data/05022020.json";
import d03292020 from "./data/03292020.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ResponsiveGeoMap data={d03292020} />
    </div>
  );
}

export default App;
