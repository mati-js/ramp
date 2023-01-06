import React, { useState } from 'react';
import '98.css';

const AddressField = ({selectedCrypto}) => {
  
  let [addressInput, setAddressInput] = useState('0x');


  const isValidAddress = (event) => {
    setAddressInput(event.target.value);
  }
  
  return (
    <div className='address-container'>
      <fieldset>
        <legend>Paste the address in {selectedCrypto.network}:</legend>
        <input className='address-input' type='text' value={addressInput} onChange={isValidAddress} />
      </fieldset>
    </div>
  );
}

export default AddressField;