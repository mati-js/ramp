import React, { useState } from 'react';
import '98.css';
import './inputs.css';

const units = [
  {
    name: 'Ether',
    decimals: '1',
    divisible: true
  }, {
    name: 'Wei',
    decimals: '18',
    divisible: false
  }, {
    name: 'Mwei',
    decimals: '6',
    divisible: true
  }
];

const ValueConverter = ({isCrypto=true}) => {
  let [selectedUnit, setSelectedUnit] = useState(units[0]);

  const getUnits = () => {
    let names = [];
    for (let i = 0; i < units.length; i++) {
      names.push(<option key={i}>{units[i].name}</option>);
    }
    return names;
  }

  const handleUnitChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <div className='value-conversor'>
      {isCrypto ? 
      <div className='unit-viewer'>
        <select className='unit-selector' onChange={handleUnitChange}>
          {getUnits()}
        </select>
        <label className='unit-help'></label>
      </div> : ''}
      
      <div className='value-viewer'>
        <input className='amount-input' id='amount' type='number' min='0' />
        <label className='usd-value'>≈123</label>
      </div>
      
    </div>
  );
}

export default ValueConverter;