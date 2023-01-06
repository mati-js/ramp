import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import '98.css';
import './inputs.css';

const units = [
  {
    name: 'ether',
    decimals: 1,
    isDivisible: true
  }, {
    name: 'wei',
    decimals: 18,
    isDivisible: false
  }, {
    name: 'Mwei',
    decimals: 6,
    isDivisible: true
  }
];

const ValueConverter = ({selectedCoin='crypto', priceInDollars=1}) => {
  // 
  let [selectedUnit, setSelectedUnit] = useState(units[0])
    , [inputValue, setInputValue] = useState(0)
    , [actualValueInUSD, setActualValueInUSD] = useState(0);

  const getUnits = () => {
    let names = [];
    for (let i = 0; i < units.length; i++) {
      names.push(<option key={i}>{units[i].name}</option>);
    }
    return names;
  }

  const handleUnitChange = (event) => {
    try {
      let newUnit = units.filter((unit) => {
        return unit.name === event.target.value;
      })[0];
      
      console.log(`Old unit: ${selectedUnit.name} --- New unit: ${newUnit.name}`);

      let finalValue = Web3.utils.fromWei(Web3.utils.toWei(inputValue, selectedUnit.name), newUnit.name);
      
      // Re-render this components
      setInputValue(finalValue.toString());
      setSelectedUnit(newUnit);
    } catch (error) {
      // Show the error somewhere
      console.log(error.message); 
    }
  }

  const handleTextChange = (event) => {
    // Re-render all this if it does not contain '.' or ','
    setActualValueInUSD(event.target.value * priceInDollars);
    setInputValue(event.target.value);
  }

  return (
    <div className='value-conversor'>
      {selectedCoin === 'crypto' ? 
        <div className='unit-viewer'>
          <select className='unit-selector' onChange={handleUnitChange}>
            {getUnits()}
          </select>
          <label className='unit-help'>
            <div className='unit-help-text'>
              <p>Units details:</p> 
              <p>■ Ether: The biggest amount and can be divided.</p>
              <p>■ Wei: The smallest amount and it cannot be divided.</p>
              <p>■ Mwei: Most used for USDT, it haves 6 decimals and can be divided.</p>
            </div>
          </label>
        </div>
       : ''}
      
      <div className='value-viewer'>
        <input className='amount-input' id='amount' type='number' min='0' onChange={handleTextChange} value={inputValue} />
        <label className='usd-value'>{`≈ ${actualValueInUSD} USD`}</label>
      </div>
      
    </div>
  );
}

export default ValueConverter;