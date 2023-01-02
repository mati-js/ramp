import React, { useState } from 'react';
import './coinSelector.css';

let amountOfCoins = 3;
  
let titles = [
  'Ether on Ethereum Mainnet (chain id: 1)',          //
  'MATIC on Polygon Mainnet (chain id: 137)',         // testnet: 80001
  'BNB on Binance Smart Chain Mainnet (chain id: 56)' // testnet: 97
]

const CoinSelector = () => {
  
  let [activeButton, setActiveButton] = useState(amountOfCoins); // Impossible value

  const handleClick = (event) => {
    // Set the active button
    setActiveButton(parseInt(event.target.id));
  }
  
  let coinList = (amount) => {
    let list = [];
    for (let i = 0; i < amount; i++) {
      let icon = require(`../../media/img/icons/${i}.png`);
      list[i] = <button className={activeButton === i ? 'selected-coin-button' : 'coin-button'} id={i} title={titles[i]} onClick={handleClick} key={i} style={{ 'backgroundImage': `url(${icon})` }}/>
    }
    return list;
  };

  return (
    <div>
      <fieldset>
        <legend>Select coin</legend>
        <div className='available-coins'>
          {coinList(amountOfCoins)}
        </div>
      </fieldset>
    </div>
  );
};

export default CoinSelector;