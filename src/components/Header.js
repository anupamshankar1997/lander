import React, { useRef } from "react";
import personaCreator from "../assets/personaCreator.png";
import hwu from "../assets/hwu1.png";
import prime from "../assets/prime.png";
import ukri from "../assets/ukri.png";
import "../styles/Header.css";
import york from "../assets/york_white.png";

const Header = () => {
  const headerRef = useRef(null);

  return (
    <header ref={headerRef} className="header">
      <div className="header-left">
        <a
          href="https://www.primecommunities.online/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="prime" src={prime} alt="Logo 2" />
        </a>
      </div>

      <div className="header-right">
        <a
          href="https://www.hw.ac.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={hwu} alt="Logo 3" />
        </a>
        <a
          href="https://www.york.ac.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={york} alt="Logo 3" />
        </a>
        <a
          href="https://www.ukri.org/councils/epsrc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ukri} alt="Logo 4" />
        </a>
      </div>
    </header>
  );
};

export default Header;
