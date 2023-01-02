import React, { useState } from "react";
import ValueConverter from './ValueConverter';
import './inputs.css';

const AmountField = () => {
  let [selectedButton, setSelectedButton] = useState('Crypto');

  const handleClick = (event) => {
    if (selectedButton !== event.target.innerText) {
      setSelectedButton(event.target.innerText);
      // event.target.innerText -> Es el boton presionado
    }
  }

  return (
    <div className='amount-container'>
      <label htmlFor='amount'>Amount:</label>
      <div className='unit-container'>
        <div className='payment-coin-selector'>
          <button className={`${selectedButton === 'Crypto' ? 'selected-' : ''}payment-coin-button`} onClick={handleClick}>Crypto</button>
          <button className={`${selectedButton === 'USD' ? 'selected-' : ''}payment-coin-button`} onClick={handleClick}>USD</button>
          <button className={`${selectedButton === 'Pesos' ? 'selected-' : ''}payment-coin-button`} onClick={handleClick}>Pesos</button>
        </div>
        <ValueConverter isCrypto={selectedButton === 'Crypto'}/>
      </div>
    </div>
  );
}

export default AmountField;