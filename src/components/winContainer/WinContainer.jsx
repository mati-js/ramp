import React from "react";
import CoinSelector from "../coinSelector/CoinSelector";
import InputField from "../inputFields/InputFields";
import './winContainer.css';
import "98.css";

const WinContainer = () => {
  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">Bienvenido a RAMP.98! </div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
      <div className="window-body">
        <CoinSelector />
        <InputField />
      </div>
    </div>
  );
}

export default WinContainer;