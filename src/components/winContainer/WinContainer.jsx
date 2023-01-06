import React, { useState } from "react";
import CoinSelector from "../coinSelector/CoinSelector";
import InputFields from "../inputFields/InputFields";
import Coins from '../shared/Coins';
import './winContainer.css';
import "98.css";

const WinContainer = () => {
  let [activeCrypto, setActiveCrypto] = useState(Coins[0]);

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
        <CoinSelector selectedCrypto={activeCrypto} setSelectedCrypto={setActiveCrypto} amountOfCoins={Coins.length} />
        <InputFields selectedCrypto={activeCrypto} />
      </div>
    </div>
  );
}

export default WinContainer;