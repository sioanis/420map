import React, { useLayoutEffect, useState } from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import countries from "../countries";

const formatValue = (data) => {
  switch (Math.floor(data)) {
    case 0:
      return "Illegal.";
    case 1:
      return "Illegal but often unenforced.";
    case 2:
      return "Illegal but decriminalized.";
    case 3:
      return "Legal in some areas. (*)";
    case 4:
      return "Legal, some regulations. (*)";
    case 5:
      return "Completely legal.";
    default:
      return "Unknown";
  }
};

function useWindowSize() {
  const [size, setSize] = useState([0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const ResponsiveGeoMap = ({ data, isDarkMode }) => {
  const [width] = useWindowSize();
  return (
    <div className="map">
      <ResponsiveChoropleth
        width={width}
        data={data}
        features={countries.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors={isDarkMode ? "purples" : "nivo"}
        domain={[0, 5]}
        projectionScale={190}
        unknownColor="#94a1b2"
        label="properties.name"
        valueFormat={formatValue}
        projectionTranslation={[0.5, 0.62]}
        projectionRotation={[0, 0, 0]}
        borderWidth={0.5}
        borderColor={isDarkMode ? "#fffffe" : "#000"}
      />
    </div>
  );
};

export default ResponsiveGeoMap;
