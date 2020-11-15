import React from "react";
import Tilt from "react-tilt";
import Brain from "./icons8-loser-80.png";
import './Logo.css'

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 25 }}
        style={{ height: 50, width: 50 }}
      >
        <div className="Tilt-inner"> <img src={Brain} /> </div>
      </Tilt>
    </div>
  );
};

export default Logo;
