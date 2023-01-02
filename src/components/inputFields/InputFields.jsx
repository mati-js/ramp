import React from "react";
import AddressField from "./Address";
import AmountField from "./Amount";
import '98.css';

const InputFields = () => {
  return (
    <div>
      <fieldset>
        <legend>Type in the amount and the receiving address</legend>
        <AmountField />
        {/*<AddressField />*/}
      </fieldset>
    </div>
  );
}

export default InputFields;