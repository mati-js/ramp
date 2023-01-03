import React, { useEffect, useState } from 'react';
import '98.css';
import './inputs.css';

const units = [
  {
    name: 'Ether',
    decimals: 1,
    divisible: true
  }, {
    name: 'Wei',
    decimals: 18,
    divisible: false
  }, {
    name: 'Mwei',
    decimals: 6,
    divisible: true
  }
];

const ValueConverter = ({isCrypto=true, priceInDollars=1}) => {
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

  useEffect(() => {
    
  })

  const handleUnitChange = (event) => {
    let newUnit = units.filter((unit) => {
      return unit.name === event.target.value;
    })[0];
    
    let finalValue = (inputValue / (10 ** selectedUnit.decimals)) * (10 ** newUnit.decimals)

    setInputValue(finalValue.toString());
    setSelectedUnit(newUnit);
  }

  const handleTextChange = (event) => {
    setActualValueInUSD(event.target.value * priceInDollars);
    setInputValue(event.target.value);
  }

  return (
    <div className='value-conversor'>
      {isCrypto ? 
        <div className='unit-viewer'>
          <select className='unit-selector' onChange={handleUnitChange}>
            {getUnits()}
          </select>
          <label className='unit-help'></label>
        </div>
       : ''}
      
      <div className='value-viewer'>
        <input className='amount-input' id='amount' type='number' min='0' onChange={handleTextChange} value={inputValue} />
        <label className='usd-value'>{`≈ ${actualValueInUSD}`}</label>
      </div>
      
    </div>
  );
}

export default ValueConverter;