import React from "react";
import AddressField from "./Address";
import AmountField from "./Amount";
import '98.css';

const InputFields = ({selectedCrypto=0}) => {
  return (
    <div className='input-container'>
      <fieldset>
        <legend>Select unit</legend>
        <AmountField selectedCrypto={selectedCrypto} />
        {/*<AddressField />*/}
      </fieldset>
    </div>
  );
}

export default InputFields;