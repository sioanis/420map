import React, { useState } from "react";
import ResponsiveGeoMap from "./components/ResponsiveGeoMap";
import Header from "./components/Header";
// import d05022020 from "./data/05022020.json";
import d03292020 from "./data/03292020.json";
import { motion } from "framer-motion";
import { Switch } from "./components/Switch";
import "./App.css";

function App() {
  const [{ isDarkMode }, setDarkMode] = useState({
    isDarkMode:
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches,
  });

  return (
    <motion.div animate className={`App${isDarkMode ? " dark" : ""}`}>
      <Switch
        isOn={isDarkMode}
        onClick={() => setDarkMode({ isDarkMode: !isDarkMode })}
      />
      <Header />
      <ResponsiveGeoMap data={d03292020} isDarkMode={isDarkMode} />
    </motion.div>
  );
}

export default App;
