import React from "react";
import AddressField from "./Address";
import AmountField from "./Amount";
import '98.css';

const InputFields = ({selectedCrypto}) => {
  
  return (
    <div className='input-container'>
      <fieldset>
        <legend>Select unit</legend>
        <AmountField selectedCrypto={selectedCrypto} />
      </fieldset>
      <AddressField selectedCrypto={selectedCrypto} />
    </div>
  );
}

export default InputFields;