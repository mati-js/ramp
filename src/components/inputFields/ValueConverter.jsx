import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import '98.css';
import './inputs.css';

const units = [
  {
    name: 'ether',
    decimals: 1,
    divisible: true
  }, {
    name: 'wei',
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
    try {
      let newUnit = units.filter((unit) => {
        return unit.name === event.target.value;
      })[0];
      
      console.log(`Old unit: ${selectedUnit.name} --- New unit: ${newUnit.name}`);
      console.log(`Value: ${inputValue}`);

      let finalValue = Web3.utils.fromWei(Web3.utils.toWei(inputValue, selectedUnit.name), newUnit.name);
  
      setInputValue(finalValue.toString());
      setSelectedUnit(newUnit);
    } catch (error) {
      // Show the error somewhere
      console.log(error.message); 
    }
    
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