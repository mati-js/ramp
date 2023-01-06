import React, { useState } from "react";
import ValueConverter from './ValueConverter';
import './inputs.css';

const AmountField = ({selectedCrypto}) => {
  let [selectedButton, setSelectedButton] = useState('');

  const handleClick = (event) => {
    if (selectedButton !== event.target.innerText) {
      setSelectedButton(event.target.innerText);
    }
  }

  const getBackgroundImage = () => {
    let route = require(`../../media/img/icons/${selectedCrypto.id}.png`)
    
    return {
      backgroundImage: `url(${route})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'rgb(173, 173, 173)'
    };
  }

  return (
    <div className='amount-container'>
      <div className='unit-container'>
        <div className='payment-coin-selector'>
          <button className={`${selectedButton === '' ? 'selected-' : ''}payment-coin-button`} style={getBackgroundImage()} onClick={handleClick}></button>
          <button className={`${selectedButton === 'USD' ? 'selected-' : ''}payment-coin-button`} onClick={handleClick}>USD</button>
          <button className={`${selectedButton === 'Pesos' ? 'selected-' : ''}payment-coin-button`} onClick={handleClick}>Pesos</button>
        </div>
        <ValueConverter selectedCoin={selectedButton === '' ? 'crypto' : selectedButton}/>
      </div>
    </div>
  );
}

export default AmountField;