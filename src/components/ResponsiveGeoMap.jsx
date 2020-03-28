import React, { useLayoutEffect, useState } from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import countries from "../countries";

const formatValue = data => {
  switch (Math.floor(data)) {
    case 0:
      return "Illegal";
    case 1:
      return "Illegal but often unenforced";
    case 2:
      return "Illegal but decriminalized";
    case 3:
      return "Some parts legal for recreational use or as authorized by a physician (*)";
    case 4:
      return "Legal (*)";
    case 5:
      return "Completely Legal";
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

const ResponsiveGeoMap = ({ data }) => {
  const [width] = useWindowSize();
  return (
    <ResponsiveChoropleth
      width={width}
      data={data}
      features={countries.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="nivo"
      domain={[0, 5]}
      projectionScale={160}
      unknownColor="#666666"
      label="properties.name"
      valueFormat={formatValue}
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={0.5}
      borderColor="#152538"
    />
  );
};

export default ResponsiveGeoMap;
