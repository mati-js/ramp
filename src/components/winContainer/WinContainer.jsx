import React, { useState } from "react";
import CoinSelector from "../coinSelector/CoinSelector";
import InputFields from "../inputFields/InputFields";
import './winContainer.css';
import "98.css";
  
let amountOfCoins = 3;

const WinContainer = () => {
  let [activeButton, setActiveButton] = useState(0);

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
        <CoinSelector selectedCrypto={activeButton} setSelectedCrypto={setActiveButton} amountOfCoins={amountOfCoins} />
        <InputFields selectedCrypto={activeButton} />
      </div>
    </div>
  );
}

export default WinContainer;