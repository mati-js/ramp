import React from 'react';
import Coins from '../shared/Coins';
import './coinSelector.css';


const CoinSelector = ({selectedCrypto, setSelectedCrypto, amountOfCoins}) => {
  
  const handleClick = (event) => {
    if (selectedCrypto.id !== parseInt(event.target.id)) {
      let selectedCoin = Coins.filter((coin) => {
        return coin.id === parseInt(event.target.id);
      })[0];

      // Set the active button
      setSelectedCrypto(selectedCoin);
    }

  }
  
  let coinList = (amount) => {
    let list = [];
    for (let i = 0; i < amount; i++) {
      let icon = require(`../../media/img/icons/${i}.png`);
      list[i] = <button className={selectedCrypto.id === i ? 'selected-coin-button' : 'coin-button'} id={i} title={selectedCrypto.id === i ? selectedCrypto.name : ''} onClick={handleClick} key={i} style={{ 'backgroundImage': `url(${icon})` }}/>
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