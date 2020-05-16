import React, { useState } from "react";
import ResponsiveGeoMap from "./components/ResponsiveGeoMap";
import Header from "./components/Header";
// import d05022020 from "./data/05022020.json";
import d03292020 from "./data/03292020.json";
import Toast from "react-toast-component";
import "./App.css";

function App() {
  const [isOpen, setToast] = useState(false);
  return (
    <div className="App">
      <Header />
      <ResponsiveGeoMap data={d03292020} />
      <Toast
        isOpen={isOpen}
        hasAutoDismiss={false}
        hasCloseBtn={true}
        closeCallback={() => setToast(false)}
        description="There's some great info in here."
        title="App Notification 🍞"
        duration={5000}
        classNames={[]} // 'error', 'info', 'warning', 'success'
      />
    </div>
  );
}

export default App;
