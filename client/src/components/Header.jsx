import React from "react";

const Header = () => (
  <header>
    <h3>
      Map of Cannabis Regulations Worldwide <img src="logo192.png" alt="logo" />
    </h3>
    <p>
      Data parsed from{" "}
      <a href="https://en.wikipedia.org/wiki/Legality_of_cannabis">Wikipedia</a>
      . If you see a discrepancy,{" "}
      <a href="https://github.com/sioanis/420map/issues">submit an issue</a>.{" "}
      <i>Last Updated: (5/2/2020)</i> by{" "}
      <a href="https://github.com/sioanis/">@sioanis</a>.
    </p>
  </header>
);

export default Header;
