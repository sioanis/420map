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
      <a href="mailto:sueann.ioanis@gmail.com?Subject=Cannabis%20Map%20Data">
        email
      </a>{" "}
      or <a href="https://github.com/sioanis/420map/issues">submit an issue</a>.{" "}
      <i>Last Updated: (3/28/2020)</i> by @sioanis
    </p>
  </header>
);

export default Header;
